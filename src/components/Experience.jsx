import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Zap, Layers, Server, Layout, Database, ShieldCheck } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Nexilra",
            role: "Software Engineer",
            period: "June 2025 - Present",
            location: "Bangalore, KA",
            description: "Driving digital innovation as a Full Stack Developer, I specialize in crafting enterprise-grade web solutions. My current focus is on architecting robust systems that bridge complex backend logic with fluid, intuitive user experiences, consistently pushing the boundaries of what's possible in modern web development.",
            highlights: [
                {
                    icon: <Layers size={14} />,
                    text: "Architecting high-performance web applications using the Laravel framework."
                },
                {
                    icon: <Server size={14} />,
                    text: "Developing comprehensive CRM & HRM systems to streamline business operations."
                },
                {
                    icon: <Layout size={14} />,
                    text: "Crafting dynamic, pixel-perfect user interfaces with React.js and modern JavaScript."
                },
                {
                    icon: <Database size={14} />,
                    text: "Designing and optimizing scalable database structures in MySQL and MongoDB."
                },
                {
                    icon: <ShieldCheck size={14} />,
                    text: "Implementing secure, state-of-the-art authentication protocols using JWT tokens."
                },
                {
                    icon: <Zap size={14} />,
                    text: "Integrating intelligent AI-driven features to enhance user engagement and efficiency."
                }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <span className="exp-role-badge" style={{ marginBottom: '1.5rem', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)' }}>
                        <Zap size={16} /> My Journey
                    </span>
                    <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
                    <p className="section-subtitle">
                        Blending engineering excellence with creative problem-solving to build the next generation of digital products.
                    </p>
                </motion.div>

                <motion.div
                    className="experience-container"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="experience-timeline">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="timeline-item">
                                <motion.div 
                                    className="timeline-dot"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                />
                                
                                <motion.div className="timeline-content" variants={itemVariants}>
                                    <div className="exp-header">
                                        <div className="exp-company-box">
                                            <div className="exp-role-badge">
                                                <Briefcase size={14} /> {exp.role}
                                            </div>
                                            <h3>{exp.company}</h3>
                                        </div>
                                        <div className="exp-time-location">
                                            <span><Calendar size={16} /> {exp.period}</span>
                                            <span><MapPin size={16} /> {exp.location}</span>
                                        </div>
                                    </div>

                                    <p className="exp-description">
                                        {exp.description}
                                    </p>

                                    <div className="exp-grid">
                                        {exp.highlights.map((item, i) => (
                                            <motion.div 
                                                key={i} 
                                                className="exp-task"
                                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.06)' }}
                                            >
                                                <div className="task-icon">
                                                    {item.icon}
                                                </div>
                                                <div className="task-text">
                                                    {item.text}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
