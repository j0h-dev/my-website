import type { Experience } from '@/types'
import { ExperienceItem } from './experience-item'

const experiences: Experience[] = [
  {
    title: 'Software Developer',
    company: 'theFIRMA - TurkuAMK',
    period: 'September 2025 - December 2025',
    description: [
      'I worked on a customer project for Action Lähetit. My job was to mentor the new students and help them get started with the project. I also contributed to the development of the application by implementing new features and fixing bugs.',
    ],
    technologies: [
      'Excel VBS',
      'Firebase',
      'Typescript',
      'React',
      'Node.js',
      'Express.js'
    ],
  },
  {
    title: 'Lead Full-Stack Developer',
    company: 'Labriikki - TurkuAMK',
    period: 'May 2025 - September 2025',
    description: [
      'This role began as a capstone project and turned into an internship, where I stepped into a Lead Developer position. I led full-stack development using React for the frontend and Node.js with Express and MySQL on the backend, contributing to both core features and overall application architecture.',
      'In addition to hands-on development, I provided technical leadership through code reviews, architectural guidance, and mentoring, ensuring the usage of best practices and maintaining high code quality across the team.',
      'I designed and implemented automated CI/CD pipelines with GitLab CI to streamline testing and deployments, significantly improving development efficiency and release reliability.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
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
      'I used this freelance job as a learning experience to learn multiple different technologies that I was interested in.',
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
    title: 'Lead Full-Stack Developer',
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
      'Express.js',
      'MySQL',
      'Postgres',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Fullstack Developer',
    company: 'theFIRMA - TurkuAMK',
    period: 'September 2023 - January 2024',
    description: [
      'Worked as a full-stack developer on multiple web applications using React, Node.js, Express, and TypeScript/JavaScript with MySQL and MongoDB.',
      'Developed backend APIs and core functionality for laboratory monitoring and internal reservation systems. Contributed to deployment and maintenance to ensure reliable and stable application operation.'
    ],
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'MongoDB',
      'Tailwind CSS',
      'CSS',
      'Linux'
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
