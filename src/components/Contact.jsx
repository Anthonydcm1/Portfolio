import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            // REEMPLAZA "TU_ID_AQUI" con tu ID de Formspree (ej: xqywpnz)
            const response = await fetch("https://formspree.io/f/xaqdwozn", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };

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
                        {status === "SUCCESS" && (
                            <Alert variant="success" className="mb-4 bg-transparent text-success border-success">
                                Message sent successfully! I'll get back to you soon.
                            </Alert>
                        )}
                        {status === "ERROR" && (
                            <Alert variant="danger" className="mb-4 bg-transparent text-danger border-danger">
                                Oops! An error occurred while sending the message.
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Name" className="contact-input" required />
                            <input type="email" name="email" placeholder="Email" className="contact-input" required />
                            <textarea name="message" rows="4" placeholder="Message" className="contact-input" required></textarea>
                            <button type="submit" className="btn-minimal w-30">Send Message</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
