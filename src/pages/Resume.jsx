import { motion } from "framer-motion";
import { FaFileSignature } from "react-icons/fa";
import AnimatedText from "../components/AnimatedText";
import resumePdf from "../assets/resume.pdf";

const Resume = () => {
    return (
        <section id="resume" className="container flex-center" style={{ flexDirection: 'column' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="aesthetic-card flex-center"
                style={{ width: '100%', maxWidth: '800px', padding: '80px 40px', flexDirection: 'column', textAlign: 'center' }}
            >
                <motion.div
                    whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '5rem', marginBottom: '20px', color: 'var(--text-primary)' }}
                >
                    <FaFileSignature />
                </motion.div>

                <AnimatedText
                    text="CURRICULUM VITAE"
                    style={{ fontSize: '3rem', marginBottom: '15px', fontFamily: 'Space Grotesk', letterSpacing: '4px' }}
                />

                <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem', fontStyle: 'italic', fontFamily: 'Space Mono', maxWidth: '500px', lineHeight: 1.6 }}>
                    A formal documentation of my professional history, infrastructure achievements, and technical capabilities.
                </p>

                <a
                    href={resumePdf}
                    download="Fazil_S_Resume.pdf"
                    className="btn-aesthetic"
                >
                    Procure Document
                </a>
            </motion.div>
        </section>
    );
};

export default Resume;
