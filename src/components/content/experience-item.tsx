import type { Experience } from '@/types/experience'
import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

type ExperienceItemProps = {
  experience: Experience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-xl">{experience.title}</CardTitle>
            <CardDescription className="font-medium text-lg text-primary">
              {experience.company}
            </CardDescription>
          </div>
          <Badge variant="outline" className="w-fit">
            {experience.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {experience.description.map((text, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: index is fine as key here
          <p key={index} className="mb-4 text-muted-foreground">
            {text}
          </p>
        ))}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
