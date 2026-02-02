import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const experiences = [
    // {
        // title: "Full Stack Developer",
        // company_name: "CESAE Digital",
        // date: "2025 - Present",
        // points: ["Leading cloud-native application development.", "CI/CD pipeline management."]
    // },
    {
        title: "Bachelor's Degree in Computer Science",
        company_name: "U.E.C.P 'Rafael Maria Baralt'",
        date: "2010 - 2011",
        points: []
    },
    {
        title: "System Engineer",
        company_name: "Instituto Universitário Politécnico Santiago Mariño",
        date: "2011 - 2018 (não concluído)",
        points: []
    },
    {
        title: "Frontend Developer",
        company_name: "CESAE Digital",
        date: "2025 - 2026",
        points: ["Developing responsive UIs for global clients.", "UI/UX implementation."]
    },
];

const Experience = () => {
    return (
        <section id="experience">
            <Container>
                <div className="section-title-wrapper">
                    <h2 className="section-title-main">Experience</h2>
                </div>

                {experiences.map((exp, index) => (
                    <Row key={index} className="mb-5 align-items-baseline">
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
