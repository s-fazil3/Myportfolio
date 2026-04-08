import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Certifications", href: "#certifications" },
        { name: "Profiles", href: "#profiles" },
        { name: "Resume", href: "#resume" },
        { name: "Contact", href: "#contact" },
    ];

    const closeMenu = () => setIsOpen(false);

    return (
        <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} className="glass-nav">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <a href="#home" style={{ fontSize: '1.8rem', fontFamily: 'Space Grotesk', letterSpacing: '-1px', textTransform: 'uppercase', color: 'var(--text-primary)', fontWeight: 700 }}>
                    FAZIL<span className="text-accent">.</span>
                </a>

                {/* Desktop Nav */}
                <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                fontFamily: 'Space Grotesk',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                position: 'relative'
                            }}
                            className="nav-link-aesthetic"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: '1.5rem', cursor: 'pointer', display: 'none' }}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-link-aesthetic::before {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--accent-color);
          transition: width 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .nav-link-aesthetic:hover::before {
          width: 100%;
        }
        .mobile-nav {
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          background: var(--bg-primary);
          flex-direction: column;
          padding: 20px;
          border-bottom: 2px solid var(--accent-color);
        }
      `}</style>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-nav"
                        style={{ display: 'flex', gap: '0', alignItems: 'center' }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                style={{
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                    fontFamily: 'Space Grotesk',
                                    width: '100%',
                                    textAlign: 'center',
                                    padding: '15px 0',
                                    borderBottom: '1px solid var(--border-color)',
                                    textTransform: 'uppercase'
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
