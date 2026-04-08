import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const Experience = () => {
    return (
        <section id="experience" className="container">
            <div className="section-header-container">
                <AnimatedText
                    text="EXPERIENCE"
                    className="section-title"
                />
                <motion.p
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="section-definition"
                >
                    A chronological log of my professional tenure and industrial contributions.
                </motion.p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                    className="aesthetic-card"
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                        <h4 style={{ fontSize: '1.8rem', fontFamily: 'Space Grotesk', letterSpacing: '-1px' }}>RAMPEX <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontFamily: 'Space Mono', fontStyle: 'italic', fontSize: '1.1rem', letterSpacing: 'normal' }}>— Full Stack Intern</span></h4>
                        <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: 'var(--accent-color)', fontSize: '1rem', border: '1px solid var(--accent-color)', padding: '6px 15px', alignSelf: 'center' }}>2025</div>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                        Built and optimized full-stack applications using Java, Spring Boot, and SQL for robust backend development. Collaborated via GitHub in agile teams to ensure efficient version control and code quality. Implemented scalable APIs and improved automation workflows to enhance overall application performance.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
                    className="aesthetic-card"
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                        <h4 style={{ fontSize: '1.8rem', fontFamily: 'Space Grotesk', letterSpacing: '-1px' }}>RAMPEX <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontFamily: 'Space Mono', fontStyle: 'italic', fontSize: '1.1rem', letterSpacing: 'normal' }}>— MERN Stack Intern</span></h4>
                        <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: 'var(--accent-color)', fontSize: '1rem', border: '1px solid var(--accent-color)', padding: '6px 15px', alignSelf: 'center' }}>2024</div>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                        Developed scalable web applications using React.js with modular components and seamless user interactions. Integrated backend systems using Node.js and MongoDB, while collaborating via GitHub for efficient version control and agile workflows.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
