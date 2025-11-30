import { Badge } from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

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
    skills: ['Node.js', 'Gin-Gonic', 'Express.js', 'REST APIs', 'tRPC', 'oRPC'],
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

export function Skills() {
  return (
    <section id="skills">
      <div className="space-y-12">
        <h2 className="text-center font-bold text-3xl md:text-4xl">
          {'Skills & Technologies'}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
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
