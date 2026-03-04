import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span className="wave">👋</span> Hello, I'm
                    </motion.div>

                    <motion.h1
                        className="name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Fathima <span className="gradient-text">Salha N K</span>
                    </motion.h1>

                    <motion.h2
                        className="role"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Fullstack Developer @ <span className="text-highlight">Nexilra</span>
                    </motion.h2>

                    <motion.p
                        className="bio"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        I specialize in designing and developing scalable web applications.
                        With expertise in Laravel, React, Node.js, and MySQL, I build robust
                        CRM/HRM systems and elegant digital experiences.
                    </motion.p>

                    <motion.div
                        className="actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <Link to="projects" smooth={true} duration={500} offset={-70}>
                            <button className="btn btn-primary">
                                View My Work <ArrowRight size={18} />
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={-70}>
                            <button className="btn btn-outline">
                                Contact Me
                            </button>
                        </Link>
                        <a href="https://drive.google.com/file/d/1Mqesgnj1JaZjGAK-fbhkZO6Q-Ln_YmR2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-outline resume-btn">
                                View Resume <FileText size={18} />
                            </button>
                        </a>
                    </motion.div>

                    <motion.div
                        className="social-links"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <a href="https://github.com/fathimasalha" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Github size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/fathimasalha/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Linkedin size={22} />
                        </a>
                        <a href="mailto:contact@fathimasalha.com" className="social-icon">
                            <Mail size={22} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="image-decoration glass-panel"></div>
                    {/* We'll use a stylized code block as a placeholder since we don't have an image of Fathima */}
                    <div className="code-card glass-panel">
                        <div className="mac-dots">
                            <span></span><span></span><span></span>
                        </div>
                        <pre><code>
                            <span className="token keyword">const</span> developer <span className="token operator">=</span> {'{'}
                            <br />  name: <span className="token string">'Fathima Salha'</span>,
                            <br />  role: <span className="token string">'Fullstack Developer'</span>,
                            <br />  skills: [<span className="token string">'React'</span>, <span className="token string">'Laravel'</span>, <span className="token string">'Node.js'</span>],
                            <br />  execute: <span className="token function">() =&gt;</span> {'{'}
                            <br />    <span className="token keyword">return</span> <span className="token string">'Building awesome things!'</span>
                            <br />  {'}'}
                            <br />{'}'};
                        </code></pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
