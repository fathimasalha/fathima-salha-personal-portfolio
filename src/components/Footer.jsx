import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '2rem 0',
            background: 'var(--bg-primary)',
            textAlign: 'center'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div>
                        <span className="gradient-text" style={{ fontSize: '1.25rem', fontWeight: 800 }}>Salha.</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                        <a href="https://github.com/fathimasalha" target="_blank" rel="noopener noreferrer" style={{ transition: '0.2s', ':hover': { color: '#06b6d4' } }}>
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/fathimasalha/" target="_blank" rel="noopener noreferrer" style={{ transition: '0.2s', ':hover': { color: '#8b5cf6' } }}>
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div style={{
                    marginTop: '2rem',
                    color: 'var(--text-tertiary)',
                    fontSize: '0.9rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    &copy; {new Date().getFullYear()} Fathima Salha N K. Designed with logic and coffee.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
