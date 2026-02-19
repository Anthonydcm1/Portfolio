// About section - uses language context for translated content
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="bg-transparent">
            <Container>
                <div className="section-title-wrapper" data-aos="fade-up">
                    <h2 className="section-title-main">{t.about.title}</h2>
                </div>

                <Row className="mb-5">
                    <Col lg={8}>
                        <p className="fs-5 mb-4" data-aos="fade-up" data-aos-delay="200">
                            {t.about.p1}
                        </p>
                        <p className="opacity-75 mb-4" data-aos="fade-up" data-aos-delay="400">
                            {t.about.p2}
                        </p>
                    </Col>
                </Row>

                <Row className="g-4">
                    {t.about.services.map((service, index) => (
                        <Col key={index} md={3} data-aos="zoom-in" data-aos-delay={200 * index}>
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
