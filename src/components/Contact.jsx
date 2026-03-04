import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfvxj8-wT0pCZ4334hYkPj7jPHJZp2R20TVE4svMsKpcIpqqA/formResponse";

        const formDataToSubmit = new FormData();
        formDataToSubmit.append('entry.1493265900', formData.name);
        formDataToSubmit.append('entry.1530825852', formData.email);
        formDataToSubmit.append('entry.1237069856', formData.message);

        try {
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formDataToSubmit
            });
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
                    <p className="section-subtitle">
                        Looking for a skilled developer to build your next application or CRM? Let's discuss your project.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info glass-panel"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Contact Information</h3>
                        <p className="contact-text">
                            Feel free to reach out to me for collaboration, freelance opportunities, or just to say hi!
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon"><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>contact@fathimasalha.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 9544358026</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><MapPin size={20} /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Bengaluru, Karnataka, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form glass-panel"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>Sending... <motion.span
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        style={{ display: 'inline-block', marginLeft: '8px' }}
                                    >
                                        <Send size={18} />
                                    </motion.span></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isSubmitted && (
                        <motion.div
                            className="success-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSubmitted(false)}
                        >
                            <motion.div
                                className="success-modal glass-panel"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="close-btn" onClick={() => setIsSubmitted(false)}>
                                    <X size={24} />
                                </button>
                                <div className="success-icon">
                                    <CheckCircle size={60} />
                                </div>
                                <h3 className="gradient-text">Message Sent!</h3>
                                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setIsSubmitted(false)}
                                    style={{ marginTop: '1rem', width: 'auto' }}
                                >
                                    Got it
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Contact;
