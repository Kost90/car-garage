import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5345,
    proxy: {
      '/api': {
        target: 'https://driver-vehicle-licensing.api.gov.uk',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/vehicle-enquiry/v1'),
      },
    },
  },
});
