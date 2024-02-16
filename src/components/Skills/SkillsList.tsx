import { Icon } from '@iconify/react'
import SkillBox from './SkillBox'

export default function SkillsList() {
	return (
		<div className="flex flex-wrap flex-row gap-3 w-4/5 items-center justify-center">
			<SkillBox>
				<Icon icon="logos:java" fontSize="1.5em" />
				<span>Java</span>
			</SkillBox>

			<SkillBox>
				<Icon icon="devicon:kotlin" fontSize="1.5em" />
				<span>Kotlin</span>
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
				<Icon icon="devicon:nodejs" fontSize="1.5em" />
				<span>NodeJS</span>
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

			<SkillBox>
				<Icon icon="skill-icons:prisma" fontSize="1.5em" />
				<span>Prisma ORM</span>
			</SkillBox>
		</div>
	)
}
