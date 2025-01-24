import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mathilde-web-app', // O 'app-mathilde-web' para el microfrontend
      remotes: {
        appmathildeweb: 'http://localhost:5173/assets/remoteEntry.js',
      },
      shared: {
        react: {
          requiredVersion: '^18.2.0', // Define la versión de React
          singleton: true, // Usa una sola instancia de React
        },
        'react-dom': {
          requiredVersion: '^18.2.0',
          singleton: true,
        },
        'react-router-dom': {
          requiredVersion: '^7.1.3', // Versión exacta de react-router-dom
          singleton: true,
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5000, // O 5173 para el microfrontend
  },
});
