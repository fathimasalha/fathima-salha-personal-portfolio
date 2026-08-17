import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = "919544358026";
    const message = encodeURIComponent("Hi Fathima Salha");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="whatsapp-float-wrapper">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float-btn"
                aria-label="Chat on WhatsApp"
            >
                <div className="whatsapp-pulse"></div>
                <svg
                    className="whatsapp-icon"
                    viewBox="0 0 32 32"
                    width="26"
                    height="26"
                    fill="currentColor"
                >
                    <path d="M16 2a13.94 13.94 0 0 0-12 21L2 30l7.2-1.9A13.94 13.94 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.2-4.4 1.1 1.2-4.3-.3-.5A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1.1-1.1 1.3-.4.3-.7.1a9.2 9.2 0 0 1-2.7-1.7 10.1 10.1 0 0 1-1.9-2.3c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6a.6.6 0 0 0 0-.6c-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.6 7.6 0 0 0 1.6 4.1 17.5 17.5 0 0 0 6.7 5.9 22.8 22.8 0 0 0 2.2.8 5.4 5.4 0 0 0 2.5.2 4 4 0 0 0 2.6-1.8 3.3 3.3 0 0 0 .2-1.8c-.1-.3-.4-.4-.7-.6z" />
                </svg>
            </a>
            <div className="whatsapp-tooltip">
                <span>Chat on WhatsApp</span>
                <div className="tooltip-arrow"></div>
            </div>
        </div>
    );
};

export default WhatsAppButton;
