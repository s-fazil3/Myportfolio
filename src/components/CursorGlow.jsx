import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            animate={{
                x: mousePosition.x - 200,
                y: mousePosition.y - 200,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(184, 134, 11, 0.08) 0%, rgba(0,0,0,0) 60%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'multiply'
            }}
        />
    );
};

export default CursorGlow;
