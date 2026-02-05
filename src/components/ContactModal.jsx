import React, { useState } from 'react';
import { Modal, Alert } from 'react-bootstrap';

const ContactModal = ({ show, handleClose }) => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xaqdwozn", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                setTimeout(() => {
                    handleClose();
                    setStatus("");
                    form.reset();
                }, 2000);
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered contentClassName="bg-black border-secondary">
            <Modal.Header closeButton closeVariant="white" className="border-secondary">
                <Modal.Title className="text-white fw-bold">Let's Work Together</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
                {status === "SUCCESS" && (
                    <Alert variant="success" className="mb-4 bg-transparent text-success border-success">
                        Message sent successfully! I'll get back to you soon.
                    </Alert>
                )}
                {status === "ERROR" && (
                    <Alert variant="danger" className="mb-4 bg-transparent text-danger border-danger">
                        Oops! An error occurred while sending the message.
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" className="contact-input" required />
                    <input type="email" name="email" placeholder="Email" className="contact-input" required />
                    <textarea name="message" rows="4" placeholder="Your Message" className="contact-input" required></textarea>
                    <button type="submit" className="btn-minimal w-100 m-0">Send Message</button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default ContactModal;
