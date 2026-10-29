1. Install Dependencies (if not already done)

Open your terminal in the project directory (Noi_Di!) and run:

npm install

2. Start the Development Server

Run the Vite development script defined in package.json:


npm run dev

By default, Vite will start a local server at:

http://localhost:5173/

Open that URL in your web browser to play or test the game. Changes to your source code in src/ or index.html will hot-reload automatically.

Additional Scripts

Build for production:


npm run build

(Generates the production-ready bundle into the dist/ directory)

Preview the production build locally:

npm run preview

The app will be available at: https://accurateguy0.github.io/Noi_Di-/