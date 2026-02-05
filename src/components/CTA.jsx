import React from 'react';
import { Container } from 'react-bootstrap';

const CTA = ({ onContactClick }) => {
    return (
        <section className="py-5" style={{ backgroundColor: '#111' }}>
            <Container className="text-center py-5" data-aos="zoom-in">
                <div className="section-title-wrapper border-0 p-0 mb-4 text-center">
                    <h2 className="display-3 fw-bold mb-3">Ready to start?</h2>
                </div>
                <p className="opacity-75 mb-5 mx-auto" style={{ maxWidth: '700px', fontSize: '1.2rem' }}>
                    I'm currently open to new projects and collaborations.
                    Whether you have a specific idea or just want to discuss possibilities,
                    I'd love to hear from you.
                </p>
                <button
                    onClick={onContactClick}
                    className="btn-minimal bg-white text-black border-white px-5 py-3"
                    style={{ fontSize: '1.1rem', borderRadius: '50px' }}
                >
                    Let's Talk
                </button>
            </Container>
        </section>
    );
};

export default CTA;
