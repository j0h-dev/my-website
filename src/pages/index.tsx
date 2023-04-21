import Image from 'next/image'
import Link from 'next/link'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import profilePic from '@/../public/images/background.webp'
import lavidaPreviewImage from '@/../public/images/lavida-website-preview.webp'

import SkillBox from '@/components/skillBox'
import { LinkButton } from '@/components/buttons'
import Head from 'next/head'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-y-6">
			<Head>
				<title>&lt;Jaro /&gt; Portfolio</title>
				<meta name="description" content="This is my portfolio" key="desc" />
			</Head>

			<div className="grid grid-cols-1 grid-rows-1 w-full justify-center items-center place-items-center min-h-[60vh]">
				<Image
					src={profilePic}
					alt="Space background"
					className="-z-10 object-cover max-h-[60vh] w-full h-full top-0 col-start-1 row-start-1"
				/>
				<div className="flex flex-col w-4/5 gap-y-4 col-start-1 row-start-1">
					<h1 className="flex flex-col gap-y-4 lg:text-7xl text-5xl text-slate-100">
						<p>Hello world!</p>
						<p>
							My name is <span className="text-[#006cc6]">Jaro</span>
						</p>
					</h1>
					<p className="md:text-2xl text-lg">I do cool stuff with computers</p>
				</div>
			</div>

			<div className="flex flex-col items-center text-center gap-y-6 my-4 w-full">
				<h2 className="text-3xl w-10/12">About me</h2>

				<div className="flex flex-col gap-y-4 xl:w-3/5 w-4/5">
					<p>
						I'm a first-year student at Turku University of Applied Sciences. I'm studying Information and communications
						technology. I'm eager to learn new things about my field and have a wide variety of skills under my belt.
					</p>
					<p>
						I've been interested in programming and technology in general since I was 10 years old. I started by learning
						different things about computers, and after a while I learned my first programming language: Java.
					</p>
					<p>I continued my learning journey by teaching myself new programming languages and technologies.</p>
					<p>To this day, my journey still continues onward. </p>
				</div>
			</div>

			<div className="xl:w-4/5 w-11/12 h-[2px] border-slate-100 border-dashed border-[1px]" />

			<div className="flex flex-col items-center text-center gap-y-6 my-4">
				<h2 className="text-3xl w-10/12">Technologies that I've used</h2>

				<div className="flex flex-wrap flex-row gap-3 w-3/5 items-center justify-center">
					<SkillBox name="Java" />
					<SkillBox name="Git" />
					<SkillBox name="Github" />
					<SkillBox name="Docker" />
					<SkillBox name="Python" />
					<SkillBox name="JavaScript" />
					<SkillBox name="TypeScript" />
					<SkillBox name="Nuxt3" />
					<SkillBox name="Nuxt2" />
					<SkillBox name="MySQL" />
					<SkillBox name="Linode" />
					<SkillBox name="NextJS" />
					<SkillBox name="Svelte-kit" />
					<SkillBox name="Godot" />
					<SkillBox name="Wordpress" />
					<SkillBox name="Linux" />
				</div>
			</div>

			<div className="w-4/5 h-[2px] border-slate-100 border-dashed border-[1px]" />

			<div className="flex flex-col items-center text-center gap-y-16 my-4 w-full">
				<h2 className="text-3xl w-10/12">Some projects that I have done</h2>

				<div className="flex xl:flex-row flex-col gap-x-14 gap-y-6 xl:w-3/5 w-4/5 items-center">
					<Image src={lavidaPreviewImage} alt="Screenshot of liikuntapistelavida.com" width={320} className="rounded-xl" />
					<div className="flex flex-col gap-y-5 items-start justify-center text-left">
						<div>
							<h3 className="text-3xl">Liikuntapiste La Vida's website</h3>
							<p>2020 - now</p>
						</div>

						<p>
							I was commisioned to create a website for a business named Liikuntapiste La Vida. It's a gym that offers
							services like spa treatment, group exercise and other exercise related services.
						</p>
						<p>
							The website was created fully from scratch. The frontend has had multiple intereation in multiple different
							JavaScript frameworks like Vue.js, Next.js, Svelte-kit and finally Nuxt.
						</p>
						<p>The backend was created in TypeScript using the NestJS backend framework.</p>
						<p>
							While doing this project I learned multiple different frameworks (those previously mentioned), technologies and
							other useful things. Here is a few things I learned:
						</p>

						<ul className="list-disc list-inside">
							<li>Docker</li>
							<li>MySQL</li>
							<li>Server Management</li>
							<li>Website design and deployment</li>
						</ul>

						<p>This website is currenly under my upkeep and management.</p>

						<LinkButton href="https://liikuntapistelavida.com" blank>
							Click here to check it out
						</LinkButton>
					</div>
				</div>

				<div>
					<Link href="https://github.com/ItsOnlyGame" target="_blank" className="underline">
						You should check my Github for more projects ;)
					</Link>
				</div>
			</div>

			<div className="w-4/5 h-[2px] border-slate-100 border-dashed border-[1px]" />

			<div className="flex flex-col items-center text-center gap-y-6 my-4 w-full">
				<h2 className="text-3xl w-10/12">Here are some places I visit sometimes</h2>

				<IconContext.Provider value={{ size: '28px' }}>
					<div className="flex flex-wrap flex-row gap-3 w-3/5 items-center justify-center">
						<Link
							href="https://github.com/ItsOnlyGame"
							target="_blank"
							className="flex flex-row gap-x-2 justify-center items-center"
						>
							<AiFillGithub />
							<p>@ItsOnlyGame</p>
						</Link>
					</div>
					<div className="flex flex-wrap flex-row gap-3 w-3/5 items-center justify-center">
						<Link
							href="https://www.linkedin.com/in/jaroheinonen/"
							target="_blank"
							className="flex flex-row gap-x-2 justify-center items-center"
						>
							<AiFillLinkedin />
							<p>Jaro Heinonen</p>
						</Link>
					</div>
				</IconContext.Provider>
			</div>
		</main>
	)
}
