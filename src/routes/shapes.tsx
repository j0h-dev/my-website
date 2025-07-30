import { createFileRoute } from '@tanstack/react-router'
import type { ISourceOptions } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useMemo, useState } from 'react'
import { loadFull } from 'tsparticles'

export const Route = createFileRoute('/shapes')({
  component: RouteComponent,
})

function RouteComponent() {
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -100,
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#fff',
        },
        shape: {
          type: '',
          fill: false,
        },
        size: {
          value: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 0,
          straight: false,
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        collisions: {
          enable: false,
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (!init) {
    return null
  }

  return <Particles className="-z-100" id="tsparticles" options={options} />
}
