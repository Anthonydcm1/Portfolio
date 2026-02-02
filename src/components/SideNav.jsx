import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <div style={{
            position: 'fixed',
            left: '40px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        }} className="d-none d-lg-flex">
            <Nav className="flex-column" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
                <Nav.Link as={NavLink} to="/" className="text-white text-decoration-none py-3" style={{ opacity: 0.7, letterSpacing: '2px' }}>HOME</Nav.Link>
                <Nav.Link as={NavLink} to="/projects" className="text-white text-decoration-none py-3" style={{ opacity: 0.7, letterSpacing: '2px' }}>PROJECTS</Nav.Link>
                <Nav.Link as={NavLink} to="/curriculum" className="text-white text-decoration-none py-3" style={{ opacity: 0.7, letterSpacing: '2px' }}>RESUME</Nav.Link>
            </Nav>
        </div>
    );
};

export default SideNav;
