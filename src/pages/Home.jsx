import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from './Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Socials from '../components/Socials';
import CTA from '../components/CTA';

const Home = ({ onContactClick }) => {
    return (
        <>
            <Socials />
            <Hero onContactClick={onContactClick} />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <CTA onContactClick={onContactClick} />
            <Footer onContactClick={onContactClick} />
        </>
    );
};

export default Home;
