import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: 'dist',
  }
})
// vite.config.js
