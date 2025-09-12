import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import purgeCss from 'vite-plugin-purgecss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      },
      plugins: [
        purgeCss({
          content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
          safelist: [/^fa-/, /^fab-/, /^fas-/],
        }),
      ],
    },
  }
})