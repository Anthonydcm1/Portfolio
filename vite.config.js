import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/Portfolio/',
  server: {
    port: 5173,
    host: true, // Permite acceso desde cualquier dispositivo en la red
  },
}))
