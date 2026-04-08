import PageTransition from "../components/PageTransition";
import { ARTICLES } from "../utils/constants";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Articles = () => {
    return (
        <PageTransition>
            <section className="container page-wrapper">
                <h2 className="section-title text-gradient">Featured Articles</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
                    {ARTICLES.map((article, idx) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: 'var(--glass-bg)',
                                boxShadow: "0 15px 30px rgba(99, 102, 241, 0.15)"
                            }}
                            className="glass"
                            style={{ padding: '30px', position: 'relative', overflow: 'hidden' }}
                        >
                            {/* Hover Blur Highlight */}
                            <div
                                className="hover-blur"
                                style={{
                                    position: 'absolute',
                                    top: '-50px', right: '-50px',
                                    width: '150px', height: '150px',
                                    background: 'var(--accent-color)',
                                    filter: 'blur(80px)',
                                    opacity: 0,
                                    transition: 'opacity 0.4s ease',
                                    zIndex: 0
                                }}
                            />
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: 600 }}>{article.date}</span>
                                <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{article.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{article.description}</p>
                                <a href={article.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', fontWeight: 600 }}>
                                    Read More <FaArrowRight />
                                </a>
                            </div>
                            <style>{`
                .glass:hover .hover-blur { opacity: 0.15 !important; }
              `}</style>
                        </motion.div>
                    ))}
                </div>
            </section>
        </PageTransition>
    );
};

export default Articles;
