import Particles from "react-tsparticles";

function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "transparent"
          }
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: "#38bdf8"
          },

          links: {
            color: "#38bdf8",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1
          },

          move: {
            enable: true,
            speed: 1
          },

          number: {
            value: 60
          },

          opacity: {
            value: 0.3
          },

          size: {
            value: 3
          }
        }
      }}
    />
  );
}

export default ParticlesBackground;