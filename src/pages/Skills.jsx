import { SKILLS } from "../utils/constants";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const Skills = () => {
    return (
        <section id="skills" className="container">
            <div className="section-header-container">
                <AnimatedText
                    text="TECHNICAL ARSENAL"
                    className="section-title"
                />
                <motion.p
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="section-definition"
                >
                    The tools, languages, and core concepts utilized in my daily operations.
                </motion.p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                {SKILLS.map((skillGroup, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'var(--text-primary)', fontFamily: 'Space Grotesk', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '2px dashed var(--accent-faint)', paddingBottom: '10px' }}>
                            {skillGroup.category}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                            {skillGroup.items.map((skill, i) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", stiffness: 80, damping: 15, delay: i * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        style={{
                                            padding: '15px 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            background: 'var(--bg-surface)',
                                            border: '1px solid var(--border-color)',
                                            boxShadow: '3px 3px 0 0 var(--border-color)',
                                            cursor: 'crosshair',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        <Icon style={{ fontSize: '1.8rem', color: 'var(--accent-color)' }} />
                                        <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'Space Grotesk' }}>{skill.name}</span>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
