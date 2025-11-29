import { Github } from '@deemlol/next-icons'
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

const projects = [
  {
    title: 'Piper - UNDER DEVELOPMENT',
    description:
      'A modern, fast and minimalistic project management application for teams and individuals. Currently features task management and simple project file storage.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Hono',
      'oRPC',
      'PostgreSQL',
      'TailwindCSS',
      'Turbopack',
      'Monorepo',
    ],
    image: '/images/piper.webp',
    githubUrl: 'https://github.com/j0h-dev/piper',
  },
  {
    title: 'Business Website - Liikuntapiste Lavida',
    description:
      'Modern business website for a gym. Features user authentication, admin dashboard, and a reservation calendar.',
    technologies: [
      'React',
      'TypeScript',
      'Go (Golang)',
      'Gin-Gonic',
      'PostgreSQL',
      'TailwindCSS',
      'CI/CD',
      'Docker',
      'Linux / Hetzner',
    ],
    image: '/images/lavida-website.webp',
    liveUrl: 'https://liikuntapistelavida.com',
  },
  {
    title: 'Spotify Playlist Sorter',
    description:
      'An application that sorts Spotify playlists based on various criteria and removes duplicates.',
    image: '/images/my-spotify-playlist-sorter.webp',
    technologies: [
      'Python',
      'Spotify API',
      'CLI',
      'Unit testing',
      'Github Workflows',
    ],
    githubUrl: 'https://github.com/j0h-dev/my-spotify-playlist-sorter',
  },
  {
    title: "Drag 'n' Convert",
    description:
      'File conversion app powered by ffmpeg-wasm and browser APIs, works with images, audio and video.',
    technologies: [
      'React',
      'React Router v7',
      'TypeScript',
      'TailwindCSS',
      'Vercel',
      'FFmpeg',
      'Github Workflows',
    ],
    liveUrl: 'https://dragnconvert.j0h.dev',
    githubUrl: 'https://github.com/j0h-dev/dragnconvert',
  },
  {
    title: 'YT-DLP Web App',
    description: 'App to download videos from YouTube.',
    image:
      'https://raw.githubusercontent.com/j0h-dev/yt-dlp-webapp/refs/heads/main/assets/screenshot.png',
    technologies: ['React', 'yt-dlp', 'Golang', 'Gin-Gonic'],
    githubUrl: 'https://github.com/j0h-dev/yt-dlp-webapp',
  },
  {
    title: 'Nuxt UI Component Collection',
    description:
      'Collection of reusable UI components for Nuxt.js, insipred by WindUI.',
    image:
      'https://raw.githubusercontent.com/j0h-dev/nuxt-ui-components/main/public/icon.svg',
    technologies: ['Vue.js', 'Nuxt.js', 'TailwindCSS'],
    githubUrl: 'https://github.com/j0h-dev/nuxt-ui-components',
  },
  {
    title: 'Rift',
    description:
      'Discord bot that provides music playback from YouTube or SoundCloud. Matches Spotify tracks to Youtube videos to hack spotify playback.',
    technologies: ['Java', 'Gradle', 'Spotify API', 'Discord API'],
    githubUrl: 'https://github.com/j0h-dev/Rift',
  },
  {
    title: 'Blocky Awoid',
    description:
      'First ever game I made, a game where you avoid different blocks that bounce around the screen.',
    image:
      'https://media.githubusercontent.com/media/j0h-dev/Blocky-Awoid/main/.github/preview.png',
    technologies: ['Java'],
    githubUrl: 'https://github.com/j0h-dev/Blocky-Awoid',
  },
]

export function Projects() {
  return (
    <section id="projects">
      <div className="space-y-12">
        <h2 className="text-center font-bold text-3xl md:text-4xl">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={cn('overflow-hidden', project.image && 'pt-0')}
            >
              {project.image && (
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-fill"
                    width={400}
                    height={225}
                  />
                </div>
              )}

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto flex gap-2">
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      aria-label={`Live demo of ${project.title}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      aria-label={`Source code of ${project.title}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={24} />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
