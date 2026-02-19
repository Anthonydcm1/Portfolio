// Projects page - uses language context for translated descriptions
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    const projectsData = [
        {
            id: 1,
            title: "Front-end Developer",
            image: "design-animated-front-end-of-website-in-react-js.png",
            description: t.projects.course,
            link: "https://github.com/Anthonydcm1/Front-end_Curso_CesaeDigital.git"
        },
        {
            id: 2,
            title: "Dental Clinic Dr. Daniel Baptista",
            description: t.projects.clinic,
            link: "https://www.clinicadanielbaptista.pt/"
        },
    ];

    return (
        <section id="projects" className="bg-transparent">
            <Container>
                <div className="section-title-wrapper" data-aos="fade-up">
                    <h2 className="section-title-main">{t.projects.title}</h2>
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
