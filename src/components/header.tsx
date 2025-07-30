import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from './theme-provider'
import { Button } from './ui/button'
import { LinkButton } from './ui/link-button'

export function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="absolute top-3 right-16 flex">
      <LinkButton hash={''} variant="ghost">
        Home
      </LinkButton>

      <LinkButton hash={'about'} variant="ghost">
        About Me
      </LinkButton>

      <LinkButton hash={'skills'} variant="ghost">
        Skills
      </LinkButton>

      <LinkButton hash={'projects'} variant="ghost">
        Projects
      </LinkButton>

      <LinkButton hash={'contact'} variant="ghost">
        Contact
      </LinkButton>

      <Button
        variant="ghost"
        size={'icon'}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </header>
  )
}
