// Experience section - uses language context for translated content
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();

    return (
        <section id="experience">
            <Container>
                <div className="section-title-wrapper" data-aos="fade-up">
                    <h2 className="section-title-main">{t.experience.title}</h2>
                </div>

                {t.experience.items.map((exp, index) => (
                    <Row key={index} className="mb-5 align-items-baseline" data-aos="fade-up" data-aos-delay={index * 100}>
                        <Col md={3}>
                            <h5 className="fw-bold opacity-50">{exp.date}</h5>
                        </Col>
                        <Col md={9}>
                            <h3 className="h4 fw-bold text-white mb-2">{exp.title}</h3>
                            <h5 className="h6 text-uppercase tracking-wider mb-3">{exp.company_name}</h5>
                            <ul className="list-unstyled opacity-75">
                                {exp.points.map((p, i) => (
                                    <li key={i}>— {p}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
};

export default Experience;
