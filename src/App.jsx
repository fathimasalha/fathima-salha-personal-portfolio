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

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Certifications />
                <Projects />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
