import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chavvasweddinginvite/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    minify: false,
    sourcemap: false
  }
})
