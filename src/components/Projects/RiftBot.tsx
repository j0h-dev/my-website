import ProjectBox from "../Skills/ProjectBox";
import SkillBox from "../Skills/SkillBox";
import { Icon } from "@iconify/react";
import { LinkButton } from "@/components/Buttons";

export default function RiftBot() {
  return (
    <ProjectBox>
      <div className="flex flex-col gap-y-5 items-start justify-center text-left">
        <div>
          <h3 className="text-3xl">Rift</h3>
          <p>Github Project</p>
        </div>

        <div>
          <p>Rift is a discord bot made with Java. </p>
          <p>
            It's main purpose is to play music through YouTube or SoundCloud.
          </p>
          <p>
            One of it's unique features is that it can translates Spotify Links
            to YouTube Videos.
          </p>
        </div>

        <div className="flex flex-row gap-2 py-4 flex-wrap">
          <SkillBox>
            <Icon icon="logos:java" fontSize="1.5em" />
            <span>Java</span>
          </SkillBox>

          <SkillBox>
            <Icon icon="ic:baseline-discord" fontSize="1.5em" />
            <span>Discord API</span>
          </SkillBox>

          <SkillBox>
            <Icon icon="mdi:spotify" fontSize="1.5em" />
            <span>Spotify API</span>
          </SkillBox>
        </div>

        <LinkButton href="https://github.com/ItsOnlyGame/Rift" blank>
          Just a link to a repo
        </LinkButton>
      </div>
    </ProjectBox>
  );
}
