import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'development' ? '/' : './',
  server: {
    port: 5173,
    host: true, // Permite acceso desde cualquier dispositivo en la red
  },
}))
