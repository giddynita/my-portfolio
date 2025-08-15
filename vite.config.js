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
          dom: ['react-dom'],
          react: ['react'],
          router: ['react-router-dom', 'react-lazyload'],
          reactQuery: ['@tanstack/react-query'],

          // Contentful
          contentful: ['contentful'],

          //Icons
          icons: ['react-icons'],

          toast: ['react-toastify'],
        },
      },
    },
  },
})
