import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send an email or save to a db
        alert("Message sent successfully! (Simulated)");
        setFormData({ name: '', email: '', message: '' });
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

                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
