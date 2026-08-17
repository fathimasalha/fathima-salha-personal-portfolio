import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Palette, FileCode, Monitor, Laptop, Award, Target, Clock, Zap, Terminal, Sparkles } from 'lucide-react';
import './About.css';

const About = () => {
    const [typingText, setTypingText] = useState('');
    const fullCodeSnippet = `/**
 * @developer  : Fathima Salha N K
 * @role       : Fullstack Web Developer
 * @location   : Bangalore, India
 * @expertise  : Scalable Web Apps & High-Performance UI
 */

const fathimaSalha = {
    coreStack: ["Laravel", "React.js", "Node.js", "MySQL", "Tailwind CSS"],
    database: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Postman", "Vite", "Docker", "Figma"],
    focus: "Delivering elegant UI with robust, scalable backends",
    availableForHire: true
};

console.log("Ready to collaborate on high-impact projects! 🚀");`;

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullCodeSnippet.length) {
                setTypingText(fullCodeSnippet.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 15);
        return () => clearInterval(interval);
    }, []);

    const services = [
        {
            number: "/001",
            title: "Web Design",
            subtitle: "Creative & Interactive UI/UX",
            projects: "15+ projects",
            tags: ["Interface Design", "Wireframing", "Design System"],
            image: "/services/web-design.png",
            icon: <Palette className="service-icon" />,
            delay: 0.1
        },
        {
            number: "/002",
            title: "Static Website",
            subtitle: "High-Performance Modern Web",
            projects: "10+ projects",
            tags: ["Landing Pages", "SEO Optimized", "Vite / HTML5"],
            image: "/services/static-website.png",
            icon: <FileCode className="service-icon" />,
            delay: 0.2
        },
        {
            number: "/003",
            title: "Responsive Web",
            subtitle: "Mobile-First & Fluid Layouts",
            projects: "20+ projects",
            tags: ["Fluid Grid", "Cross-Platform", "Touch Gestures"],
            image: "/services/responsive-web.png",
            icon: <Monitor className="service-icon" />,
            delay: 0.3
        },
        {
            number: "/004",
            title: "Dynamic Web Apps",
            subtitle: "Full-Stack Laravel & React",
            projects: "12+ projects",
            tags: ["RESTful APIs", "State Management", "Database Design"],
            image: "/services/dynamic-web-app.png",
            icon: <Laptop className="service-icon" />,
            delay: 0.4
        }
    ];

    const stats = [
        { label: "Certifications", value: 10, suffix: "+", icon: <Award size={20} /> },
        { label: "Problems solved", value: 8, suffix: "K+", icon: <Target size={20} /> },
        { label: "Minutes spent", value: 40, suffix: "K+", icon: <Clock size={20} /> },
        { label: "Bytes of code", value: 600, suffix: "K+", icon: <Zap size={20} /> }
    ];

    // ─── DigitRoller ───────────────────────────────────────────────────────────
    const DigitRoller = ({ digit, direction = 'top' }) => {
        const wrapperRef = useRef(null);
        const [isAnimated, setIsAnimated] = useState(false);
        const targetDigit = parseInt(digit, 10) || 0;

        let strip = [];
        let startIndex = 0;
        let endIndex = 0;

        if (direction === 'bottom') {
            strip.push(targetDigit);
            for (let c = 0; c < 2; c++) {
                for (let d = 9; d >= 0; d--) {
                    strip.push(d);
                }
            }
            startIndex = strip.length - 1;
            endIndex = 0;
        } else {
            for (let c = 0; c < 2; c++) {
                for (let d = 0; d <= 9; d++) {
                    strip.push(d);
                }
            }
            for (let d = 0; d <= targetDigit; d++) {
                strip.push(d);
            }
            startIndex = 0;
            endIndex = strip.length - 1;
        }

        useEffect(() => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsAnimated(true);
                    }
                },
                { threshold: 0 }
            );
            observer.observe(wrapper);
            return () => observer.disconnect();
        }, []);

        const activeIndex = isAnimated ? endIndex : startIndex;

        return (
            <span className="digit-roller-wrapper" ref={wrapperRef}>
                <span className="digit-roller-mask">
                    <span
                        className={`digit-roller-track ${isAnimated ? 'digit-roller-animate' : ''}`}
                        style={{
                            transform: `translateY(calc(-1 * ${activeIndex} * 1.1em))`,
                            transition: isAnimated ? 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
                        }}
                    >
                        {strip.map((d, i) => (
                            <span className="digit-roller-cell" key={i}>{d}</span>
                        ))}
                    </span>
                </span>
            </span>
        );
    };

    const ScrollCounter = ({ target, suffix = '' }) => {
        const digits = String(target).split('');
        return (
            <span className="scroll-counter">
                {digits.map((char, index) => (
                    <DigitRoller
                        key={index}
                        digit={char}
                        direction={index % 2 === 0 ? 'top' : 'bottom'}
                    />
                ))}
                {suffix && <span className="scroll-counter-suffix">{suffix}</span>}
            </span>
        );
    };

    const StatCardItem = ({ stat, index }) => {
        return (
            <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ 
                    duration: 0.5, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.3 } 
                }}
            >
                <div className="stat-value">
                    <ScrollCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
            </motion.div>
        );
    };

    const ExperienceCardItem = () => {
        return (
            <motion.div
                className="experience-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
                <div className="exp-content">
                    <div className="exp-number">
                        <ScrollCounter target={1} suffix="+" />
                    </div>
                    <div className="exp-text">
                        <span>Years of</span>
                        <span>Experience</span>
                    </div>
                </div>
                <p className="exp-description">
                    Specializing in crafting high-performance, responsive, and dynamic web applications
                    using modern design systems and cutting-edge frontend architecture.
                </p>
            </motion.div>
        );
    };

    return (
        <section id="about" className="section about-section">
            <div className="container">
                {/* Top Section: Left column interactive code terminal + Right column background-blended photo */}
                <div className="showcase-container">
                    <div className="about-showcase-grid">
                        {/* Left Column: Code Based Enhanced About Card */}
                        <motion.div
                            className="about-content-column"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="about-badge-tag">
                                <Sparkles size={16} className="badge-icon" />
                                <span>KNOW ABOUT ME</span>
                            </div>

                            {/* Enhanced IDE Code Terminal Card */}
                            <div className="about-code-terminal glass-panel">
                                <div className="terminal-header">
                                    <div className="terminal-dots">
                                        <span className="dot dot-red"></span>
                                        <span className="dot dot-yellow"></span>
                                        <span className="dot dot-green"></span>
                                    </div>
                                    <div className="terminal-filename">
                                        <Terminal size={14} />
                                        <span>developer.js</span>
                                    </div>
                                </div>
                                <div className="terminal-body">
                                    <pre>
                                        <code>{typingText}<span className="typing-cursor">|</span></code>
                                    </pre>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Background-blended Photo */}
                        <motion.div
                            className="about-image-column"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className="about-photo-wrapper">
                                {/* Organic Radiant Neon Splash & Ambient Aura behind/under photo */}
                                <div className="about-neon-splash"></div>
                                <div className="about-photo-glow"></div>
                                <div className="about-neon-ground-light"></div>

                                <img
                                    src="/profile-photo-1-nobg.png"
                                    alt="Fathima Salha"
                                    className="about-blended-photo"
                                />

                                {/* Smooth background blend fade */}
                                <div className="about-photo-bottom-fade"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Poloriv-style Better Digital Journeys Section */}
                <div className="poloriv-journey-section">
                    <div className="poloriv-services-stack">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="poloriv-card-sticky-wrapper"
                                style={{
                                    '--card-index': index,
                                    zIndex: index + 1
                                }}
                            >
                                <motion.div
                                    className="poloriv-row-card"
                                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                    whileInView={{ 
                                        opacity: 1, 
                                        y: 0,
                                        scale: 1
                                    }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    whileHover={{ 
                                        y: -6, 
                                        scale: 1.005,
                                        transition: { duration: 0.3 } 
                                    }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    {/* Left Side: Details & Offering Information */}
                                    <div className="poloriv-row-left">
                                        <div className="poloriv-card-top-meta">
                                            <div className="poloriv-num-box">
                                                <span className="poloriv-star-icon">✦</span>
                                                <span className="poloriv-number">{service.number}</span>
                                            </div>
                                            <span className="poloriv-project-count">{service.projects}</span>
                                        </div>

                                        <div className="poloriv-row-title-wrap">
                                            <h3 className="poloriv-row-title">{service.title}</h3>
                                            <p className="poloriv-row-subtitle">{service.subtitle}</p>
                                        </div>

                                        {/* Interactive Category Tags */}
                                        <div className="poloriv-tags-wrapper">
                                            {service.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="poloriv-service-tag">{tag}</span>
                                            ))}
                                        </div>

                                        {/* Action Count Row */}
                                        <div className="poloriv-row-action">
                                            <div className="poloriv-count-badge">
                                                <span className="poloriv-count-value">{service.projects}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: Visual Showcase Image with Corner Plus Marks & Poloriv Parallax Reveal */}
                                    <div className="poloriv-row-right">
                                        <div className="poloriv-row-image-wrap">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="poloriv-row-img"
                                                loading="lazy"
                                            />
                                            <div className="poloriv-img-overlay"></div>

                                            {/* Poloriv Corner Plus Marks */}
                                            <div className="poloriv-corner-plus top-left">+</div>
                                            <div className="poloriv-corner-plus top-right">+</div>
                                            <div className="poloriv-corner-plus bottom-left">+</div>
                                            <div className="poloriv-corner-plus bottom-right">+</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience & Stats Grid (Enhanced Interactive Section) */}
                <div className="about-grid-bottom">
                    <ExperienceCardItem />

                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <StatCardItem key={index} stat={stat} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
