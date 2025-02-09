import { Icon } from '@iconify/react'
import { Project } from '../project'
import { Tag } from '../tag'

export function Cataclysm() {
  return (
    <Project>
      <div className="flex flex-col items-start justify-center gap-y-5">
        <div>
          <h3 className="text-3xl">Cataclysm</h3>
          <p>theFIRMA / Internship</p>
          <p>May 2024 - Present</p>
        </div>

        <p>Cataclysm is the name for theFIRMA's internal backend.</p>
        <p>
          The backend is a unified backend for most internal applications in
          theFirma.
        </p>

        <div className="flex flex-col gap-2">
          <p>
            Currenly it handles 3 applications; VarausApp, Working Hours App,
            and Project Gate 2.0
          </p>
          <ul className="ml-4 list-outside list-disc">
            <li>
              VarausApp is for reserving computers, items, or meeting spaces at
              the office.
            </li>
            <li>Working Hours App is for marking your work hours.</li>
            <li>
              Project Gates 2.0 is the hub for the people working at theFirma.
              It has everything related to projects, documentation, and more.
              This is also the place where you apply for projects and do
              self/peer-assessments.
            </li>
          </ul>
        </div>

        <div className="flex flex-row flex-wrap gap-2 py-4">
          <Tag>
            <Icon icon="devicon:nodejs" fontSize="1.5em" />
            <span>NodeJS</span>
          </Tag>

          <Tag>
            <Icon icon="devicon:typescript" fontSize="1.5em" />
            <span>TypeScript</span>
          </Tag>

          <Tag>
            <Icon icon="simple-icons:express" fontSize="1.5em" />
            <span>Express</span>
          </Tag>

          <Tag>
            <Icon icon="logos:mysql" fontSize="1.5em" />
            <span>MySQL</span>
          </Tag>

          <Tag>
            <Icon icon="simple-icons:jest" fontSize="1.5em" />
            <span>Jest</span>
          </Tag>

          <Tag>
            <Icon icon="skill-icons:prisma" fontSize="1.5em" />
            <span>Prisma ORM</span>
          </Tag>
        </div>
      </div>
    </Project>
  )
}
