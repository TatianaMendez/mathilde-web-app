import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mathilde-web-app', // Nombre del host
      remotes: {
        appmathildeweb: 'http://localhost:5173/assets/remoteEntry.js', // URL del remoto
      },
      shared: ['react', 'react-dom', 'react-router-dom'], // Lista simplificada de dependencias compartidas
    }),
  ],
  build: {
    target: 'esnext', // Compatible con Module Federation
    minify: false, // Evita problemas de minificación en desarrollo
    cssCodeSplit: false,
  },
  server: {
    port: 5000, // Puerto del host
    cors: true, // Habilitar CORS si es necesario
  },
});
