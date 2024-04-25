import Link from "next/link";
import Head from "next/head";
import SkillsList from "@/components/Skills/SkillsList";
import Seperator from "@/components/Seperator";
import ProjectsList from "@/components/Skills/ProjectsList";
import DefaultLayout from "@/components/Layout";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-6">
      <Head>
        <title>&lt;Jaro /&gt; Portfolio</title>
        <meta name="description" content="This is my portfolio" key="desc" />
        <meta property="og:image" content="/images/preview.png" />
      </Head>

      <div className="flex flex-col items-center text-center w-full mt-12">
        <h2 className="text-3xl">Projects that I have worked with</h2>
        <ProjectsList />

        <div className="w-full">
          <Link
            href="https://github.com/ItsOnlyGame"
            target="_blank"
            className="underline"
          >
            You should check my Github for more projects ;)
          </Link>
        </div>
      </div>
    </main>
  );
}
