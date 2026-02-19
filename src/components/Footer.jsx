// Footer - uses language context for translated navigation links
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import VisitCounter from './VisitCounter';
import { useLanguage } from '../context/LanguageContext';

const Footer = ({ onContactClick }) => {
    const { t } = useLanguage();

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer>
            <div className="text-center bg-black footer-container">
                <p className="mb-2">{t.footer.rights}</p>
                <div className="d-flex justify-content-center align-items-center gap-4 my-4 flex-wrap">
                    <a href="#about" className="text-white text-decoration-none hover-opacity" onClick={(e) => scrollToSection(e, 'about')}>{t.footer.about}</a>
                    <a href="#experience" className="text-white text-decoration-none hover-opacity" onClick={(e) => scrollToSection(e, 'experience')}>{t.footer.experience}</a>
                    <a href="#skills" className="text-white text-decoration-none hover-opacity" onClick={(e) => scrollToSection(e, 'skills')}>{t.footer.skills}</a>
                    <a href="#projects" className="text-white text-decoration-none hover-opacity" onClick={(e) => scrollToSection(e, 'projects')}>{t.footer.projects}</a>
                    <button onClick={onContactClick} className="bg-transparent border-0 p-0 text-white text-decoration-none hover-opacity">{t.footer.contact}</button>

                    <div className="ms-md-4 d-flex gap-3">
                        <a href="https://github.com/Anthonydcm1" className="text-white h5 hover-opacity m-0" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/anthonydcm1/" className="text-white h5 hover-opacity m-0" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="mailto:anthonydcm1@gmail.com" className="text-white h5 hover-opacity m-0"><FaEnvelope /></a>
                    </div>
                </div>
                <p className="m-0">{t.footer.created}</p>
                <VisitCounter />
            </div>
        </footer>
    );
};

export default Footer;