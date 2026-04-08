import { SOCIAL_LINKS } from "../utils/constants";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--border-color)', padding: '60px 20px', textAlign: 'center', backgroundColor: 'var(--bg-secondary)', marginTop: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' }}>
                {SOCIAL_LINKS.map((link) => {
                    const Icon = link.icon;
                    return (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -8, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{
                                color: 'var(--text-primary)',
                                fontSize: '2rem',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                        >
                            <Icon />
                        </motion.a>
                    );
                })}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'Space Grotesk', textTransform: 'uppercase', letterSpacing: '2px' }}>
                © {new Date().getFullYear()} FAZIL S. — ALL RIGHTS RESERVED.
            </p>
        </footer>
    );
};

export default Footer;
