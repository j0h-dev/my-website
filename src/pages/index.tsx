import Image from 'next/image'
import Link from 'next/link'

import lavidaPreviewImage from '@public/images/lavida-website-preview.webp'

import SkillBox from '@/components/SkillBox'
import { LinkButton } from '@/components/Buttons'
import Head from 'next/head'
import { Icon } from '@iconify/react'
import Background from '@/components/Background'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-y-6">
			<Head>
				<title>&lt;Jaro /&gt; Portfolio</title>
				<meta name="description" content="This is my portfolio" key="desc" />
			</Head>

			<div className="grid grid-cols-1 grid-rows-1 w-full justify-center items-center place-items-center min-h-[60vh]">
				<Background className="-z-10 object-cover max-h-[60vh] w-full h-full top-0 col-start-1 row-start-1" />

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
						I'm a first-year student at Turku University of Applied Sciences. I'm studying Information and communications technology. I'm
						eager to learn new things about my field and have a wide variety of skills under my belt.
					</p>
					<p>
						I've been interested in programming and technology in general since I was 10 years old. I started by learning different things
						about computers, and after a while I learned my first programming language: Java.
					</p>
					<p>I continued my learning journey by teaching myself new programming languages and technologies.</p>
					<p>To this day, my journey still continues onward. </p>
				</div>
			</div>

			<div className="xl:w-4/5 w-11/12 h-[2px] border-slate-100 border-dashed border-[1px]" />

			<div className="flex flex-col items-center text-center gap-y-6 my-4">
				<h2 className="text-3xl w-10/12">Technologies that I've used</h2>

				<div className="flex flex-wrap flex-row gap-3 w-4/5 items-center justify-center">
					<SkillBox>
						<Icon icon="logos:java" fontSize="1.5em" />
						<span>Java</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="devicon:git" fontSize="1.5em" />
						<span>Git</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="mdi:github" fontSize="1.5em" />
						<span>Github</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="skill-icons:docker" fontSize="1.5em" />
						<span>Docker</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="logos:python" fontSize="1.5em" />
						<span>Python</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="logos:javascript" fontSize="1.5em" />
						<span>JavaScript</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="devicon:typescript" fontSize="1.5em" />
						<span>TypeScript</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="devicon:csharp" fontSize="1.65em" />
					</SkillBox>

					<SkillBox>
						<Icon icon="logos:vue" fontSize="1.25em" />
						<span>Vue</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="skill-icons:nuxtjs-dark" fontSize="1.5em" />
						<span>Nuxt</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="logos:mysql" fontSize="1.5em" />
						<span>MySQL</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="devicon:godot" fontSize="1.5em" />
						<span>Godot</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="logos:linode" fontSize="1.5em" />
						<span>Linode</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="devicon:react" fontSize="1.5em" />
						<span>React</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="skill-icons:nextjs-light" fontSize="1.5em" />
						<span>NextJS</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="devicon:svelte" fontSize="1.5em" />
						<span>Svelte-kit</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="ic:baseline-wordpress" fontSize="1.5em" />
						<span>Wordpress</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="iconoir:linux" fontSize="1.5em" />
						<span>Linux</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="logos:stripe" fontSize="1.5em" />
					</SkillBox>

					<SkillBox>
						<Icon icon="skill-icons:mongodb" fontSize="1.5em" />
						<span>MongoDB</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="logos:figma" fontSize="1.5em" />
						<span>Figma</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="skill-icons:tailwindcss-dark" fontSize="1.5em" />
						<span>Tailwind</span>
					</SkillBox>
				</div>
			</div>

			<div className="xl:w-4/5 w-11/12 h-[2px] border-slate-100 border-dashed border-[1px]" />

			<div className="flex flex-col items-center text-center gap-y-16 my-4 w-full">
				<h2 className="text-3xl w-10/12">Some projects that I have worked in</h2>

				<div className="flex xl:flex-row flex-col gap-x-14 gap-y-6 xl:w-3/5 w-4/5 items-center">
					<Image src={lavidaPreviewImage} alt="Screenshot of liikuntapistelavida.com" width={320} className="rounded-xl" />
					<div className="flex flex-col gap-y-5 items-start justify-center text-left">
						<div>
							<h3 className="text-3xl">Liikuntapiste La Vida's website</h3>
							<p>2020 - now</p>
						</div>

						<p>
							I was commisioned to create a website for a business named Liikuntapiste La Vida. It's a gym that offers services like spa
							treatment, group exercise and other exercise related services.
						</p>
						<p>
							The website was created fully from scratch. The frontend has had multiple intereation in multiple different JavaScript
							frameworks like Vue.js, Next.js, Svelte-kit and finally Nuxt.
						</p>
						<p>The backend was created in TypeScript using the NestJS backend framework.</p>
						<p>
							While doing this project I learned multiple different frameworks (those previously mentioned), technologies and other useful
							things. Here is a few things I learned:
						</p>

						<ul className="list-disc list-inside">
							<li>Multiple frontend frameworks</li>
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

				<div className="w-4/5">
					<Link href="https://github.com/ItsOnlyGame" target="_blank" className="underline">
						You should check my Github for more projects ;)
					</Link>
				</div>
			</div>

			<div className="xl:w-4/5 w-11/12 h-[2px] border-slate-100 border-dashed border-[1px]" />

			<div className="flex flex-col items-center text-center gap-y-6 my-4 w-full">
				<h2 className="text-3xl w-10/12">Here are some places I visit sometimes</h2>

				<div className="flex flex-wrap flex-row gap-3 w-3/5 items-center justify-center">
					<Link href="https://github.com/ItsOnlyGame" target="_blank" className="flex flex-row gap-x-2 justify-center items-center">
						<Icon icon="mdi:github" fontSize="2em" />
						<p>@ItsOnlyGame</p>
					</Link>
				</div>
				<div className="flex flex-wrap flex-row gap-3 w-3/5 items-center justify-center">
					<Link
						href="https://www.linkedin.com/in/jaroheinonen/"
						target="_blank"
						className="flex flex-row gap-x-2 justify-center items-center"
					>
						<Icon icon="mdi:linkedin" fontSize="2em" />
						<p>Jaro Heinonen</p>
					</Link>
				</div>
			</div>
		</main>
	)
}
