import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
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
    },
  },
  define: {
    'process.env': {
      REACT_APP_API_BASE_URL: JSON.stringify(
        process.env.REACT_APP_API_BASE_URL
      ),
    },
  },
  base: '/your-repo-name/', // Replace with your GitHub repo name
});
