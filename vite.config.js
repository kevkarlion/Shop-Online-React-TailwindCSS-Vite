import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shop-online-react-tailwindcss-vite/', //Ruta base donde iniciara el proyecto
})
