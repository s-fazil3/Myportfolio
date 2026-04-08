import { PROJECTS } from "../utils/constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedText from "../components/AnimatedText";

const Projects = () => {
    return (
        <section id="projects" className="container">
            <div className="section-header-container">
                <AnimatedText
                    text="PROJECTS"
                    className="section-title"
                />
                <motion.p
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="section-definition"
                >
                    A curated exhibition of engineered solutions and full-stack architectures.
                </motion.p>
            </div>

            <div className="grid-layout">
                {PROJECTS.map((project, idx) => {
                    const Logo = project.logo;
                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50, rotate: idx % 2 === 0 ? -1 : 1 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ type: "spring", stiffness: 60, damping: 20, delay: idx * 0.1 }}
                            className="aesthetic-card"
                            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
                                <motion.div
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    style={{ width: '60px', height: '60px', flexShrink: 0, background: 'var(--bg-secondary)', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--border-color)' }}
                                >
                                    <Logo style={{ fontSize: '30px', color: 'var(--text-primary)' }} />
                                </motion.div>
                                <h3 style={{ fontSize: '1.6rem', fontFamily: 'Space Grotesk' }}>{project.title}</h3>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1, fontSize: '0.95rem' }}>{project.description}</p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {project.tech.map(tech => (
                                    <span key={tech} style={{ fontSize: '0.75rem', padding: '5px 10px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontFamily: 'Space Mono', fontWeight: 600, textTransform: 'uppercase' }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '15px', paddingTop: '20px', marginTop: 'auto', borderTop: '1px dashed var(--border-color)' }}>
                                <a href={project.github} target="_blank" rel="noreferrer" className="btn-aesthetic" style={{ padding: '10px 18px', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}>
                                    <FaGithub /> Examine Source Code
                                </a>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
