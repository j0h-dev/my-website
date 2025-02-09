import { Icon } from '@iconify/react'
import { Project } from '../project'
import { Tag } from '../tag'
import { Button } from '../ui/button'

export function YTDLPWebApp() {
  return (
    <Project>
      <div className="flex flex-col items-start justify-center gap-y-5 text-left">
        <img
          src="/images/ytdlpwebappImage.png"
          alt="YT-DLP WebApp"
          width={800}
          className="self-start rounded-xl"
        />

        <div>
          <h3 className="text-3xl">YT-DLP WebApp</h3>
          <p>Github Project</p>
        </div>

        <p>Web app created in React and Go to serve as a web UI for yt-dlp</p>
        <p>Created simplicity in mind.</p>
        <p>Download as a video or only the audio</p>

        <div className="flex flex-row flex-wrap gap-2 py-4">
          <Tag>
            <Icon icon="devicon:react" fontSize="1.5em" />
            <span>React</span>
          </Tag>

          <Tag>
            <Icon icon="mdi:youtube" fontSize="1.5em" />
            <span>yt-dlp</span>
          </Tag>

          <Tag>
            <Icon icon="logos:go" fontSize="1.5em" />
          </Tag>

          <Tag>
            <Icon icon="tabler:glass-gin" fontSize="1.5em" />
            <span>Gin-Gonic</span>
          </Tag>
        </div>

        <a href="https://github.com/ItsOnlyGame/yt-dlp-webapp" target="_blank">
          <Button>Source Code</Button>
        </a>
      </div>
    </Project>
  )
}
