import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vqm-porfolio-v4',
  server: {
    port: 2009, // Set the port to 2009
  },
})
