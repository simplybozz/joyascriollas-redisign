import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // El workflow de GitHub Pages pasa --base=/<nombre-del-repo>/ al construir.
  // En desarrollo local (npm run dev / npm run build sin flag) usa "/".
  base: process.env.VITE_BASE_PATH || '/',
})
