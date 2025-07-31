import { Link } from '@tanstack/react-router'
import { Menu, MoonIcon, SunIcon, X } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from './theme-provider'
import { Button } from './ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  const navItems = [
    { hash: 'about', label: 'About' },
    { hash: 'skills', label: 'Skills' },
    { hash: 'projects', label: 'Projects' },
    { hash: 'experience', label: 'Experience' },
    { hash: 'contact', label: 'Contact' },
  ]

  return (
    <header className="px-6 backdrop-blur-sm md:px-12">
      <div className="flex items-center justify-end gap-6 py-4">
        <nav className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              hash={item.hash}
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size={'icon'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="hidden md:inline-flex"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          <span className="sr-only">Change color theme</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="space-y-2 border-t py-4 md:hidden">
          <nav>
            {navItems.map((item) => (
              <Link
                to="/"
                key={item.hash}
                hash={item.hash}
                className="text-muted-foreground hover:text-primary block p-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            className="text-muted-foreground hover:text-primary"
            variant="ghost"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            Change color theme
          </Button>
        </div>
      )}
    </header>
  )
}
