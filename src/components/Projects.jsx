import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Jobby App",
            description: "A comprehensive job search platform allowing users to find, filter, and apply for jobs. Features user authentication, detailed job pages, and profile management.",
            techStack: ["React.js", "Navigation", "Authentication", "CSS"],
            liveLink: "https://salhajobbyapp.ccbp.tech/",
            githubLink: "https://github.com/fathimasalha/Jobby-App",
            image: "/projects/jobby.png"
        },
        {
            title: "Nxt Trendz",
            description: "An e-commerce application featuring product listing, filtering, an interactive cart system, and responsive design for an optimal shopping experience.",
            techStack: ["React.js", "React Router", "State Management"],
            liveLink: "https://salhanxtrendz.ccbp.tech/",
            githubLink: "https://github.com/fathimasalha/Nxt-trendz-",
            image: "/projects/nxttrendz.png"
        },
        {
            title: "Simple Todos",
            description: "A task management application to add, edit, and track personal daily goals. Includes interactive UI elements and state persistence.",
            techStack: ["React.js", "Component Lifecycle", "CSS"],
            liveLink: "https://salhatodosapp.ccbp.tech/",
            githubLink: "https://github.com/fathimasalha/Simple-Todos",
            image: "/projects/todos.png"
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Selected <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">
                        A showcase of my recent work in frontend architecture and fullstack development.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-panel"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="layer-icon"><ExternalLink size={32} /></div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.techStack.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-item live">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-item code">
                                        <Github size={16} /> View Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
