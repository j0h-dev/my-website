'use client'

import type { ISourceOptions } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'
import { loadFull } from 'tsparticles'
import { cn } from '@/lib/utils'

type ParticleBackgroundProps = {
  className?: string
  fullscreen?: boolean
}
export function ParticleBackground({
  className,
  fullscreen = false,
}: ParticleBackgroundProps) {
  const { theme } = useTheme()
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
        enable: fullscreen,
        zIndex: -100,
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: theme === 'dark' ? '#fff' : '#000',
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
          speed: 1,
          straight: false,
        },
        links: {
          color: theme === 'dark' ? '#fff' : '#000',
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        collisions: {
          enable: true,
        },
      },
      detectRetina: true,
    }),
    [fullscreen, theme],
  )

  if (!init) {
    return null
  }

  return (
    <Particles
      className={cn('-z-100', className)}
      id="tsparticles"
      options={options}
    />
  )
}
