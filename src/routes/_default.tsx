import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ParticleBackground } from '@/components/particle-background'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_default')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-screen flex-col justify-start">
      <Header />

      <ParticleBackground fullscreen={true} />

      <div className="flex grow flex-col items-center px-6">
        <div className="h-full w-full max-w-5xl grow py-4">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}
