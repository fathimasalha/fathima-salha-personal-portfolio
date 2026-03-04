import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const certifications = [
        {
            title: "REACT JS",
            category: "Frontend Development",
            image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/DAZPLNLNVC.png",
            link: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/DAZPLNLNVC.png",
            date: "Feb 2025"
        },
        {
            title: "NODE JS",
            category: "Backend Development",
            image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/VTKQQXZFAY.png",
            link: "https://certificates.ccbp.in/intensive/node-js?id=VTKQQXZFAY",
            date: "Jan 2025"
        },
        {
            title: "FLEXBOX",
            category: "Responsive Design",
            image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/RAQIQLUATI.png",
            link: "https://certificates.ccbp.in/intensive/flexbox?id=RAQIQLUATI",
            date: "Jan 2025"
        },
        {
            title: "DYNAMIC WEB APP",
            category: "JavaScript Intensive",
            image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/YIWGJESASJ.png",
            link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=YIWGJESASJ",
            date: "Dec 2024"
        },
        {
            title: "JAVASCRIPT ESSENTIALS",
            category: "Programming Foundations",
            image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/AJBSYRKGGE.png",
            link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=AJBSYRKGGE",
            date: "Dec 2024"
        },
        {
            title: "DATABASES",
            category: "Storage & Queries",
            image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/RYIVNYMLJF.png",
            link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=RYIVNYMLJF",
            date: "Oct 2024"
        },
        {
            title: "RESPONSIVE WEBSITE",
            category: "Web Design",
            image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/VWVTGAKVTF.png",
            link: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/VWVTGAKVTF.png",
            date: "Sept 2024"
        },
        {
            title: "STATIC WEBSITE",
            category: "Web Fundamentals",
            image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/SGVWDGMAIL.png",
            link: "https://certificates.ccbp.in/intensive/static-website?id=SGVWDGMAIL",
            date: "Aug 2024"
        },
        {
            title: "DEV FOUNDATIONS",
            category: "Programming Basics",
            image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/TCMPRSGOSK.png",
            link: "https://certificates.ccbp.in/intensive/developer-foundations?id=TCMPRSGOSK",
            date: "Jul 2024"
        },
        {
            title: "PROGRAMMING FOUNDATIONS",
            category: "Computational Thinking",
            image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/QPKUQLOOCJ.png",
            link: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/QPKUQLOOCJ.png",
            date: "Jun 2024"
        }
    ];

    // Double the array for seamless infinite scrolling
    const tickerCertifications = [...certifications, ...certifications];

    return (
        <section id="certifications" className="section cert-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 className="section-title">My <span className="gradient-text">Certifications</span></h2>
                    <p className="section-subtitle">
                        Professional milestones and technical validations that showcase my dedication to continuous learning and excellence.
                    </p>
                </motion.div>

                <div className="ticker-wrapper">
                    <div className="ticker-track">
                        {tickerCertifications.map((cert, index) => (
                            <div key={index} className="cert-card-wrapper">
                                <div className="cert-card">
                                    <div className="cert-image-box">
                                        <img src={cert.image} alt={cert.title} />
                                        <div className="cert-overlay">
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-link-abs">
                                                <ExternalLink size={24} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="cert-info-box">
                                        <h3 className="cert-card-title">{cert.title}</h3>
                                        <div className="cert-card-footer">
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                                                View <ChevronRight size={16} />
                                            </a>
                                            <span className="cert-date">{cert.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
