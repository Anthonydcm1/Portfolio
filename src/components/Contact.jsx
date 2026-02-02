import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <div className="section-title-wrapper">
                    <h2 className="section-title-main">Contact</h2>
                </div>

                <Row className="g-5">
                    <Col lg={6}>
                        <h3 className="h4 fw-bold mb-4">Get in touch</h3>
                        <p className="opacity-75 mb-5">
                            I'm always open to discussing new projects, creative ideas or
                            opportunities to be part of your visions.
                        </p>
                        <div className="d-flex flex-column gap-3">
                            <div>
                                <h6 className="text-uppercase tracking-widest fw-bold small opacity-50 mb-1">Email</h6>
                                <p className="fw-bold">anthonydcm1@gmail.com</p>
                            </div>
                            <div>
                                <h6 className="text-uppercase tracking-widest fw-bold small opacity-50 mb-1">Phone</h6>
                                <p className="fw-bold">+351 937 090 881</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <form>
                            <input type="text" placeholder="Name" className="contact-input" />
                            <input type="email" placeholder="Email" className="contact-input" />
                            <textarea rows="4" placeholder="Message" className="contact-input"></textarea>
                            <button type="submit" className="btn-minimal w-50">Send Message</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
