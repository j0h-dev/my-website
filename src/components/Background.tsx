import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type ISourceOptions } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'

export default function Background({ className }: { className: string }) {
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
			fullScreen: false,
			fpsLimit: 120,
			particles: {
				number: {
					value: 80,
				},
				color: {
					value: '#fff', // Particle color
				},
				shape: {
					type: 'circle', // Particle shape
				},
				size: {
					value: { min: 1, max: 4 }, // Particle size
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
					color: '#ffffff',
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				collisions: {
					enable: true,
				},
			},
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: 'push',
					},
					onHover: {
						enable: true,
						mode: 'repulse',
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 120,
						duration: 1,
					},
				},
			},
			detectRetina: true,
		}),
		[]
	)

	if (init) {
		return <Particles className={`background-gradient-animation ${className}`} id="tsparticles" options={options} />
	}

	return <></>
}
