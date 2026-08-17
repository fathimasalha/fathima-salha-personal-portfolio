import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Server, Layout, Database, Terminal, Code2, Globe,
    Atom, Braces, Layers, MonitorSmartphone, Zap,
    ShieldCheck, Cloud, GitBranch, Package, Send,
    Wind, Cpu, Settings, Folder, Monitor, Link2, BarChart2,
    CheckCircle2
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const wrapperRef = useRef(null);

    const categories = [
        {
            id: 'frontend',
            tabName: 'Frontend Development',
            shortTitle: 'Frontend',
            title: 'Frontend Development',
            tag: 'FRONTEND',
            progressSkills: [
                { name: 'React.js & Modern UI', percent: 95 },
                { name: 'JavaScript (ES6+)', percent: 92 },
                { name: 'HTML5 / CSS3 / Tailwind', percent: 95 },
                { name: 'Responsive Architecture', percent: 90 }
            ],
            iconSkills: [
                { name: 'React.js', icon: <Atom size={22} />, color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.15)' },
                { name: 'JavaScript', icon: <Braces size={22} />, color: '#F7DF1E', bg: 'rgba(247, 223, 30, 0.15)' },
                { name: 'Tailwind CSS', icon: <Wind size={22} />, color: '#38BDF8', bg: 'rgba(56, 189, 248, 0.15)' },
                { name: 'HTML5/CSS3', icon: <Globe size={22} />, color: '#E34F26', bg: 'rgba(227, 79, 38, 0.15)' },
                { name: 'Vite', icon: <Zap size={22} />, color: '#646CFF', bg: 'rgba(100, 108, 255, 0.15)' },
                { name: 'Responsive UI', icon: <MonitorSmartphone size={22} />, color: '#4CAF50', bg: 'rgba(76, 175, 80, 0.15)' }
            ]
        },
        {
            id: 'backend',
            tabName: 'Backend Development',
            shortTitle: 'Backend',
            title: 'Backend Development',
            tag: 'BACKEND',
            progressSkills: [
                { name: 'PHP (Laravel / MVC)', percent: 92 },
                { name: 'Node.js & Express.js', percent: 88 },
                { name: 'RESTful API Design', percent: 95 },
                { name: 'Auth & Security', percent: 90 }
            ],
            iconSkills: [
                { name: 'Laravel', icon: <Wind size={22} />, color: '#FF2D20', bg: 'rgba(255, 45, 32, 0.15)' },
                { name: 'Node.js', icon: <Terminal size={22} />, color: '#339933', bg: 'rgba(51, 153, 51, 0.15)' },
                { name: 'Express.js', icon: <Cpu size={22} />, color: '#38BDF8', bg: 'rgba(56, 189, 248, 0.15)' },
                { name: 'PHP', icon: <Code2 size={22} />, color: '#777BB4', bg: 'rgba(119, 123, 180, 0.15)' },
                { name: 'REST APIs', icon: <Cloud size={22} />, color: '#009688', bg: 'rgba(0, 150, 136, 0.15)' },
                { name: 'Auth Systems', icon: <ShieldCheck size={22} />, color: '#9C27B0', bg: 'rgba(156, 39, 176, 0.15)' }
            ]
        },
        {
            id: 'database',
            tabName: 'Database & Tools',
            shortTitle: 'Databases',
            title: 'Database & Tools',
            tag: 'DATABASE & TOOLS',
            progressSkills: [
                { name: 'MySQL & Relational DB', percent: 90 },
                { name: 'MongoDB & NoSQL', percent: 85 },
                { name: 'Git & Version Control', percent: 95 },
                { name: 'Postman & Dev Workflow', percent: 92 }
            ],
            iconSkills: [
                { name: 'MySQL', icon: <Database size={22} />, color: '#4479A1', bg: 'rgba(68, 121, 161, 0.15)' },
                { name: 'MongoDB', icon: <Layers size={22} />, color: '#47A248', bg: 'rgba(71, 162, 72, 0.15)' },
                { name: 'Git / GitHub', icon: <GitBranch size={22} />, color: '#F05032', bg: 'rgba(240, 80, 50, 0.15)' },
                { name: 'Postman', icon: <Send size={22} />, color: '#FF6C37', bg: 'rgba(255, 108, 55, 0.15)' },
                { name: 'NPM / Package', icon: <Package size={22} />, color: '#CB3837', bg: 'rgba(203, 56, 55, 0.15)' },
                { name: 'Vite Tools', icon: <Zap size={22} />, color: '#646CFF', bg: 'rgba(100, 108, 255, 0.15)' }
            ]
        }
    ];

    // Scroll listener calculates active category based on sticky scroll progress
    useEffect(() => {
        const handleScroll = () => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;

            const rect = wrapper.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalScrollable = rect.height - windowHeight;

            if (totalScrollable <= 0) return;

            const scrolled = -rect.top;
            const progress = scrolled / totalScrollable;

            if (progress < 0.35) {
                setActiveIndex(0);
            } else if (progress < 0.70) {
                setActiveIndex(1);
            } else {
                setActiveIndex(2);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to target position when clicking a tab
    const handleTabClick = (index) => {
        setActiveIndex(index);
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const rect = wrapper.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const totalScrollable = rect.height - window.innerHeight;

        let targetY = absoluteTop;
        if (index === 1) {
            targetY = absoluteTop + totalScrollable * 0.5;
        } else if (index === 2) {
            targetY = absoluteTop + totalScrollable * 0.95;
        }

        window.scrollTo({ top: targetY, behavior: 'smooth' });
    };

    const currentCat = categories[activeIndex];

    return (
        <section id="skills" className="section skills-section">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>

            {/* Sticky Wrapper provides scroll height for step progression */}
            <div className="skills-sticky-wrapper" ref={wrapperRef}>
                <div className="skills-sticky-content">
                    <div className="container">
                        {/* Header Badge & Title */}
                        <motion.div
                            className="skills-header-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="skills-badge-tag">
                                <span className="star-icon">✦</span>
                                <span>TECHNICAL EXPERTISE</span>
                            </div>
                            <h2 className="section-title">
                                Skills & <span className="gradient-text">Expertise</span>
                            </h2>
                            <p className="section-subtitle">
                                A comprehensive overview of my technical stack, backend logic, and engineering workflow.
                            </p>

                            {/* Category Selection Tabs */}
                            <div className="skills-tab-nav">
                                {categories.map((cat, idx) => (
                                    <button
                                        key={cat.id}
                                        className={`skills-tab-btn ${activeIndex === idx ? 'active' : ''}`}
                                        onClick={() => handleTabClick(idx)}
                                    >
                                        <span className="tab-dot"></span>
                                        {cat.tabName}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Main 2-Column Showcase Grid */}
                        <div className="skills-showcase-grid">
                            {/* Left Column: Title & Progress Bars */}
                            <div className="skills-left-column">
                                <div className="skills-left-meta">
                                    <span className="skills-meta-subtitle">TECHNICAL SKILLS</span>

                                    <AnimatePresence mode="wait">
                                        <motion.h3
                                            key={currentCat.id}
                                            className="skills-main-title"
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -12 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {currentCat.shortTitle}
                                        </motion.h3>
                                    </AnimatePresence>
                                </div>

                                {/* Skill Progress Bars List */}
                                <div className="skills-progress-list">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentCat.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="progress-items-wrapper"
                                        >
                                            {currentCat.progressSkills.map((skill, pIdx) => (
                                                <div key={pIdx} className="progress-item">
                                                    <div className="progress-label-row">
                                                        <span className="progress-skill-name">{skill.name}</span>
                                                        <span className="progress-percent-val">{skill.percent}%</span>
                                                    </div>
                                                    <div className="progress-track">
                                                        <motion.div
                                                            className="progress-fill"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${skill.percent}%` }}
                                                            transition={{ duration: 0.65, delay: pIdx * 0.06, ease: 'easeOut' }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Right Column: macOS IDE Window Frame Showcase */}
                            <div className="skills-right-column">
                                <div className="skills-window-frame glass-panel">
                                    {/* Window Titlebar */}
                                    <div className="window-header">
                                        <div className="window-controls">
                                            <span className="control-dot dot-red"></span>
                                            <span className="control-dot dot-yellow"></span>
                                            <span className="control-dot dot-green"></span>
                                        </div>
                                        <div className="window-title-text">
                                            <AnimatePresence mode="wait">
                                                <motion.span
                                                    key={currentCat.id}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {currentCat.title}
                                                </motion.span>
                                            </AnimatePresence>
                                        </div>
                                        <div className="window-dummy-space"></div>
                                    </div>

                                    {/* Window Body */}
                                    <div className="window-body">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentCat.id}
                                                initial={{ opacity: 0, scale: 0.96 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.96 }}
                                                transition={{ duration: 0.3 }}
                                                className="window-content-inner"
                                            >
                                                {/* Subhead Tag */}
                                                <div className="window-subhead-tag">
                                                    <span>{currentCat.tag}</span>
                                                </div>

                                                {/* Grid of colorful skill icon tiles */}
                                                <div className="window-skills-grid">
                                                    {currentCat.iconSkills.map((item, iIdx) => (
                                                        <motion.div
                                                            key={iIdx}
                                                            className="window-skill-card"
                                                            whileHover={{ y: -4, scale: 1.03 }}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: iIdx * 0.04, duration: 0.25 }}
                                                        >
                                                            <div
                                                                className="window-skill-icon-wrapper"
                                                                style={{ color: item.color, background: item.bg }}
                                                            >
                                                                {item.icon}
                                                            </div>
                                                            <span className="window-skill-name">{item.name}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Bottom Window Status Toolbar */}
                                        <div className="window-toolbar">
                                            <div className="toolbar-left-icons">
                                                <Settings size={15} className="toolbar-icon" />
                                                <Folder size={15} className="toolbar-icon" />
                                                <Monitor size={15} className="toolbar-icon" />
                                                <Link2 size={15} className="toolbar-icon" />
                                                <BarChart2 size={15} className="toolbar-icon" />
                                            </div>
                                            <div className="toolbar-status">
                                                <CheckCircle2 size={13} className="status-icon-check" />
                                                <span>Active Stack</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
