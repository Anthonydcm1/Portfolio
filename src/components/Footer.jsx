import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="text-center bg-black p-4">
                <p>©2026 Anthony Mendoza | All rights reserved</p>
                <div className="d-flex justify-content-center align-items-center gap-4 my-4 flex-wrap">
                    <a href="/#about" className="text-white text-decoration-none hover-opacity">About</a>
                    <a href="/#experience" className="text-white text-decoration-none hover-opacity">Experience</a>
                    <a href="/#tech" className="text-white text-decoration-none hover-opacity">Skills</a>
                    <a href="/#work" className="text-white text-decoration-none hover-opacity">Projects</a>
                    
                    <div className="ms-md-4 d-flex gap-3">
                        <a href="https://github.com/Anthonydcm1" className="text-white h5 hover-opacity m-0" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/anthonydcm1/" className="text-white h5 hover-opacity m-0" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="mailto:anthonydcm1@gmail.com" className="text-white h5 hover-opacity m-0"><FaEnvelope /></a>
                    </div>
                </div>
                <p>Created by Anthony Mendoza</p>
            </div>
        </footer>
    );
};

export default Footer;