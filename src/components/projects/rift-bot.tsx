import { Icon } from '@iconify/react'
import { Project } from '../project'
import { Tag } from '../tag'
import { Button } from '../ui/button'

export function RiftBot() {
  return (
    <Project>
      <div className="flex flex-col items-start justify-center gap-y-5 text-left">
        <div>
          <h3 className="text-3xl">Rift</h3>
          <p>Github Project</p>
        </div>

        <div>
          <p>Rift is a discord bot made with Java. </p>
          <p>
            It's main purpose is to play music through YouTube or SoundCloud.
          </p>
          <p>
            One of it's unique features is that it can translates Spotify Links
            to YouTube Videos.
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-2 py-4">
          <Tag>
            <Icon icon="logos:java" fontSize="1.5em" />
            <span>Java</span>
          </Tag>

          <Tag>
            <Icon icon="ic:baseline-discord" fontSize="1.5em" />
            <span>Discord API</span>
          </Tag>

          <Tag>
            <Icon icon="mdi:spotify" fontSize="1.5em" />
            <span>Spotify API</span>
          </Tag>
        </div>

        <a href="https://github.com/ItsOnlyGame/Rift" target="_blank">
          <Button>Just a link to a repo</Button>
        </a>
      </div>
    </Project>
  )
}
