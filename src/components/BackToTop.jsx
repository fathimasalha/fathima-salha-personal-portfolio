import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './BackToTop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        toggleVisibility();

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`back-to-top-wrapper ${isVisible ? 'visible' : ''}`}>

            <button
                type="button"
                onClick={scrollToTop}
                className="back-to-top-btn"
                aria-label="Back to Top"
            >
                <div className="back-to-top-pulse"></div>
                <ChevronUp className="back-to-top-icon" size={24} strokeWidth={2.5} />
            </button>
        </div>
    );
};

export default BackToTop;
