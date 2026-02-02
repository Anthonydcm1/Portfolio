import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Curriculum = () => {
    return (
        <section className="py-5 mt-5">
            <Container>
                <div className="section-title-wrapper">
                    <h2 className="section-title-main">Curriculum Vitae</h2>
                </div>

                <Row className="justify-content-center">
                    <Col lg={8} className="text-center">
                        <p className="fs-4 mb-5 opacity-75">
                            You can view or download my full curriculum vitae using the button below.
                        </p>

                        <div className="card-simple p-5">
                            <h3 className="h2 fw-bold mb-4">Anthony Mendoza</h3>
                            <h5 className="text-uppercase tracking-widest mb-5 opacity-50">Software Engineer</h5>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-minimal fs-4 px-5 py-3"
                                style={{ backgroundColor: 'white', color: 'black' }}
                            >
                                Download PDF
                            </a>
                        </div>

                        <div className="mt-5">
                            <a href="/" className="text-white opacity-50 text-decoration-none">
                                ← Back to Home
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Curriculum;
