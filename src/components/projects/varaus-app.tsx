import { Icon } from '@iconify/react'
import { Project } from '../project'
import { Tag } from '../tag'

export function VarausApp() {
  return (
    <Project>
      <div className="flex flex-col items-start justify-center gap-y-5 text-left">
        <img
          src="/images/varausapp.png"
          alt="VarausApp"
          width={800}
          className="self-start rounded-xl"
        />

        <div>
          <h3 className="text-3xl">VarausApp</h3>
          <p>September 2023 - February 2024</p>
          <p>Finished</p>
        </div>

        <p>
          The app is a reservation tool for reserving theFirma office computers,
          meeting spaces and different items.
        </p>
        <p>
          I did various things including authentication, UI design, backend
          development, documentation and deployment.
        </p>

        <div className="flex flex-row flex-wrap gap-2 py-4">
          <Tag>
            <Icon icon="devicon:react" fontSize="1.5em" />
            <span>React</span>
          </Tag>

          <Tag>
            <Icon icon="skill-icons:mongodb" fontSize="1.5em" />
            <span>MongoDB</span>
          </Tag>

          <Tag>
            <Icon icon="devicon:nodejs" fontSize="1.5em" />
            <span>NodeJS</span>
          </Tag>

          <Tag>
            <Icon icon="simple-icons:express" fontSize="1.5em" />
            <span>Express.js</span>
          </Tag>

          <Tag>
            <Icon icon="simple-icons:chakraui" fontSize="1.5em" />
            <span>Chakra UI</span>
          </Tag>
        </div>
      </div>
    </Project>
  )
}
