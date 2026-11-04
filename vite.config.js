import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : '/Noi_Di-/',
  publicDir: 'public',
  server: {
    fs: {
      strict: false
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('heroCurriculumEncounters') || id.includes('floor0EpisodesData')) {
            return 'curriculum-data';
          }
          if (id.includes('src/data/characters/')) {
            return 'characters-data';
          }
        }
      }
    }
  }
}));
