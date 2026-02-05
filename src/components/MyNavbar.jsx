import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = ({ onContactClick }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            if (isActive) toggleMenu();
        }
    };

    return (
        <header className="header-minimal">
            <a href="#home" className="logo-minimal" onClick={(e) => scrollToSection(e, 'home')}>
                AM
            </a>

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
                        {['About', 'Experience', 'Skills', 'Projects'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-white text-decoration-none display-5 fw-bold hover-opacity-50"
                                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            className="bg-transparent border-0 text-white text-decoration-none display-5 fw-bold hover-opacity-50"
                            onClick={() => { toggleMenu(); onContactClick(); }}
                        >
                            Contact
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default MyNavbar;
