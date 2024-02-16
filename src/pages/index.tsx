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
				<meta property="og:image" content="/images/preview.png" />
			</Head>

			<div className="flex flex-col items-center text-center gap-y-6 mt-8 w-full">
				<h2 className="text-3xl w-full">My Journey</h2>

				<div className="flex flex-col gap-y-4 w-full text-left">
					<p>
						I'm a second-year student at Turku University of Applied Sciences. I'm studying Information and communications technology. I
						like to game, hang out with friends, and program weird and useful things.
					</p>
					<p>
						After I got my first laptop at the age of 10, I started learning how to program with Java being my first language. I got started
						by watching YouTube tutorials. After I felt confident, I began to create my own game, but after a while my interest shifted to
						learning different programming languages.
					</p>
					<p>
						After that, I began to pick up more languages like Python, JavaScript and C++ and created some small projects with them. During
						2020, I got the opportunity put my skills into use by creating a website for a client. At this point the ball of web
						developement started rolling.
					</p>
					<p>
						Now I've mostly been playing around as a fullstack developer with Nuxt or React in the frontend and NestJS or Express.js in the
						backend.
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
