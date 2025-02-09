import { Icon } from '@iconify/react'
import { PropsWithChildren } from 'react'
import { Tag } from './tag'

export function SkillList() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8">
      <Group>
        <Label>Frontend development</Label>
        <Tag>
          <Icon icon="logos:javascript" fontSize="1.5em" />
          <span>JavaScript</span>
        </Tag>

        <Tag>
          <Icon icon="devicon:typescript" fontSize="1.5em" />
          <span>TypeScript</span>
        </Tag>

        <Tag>
          <Icon icon="devicon:react" fontSize="1.5em" />
          <span>React</span>
        </Tag>

        <Tag>
          <Icon icon="skill-icons:nextjs-light" fontSize="1.5em" />
          <span>NextJS</span>
        </Tag>

        <Tag>
          <Icon icon="skill-icons:tailwindcss-dark" fontSize="1.5em" />
          <span>Tailwind</span>
        </Tag>
      </Group>

      <Group>
        <Label>Backend development</Label>

        <Tag>
          <Icon icon="simple-icons:express" fontSize="1.5em" />
          <span>Express</span>
        </Tag>

        <Tag>
          <Icon icon="simple-icons:nestjs" fontSize="1.5em" />
          <span>NestJS</span>
        </Tag>

        <Tag>
          <Icon icon="skill-icons:prisma" fontSize="1.5em" />
          <span>Prisma ORM</span>
        </Tag>

        <Tag>
          <Icon icon="logos:go" fontSize="1.5em" />
        </Tag>
      </Group>

      <Group>
        <Label>Database & DevOps</Label>

        <Tag>
          <Icon icon="iconoir:linux" fontSize="1.5em" />
          <span>Linux</span>
        </Tag>

        <Tag>
          <Icon icon="skill-icons:docker" fontSize="1.5em" />
          <span>Docker</span>
        </Tag>

        <Tag>
          <Icon icon="logos:mysql" fontSize="1.5em" />
          <span>MySQL</span>
        </Tag>

        <Tag>
          <Icon icon="logos:postgresql" fontSize="1.5em" />
          <span>PostgreSQL</span>
        </Tag>
      </Group>

      <Group>
        <Label>Misc</Label>

        <Tag>
          <Icon icon="ri:seo-fill" fontSize="1.5em" />
          <span>SEO</span>
        </Tag>
      </Group>
    </div>
  )
}

function Group({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-y-2">{children}</div>
}

function Label({ children }: PropsWithChildren) {
  return <span className="font-semibold">{children}</span>
}
