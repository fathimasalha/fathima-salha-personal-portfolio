import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Experience from './components/Experience';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Certifications />
                <Projects />
                <Services />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
            <BackToTop />
        </div>
    );
}

export default App;
