'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

interface ThemeToggleProps extends PropsWithChildren {
  className?: string
}

export function ThemeToggle({ children, className }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      className={cn('text-muted-foreground hover:text-primary', className)}
      variant="ghost"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      {children}
    </Button>
  )
}
