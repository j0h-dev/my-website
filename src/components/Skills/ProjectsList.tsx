import Image from 'next/image'

import { LinkButton } from '../Buttons'

import lavidaPreviewImage from '@public/images/lavida-website-preview.webp'
import varausAppImage from '@public/images/varausapp.png'
import mySpotifyPlaylistSorter from '@public/images/my-spotify-playlist-sorter.png'
import ProjectBox from './ProjectBox'

export default function ProjectsList() {
	return (
		<div className="flex flex-col w-full divide-y">
			<ProjectBox>
				<Image src={lavidaPreviewImage} alt="Screenshot of liikuntapistelavida.com" width={320} className="rounded-xl" />
				<div className="flex flex-col gap-y-5 items-start justify-center text-left">
					<div>
						<h3 className="text-3xl">Liikuntapiste La Vida's website</h3>
						<p>Freelance project</p>
						<p>May 2020 - Present</p>
					</div>

					<p>
						I was commisioned to create a website for a business named Liikuntapiste La Vida. The business offers a gym, spa treatment,
						group exercise and other exercise related services.
					</p>
					<p>
						The website was created fully from scratch. The frontend has had multiple intereation in multiple different JavaScript
						frameworks like Vue.js, Next.js, Svelte-kit and finally Nuxt.
					</p>
					<p>The backend was created in TypeScript using the NestJS backend framework.</p>

					<div>
						<p>Here is a few things I learned:</p>

						<ul className="list-disc list-inside">
							<li>Multiple frontend frameworks</li>
							<li>Docker</li>
							<li>MySQL</li>
							<li>Server Management</li>
							<li>Website design and deployment</li>
						</ul>
					</div>

					<p>I currently upkeep and manage this website, and sometimes add new features when requested.</p>

					<LinkButton href="https://liikuntapistelavida.com" blank>
						Click here to check it out
					</LinkButton>
				</div>
			</ProjectBox>

			<ProjectBox>
				<Image
					src="https://raw.githubusercontent.com/ItsOnlyGame/nuxt-ui-components/main/public/icon.svg"
					alt="ItsOnlyGame/nuxt-ui-components"
					width={320}
					height={320}
					className="rounded-xl"
				/>
				<div className="flex flex-col gap-y-5 items-start justify-center text-left">
					<div>
						<h3 className="text-3xl">Nuxt UI Component Collection</h3>
						<p>Github Project</p>
					</div>

					<p>I got tired of different UI components with their somewhat limited styling.</p>
					<p>I was also wishing for a "copy and paste" style of UI components.</p>
					<p>
						I found out about WindUI, which is for React and gave the source code to different components. I enjoyed the experience of
						having full control of the components and the freedom that it gave me.
					</p>
					<p>Now I just want the same experience in Nuxt.</p>
					<p>As of 22/01/2024 there are around 18 components.</p>

					<LinkButton href="https://github.com/ItsOnlyGame/nuxt-ui-components" blank>
						Here is the github repo
					</LinkButton>
				</div>
			</ProjectBox>

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

					<LinkButton href="https://github.com/ItsOnlyGame/my-spotify-playlist-sorter" blank>
						Github
					</LinkButton>
				</div>
			</ProjectBox>

			<ProjectBox>
				<Image src={varausAppImage} alt="VarausApp" width={800} className="rounded-xl self-start" />

				<div className="flex flex-col gap-y-5 items-start justify-center text-left">
					<div>
						<h3 className="text-3xl">VarausApp</h3>
						<p>Project work at School</p>
						<p>September 2023 - December 2023</p>
					</div>

					<p>I was a part of school work where this web application was created.</p>
					<p>I did various things including authenticaiton, UI design, backend devlopment and documentation</p>

					<div>
						<p>Techstack used:</p>

						<ul className="list-disc list-inside">
							<li>React.js</li>
							<li>MongoDB</li>
							<li>Express.js</li>
							<li>Chakra UI</li>
						</ul>
					</div>
				</div>
			</ProjectBox>
		</div>
	)
}
