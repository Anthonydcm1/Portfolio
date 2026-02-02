import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <section id="about" className="bg-transparent">
            <Container>
                <div className="section-title-wrapper">
                    <h2 className="section-title-main">About Me</h2>
                </div>

                <Row className="mb-5">
                    <Col lg={8}>
                        <p className="fs-5 mb-4">
                            I build fast, clean, and functional interfaces. 
                            I turn ideas into efficient and scalable digital products.
                        </p>
                        <p className="opacity-75 mb-4">
                            I am a developer focused on creating simple, intuitive, and high-performance digital experiences. 
                            I work both on the Front-End, where I value functional design and clean code, and on the Back-End, 
                            ensuring solid and scalable architecture.

                            I enjoy solving complex problems with elegant solutions and collaborating on projects that require 
                            attention to detail and critical thinking.
                        </p>
                    </Col>
                </Row>

                <Row className="g-4">
                    {["Design", "Frontend", "Backend", "Logic"].map((service, index) => (
                        <Col key={index} md={3}>
                            <div className="card-simple">
                                <h4 className="fw-bold mb-0">{service}</h4>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default About;
