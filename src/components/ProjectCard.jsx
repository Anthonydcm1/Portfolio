import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="card-simple d-flex flex-column h-100">
            <h3 className="h4 fw-bold mb-3">{title}</h3>
            <p className="small mb-4 flex-grow-1 opacity-75">
                {description}
            </p>
            <div className="mt-auto pt-3 border-top border-secondary border-opacity-25">
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn-minimal m-0 px-3 py-2" style={{ fontSize: '0.7rem' }}>
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
