import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'Skills', to: 'skills' },
        { name: 'Certifications', to: 'certifications' },
        { name: 'Projects', to: 'projects' },
        { name: 'Services', to: 'services' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
            <div className="container nav-container">
                <Link to="hero" spy={true} smooth={true} duration={500} className="logo gradient-text">
                    Salha.
                </Link>

                {/* Desktop Nav */}
                <ul className="nav-links desktop-nav">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                activeClass="active"
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-item"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Nav Toggle */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                <div className={`mobile-nav glass-panel ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    activeClass="active"
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-item"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
