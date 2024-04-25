import Head from "next/head";
import SkillsList from "@/components/Skills/SkillsList";
import Seperator from "@/components/Seperator";
import PrimarySkillList from "@/components/Skills/PrimarySkillList";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-6">
      <Head>
        <title>&lt;Jaro /&gt; Portfolio</title>
        <meta name="description" content="This is my portfolio" key="desc" />
        <meta property="og:image" content="/images/preview.png" />
      </Head>

      <ParticleBackground fullscreen={true} />

      <div className="grid grid-cols-1 grid-rows-1 w-full justify-center items-center place-items-center min-h-[60vh]">
        <div className="flex flex-col w-4/5 gap-y-4 col-start-1 row-start-1">
          <h1 className="flex flex-col gap-y-4 lg:text-7xl text-5xl text-slate-50 font-semibold select-none">
            <p>Hello world!</p>
            <p>
              My name is <span className="gradient-animation">Jaro</span>
            </p>
          </h1>
          <p className="md:text-2xl text-lg">I do cool stuff with computers</p>
        </div>
      </div>

      <Seperator />

      <div className="flex flex-col items-center text-center gap-y-6 w-full px-4">
        <h2 className="text-3xl w-full">About me</h2>

        <div className="flex flex-col gap-y-4 w-full text-left">
          <p>
            I'm a computer wizard who likes to tinkers around with different
            tech. I enjoy programming, building computers, and playing around
            with software.
          </p>
          <p>
            I'm studying Software Engineering at Turku University of Applied
            Sciences. That is just to get the proof that I know my stuff.
          </p>
        </div>
      </div>

      <Seperator />

      <div className="flex flex-col items-center text-center gap-y-6 w-full px-4">
        <h2 className="text-3xl w-full">My Journey</h2>

        <div className="flex flex-col gap-y-4 w-full text-left">
          <p>
            I got into programming at the young age of 10. I started learning
            how to program with Java being my first language. I got started by
            watching YouTube tutorials. After I felt confident, I began to
            create my own game, but after a while my interest shifted to
            learning different programming languages.
          </p>
          <p>
            After that, I began to pick up more languages like Python,
            JavaScript and C++ and created some small projects with them. During
            2020, I got the opportunity put my skills into use by creating a
            website for a client. At this point the ball of web developement
            started rolling.
          </p>
          <p>
            Now I've mostly been playing around as a fullstack developer with
            Nuxt or React in the frontend and NestJS or Express.js in the
            backend.
          </p>
        </div>
      </div>

      <Seperator />

      <div className="flex flex-col items-center text-center gap-y-6">
        <h2 className="text-3xl w-full">My specialty</h2>
        <p>My current main focus is fullstack web development</p>
        <PrimarySkillList />
      </div>

      <Seperator />

      <div className="flex flex-col items-center text-center gap-y-6">
        <h2 className="text-3xl w-full">Everything that I have used</h2>
        <SkillsList />
      </div>
    </main>
  );
}
