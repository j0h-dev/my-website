import { Github, Linkedin } from '@deemlol/next-icons'
import { GithubLink } from '../external-links/github-link'
import { LinkedinLink } from '../external-links/linkedin-link'
import { Button } from '../ui/button'

export function HeroSection() {
  return (
    <section className="flex h-full min-h-[60vh] select-none flex-col items-center justify-center gap-8">
      <div className="space-y-3">
        <h1 className="space-y-4">
          <p className="font-semibold text-6xl">
            {"Hello, I'm"} <span className="gradient-animation">Jaro</span>
          </p>
        </h1>
        <p className="text-2xl">Fullstack Developer & Software Engineer</p>
      </div>

      <p className="text-lg">
        I create applications and tools with modern technologies.
      </p>

      <div className="flex gap-4">
        <Button variant="ghost" size={'icon'} asChild>
          <GithubLink>
            <Github className="size-6" />
          </GithubLink>
        </Button>
        <Button variant="ghost" size={'icon'} asChild>
          <LinkedinLink>
            <Linkedin className="size-6" />
          </LinkedinLink>
        </Button>
      </div>
    </section>
  )
}
