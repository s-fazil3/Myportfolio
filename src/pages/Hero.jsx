import { motion } from "framer-motion";
import { FaCodeBranch } from "react-icons/fa";
import AnimatedText from "../components/AnimatedText";
import resumePdf from "../assets/resume.pdf";

const Hero = () => {
    return (
        <section id="home" className="container" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', paddingTop: '100px' }}>
            <div style={{ flex: 1, zIndex: 10 }}>

                <AnimatedText
                    text="Digital Solutions Architect"
                    className="text-italics"
                    style={{ fontSize: '1rem', color: 'var(--accent-color)', marginBottom: '10px' }}
                    useAnimate={true}
                />

                <div style={{ overflow: 'hidden', marginBottom: '15px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 50, rotate: 2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 20 }}
                        style={{ fontSize: '4.5rem', lineHeight: 1.1, color: 'var(--text-primary)', fontFamily: 'Space Grotesk', letterSpacing: '-3px' }}
                    >
                        FAZIL S<span className="text-accent" style={{ fontSize: '4.5rem' }}>.</span>
                    </motion.h1>
                </div>

                <AnimatedText
                    text="FULL STACK DEVELOPER"
                    style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontFamily: 'Space Grotesk', letterSpacing: '1px', marginBottom: '30px' }}
                    delayOffset={5}
                    useAnimate={true}
                />

                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.4 }}
                    style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '550px', marginBottom: '40px', lineHeight: 1.6, fontFamily: 'Inter' }}
                >
                    Precision, logic, and relentless execution. I forge robust backend systems and craft seamlessly tailored web applications that operate flawlessly.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.5 }}
                    style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
                >
                    <a href="#projects" className="btn-aesthetic">
                        Examine Work
                    </a>
                    <a href={resumePdf} download="Fazil_S_Resume.pdf" className="btn-aesthetic" style={{ borderColor: 'var(--accent-color)', background: 'var(--bg-secondary)' }}>
                        Download CV
                    </a>
                    <a href="#contact" className="btn-aesthetic" style={{ borderColor: 'var(--border-hover)' }}>
                        Contact
                    </a>
                </motion.div>
            </div>

            <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.3 }}
                    className="aesthetic-card"
                    style={{
                        width: '340px',
                        height: '420px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '40px',
                        backgroundColor: 'var(--bg-surface)',
                    }}
                >
                    {/* Infrastructure Animation Container */}
                    <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>

                        {/* Orbiting Particles */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    border: '1px dashed var(--border-color)',
                                    borderRadius: '50%',
                                }}
                            >
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        top: '-4px',
                                        left: '50%',
                                        width: '8px',
                                        height: '8px',
                                        background: 'var(--accent-color)',
                                        borderRadius: '50%',
                                        boxShadow: '0 0 10px var(--accent-color)'
                                    }}
                                />
                            </motion.div>
                        ))}

                        {/* Central Pulsing Icon */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            style={{ padding: '35px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '2px solid var(--text-primary)', zIndex: 10 }}
                        >
                            <FaCodeBranch style={{ fontSize: '60px', color: 'var(--text-primary)' }} />
                        </motion.div>

                        <motion.div
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                left: 0,
                                width: '100%',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, var(--accent-color), transparent)',
                                opacity: 0.4,
                                zIndex: 5
                            }}
                        />
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ fontSize: '0.8rem', fontFamily: 'Space Mono', color: 'var(--accent-color)', marginTop: '8px', letterSpacing: '1px' }}
                        >
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.8 }}
            >
                <a href="#about" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, fontFamily: 'Space Grotesk' }}>Descend</span>
                    <div style={{ width: '2px', height: '60px', background: 'var(--accent-color)' }} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
