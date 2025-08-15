import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          core: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-lazyload',
            '@tanstack/react-query',
            'contentful',
          ],
          // Contentful

          //Icons
          icons: ['react-icons'],

          toast: ['react-toastify'],
        },
      },
    },
  },
})
