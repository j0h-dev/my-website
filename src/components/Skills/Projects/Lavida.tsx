import Image from "next/image";
import ProjectBox from "../ProjectBox";
import SkillBox from "../SkillBox";
import { Icon } from "@iconify/react";
import { LinkButton } from "@/components/Buttons";

import lavidaPreviewImage from "@public/images/lavida-website-preview.webp";

export default function Lavida() {
	return (
		<ProjectBox>
			<Image src={lavidaPreviewImage} alt="Screenshot of liikuntapistelavida.com" width={320} className="rounded-xl" />
			<div className="flex flex-col gap-y-5 items-start justify-center text-left">
				<div>
					<h3 className="text-3xl">Liikuntapiste La Vida's website</h3>
					<p>Freelance work</p>
					<p>May 2020 - Present</p>
				</div>

				<p>
					I was commisioned to create a website for a business named Liikuntapiste La Vida. The business offers a gym, spa treatment, group
					exercise and other exercise related services.
				</p>
				<p>
					The frontend has had multiple iterations in multiple different JavaScript frameworks like Vue.js, Next.js, Svelte-kit and finally
					Nuxt.
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

				<div className="flex flex-row gap-2 py-4 flex-wrap">
					<SkillBox>
						<Icon icon="skill-icons:nuxtjs-dark" fontSize="1.5em" />
						<span>Nuxt</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="skill-icons:docker" fontSize="1.5em" />
						<span>Docker</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="devicon:nodejs" fontSize="1.5em" />
						<span>NodeJS</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="logos:linode" fontSize="1.5em" />
						<span>Linode</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="skill-icons:tailwindcss-dark" fontSize="1.5em" />
						<span>Tailwind</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="skill-icons:prisma" fontSize="1.5em" />
						<span>Prisma ORM</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="logos:stripe" fontSize="1.5em" />
					</SkillBox>

					<SkillBox>
						<Icon icon="logos:mysql" fontSize="1.5em" />
						<span>MySQL</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="ri:seo-fill" fontSize="1.5em" />
						<span>SEO</span>
					</SkillBox>
				</div>

				<LinkButton href="https://liikuntapistelavida.com" blank>
					Here is the site
				</LinkButton>
			</div>
		</ProjectBox>
	);
}
