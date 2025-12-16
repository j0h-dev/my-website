import type { Project } from '@/types'
import { ProjectItem } from './project-item'

const projects: Project[] = [
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
    links: [
      {
        type: 'app',
        url: 'https://liikuntapistelavida.com',
      },
    ],
  },
  {
    title: 'Spotify Playlist Sorter',
    description:
      'An application that sorts Spotify playlists based on various criteria and removes duplicates.',
    image: '/images/my-spotify-playlist-sorter.png',
    technologies: ['Golang', 'Spotify API', 'CLI', 'TUI', 'Github Workflows'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/j0h-dev/my-spotify-playlist-sorter-go',
      },
    ],
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
    links: [
      {
        type: 'github',
        url: 'https://github.com/j0h-dev/dragnconvert',
      },
      {
        type: 'app',
        url: 'https://dragnconvert.j0h.dev',
      },
    ],
  },
  {
    title: 'YT-DLP Web App',
    description: 'App to download videos from YouTube.',
    image:
      'https://raw.githubusercontent.com/j0h-dev/yt-dlp-webapp/refs/heads/main/assets/screenshot.png',
    technologies: ['React', 'yt-dlp', 'Golang', 'Gin-Gonic'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/j0h-dev/yt-dlp-webapp',
      },
    ],
  },
  {
    title: 'Rift',
    description:
      'Discord bot that provides music playback from YouTube or SoundCloud. Matches Spotify tracks to Youtube videos to hack spotify playback.',
    technologies: ['Java', 'Gradle', 'Spotify API', 'Discord API'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/j0h-dev/Rift',
      },
    ],
  },
  {
    title: 'Blocky Awoid',
    description:
      'First ever game I made, a game where you avoid different blocks that bounce around the screen.',
    image:
      'https://media.githubusercontent.com/media/j0h-dev/Blocky-Awoid/main/.github/preview.png',
    technologies: ['Java'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/j0h-dev/Blocky-Awoid',
      },
    ],
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
            <ProjectItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
