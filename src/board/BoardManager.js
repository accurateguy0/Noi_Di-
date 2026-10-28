// Menedżer planszy: renderowanie pól, ścieżek SVG, pathfinding, ruch pionka i animacje zderzeń
import { sound } from '../audio/sound.js';

export class BoardManager {
  constructor(app) {
    this.app = app;
  }

  get nodes() {
    return this.app.nodes;
  }

  get edges() {
    return this.app.edges;
  }

  isCatNode(node) {
    if (!node) return false;
    const type = String(node.type || '').toLowerCase();
    const icon = String(node.icon || '').toLowerCase();
    const title = String(node.titlePl || '').toLowerCase();
    return (
      type.includes('cat') ||
      icon.includes('kotek_pomoc') ||
      icon.includes('kot') ||
      title.includes('kot') ||
      title.includes('bolo')
    );
  }

  formatCleanNodeTitle(rawTitle) {
    return String(rawTitle || '')
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\s*\[[^\]]*\]/g, '')
      .trim();
  }

  isCompletableFighterType(type, node = null) {
    if (!type) return false;
    if (['shop', 'next_board', 'start', 'waypoint', 'chest', 'step', 'apple'].includes(type)) {
      return false;
    }
    return true;
  }

  shouldHideSpriteWhenCompleted(node) {
    if (!node) return false;
    // Kot pomocnik znika po wygranej, odblokowując dalszą drogę!
    if (this.isCatNode(node)) return true;
    if (node.type === 'apple') return true;
    return this.isCompletableFighterType(node.type, node);
  }

  getNode(id) {
    return this.nodes.find(n => n.id === id);
  }

  isEdgeBlocked(fromId, toId) {
    const fromNode = this.getNode(fromId);
    if (!fromNode) return true;
    // Sklepy, jabłka, skrzynie, punkty orientacyjne NIGDY nie blokują ruchu gracza
    if (['shop', 'step', 'apple', 'chest', 'waypoint', 'start'].includes(fromNode.type)) return false;
    if (
      !fromNode.completed &&
      fromNode.blocksEdgesTo &&
      fromNode.blocksEdgesTo.includes(toId)
    ) {
      return true;
    }
    return false;
  }

  findPath(startId, targetId) {
    if (startId === targetId) return [startId];
    const queue = [[startId]];
    const visited = new Set([startId]);

    while (queue.length > 0) {
      const path = queue.shift();
      const curr = path[path.length - 1];

      const neighbors = [];
      for (const edge of this.edges) {
        const [a, b] = Array.isArray(edge) ? edge : [edge.from, edge.to];
        if (a === curr) neighbors.push(b);
        else if (b === curr) neighbors.push(a);
      }

      for (const next of neighbors) {
        if (visited.has(next)) continue;
        if (this.isEdgeBlocked(curr, next)) continue;

        const newPath = [...path, next];
        if (next === targetId) return newPath;

        const nextNode = this.getNode(next);
        visited.add(next);
        if (
          nextNode &&
          !nextNode.completed &&
          nextNode.blocksEdgesTo &&
          !['shop', 'step', 'apple', 'chest', 'waypoint', 'start'].includes(nextNode.type)
        ) {
          continue;
        }
        queue.push(newPath);
      }
    }
    return null;
  }

  renderBoard() {
    const svg = document.getElementById('board-svg');
    const nodesLayer = document.getElementById('board-nodes-layer');
    if (!svg || !nodesLayer) return;

    // 1. Rysuj połączenia między węzłami
    svg.innerHTML = this.edges.map((edge) => {
      const [aId, bId] = Array.isArray(edge) ? edge : [edge.from, edge.to];
      const a = this.getNode(aId);
      const b = this.getNode(bId);
      if (!a || !b) return '';
      const blocked = this.isEdgeBlocked(aId, bId) || this.isEdgeBlocked(bId, aId);
      return `
        <line
          x1="${a.x}" y1="${a.y}"
          x2="${b.x}" y2="${b.y}"
          class="board-edge-line ${blocked ? 'edge-locked' : 'edge-open'}"
        />
      `;
    }).join('');

    // 2. Rysuj lub aktualizuj owalne pola i obiekty na planszy bez niszczenia DOM (aby nie resetować animacji floatIdle)
    const activeIds = new Set(this.nodes.map(n => n.id));
    nodesLayer.querySelectorAll('.board-node').forEach(el => {
      if (!activeIds.has(el.dataset.nodeId)) {
        el.remove();
      }
    });

    this.nodes.forEach((node) => {
      const isCurrent = node.id === this.app.currentNodeId;
      const path = this.findPath(this.app.currentNodeId, node.id);
      const isReachable = Boolean(path);
      const isHidden = Boolean(node.completed && this.shouldHideSpriteWhenCompleted(node));
      const cleanTitle = this.formatCleanNodeTitle(node.titlePl);
      const isObjectNode = ['shop', 'apple', 'chest', 'next_board', 'stairs', 'start', 'waypoint', 'step'].includes(node.type) ||
        /kramik|sklep|jabłk|jablk|drugie śniadanie/i.test(String(node.titlePl || '')) ||
        /kramik|apple/i.test(String(node.icon || ''));
      const showLabel = Boolean(node.icon) && Boolean(cleanTitle) && !isHidden && !isObjectNode;

      let nodeEl = nodesLayer.querySelector(`.board-node[data-node-id="${node.id}"]`);
      if (!nodeEl) {
        nodeEl = document.createElement('div');
        nodeEl.className = 'board-node';
        nodeEl.dataset.nodeId = node.id;
        nodeEl.innerHTML = `
          <div class="node-oval-pad"></div>
          <div class="node-sprite-slot"></div>
          <div class="node-label-tag">
            <span class="n-pl"></span>
          </div>
        `;
        nodeEl.addEventListener('click', () => {
          this.handleNodeClick(node.id);
        });
        nodesLayer.appendChild(nodeEl);
      }

      nodeEl.dataset.nodeType = node.type || '';
      nodeEl.style.left = `${node.x}%`;
      nodeEl.style.top = `${node.y}%`;
      nodeEl.classList.toggle('node-current', isCurrent);
      nodeEl.classList.toggle('node-reachable', isReachable);
      nodeEl.classList.toggle('node-locked', !isReachable);
      nodeEl.classList.toggle('node-done', Boolean(node.completed && node.type !== 'shop'));

      // Aktualizacja duszka/obiektu bez przebudowywania elementu z animacją floatIdle
      const spriteSlot = nodeEl.querySelector('.node-sprite-slot');
      let spriteWrap = spriteSlot?.querySelector('.node-sprite-wrap');

      if (node.icon) {
        const cleanPath = node.icon.startsWith('./') ? node.icon.slice(1) : (node.icon.startsWith('/') ? node.icon : '/' + node.icon);
        const fallback = `/public${cleanPath}`;
        const itemkiFallback = cleanPath.includes('/itemki/') ? cleanPath : cleanPath.replace('/assets/', '/assets/itemki/');
        const sharedSideClass = isCurrent && node.type !== 'apple' && !isHidden
          ? (this.app.lastApproachFromRight ? 'shared-pad-left' : 'shared-pad-right')
          : '';

        const setupImgFallback = (img) => {
          img.onerror = () => {
            const cur = img.getAttribute('src');
            if (cur !== fallback) {
              img.setAttribute('src', fallback);
            } else if (cur !== itemkiFallback) {
              img.setAttribute('src', itemkiFallback);
            }
          };
        };

        if (isHidden) {
          if (spriteSlot) spriteSlot.innerHTML = '';
          if (spriteWrap) spriteWrap.remove();
        } else {
          if (!spriteWrap) {
            spriteWrap = document.createElement('div');
            spriteWrap.className = `node-sprite-wrap ${node.type} ${sharedSideClass}`.trim();
            const img = document.createElement('img');
            img.className = 'node-sprite-img';
            img.alt = cleanTitle;
            img.src = cleanPath;
            setupImgFallback(img);
            spriteWrap.appendChild(img);
            spriteSlot.appendChild(spriteWrap);
          } else {
            spriteWrap.className = `node-sprite-wrap ${node.type} ${node.completed ? 'sprite-completed' : ''} ${sharedSideClass}`.trim();
            const img = spriteWrap.querySelector('.node-sprite-img');
            if (img && img.getAttribute('src') !== cleanPath && img.getAttribute('src') !== fallback) {
              img.setAttribute('src', cleanPath);
              setupImgFallback(img);
            }
            spriteWrap.style.display = '';
          }
        }
      } else if (spriteWrap) {
        spriteWrap.remove();
      }

      // Aktualizacja etykiety pola (widocznej po najechaniu kursorem nad postacią, bez nawiasów)
      const labelEl = nodeEl.querySelector('.node-label-tag');
      if (labelEl) {
        labelEl.style.display = showLabel ? '' : 'none';
        const spanPl = labelEl.querySelector('.n-pl');
        if (spanPl && spanPl.textContent !== cleanTitle) {
          spanPl.textContent = cleanTitle;
        }
      }
    });

    this.positionPlayerToken(this.app.currentNodeId);
  }

  positionPlayerToken(nodeId, jumping = false) {
    const token = document.getElementById('player-token');
    const node = this.getNode(nodeId);
    if (!token || !node) return;

    const hasSprite = Boolean(node.icon) && !(node.completed && this.shouldHideSpriteWhenCompleted(node));

    token.style.left = `${node.x}%`;
    token.style.top = `${node.y - 2.0}%`;
    token.classList.toggle('walking-hop', jumping);

    token.classList.remove('shared-pad-left', 'shared-pad-right');
    if (hasSprite && !jumping) {
      token.classList.add(this.app.lastApproachFromRight ? 'shared-pad-right' : 'shared-pad-left');
    }
  }

  async handleNodeClick(targetNodeId) {
    if (this.app.isWalking) return;
    const targetNode = this.getNode(targetNodeId);
    if (!targetNode) return;

    if (this.app.currentNodeId === targetNodeId) {
      await this.app.interactWithNode(targetNode);
      return;
    }

    const path = this.findPath(this.app.currentNodeId, targetNodeId);
    if (!path) {
      sound.playMiss();
      this.app.setBoardHint(
        'Ścieżka zablokowana! Najpierw zalicz poprzednie spotkanie na korytarzu!'
      );
      return;
    }

    this.app.isWalking = true;
    for (let i = 1; i < path.length; i++) {
      const prevNode = this.getNode(path[i - 1]);
      const stepId = path[i];
      const stepNode = this.getNode(stepId);

      if (prevNode && stepNode && prevNode.x !== stepNode.x) {
        this.app.lastApproachFromRight = prevNode.x > stepNode.x;
      }

      this.app.currentNodeId = stepId;
      sound.playStep();
      this.positionPlayerToken(stepId, true);

      // Jabłko jest zbierane WYŁĄCZNIE wtedy, gdy gracz bezpośrednio wybrał to pole jako cel (nie przy przechodzeniu obok)
      if (stepNode && stepNode.id === targetNode.id && stepNode.type === 'apple' && !stepNode.completed && stepNode.icon) {
        this.app.collectApple(stepNode);
      }

      await new Promise(r => setTimeout(r, 270));
    }
    this.app.isWalking = false;
    this.renderBoard();

    await this.app.interactWithNode(targetNode);
  }

  /**
   * Animacja zderzenia się dwóch postaci na planszy i przesunięcia/odbicia w lewo lub w prawo
   * w zależności od tego, z której strony przyszedł gracz
   */
  async playFighterCollisionOnBoard(nodeId) {
    this.app.isWalking = true;
    const playerToken = document.getElementById('player-token');
    const nodeEl = document.querySelector(`.board-node[data-node-id="${nodeId}"]`);
    const opponentSprite = nodeEl ? nodeEl.querySelector('.node-sprite-wrap') : null;

    const cameFromRight = Boolean(this.app.lastApproachFromRight);
    const playerClass = cameFromRight ? 'board-collide-go-right' : 'board-collide-go-left';
    const opponentClass = cameFromRight ? 'board-collide-go-left' : 'board-collide-go-right';

    if (playerToken) {
      playerToken.classList.remove('shared-pad-left', 'shared-pad-right', 'board-collide-go-left', 'board-collide-go-right');
      void playerToken.offsetWidth;
      playerToken.classList.add(playerClass);
    }
    if (opponentSprite) {
      opponentSprite.classList.remove('shared-pad-left', 'shared-pad-right', 'board-collide-go-left', 'board-collide-go-right');
      void opponentSprite.offsetWidth;
      opponentSprite.classList.add(opponentClass);
    }

    // Dźwięk w momencie zderzenia postaci na planszy
    setTimeout(() => {
      sound.playStep();
    }, 120);

    await new Promise(r => setTimeout(r, 460));

    if (playerToken) {
      playerToken.classList.remove(playerClass);
      playerToken.classList.add(cameFromRight ? 'shared-pad-right' : 'shared-pad-left');
    }
    if (opponentSprite) {
      opponentSprite.classList.remove(opponentClass);
      opponentSprite.classList.add(cameFromRight ? 'shared-pad-left' : 'shared-pad-right');
    }
    this.app.isWalking = false;
  }
}
