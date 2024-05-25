import Image from "next/image";
import { Icon } from "@iconify/react";
import { LinkButton } from "@/components/Buttons";

import lavidaPreviewImage from "@public/images/lavida-website-preview.webp";
import ProjectBox from "../Skills/ProjectBox";
import SkillBox from "../Skills/SkillBox";

export default function Cataclysm() {
  return (
    <ProjectBox>
      <div className="flex flex-col gap-y-5 items-start justify-center text-left">
        <div>
          <h3 className="text-3xl">Cataclysm</h3>
          <p>theFIRMA / Internship</p>
          <p>May 2024 - Present</p>
        </div>

        <p>Cataclysm is the name for theFIRMA's internal backend.</p>
        <p>
          The backend is a unified backend for most internal applications in
          theFirma.
        </p>

        <div className="flex flex-col gap-2">
          <p>
            Currenly it handles 3 applications; VarausApp, Working Hours App,
            and Project Gate 2.0
          </p>
          <ul className="list-disc list-outside ml-4">
            <li>
              VarausApp is for reserving computers, items, or meeting spaces at
              the office.
            </li>
            <li>Working Hours App is for marking your work hours.</li>
            <li>
              Project Gates 2.0 is the hub for the people working at theFirma.
              It has everything related to projects, documentation, and more.
              This is also the place where you apply for projects and do
              self/peer-assessments.
            </li>
          </ul>
        </div>

        <div className="flex flex-row gap-2 py-4 flex-wrap">
          <SkillBox>
            <Icon icon="devicon:nodejs" fontSize="1.5em" />
            <span>NodeJS</span>
          </SkillBox>

          <SkillBox>
            <Icon icon="devicon:typescript" fontSize="1.5em" />
            <span>TypeScript</span>
          </SkillBox>

          <SkillBox>
            <Icon icon="simple-icons:express" fontSize="1.5em" />
            <span>Express</span>
          </SkillBox>

          <SkillBox>
            <Icon icon="logos:mysql" fontSize="1.5em" />
            <span>MySQL</span>
          </SkillBox>

          <SkillBox>
            <Icon icon="simple-icons:jest" fontSize="1.5em" />
            <span>Jest</span>
          </SkillBox>

          <SkillBox>
            <Icon icon="skill-icons:prisma" fontSize="1.5em" />
            <span>Prisma ORM</span>
          </SkillBox>
        </div>
      </div>
    </ProjectBox>
  );
}
