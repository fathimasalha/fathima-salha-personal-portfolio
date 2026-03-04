import { motion } from 'framer-motion';
import {
    Server, Layout, Database, Terminal, Code2, Globe,
    Atom, Braces, Layers, MonitorSmartphone, Zap,
    ShieldCheck, Cloud, GitBranch, Package, Send,
    Wind, Cpu, FileJson
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            id: "frontend",
            title: "Frontend Development",
            icon: <Layout className="skill-icon" />,
            skills: [
                { name: "React.js", icon: <Atom size={18} />, color: "#61DAFB" },
                { name: "JavaScript", icon: <Braces size={18} />, color: "#F7DF1E" },
                { name: "HTML5/CSS3", icon: <Globe size={18} />, color: "#E34F26" },
                { name: "Flexbox", icon: <Layers size={18} />, color: "#2965f1" },
                { name: "Responsive UI", icon: <MonitorSmartphone size={18} />, color: "#4CAF50" },
                { name: "DOM Logic", icon: <Zap size={18} />, color: "#FF9800" }
            ]
        },
        {
            id: "backend",
            title: "Backend Development",
            icon: <Server className="skill-icon" />,
            skills: [
                { name: "Node.js", icon: <Terminal size={18} />, color: "#339933" },
                { name: "Express.js", icon: <Cpu size={18} />, color: "#ffffff" },
                { name: "Laravel", icon: <Wind size={18} />, color: "#FF2D20" },
                { name: "REST APIs", icon: <Cloud size={18} />, color: "#009688" },
                { name: "Auth Systems", icon: <ShieldCheck size={18} />, color: "#9C27B0" }
            ]
        },
        {
            id: "database",
            title: "Database & Tools",
            icon: <Database className="skill-icon" />,
            skills: [
                { name: "MySQL", icon: <Database size={18} />, color: "#4479A1" },
                { name: "Git / GitHub", icon: <GitBranch size={18} />, color: "#F05032" },
                { name: "Vite", icon: <Zap size={18} />, color: "#646CFF" },
                { name: "NPM/Yarn", icon: <Package size={18} />, color: "#CB3837" },
                { name: "Postman", icon: <Send size={18} />, color: "#FF6C37" }
            ]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 1 }}
                >
                    <h2 className="section-title">Skills & <span className="gradient-text">Expertise</span></h2>
                    <p className="section-subtitle">
                        A comprehensive overview of my technical skills and professional milestones.
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={`skill-card ${category.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="card-glow"></div>
                            <div className="skill-header">
                                <div className="skill-icon-outer">
                                    {category.icon}
                                </div>
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skill-tags">
                                {category.skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="skill-tag"
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                                    >
                                        <div className="tag-icon" style={{ color: skill.color }}>
                                            {skill.icon}
                                        </div>
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
