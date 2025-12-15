import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MovieWebsite/',  
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})
