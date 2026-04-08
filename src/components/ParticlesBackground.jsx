import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: { value: "transparent" } },
                fpsLimit: 120, // super smooth
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                        onClick: { enable: true, mode: "push" },
                        resize: true,
                    },
                    modes: {
                        grab: { distance: 200, links: { opacity: 0.6 } },
                        push: { quantity: 3 },
                    },
                },
                particles: {
                    color: { value: "#B8860B" },
                    links: {
                        color: "#B8860B",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1.5,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: true,
                        speed: 0.8,
                        straight: false,
                    },
                    number: { density: { enable: true, area: 1000 }, value: 60 },
                    opacity: {
                        value: 0.3,
                        animation: { enable: true, speed: 0.5, minimumValue: 0.1 }
                    },
                    shape: { type: "circle" },
                    size: {
                        value: { min: 1, max: 4 },
                        animation: { enable: true, speed: 2, minimumValue: 0.1 }
                    },
                },
                detectRetina: true,
            }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none' // Don't block clicking
            }}
        />
    );
};

export default ParticlesBackground;
