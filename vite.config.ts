import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  base: '/interactive-cv/', // Replace with your GitHub repo name
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      exclude: '',
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        preload: 'preload.ts', // Ensure preload.ts is included
      },
    },
  },
  resolve: {
    alias: {
      hooks: path.resolve(__dirname, 'src/hooks'),
      components: path.resolve(__dirname, 'src/components'),
      models: path.resolve(__dirname, 'src/models'),
      services: path.resolve(__dirname, 'src/services'),
      utils: path.resolve(__dirname, 'src/utils'),
      theme: path.resolve(__dirname, 'src/theme'),
      providers: path.resolve(__dirname, 'src/providers'),
      config: path.resolve(__dirname, 'src/config'),
      assets: path.resolve(__dirname, 'src/assets'),
      data: path.resolve(__dirname, 'src/data'),
    },
  },
  define: {
    'process.env': {
      REACT_APP_API_BASE_URL: JSON.stringify(
        process.env.REACT_APP_API_BASE_URL
      ),
    },
  },
});
