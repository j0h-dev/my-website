import { Github } from '@deemlol/next-icons'
import { ExternalLinkIcon } from 'lucide-react'
import type { Project, ProjectLink } from '@/types'
import { Button } from '../ui/button'

interface ProjectItemLinkProps {
  link: ProjectLink
}

const LINK_CONFIG = {
  app: {
    label: 'Live App',
    Icon: ExternalLinkIcon,
  },
  demo: {
    label: 'Live Demo',
    Icon: ExternalLinkIcon,
  },
  github: {
    label: 'Source Code',
    Icon: Github,
  },
} as const

export function ProjectItemLink({ link }: ProjectItemLinkProps) {
  const { label, Icon } = LINK_CONFIG[link.type]

  return (
    <Button variant="outline" size="sm" asChild>
      <a href={link.url} target="_blank" rel="noreferrer">
        <Icon className="mr-2 h-4 w-4" />
        {label}
      </a>
    </Button>
  )
}
