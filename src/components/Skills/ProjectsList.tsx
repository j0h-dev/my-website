import Image from 'next/image'
import lavidaPreviewImage from '@public/images/lavida-website-preview.webp'
import { LinkButton } from '../Buttons'

export default function ProjectsList() {
	return (
		<>
			<div className="flex md:flex-row flex-col gap-x-14 gap-y-6 items-center">
				<Image src={lavidaPreviewImage} alt="Screenshot of liikuntapistelavida.com" width={320} className="rounded-xl" />
				<div className="flex flex-col gap-y-5 items-start justify-center text-left">
					<div>
						<h3 className="text-3xl">Liikuntapiste La Vida's website</h3>
						<p>2020 May - Present</p>
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
					<p>Here is a few things I learned:</p>

					<ul className="list-disc list-inside">
						<li>Multiple frontend frameworks</li>
						<li>Docker</li>
						<li>MySQL</li>
						<li>Server Management</li>
						<li>Website design and deployment</li>
					</ul>

					<p>I currently upkeep and manage this website, and sometimes add new features when requested.</p>

					<LinkButton href="https://liikuntapistelavida.com" blank>
						Click here to check it out
					</LinkButton>
				</div>
			</div>
		</>
	)
}
