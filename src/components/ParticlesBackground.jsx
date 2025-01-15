// import React from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// const ParticlesBackground = () => {
//   // const particlesInit = async (main) => {
//   //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//   //   await loadFull(main);
//   // };

//   const [ init, setInit ] = useState(false);

//     // this should be run only once per application lifetime
//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//             // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//             // starting from v2 you can add only the features you need reducing the bundle size
//             //await loadAll(engine);
//             await loadFull(engine);
//             // await loadSlim(engine);
//             //await loadBasic(engine);
//         }).then(() => {
//             setInit(true);
//         });
//     }, []);

//     const particlesLoaded = (container) => {
//       console.log(container);
//   };

//   return (
//     { init && <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: {
//           color: {
//             value: "#000000", // Set the background color
//           },
//         },
//         fpsLimit: 60,
//         particles: {
//           color: {
//             value: "#ffffff", // Set the particle color
//           },
//           links: {
//             color: "#ffffff",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 2,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800,
//             },
//             value: 80,
//           },
//           opacity: {
//             value: 0.5,
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             random: true,
//             value: 5,
//           },
//         },
//         detectRetina: true,
//       }}
//     />
// }
// );
// };

// export default ParticlesBackground; 





import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // useEffect(() => {
  //   // const initParticlesEngine = async (engine) => {
  //   //   // Initialize tsParticles instance
  //   //   await loadFull(engine);
  //   // };

  //   initParticlesEngine().then(() => {
  //     setInit(true);
  //   });
  // }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        await loadFull(engine);
        // await loadSlim(engine);
        //await loadBasic(engine);
    }).then(() => {
        setInit(true);
    });
}, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000", // Set the background color
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: "#ffffff", // Set the particle color
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default ParticlesBackground;
