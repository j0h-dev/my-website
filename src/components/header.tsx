import { Button } from './ui/button'

export function Header() {
  return (
    <header className="absolute top-3 right-16 flex">
      <a href="#">
        <Button variant="link">Home</Button>
      </a>

      <a href="#skills">
        <Button variant="link">Skills</Button>
      </a>

      <a href="#projects">
        <Button variant="link">Projects</Button>
      </a>

      <a href="#contact">
        <Button variant="link" className="p-4">
          Contact
        </Button>
      </a>
    </header>
  )
}
