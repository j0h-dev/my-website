import Link from 'next/link'
import Head from 'next/head'
import SkillsList from '@/components/Skills/SkillsList'
import Seperator from '@/components/Seperator'
import ProjectsList from '@/components/Skills/ProjectsList'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-y-6">
			<Head>
				<title>&lt;Jaro /&gt; Portfolio</title>
				<meta name="description" content="This is my portfolio" key="desc" />
			</Head>

			<div className="flex flex-col items-center text-center gap-y-6 mt-8 w-full">
				<h2 className="text-3xl w-full">About me</h2>

				<div className="flex flex-col gap-y-4 w-full text-left">
					<p>
						I'm a second-year student at Turku University of Applied Sciences. I'm studying Information and communications technology. I'm
						eager to learn new things about my field and have a wide variety of skills under my belt.
					</p>
					<p>
						I've always been interested in computers and technology, which led me to become computer literate. I started learning how to
						program at the age of 10, with Java being my first language.
					</p>
					<p>
						Now I have taken more of an interest in web development. I've mostly been playing around as a fullstack developer with Nuxt and
						React in the frontend and NestJS and Express.js in the backend.
					</p>
					<p>Even today, I am still learning more and more. One day I will become a computer wizard🔮</p>
				</div>
			</div>

			<Seperator />

			<div className="flex flex-col items-center text-center gap-y-6">
				<h2 className="text-3xl w-full">Technologies that I've used</h2>
				<SkillsList />
			</div>

			<Seperator />

			<div className="flex flex-col items-center text-center w-full mb-8">
				<h2 className="text-3xl">Some projects that I have worked in</h2>
				<ProjectsList />

				<div className="w-full">
					<Link href="https://github.com/ItsOnlyGame" target="_blank" className="underline">
						You should check my Github for more projects ;)
					</Link>
				</div>
			</div>
		</main>
	)
}
