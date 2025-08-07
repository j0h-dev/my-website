import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    visualizer(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: './public',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('tanstack')) {
            return '@tanstack'
          }

          if (id.includes('tsparticles')) {
            return '@tsparticles'
          }

          if (id.includes('lucide') || id.includes('icons')) {
            return '@vendor'
          }

          if (id.includes('radix')) {
            return '@vendor'
          }

          if (id.includes('react')) {
            return '@react'
          }

          return '@vendor'
        },
      },
    },
  },
})
