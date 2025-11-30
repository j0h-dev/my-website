import type { Experience } from '@/types/experience'
import { ExperienceItem } from './experience-item'

const experiences: Experience[] = [
  {
    title: 'Lead Full-Stack Developer',
    company: 'Labriikki - TurkuAMK',
    period: 'May 2025 - September 2025',
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
    period: 'May 2020 - August 2025',
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

export function Experiences() {
  return (
    <section id="experience">
      <div className="space-y-12">
        <h2 className="text-center font-bold text-3xl md:text-4xl">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: index is fine as key here
            <ExperienceItem experience={experience} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
