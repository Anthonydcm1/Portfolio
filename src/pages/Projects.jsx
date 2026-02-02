import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "E-commerce System",
        description: "High-performance administration panel for global commerce.",
        link: "#"
    },
    {
        id: 2,
        title: "Mission Control",
        description: "Task management application with real-time sync.",
        link: "#"
    },
    {
        id: 3,
        title: "Elite Landing Page",
        description: "Corporate institutional page focused on speed.",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="work" className="bg-transparent">
            <Container>
                <div className="section-title-wrapper">
                    <h2 className="section-title-main">Portfolio</h2>
                </div>

                <Row className="g-5">
                    {projectsData.map(project => (
                        <Col key={project.id} md={6} lg={4}>
                            <ProjectCard {...project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
