import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function ParticleBackground({
  className,
  fullscreen = false,
}: {
  className?: string;
  fullscreen?: boolean;
}) {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: fullscreen,
      fpsLimit: 120,
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: "#fff",
        },
        shape: {
          type: "",
          fill: false,
        },
        size: {
          value: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        collisions: {
          enable: true,
        },
      },
      detectRetina: true,
    }),
    [fullscreen]
  );

  if (init) {
    return (
      <Particles
        className={`${fullscreen ? "-z-10" : ""} ${className}`}
        id="tsparticles"
        options={options}
      />
    );
  }

  return <></>;
}
