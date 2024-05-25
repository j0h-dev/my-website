import { Icon } from "@iconify/react";
import SkillBox from "./SkillBox";

export default function PrimarySkillList() {
  return (
    <div className="flex flex-wrap flex-row gap-3 w-4/5 items-center justify-center">
      <SkillBox>
        <Icon icon="mdi:github" fontSize="1.5em" />
        <span>Github</span>
      </SkillBox>

      <SkillBox>
        <Icon icon="skill-icons:docker" fontSize="1.5em" />
        <span>Docker</span>
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
        <Icon icon="skill-icons:nuxtjs-dark" fontSize="1.5em" />
        <span>Nuxt</span>
      </SkillBox>

      <SkillBox>
        <Icon icon="logos:mysql" fontSize="1.5em" />
        <span>MySQL</span>
      </SkillBox>

      <SkillBox>
        <Icon icon="devicon:nodejs" fontSize="1.5em" />
        <span>NodeJS</span>
      </SkillBox>

      <SkillBox>
        <Icon icon="skill-icons:nextjs-light" fontSize="1.5em" />
        <span>NextJS</span>
      </SkillBox>

      <SkillBox>
        <Icon icon="devicon:react" fontSize="1.5em" />
        <span>React</span>
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
        <Icon icon="ri:seo-fill" fontSize="1.5em" />
        <span>SEO</span>
      </SkillBox>

      <SkillBox>
        <Icon icon="simple-icons:express" fontSize="1.5em" />
        <span>Express</span>
      </SkillBox>

      <SkillBox>
        <Icon icon="simple-icons:nestjs" fontSize="1.5em" />
        <span>NestJS</span>
      </SkillBox>
    </div>
  );
}
