import { Seperator } from '@/components/seperator'
import { SkillList } from '@/components/skill-list'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'
import { createFileRoute } from '@tanstack/react-router'

import { Cataclysm } from '@/components/projects/cataclysm'
import { Lavida } from '@/components/projects/lavida'
import { MySpotifyPlaylistSorter } from '@/components/projects/my-spotifyplaylist-sorter'
import { NuxtUIComponentCollection } from '@/components/projects/nuxt-ui-component-collection'
import { RiftBot } from '@/components/projects/rift-bot'
import { VarausApp } from '@/components/projects/varaus-app'
import { YTDLPWebApp } from '@/components/projects/ytdlp-web-app'

export const Route = createFileRoute('/_default/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex flex-col gap-12">
      <HeroSection />

      <Seperator />

      <Skills />

      <Seperator />

      <Projects />

      <Seperator />

      <Contact />
    </div>
  )
}

function HeroSection() {
  return (
    <div className="flex h-full min-h-[60vh] flex-col items-start justify-center gap-4">
      <h1 className="flex flex-col gap-y-4 text-5xl font-semibold text-slate-50 select-none lg:text-7xl">
        <p>Hello world!</p>
        <p>
          My name is <span className="gradient-animation">Jaro</span>
        </p>
      </h1>
      <p className="text-lg md:text-2xl">I do cool stuff with computers</p>
    </div>
  )
}

function Skills() {
  return (
    <div id="skills" className="flex flex-col items-center gap-8">
      <h2 className="text-3xl">My main skill set</h2>
      <SkillList />
    </div>
  )
}

function Projects() {
  return (
    <div id="projects">
      <h2 className="text-3xl">Projects</h2>

      <div className="flex w-full flex-col divide-y">
        <Cataclysm />
        <Lavida />
        <NuxtUIComponentCollection />
        <MySpotifyPlaylistSorter />
        <VarausApp />
        <RiftBot />
        <YTDLPWebApp />
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="flex h-full min-h-[30vh] flex-col items-center justify-center gap-2">
      <h2 className="text-3xl">Interested in chatting?</h2>

      <p>You can in contact with me through LinkedIn</p>

      <a href="https://www.linkedin.com/in/jaroheinonen/" target="_blank">
        <Button variant="link">
          <Icon icon="mdi:linkedin" fontSize="1.75em" />
          <p className="underline">Jaro Heinonen</p>
        </Button>
      </a>
    </div>
  )
}
