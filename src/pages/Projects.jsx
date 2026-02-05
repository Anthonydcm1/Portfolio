import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "Front-end Developer",
        image: "design-animated-front-end-of-website-in-react-js.png",
        description: "Course of Front-end Developer at Cesae Digital.",
        link: "https://github.com/Anthonydcm1/Front-end_Curso_CesaeDigital.git"
    },
    // {
    // id: 2,
    // title: "Mission Control",
    // description: "Task management application with real-time sync.",
    // link: "#"
    // },
    // {
    // id: 3,
    // title: "Elite Landing Page",
    // description: "Corporate institutional page focused on speed.",
    // link: "#"
    // }
];

const Projects = () => {
    return (
        <section id="projects" className="bg-transparent">
            <Container>
                <div className="section-title-wrapper" data-aos="fade-up">
                    <h2 className="section-title-main">Portfolio</h2>
                </div>

                <Row className="g-5">
                    {projectsData.map((project, index) => (
                        <Col key={project.id} md={6} lg={4} data-aos="fade-up" data-aos-delay={index * 200}>
                            <ProjectCard {...project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
