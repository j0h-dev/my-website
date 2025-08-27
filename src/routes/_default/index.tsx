import { GithubLink } from '@/components/external-links/github-link'
import { LinkedinLink } from '@/components/external-links/linkedin-link'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { createFileRoute } from '@tanstack/react-router'
import { ExternalLinkIcon, MailIcon } from 'lucide-react'

export const Route = createFileRoute('/_default/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div>
      <HeroSection />
      <div className="space-y-20">
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="flex h-full min-h-[60vh] flex-col items-center justify-center gap-8 select-none">
      <div className="space-y-3">
        <h1 className="space-y-4">
          <p className="text-6xl font-semibold">
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
            <SiGithub className="size-6" />
          </GithubLink>
        </Button>
        <Button variant="ghost" size={'icon'} asChild>
          <LinkedinLink>
            <LinkedinIcon className="size-6" />
          </LinkedinLink>
        </Button>
      </div>
    </section>
  )
}

function AboutMe() {
  return (
    <section id="about" className="flex items-center justify-center py-16">
      <div className="max-w-6xl space-y-12">
        <h2 className="text-center text-3xl font-bold md:text-4xl">About Me</h2>

        <div className="grid items-center space-y-6 text-lg">
          <p>
            {"I'm"} a programmer with over 12 years of hobbyist experience
            building many different applications like games, CLI tools and web
            applications.
          </p>
          <p>
            When {"I'm"} not coding, you can find me exploring new technologies
            and staying up-to-date with the latest trends.
          </p>
          <p>I create applications and tools with modern technologies</p>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        'Javascript',
        'Typescript',
        'Go (Golang)',
        'Java',
        'Python',
        'Bash',
      ],
    },
    {
      title: 'Frontend',
      skills: [
        'Next.js',
        'React',
        'Nuxt.js',
        'Vue.js',
        'HTML & CSS',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Gin-Gonic',
        'Express.js',
        'REST APIs',
        'tRPC',
        'oRPC',
      ],
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        'Docker',
        'Vercel',
        'Git',
        'GitHub Actions',
        'Vite',
        'Linux',
        'Coolify',
        'Turbopack',
        'Monorepo',
      ],
    },
    {
      title: 'Other',
      skills: ['Agile', 'Scrum', 'UI/UX Design', 'Figma', 'Technical Writing'],
    },
  ]

  return (
    <section id="skills">
      <div className="space-y-12">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Skills & Technologies
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
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

  return (
    <section id="projects">
      <div className="space-y-12">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={cn('overflow-hidden', project.image && 'pt-0')}
            >
              {project.image && (
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-fill"
                  />
                </div>
              )}

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
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
                      <SiGithub className="mr-2 h-4 w-4" />
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

function Experience() {
  const experiences = [
    {
      title: 'Lead Full-Stack Developer',
      company: 'Labriikki - TurkuAMK',
      period: 'May 2025 - Present',
      description: [
        'Lead full-stack development for a web application to help TurkuAMK laboratories with 6S Lean principles, taking ownership of both frontend and backend work. I designed backend architectures and database schemas, ensuring scalable and maintainable systems.',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'MySQL',
        'Tailwind CSS',
        'GitLab CI/CD',
        'Docker',
      ],
    },
    {
      title: 'Freelance Fullstack Developer and Web Administrator',
      company: 'LiikuntaPiste La Vida',
      period: 'May 2020 - Present',
      description: [
        'Build a modern business website for a gym, featuring user authentication, admin dashboard, and a reservation calendar. I also maintain the website and ensure its smooth operation.',
      ],
      technologies: [
        'Nuxt.js',
        'Typescript',
        'Sass',
        'Node.js',
        'MySQL',
        'React',
        'Golang',
        'PostgreSQL',
        'Tailwind CSS',
        'Docker',
        'GitLab CI/CD',
        'Hetzner',
        'Linode',
        'Linux',
        'Wordpress',
      ],
    },
    {
      title: 'Lead Full-Stack Developer & Tech Lead',
      company: 'theFIRMA - TurkuAMK',
      period: 'May 2024 - December 2024',
      description: [
        'Led fullstack development on two projects—one internal and one client-facing—taking ownership of both frontend and backend work. I designed backend architectures and database schemas, ensuring scalable and maintainable systems.',

        'Beyond development, I supported project managers in planning and prioritizing tasks, often helping shape the project roadmap. I also served as the technical lead, guiding implementation decisions and mentoring where needed.',

        'Occasionally, I consulted on other projects, offering input on architecture and development best practices when asked.',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'MySQL',
        'Postgres',
        'Tailwind CSS',
      ],
    },
  ]

  return (
    <section id="experience">
      <div className="space-y-12">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-primary text-lg font-medium">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {exp.description.map((text, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {text}
                  </p>
                ))}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <div className="space-y-12">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Get In Touch
        </h2>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">{"Let's"} work together</h3>
          <p className="text-lg">
            {"I'm"} always interested in new opportunities and exciting
            projects. Whether you have a question or just want to say hi, feel
            free to reach out!
          </p>

          <div className="flex items-center gap-4">
            <MailIcon className="text-primary h-6 w-6" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">heinonenjaro@proton.me</p>
            </div>
          </div>

          <LinkedinLink className="flex w-max items-center gap-4">
            <LinkedinIcon className="text-primary h-6 w-6" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-muted-foreground">Jaro Heinonen</p>
            </div>
          </LinkedinLink>
        </div>
      </div>
    </section>
  )
}
