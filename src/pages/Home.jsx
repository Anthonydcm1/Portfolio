import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from './Projects';
import Tech from '../components/Tech';
import Contact from '../components/Contact';
import Socials from '../components/Socials';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Socials />
            <Hero />
            <About />
            <Experience />
            <Tech />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
