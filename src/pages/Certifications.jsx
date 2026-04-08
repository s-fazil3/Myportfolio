import { CERTIFICATES } from "../utils/constants";
import { motion } from "framer-motion";
import { FaExternalLinkSquareAlt, FaStamp } from "react-icons/fa";
import AnimatedText from "../components/AnimatedText";

const Certifications = () => {
    return (
        <section id="certifications" className="container">
            <div className="section-header-container">
                <AnimatedText
                    text="CERTIFICATIONS"
                    className="section-title"
                />
                <motion.p
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="section-definition"
                >
                    Official endorsements of proficiency and technical mastery.
                </motion.p>
            </div>

            <div className="grid-layout">
                {CERTIFICATES.map((cert, idx) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 70, damping: 15, delay: idx * 0.1 }}
                        className="aesthetic-card"
                        style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}
                    >
                        <motion.div
                            style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.1 }}
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaStamp size={60} color="var(--accent-color)" />
                        </motion.div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                            <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'Space Mono', fontStyle: 'italic', fontWeight: 600 }}>{cert.date}</span>
                            <span style={{ fontSize: '0.8rem', border: '1px solid var(--text-primary)', padding: '4px 10px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, fontFamily: 'Space Grotesk' }}>{cert.issuer}</span>
                        </div>

                        <h3 style={{ fontSize: '1.6rem', margin: '0 0 25px 0', lineHeight: 1.4, flex: 1, fontFamily: 'Space Grotesk', position: 'relative', zIndex: 1, letterSpacing: '0px' }}>{cert.title}</h3>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <a href={cert.link} target="_blank" rel="noreferrer" className="btn-aesthetic">
                                Inspect <FaExternalLinkSquareAlt size={14} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
