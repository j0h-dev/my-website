import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'
import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { ProjectItemLink } from './project-item-link'

interface ProjectItemProps {
  project: Project
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Card
      key={project.title}
      className={cn('overflow-hidden', project.image && 'pt-0')}
    >
      {project.image && (
        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            className="h-full w-full"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            <Badge key={tech} className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex gap-2">
        {project.links.map((link) => (
          <ProjectItemLink key={link.url} link={link} />
        ))}
      </CardFooter>
    </Card>
  )
}
