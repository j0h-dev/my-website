import { Icon } from '@iconify/react'
import { Project } from '../project'
import { Tag } from '../tag'
import { Button } from '../ui/button'

export function MySpotifyPlaylistSorter() {
  return (
    <Project>
      <div className="flex flex-col items-start justify-center gap-y-5 text-left">
        <img
          src="/images/my-spotify-playlist-sorter.png"
          alt="My Spotify Playlist Sorter"
          width={600}
          className="self-start rounded-xl"
        />
        <div>
          <h3 className="text-3xl">My Spotify Playlist Sorter</h3>
          <p>Github Project</p>
        </div>

        <p>
          This is a project I started because I wanted to keep my large (1000
          track playlists) sorted.
        </p>
        <p>
          I created a command line application in python with using the Spotify
          API.
        </p>

        <p>
          The repo contains some small test to confirm that everything is
          working as they should.{' '}
        </p>

        <p>The sorting goes like this:</p>

        <ol className="list-inside list-decimal">
          <li>
            Tracks are sorted into groups of albums, that are ordered in the
            manner of the album.
          </li>
          <li>
            Albums are grouped by artist and release date. (Artist is determined
            from the album rather than the track)
          </li>
          <li>
            Artist groups are sorted depending on the first tracks appearance
            date on the playlist.
          </li>
        </ol>

        <p>
          The github repo also gives information about how to setup an
          automation for the sorting.
        </p>

        <div className="flex flex-row flex-wrap gap-2 py-4">
          <Tag>
            <Icon icon="logos:python" fontSize="1.5em" />
            <span>Python</span>
          </Tag>

          <Tag>
            <Icon icon="mdi:test-tube" fontSize="1.5em" />
            <span>Unit Test</span>
          </Tag>

          <Tag>
            <Icon icon="arcticons:automation" fontSize="1.5em" />
            <span>Automation</span>
          </Tag>

          <Tag>
            <Icon icon="mdi:spotify" fontSize="1.5em" />
            <span>Spotify API</span>
          </Tag>
        </div>

        <a
          href="https://github.com/ItsOnlyGame/my-spotify-playlist-sorter"
          target="_blank"
        >
          <Button> Here is the github repo</Button>
        </a>
      </div>
    </Project>
  )
}
