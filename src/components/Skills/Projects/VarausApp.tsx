import Image from "next/image";
import ProjectBox from "../ProjectBox";
import SkillBox from "../SkillBox";
import { Icon } from "@iconify/react";
import { LinkButton } from "@/components/Buttons";

import varausAppImage from "@public/images/varausapp.png";

export default function VarausApp() {
	return (
		<ProjectBox>
			<div className="flex flex-col gap-y-5 items-start justify-center text-left">
				<Image src={varausAppImage} alt="VarausApp" width={800} className="rounded-xl self-start" />

				<div>
					<h3 className="text-3xl">VarausApp</h3>
					<p>Project work at School</p>
					<p>September 2023 - February 2024</p>
					<p>Finished</p>
				</div>

				<p>
					This project was a part of school work. The app is a reservation tool for reserving theFirma office computers, meeting spaces and
					different items.
				</p>
				<p>I did various things including authentication, UI design, backend development, documentation and deployment.</p>

				<div className="flex flex-row gap-2 py-4 flex-wrap">
					<SkillBox>
						<Icon icon="devicon:react" fontSize="1.5em" />
						<span>React</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="skill-icons:mongodb" fontSize="1.5em" />
						<span>MongoDB</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="devicon:nodejs" fontSize="1.5em" />
						<span>NodeJS</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="simple-icons:express" fontSize="1.5em" />
						<span>Express.js</span>
					</SkillBox>

					<SkillBox>
						<Icon icon="simple-icons:chakraui" fontSize="1.5em" />
						<span>Chakra UI</span>
					</SkillBox>
				</div>

				<LinkButton href="https://projector.thefirma.fi:4000" blank>
					Link to the app
				</LinkButton>
			</div>
		</ProjectBox>
	);
}
