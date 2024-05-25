import Image from "next/image";
import ProjectBox from "../Skills/ProjectBox";
import SkillBox from "../Skills/SkillBox";
import { Icon } from "@iconify/react";
import { LinkButton } from "@/components/Buttons";

import ytdlpwebappImage from "@public/images/ytdlpwebappImage.png";

export default function YTDLPWebApp() {
  return (
    <ProjectBox>
      <div className="flex flex-col gap-y-5 items-start justify-center text-left">
        <Image
          src={ytdlpwebappImage}
          alt="YT-DLP WebApp"
          width={800}
          className="rounded-xl self-start"
        />

        <div>
          <h3 className="text-3xl">YT-DLP WebApp</h3>
          <p>Github Project</p>
        </div>

        <p>Web app created in React and Go to serve as a web UI for yt-dlp</p>
        <p>Created simplicity in mind.</p>
        <p>Download as a video or only the audio</p>

        <div className="flex flex-row gap-2 py-4 flex-wrap">
          <SkillBox>
            <Icon icon="devicon:react" fontSize="1.5em" />
            <span>React</span>
          </SkillBox>

          <SkillBox>
            <Icon icon="mdi:youtube" fontSize="1.5em" />
            <span>yt-dlp</span>
          </SkillBox>

          <SkillBox>
            <Icon icon="logos:go" fontSize="1.5em" />
          </SkillBox>

          <SkillBox>
            <Icon icon="tabler:glass-gin" fontSize="1.5em" />
            <span>Gin-Gonic</span>
          </SkillBox>
        </div>

        <LinkButton href="https://github.com/ItsOnlyGame/yt-dlp-webapp" blank>
          Source Code
        </LinkButton>
      </div>
    </ProjectBox>
  );
}
