import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { z, ZodError } from 'zod'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production']).default('production'),
  })

  try {
    envSchema.parse(process.env)
  } catch (error) {
    if (error instanceof ZodError) {
      for (const issue of error.issues) {
        console.error(
          `Validation error: ${issue.message} at path: ${issue.path.join('.')}`
        )
      }
    }
    process.exit(-1)
  }

  return {
    plugins: [
      tanstackRouter({
        autoCodeSplitting: true,
      }),
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    publicDir: './public',
  }
})
