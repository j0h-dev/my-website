import Link from "next/link";
import Head from "next/head";
import SkillsList from "@/components/Skills/SkillsList";
import Seperator from "@/components/Seperator";
import ProjectsList from "@/components/Skills/ProjectsList";
import DefaultLayout from "@/components/Layout";
import { Icon } from "@iconify/react";
import { LinkButton } from "@/components/Buttons";
import ParticleBackground from "@/components/ParticleBackground";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-6">
      <Head>
        <title>&lt;Jaro /&gt; Portfolio</title>
        <meta name="description" content="This is my portfolio" key="desc" />
        <meta property="og:image" content="/images/preview.png" />
      </Head>

      <ParticleBackground fullscreen={true} />

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl w-full">Interested in chatting?</h2>

        <p>You can in contact with me through LinkedIn</p>

        <LinkButton href="https://www.linkedin.com/in/jaroheinonen/" blank>
          <Icon icon="mdi:linkedin" fontSize="1.75em" />
          <p className="underline">Jaro Heinonen</p>
        </LinkButton>
      </div>
    </main>
  );
}
