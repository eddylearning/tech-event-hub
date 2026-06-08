// import { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// const ParticlesBackground = () => {
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setIsReady(true);
//     });
//   }, []);

//   const options = {
//     background: { color: { value: "transparent" } },
//     fullScreen: { enable: true, zIndex: 0 },
//     fpsLimit: 120,
//     interactivity: {
//       events: {
//         onClick: { enable: true, mode: "push" },
//         onHover: { enable: true, mode: "repulse" },
//       },
//       modes: {
//         push: { quantity: 4 },
//         repulse: { distance: 200, duration: 0.4 },
//       },
//     },
//     particles: {
//       color: { value: ["#00d2ff", "#ff0055"] },
//       links: {
//         color: "#ffffff",
//         distance: 150,
//         enable: true,
//         opacity: 0.2,
//         width: 1,
//       },
//       move: {
//         direction: "none",
//         enable: true,
//         outModes: { default: "bounce" },
//         random: false,
//         speed: 1,
//         straight: false,
//       },
//       number: { density: { enable: true, area: 800 }, value: 80 },
//       opacity: { value: 0.5 },
//       shape: { type: "circle" },
//       size: { value: { min: 1, max: 3 } },
//     },
//     detectRetina: true,
//   };

//   if (!isReady) {
//     return null;
//   }

//   return <Particles id="tsparticles" options={options} />;
// };

// export default ParticlesBackground;


import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const [isReady, setIsReady] = useState(false);

  // Initialize tsParticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  // Memoize options so they are NOT recreated on every render
  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },

      // Better performance
      fpsLimit: 45,

      fullScreen: {
        enable: true,
        zIndex: 0,
      },

      detectRetina: true,

      interactivity: {
        events: {
          onClick: {
            enable: false,
          },

          onHover: {
            enable: true,
            mode: "repulse",
          },

          resize: true,
        },

        modes: {
          repulse: {
            distance: 120,
            duration: 0.4,
          },
        },
      },

      particles: {
        color: {
          value: ["#00d2ff", "#ff0055"],
        },

        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },

        collisions: {
          enable: false,
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

        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },

        opacity: {
          value: 0.4,
        },

        shape: {
          type: "circle",
        },

        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
      },
    }),
    []
  );

  // Prevent rendering before engine is ready
  if (!isReady) {
    return null;
  }

  return <Particles id="tsparticles" options={particlesOptions} />;
};

export default ParticlesBackground;