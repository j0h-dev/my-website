import Image from 'next/image'
import ProjectBox from '../ProjectBox'
import SkillBox from '../SkillBox'
import { Icon } from '@iconify/react'
import { LinkButton } from '@/components/Buttons'

import mySpotifyPlaylistSorter from '@public/images/my-spotify-playlist-sorter.png'

export default function MySpotifyPlaylistSorter() {
	return (
		<ProjectBox>
			<div className="flex flex-col gap-y-5 items-start justify-center text-left">
				<Image src={mySpotifyPlaylistSorter} alt="My Spotify Playlist Sorter" width={600} className="rounded-xl self-start" />
				<div>
					<h3 className="text-3xl">My Spotify Playlist Sorter</h3>
					<p>Github Project</p>
				</div>

				<p>This is a project I started because I wanted to keep my large (1000 track playlists) sorted.</p>
				<p>I created a command line application in python with using the Spotify API.</p>

				<p>The repo contains some small test to confirm that everything is working as they should. </p>

				<p>The sorting goes like this:</p>

				<ol className="list-decimal list-inside">
					<li>Tracks are sorted into groups of albums, that are ordered in the manner of the album.</li>
					<li>Albums are grouped by artist and release date. (Artist is determined from the album rather than the track)</li>
					<li>Artist groups are sorted depending on the first tracks appearance date on the playlist.</li>
				</ol>

				<p>The github repo also gives information about how to setup an automation for the sorting.</p>

				<div className="flex flex-row gap-2 py-4 flex-wrap">
					<SkillBox>
						<Icon icon="logos:python" fontSize="1.5em" />
						<span>Python</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="mdi:test-tube" fontSize="1.5em" />
						<span>Unit Test</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="arcticons:automation" fontSize="1.5em" />
						<span>Automation</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="mdi:spotify" fontSize="1.5em" />
						<span>Spotify API</span>
					</SkillBox>
				</div>

				<LinkButton href="https://github.com/ItsOnlyGame/my-spotify-playlist-sorter" blank>
					Here is the github repo
				</LinkButton>
			</div>
		</ProjectBox>
	)
}
