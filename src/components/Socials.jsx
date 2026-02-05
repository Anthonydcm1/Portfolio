import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Socials = () => {
    return (
        <div style={{
            position: 'fixed',
            left: '40px',
            bottom: '0',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center'
        }} className="socials-sidebar d-flex">
            <div className="d-flex flex-column gap-4 mb-4">
                <a href="https://github.com/Anthonydcm1" className="text-white h5 hover-opacity text-decoration-none" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/anthonydcm1/" className="text-white h5 hover-opacity text-decoration-none" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="mailto:anthonydcm1@gmail.com" className="text-white h5 hover-opacity text-decoration-none"><FaEnvelope /></a>
            </div>
            <div className="social-line" style={{ width: '2px', height: '100px', backgroundColor: 'var(--text-color)', opacity: '0.3' }}></div>

            <style>{`
                .hover-opacity:hover {
                    opacity: 0.5;
                    transform: translateY(-3px);
                    transition: 0.3s;
                }

                @media (max-width: 991px) {
                    .socials-sidebar {
                        left: 20px !important;
                        gap: 1rem !important;
                    }
                    .social-line {
                        height: 60px !important;
                    }
                }

                @media (max-width: 576px) {
                    .socials-sidebar {
                        left: 15px !important;
                    }
                    .socials-sidebar .h5 {
                        font-size: 1.1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Socials;

