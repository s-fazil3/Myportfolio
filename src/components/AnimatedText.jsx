import { motion } from "framer-motion";

// Helper component for super smooth staggered text reveals
const AnimatedText = ({ text, className, style, delayOffset = 0, once = true, useAnimate = false }) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delayOffset * 0.1 },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 80,
            },
        },
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.9,
            filter: "blur(8px)",
        },
    };

    return (
        <motion.div
            style={{ display: "flex", flexWrap: "wrap", ...style }}
            variants={container}
            initial="hidden"
            {...(useAnimate ? { animate: "visible" } : { whileInView: "visible", viewport: { once: once, amount: 0.2 } })}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em", display: "inline-block" }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedText;
