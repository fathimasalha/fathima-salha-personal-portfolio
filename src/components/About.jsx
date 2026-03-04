import { motion } from 'framer-motion';
import { Palette, FileCode, Monitor, Laptop, Award, Target, Clock, Zap } from 'lucide-react';
import './About.css';

const About = () => {
    const services = [
        {
            title: "Web Design",
            projects: "15+ projects",
            icon: <Palette className="service-icon" />,
            delay: 0.1
        },
        {
            title: "Static Website",
            projects: "10+ projects",
            icon: <FileCode className="service-icon" />,
            delay: 0.2
        },
        {
            title: "Responsive",
            projects: "20+ projects",
            icon: <Monitor className="service-icon" />,
            delay: 0.3
        },
        {
            title: "Dynamic",
            projects: "12+ projects",
            icon: <Laptop className="service-icon" />,
            delay: 0.4
        }
    ];

    const stats = [
        { label: "Certifications", value: "10+", icon: <Award size={20} /> },
        { label: "Problems solved", value: "8K+", icon: <Target size={20} /> },
        { label: "Minutes spent", value: "40K+", icon: <Clock size={20} /> },
        { label: "Bytes of code", value: "600K+", icon: <Zap size={20} /> }
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                {/* Services Grid */}
                <div className="about-grid-top">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay }}
                        >
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.projects}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Experience & Stats Grid */}
                <div className="about-grid-bottom">
                    <motion.div
                        className="experience-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="exp-content">
                            <div className="exp-number">1</div>
                            <div className="exp-text">
                                <span>Years of</span>
                                <span>Experience</span>
                            </div>
                        </div>
                        <p className="exp-description">
                            Web Development and providing expertise in building static, responsive, and
                            dynamic websites using modern design principles and latest web technologies.
                        </p>
                    </motion.div>

                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card glass-panel"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
