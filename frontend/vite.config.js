import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {port:5173},
  // This ensures that the server will return the index.html for any route
  // which solves the 404 issue when refreshing pages
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  // Handle SPA routing
  preview: {
    port: 5173
  }
})
