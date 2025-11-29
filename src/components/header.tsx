'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { hash: 'about', label: 'About' },
    { hash: 'skills', label: 'Skills' },
    { hash: 'projects', label: 'Projects' },
    { hash: 'experience', label: 'Experience' },
    { hash: 'contact', label: 'Contact' },
  ]

  return (
    <header className={cn('transition-all duration-75', isMenuOpen ? 'bg-card' : '')}>
      {/* Header buttons */}
      <div className="z-20 flex items-center justify-end gap-6 px-6 py-4 backdrop-blur-sm md:px-12">
        <nav className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              href={`/#${item.hash}`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle>
          <span className="sr-only">Change color theme</span>
        </ThemeToggle>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Hamburger button (Mobile menu) */}
      {isMenuOpen && (
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.1 }}
          className="absolute bg-card z-10 w-full space-y-2 border-muted border-b p-4 md:hidden"
        >
          <nav>
            {navItems.map((item) => (
              <Link
                href={`/#${item.hash}`}
                key={item.hash}
                className="block p-2 text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle>Change color theme</ThemeToggle>
        </motion.div>
      )}
    </header>
  )
}
