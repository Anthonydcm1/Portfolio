import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

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
        }} className="d-none d-lg-flex">
            <div className="d-flex flex-column gap-4 mb-4">
                <a href="https://github.com/Anthonydcm1" className="text-white h5 hover-opacity text-decoration-none" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/anthonydcm1/" className="text-white h5 hover-opacity text-decoration-none" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                {/* <a href="#" className="text-white h5 hover-opacity text-decoration-none" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> */}
                <a href="mailto:anthonydcm1@gmail.com" className="text-white h5 hover-opacity text-decoration-none"><FaEnvelope /></a>
            </div>
            <div style={{ width: '2px', height: '100px', backgroundColor: 'var(--text-color)', opacity: '0.3' }}></div>

            <style>{`
                .hover-opacity:hover {
                    opacity: 0.5;
                    transform: translateY(-3px);
                    transition: 0.3s;
                }
            `}</style>
        </div>
    );
};

export default Socials;

