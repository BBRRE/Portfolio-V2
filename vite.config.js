import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://bbrre.github.io/Portfolio-V2/',
  plugins: [react()],
  assetsInclude: ['**/*.JPEG'],
})

