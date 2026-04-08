import { CODING_PROFILES } from "../utils/constants";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const CodingProfiles = () => {
    return (
        <section id="profiles" className="container">
            <div className="section-header-container">
                <AnimatedText
                    text="CODING PROFILES"
                    className="section-title"
                />
                <motion.p
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="section-definition"
                >
                    Analytics and standing across global problem-solving syndicates.
                </motion.p>
            </div>

            <div className="grid-layout">
                {CODING_PROFILES.map((profile, i) => {
                    const Icon = profile.icon;
                    return (
                        <motion.a
                            href={profile.link}
                            target="_blank"
                            rel="noreferrer"
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ type: "spring", stiffness: 60, damping: 15, delay: i * 0.1 }}
                            className="aesthetic-card flex-center"
                            style={{ flexDirection: 'column', gap: '20px', padding: '40px 30px', textAlign: 'center', textDecoration: 'none' }}
                        >
                            <div style={{ color: 'var(--text-primary)', padding: '20px', border: '1px solid var(--border-color)', borderRadius: '50%', background: 'var(--bg-secondary)', boxShadow: '4px 4px 0 0 var(--border-color)' }}>
                                <Icon style={{ fontSize: '3rem' }} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', margin: '0', fontFamily: 'Space Grotesk' }}>{profile.platform}</h3>
                                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontFamily: 'Space Mono', fontSize: '1rem', marginTop: '5px' }}>@{profile.username}</p>
                            </div>
                            <div style={{ borderTop: '1px solid var(--text-primary)', borderBottom: '1px solid var(--text-primary)', padding: '10px 0', color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.9rem', width: '100%', fontFamily: 'Inter', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                {profile.stats}
                            </div>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
};

export default CodingProfiles;
