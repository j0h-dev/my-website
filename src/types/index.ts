export type Technology = string

export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  technologies: Technology[]
}

export type LinkType = 'app' | 'demo' | 'github'

export interface ProjectLink {
  url: string
  type: LinkType
}

export interface Project {
  title: string
  description: string
  technologies: Technology[]

  deprecated?: boolean

  image?: string

  links: ProjectLink[]
}
