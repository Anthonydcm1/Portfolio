import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="home-section p-0">
            <Container fluid className="p-0">
                <Row className="m-0 g-0">
                    <Col lg={7} className="d-flex align-items-center">
                        <div className="intro-text-wrapper ms-lg-5">
                            <h5 className="text-uppercase tracking-widest mb-4" style={{ letterSpacing: '8px', color: 'var(--secondary-text)' }}>
                                Anthony Mendoza
                            </h5>
                            <h1 className="intro-title">
                                I'm Anthony
                            </h1>
                            <div className="mb-4 text-center text-lg-start intro-subtitle">
                                <img
                                    src="https://readme-typing-svg.herokuapp.com?font=Inter&weight=600&size=25&pause=1000&color=36BCF7&width=435&lines=Full+Stack+Web+Developer;Freelancer;Creative+Engine"
                                    alt="Typing Animation"
                                />
                            </div>
                            <div className="mt-5 d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                                <a href="#work" className="btn-minimal">
                                    My Portfolio
                                </a>
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-minimal" style={{ backgroundColor: 'white', color: 'black' }}>
                                    Download CV
                                </a>
                                <a href="#contact" className="btn-minimal">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={5} className="home-image-col d-none d-lg-block" style={{
                        backgroundImage: 'url("/minha-foto.jpg")'
                    }}>
                        {/* The background image is set via inline style for easy user replacement */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
