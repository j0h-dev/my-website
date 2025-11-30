import { AboutMe } from '@/components/content/about-me'
import { Contact } from '@/components/content/contact'
import { Experiences } from '@/components/content/experiences'
import { HeroSection } from '@/components/content/hero-section'
import { Projects } from '@/components/content/projects'
import { Skills } from '@/components/content/skills'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="space-y-20">
        <AboutMe />
        <Projects />
        <Experiences />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}
