import { Github } from '@deemlol/next-icons'
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'
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
  )
}
