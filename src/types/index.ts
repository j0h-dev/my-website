export type Technology = string

export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  technologies: Technology[]
}

export interface Project {
  title: string
  description: string
  technologies: Technology[]

  image?: string
  liveUrl?: string
  githubUrl?: string
}
