import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Parallax transitions matching reference page style
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.02]);
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 30]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -20]);

    // Letters for stagger animation
    const firstName = ["F", "a", "t", "h", "i", "m", "a"];
    const lastName = ["S", "a", "l", "h", "a"];

    // Stagger container variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    // Individual letter animations
    const letterVariants = {
        hidden: { y: "100%", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <section id="hero" className="home-hero" ref={heroRef}>
            <div className="home-hero-wrapper">
                <div className="hero-intro-wrapper">
                    {/* Badge/Subtitle */}
                    <motion.div
                        className="hero-intro-subtitle-wrapper"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="intro-subtitle-line left-line"></div>
                        <p className="home-hero-subtitle">FULL STACK DEVELOPER</p>
                        <div className="intro-subtitle-line right-line"></div>
                    </motion.div>

                    {/* Main Title & Portrait Container */}
                    <div className="hero-intro-content-block">
                        {/* Interactive Title */}
                        <motion.div
                            className="hero-intro-title-block"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            style={{ y: textY }}
                        >
                            {/* First Name letters */}
                            <div className="name-word">
                                {firstName.map((char, index) => (
                                    <div key={`first-${index}`} className="hero-letter-block">
                                        <motion.h1 className="hero-intro-title" variants={letterVariants}>
                                            {char}
                                        </motion.h1>
                                    </div>
                                ))}
                            </div>

                            {/* Spacer between words */}
                            <div className="hero-letter-block text-spacer">
                                <h1 className="hero-intro-title">&nbsp;</h1>
                            </div>

                            {/* Last Name letters */}
                            <div className="name-word">
                                {lastName.map((char, index) => (
                                    <div key={`last-${index}`} className="hero-letter-block">
                                        <motion.h1 className="hero-intro-title" variants={letterVariants}>
                                            {char}
                                        </motion.h1>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Centered Profile Portrait over the name container */}
                        <motion.div
                            className="hero-intro-portrait-wrapper"
                            initial={{ opacity: 0, y: 80, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        >
                            <motion.img
                                src="/profile-photo-trimmed.png"
                                alt="Fathima Salha Portrait"
                                className="hero-intro-portrait"
                                style={{
                                    scale: imageScale,
                                    y: imageY
                                }}
                            />
                            {/* Accent lighting element */}
                            <div className="portrait-glow"></div>
                        </motion.div>

                        {/* Sidebar Category Tags */}
                        <div className="work-categories-wrapper">
                            <motion.div
                                className="work-categories-block left-categories"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <p className="work-category">#Fullstack</p>
                                <p className="work-category">#Nexilra</p>
                            </motion.div>
                            <motion.div
                                className="work-categories-block right-categories"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <p className="work-category">#Laravel</p>
                                <p className="work-category">#ReactJS</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Prolio Style Centered Sub-hero Section */}
            <div className="hero-intro-section">
                <div className="hero-intro-bro-wrapper container">
                    {/* Top Row: Available for Work */}
                    <motion.div
                        className="prolio-status-bar"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="pulse-dot"></span>
                        <span className="prolio-available-text">Available for Work</span>
                    </motion.div>

                    {/* Centered Large Editorial Bio Paragraph */}
                    <motion.p
                        className="prolio-hero-bio"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Welcome to my portfolio! I'm <span className="gradient-text font-bold">Fathima Salha</span>, a passionate and innovative fullstack developer based in Bangalore, India. I specialize in designing and developing highly functional websites and enterprise web applications that provide an exceptional user experience.
                    </motion.p>

                    {/* Social Media Network Links below the paragraph */}
                    <motion.div
                        className="hero-socials-row"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <a href="https://github.com/fathimasalha" target="_blank" rel="noopener noreferrer" className="social-icon-list-item" aria-label="GitHub">
                            <Github size={18} />
                            <span className="icon-tooltip">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/fathimasalha/" target="_blank" rel="noopener noreferrer" className="social-icon-list-item" aria-label="LinkedIn">
                            <Linkedin size={18} />
                            <span className="icon-tooltip">LinkedIn</span>
                        </a>
                        <a href="mailto:fathimasalhank@gmail.com" className="social-icon-list-item" aria-label="Email">
                            <Mail size={18} />
                            <span className="icon-tooltip">Email</span>
                        </a>
                        <a href="https://drive.google.com/file/d/1x_3ctaR550p6J9vrRXzAZYixCWk27Bkp/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="social-icon-list-item highlight" aria-label="Resume">
                            <FileText size={18} />
                            <span className="icon-tooltip">Resume</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
