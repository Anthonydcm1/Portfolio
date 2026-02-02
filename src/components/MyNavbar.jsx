import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="header-minimal">
            <Link to="/" className="logo-minimal">
                AM
            </Link>

            <div className="menu-btn" onClick={toggleMenu}>
                <div className="menu-line"></div>
                <div className="menu-line" style={{ width: '20px', marginLeft: 'auto' }}></div>
            </div>

            {/* Simple Overlay Menu matching the template feel */}
            {isActive && (
                <div className="position-fixed top-0 start-0 w-100 vh-100 d-flex flex-column align-items-center justify-content-center"
                    style={{ backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1000 }}>
                    <div className="position-absolute top-0 end-0 p-5 menu-btn" onClick={toggleMenu}>
                        <div className="text-white fs-1">×</div>
                    </div>
                    <nav className="d-flex flex-column align-items-center gap-4">
                        {['About', 'Experience', 'Tech', 'Work', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`/#${item.toLowerCase()}`}
                                className="text-white text-decoration-none display-5 fw-bold hover-opacity-50"
                                onClick={toggleMenu}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-decoration-none display-5 fw-bold hover-opacity-50"
                            onClick={toggleMenu}
                        >
                            Resume
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default MyNavbar;
