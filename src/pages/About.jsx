import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const About = () => {
    return (
        <section id="about" className="container">
            <div className="section-header-container">
                <AnimatedText
                    text="ABOUT ME"
                    className="section-title"
                />
                <motion.p
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="section-definition"
                >
                    A brief history of my foundation and academic heritage.
                </motion.p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

                {/* Education Section */}
                <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '40px', borderBottom: '1px dashed var(--border-color)', paddingBottom: '15px', color: 'var(--text-primary)' }}>
                        Academic Foundation
                    </h3>

                    <div className="grid-layout" style={{ gap: '30px' }}>
                        {[
                            { title: "B.E. ECE", secondary: "Sri Eshwar College of Engineering", meta: "CGPA: 7.83", year: "2023 - 2027" },
                            { title: "HSC", secondary: "Rajalakshmi Gengusamy Matric Hr Sec School", meta: "90.71%", year: "2021 - 2023" },
                            { title: "SSLC", secondary: "Rajalakshmi Gengusamy Matric Hr Sec School", meta: "Pass", year: "2020 - 2021" }
                        ].map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ type: "spring", stiffness: 70, damping: 15, delay: idx * 0.1 }}
                                className="aesthetic-card"
                                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                            >
                                <div>
                                    <h4 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', color: 'var(--text-primary)', marginBottom: '10px' }}>{edu.title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontFamily: 'Inter', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '20px' }}>{edu.secondary}</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                                    <span style={{ fontFamily: 'Space Mono', fontStyle: 'italic', fontSize: '1rem', color: 'var(--accent-color)' }}>{edu.meta}</span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 600, fontFamily: 'Space Grotesk', background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '4px 10px' }}>{edu.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section >
    );
};

export default About;
