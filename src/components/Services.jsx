import { motion } from 'framer-motion';
import { Code2, Database, MonitorSmartphone, Palette, Settings, Zap } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <MonitorSmartphone size={40} className="service-icon" />,
            title: "Frontend Architecture",
            description: "Building responsive, highly-interactive, and performant user interfaces using React, JavaScript, and modern CSS practices."
        },
        {
            icon: <Database size={40} className="service-icon" />,
            title: "Backend Development",
            description: "Developing robust and scalable Server-Side applications and RESTful APIs with Node.js, Express, and Laravel PHP."
        },
        {
            icon: <Settings size={40} className="service-icon" />,
            title: "Fullstack Custom Systems",
            description: "Specializing in developing complete, end-to-end CRM and HRM systems tailored precisely to business and operational needs."
        },
        {
            icon: <Palette size={40} className="service-icon" />,
            title: "UI/UX Design Strategy",
            description: "Crafting intuitive digital experiences with a focus on user journey, modern aesthetics, and accessibility-first design principles."
        },
        {
            icon: <Code2 size={40} className="service-icon" />,
            title: "API & System Integration",
            description: "Seamlessly connecting third-party services and legacy systems to your application through robust API architecture."
        },
        {
            icon: <Zap size={40} className="service-icon" />,
            title: "Performance Optimization",
            description: "Enhancing application load times and efficiency through code splitting, caching strategies, and technical debt reduction."
        }
    ];

    return (
        <section id="services" className="section services-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="services-header"
                >
                    <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
                    <p className="section-subtitle">
                        Delivering end-to-end technical solutions to transform your ideas into functional digital products.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className="icon-wrapper">
                                {service.icon}
                                <div className="icon-glow"></div>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
