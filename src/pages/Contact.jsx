import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedText from "../components/AnimatedText";

const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);
        formData.append("access_key", "269f186b-e9d3-4210-a5c3-390d0f49cafd"); // Providing a temporary key for setup or they can get their own at web3forms.com

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setStatus("success");
            e.target.reset();
        } else {
            console.log("Error", res);
            setStatus("error");
        }

        setTimeout(() => setStatus(""), 4000);
    };

    return (
        <section id="contact" className="container flex-center" style={{ flexDirection: 'column' }}>
            <div className="section-header-container">
                <AnimatedText
                    text="COMMUNICATIONS"
                    className="section-title"
                />
                <motion.p
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="section-definition"
                >
                    Establish contact for business propositions or architectural inquiries.
                </motion.p>
            </div>

            <div style={{ width: '100%', maxWidth: '750px' }}>
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 50, rotateX: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                    className="aesthetic-card"
                    style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '50px 40px' }}
                >
                    <input type="hidden" name="subject" value="New Portfolio Message from FAZIL S." />
                    <input type="hidden" name="to_email" value="fz.fazil123@gmail.com" />

                    <div className="input-group">
                        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Space Grotesk' }}>Full Name</label>
                        <input type="text" name="name" required className="contact-input" placeholder="Enter your full name" />
                    </div>

                    <div className="input-group">
                        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Space Grotesk' }}>Email Address</label>
                        <input type="email" name="email" required className="contact-input" placeholder="Enter your email address" />
                    </div>

                    <div className="input-group">
                        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Space Grotesk' }}>Message</label>
                        <textarea name="message" required className="contact-input" rows="5" placeholder="Write your message here..."></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn-aesthetic"
                        style={{ justifyContent: 'center', marginTop: '10px', width: '100%' }}
                    >
                        {status === "sending" ? "TRANSMITTING..." : status === "success" ? "DISPATCH RECEIVED" : status === "error" ? "TRANSMISSION FAILED" : "SEND DISPATCH"}
                    </button>
                </motion.form>
            </div>

            <style>{`
        .contact-input {
          width: 100%;
          padding: 15px 20px;
          border: none;
          border-bottom: 2px solid var(--border-color);
          background: transparent;
          color: var(--text-primary);
          font-family: 'Space Mono', monospace;
          font-size: 1.1rem;
          outline: none;
          transition: var(--transition);
        }
        .contact-input::placeholder {
          color: var(--text-muted);
          font-style: italic;
          opacity: 0.5;
        }
        .contact-input:focus {
          border-bottom-color: var(--text-primary);
          background-color: var(--bg-primary);
        }
      `}</style>
        </section>
    );
};

export default Contact;
