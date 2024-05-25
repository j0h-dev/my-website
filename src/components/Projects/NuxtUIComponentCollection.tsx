import Image from "next/image";
import ProjectBox from "../ProjectBox";
import { LinkButton } from "@/components/Buttons";

export default function NuxtUIComponentCollection() {
	return (
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
					I found out about WindUI, which is for React and gave the source code to different components. I enjoyed the experience of having
					full control of the components and the freedom that it gave me.
				</p>
				<p>Now I just want the same experience in Nuxt.</p>
				<p>As of 22/01/2024 there are around 18 components.</p>

				<LinkButton href="https://github.com/ItsOnlyGame/nuxt-ui-components" blank>
					Here is the github repo
				</LinkButton>
			</div>
		</ProjectBox>
	);
}
