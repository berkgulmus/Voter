import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import styleX from 'vite-plugin-stylex'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), styleX()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/stylex-playground/'
})
