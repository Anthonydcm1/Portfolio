import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
    FaNodeJs, FaDocker, FaGitAlt, FaFigma
} from 'react-icons/fa';
import { SiRedux, SiExpress, SiPostman, SiFramer, SiTailwindcss, SiMongodb } from 'react-icons/si';

const skillCategories = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML 5", icon: <FaHtml5 color="#E34F26" /> },
            { name: "CSS 3", icon: <FaCss3Alt color="#1572B6" /> },
            { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
            { name: "React JS", icon: <FaReact color="#61DAFB" /> },
            { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
            { name: "Redux", icon: <SiRedux color="#764ABC" /> }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node JS", icon: <FaNodeJs color="#339933" /> },
            { name: "Express", icon: <SiExpress color="#ffffff" /> },
            { name: "Docker", icon: <FaDocker color="#2496ED" /> },
            { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
            { name: "Git", icon: <FaGitAlt color="#F05032" /> }
        ]
    },
    {
        category: "Design",
        skills: [
            { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
            { name: "Blender", icon: <SiFramer color="#EA8220" /> }, // Substitute for Blender if needed or use Generic
            { name: "Postman", icon: <SiPostman color="#FF6C37" /> }
        ]
    }
];

const Tech = () => {
    return (
        <section id="tech" style={{ backgroundColor: '#111' }}>
            <Container>
                <div className="text-center mb-5">
                    <h2 className="skills-heading">Skills</h2>
                </div>

                {skillCategories.map((group) => (
                    <div key={group.category} className="mb-5 text-center">
                        <h4 className="text-uppercase fw-bold mb-4 opacity-50" style={{ letterSpacing: '4px', fontSize: '1rem' }}>
                            {group.category}
                        </h4>
                        <Row className="justify-content-center g-4">
                            {group.skills.map((skill) => (
                                <Col key={skill.name} xs={6} sm={4} md={3} lg={2}>
                                    <div className="skill-card h-100">
                                        <div className="fs-1 mb-2">
                                            {skill.icon}
                                        </div>
                                        <div className="skill-name">
                                            {skill.name}
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </Container>
        </section>
    );
};

export default Tech;



