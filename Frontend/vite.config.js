import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: true,  // Allows access from local network
    port: 5173,  // Change if needed
  },
});
