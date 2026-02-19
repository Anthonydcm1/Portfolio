// Language context - manages PT / EN / ES translations across the app
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    PT: {
        nav: {
            about: "Sobre",
            experience: "Experiência",
            skills: "Skills",
            projects: "Projetos",
            contact: "Contacto",
            home: "Início",
            resume: "Currículo"
        },
        hero: {
            badge: "Anthony Correia",
            title: "Sou Anthony",
            btn_portfolio: "O Meu Portfólio",
            btn_cv: "Descarregar CV",
            btn_contact: "Contacto"
        },
        about: {
            title: "Sobre Mim",
            p1: "Construo interfaces rápidas, limpas e funcionais. Transformo ideias em produtos digitais eficientes e escaláveis.",
            p2: "Sou um developer focado em criar experiências digitais simples, intuitivas e de elevada performance. Trabalho tanto no Front-End, onde valorizo o design funcional e o código limpo, como no Back-End, garantindo uma arquitetura sólida e escalável. Gosto de resolver problemas complexos com soluções elegantes e de colaborar em projetos que exigem atenção ao detalhe e pensamento crítico.",
            services: ["Design", "Frontend", "Backend", "Lógica"]
        },
        experience: {
            title: "Experiência",
            items: [
                {
                    title: "Licenciatura em Ciências da Computação",
                    company_name: "U.E.C.P 'Rafael Maria Baralt'",
                    date: "2010 - 2011",
                    points: []
                },
                {
                    title: "Engenheiro de Sistemas",
                    company_name: "Instituto Universitário Politécnico Santiago Mariño",
                    date: "2011 - 2018",
                    points: []
                },
                {
                    title: "Frontend Developer",
                    company_name: "CESAE Digital",
                    date: "2025 - 2026",
                    points: ["Desenvolvimento de interfaces responsivas para clientes globais.", "Implementação de UI/UX."]
                }
            ]
        },
        projects: {
            title: "Portfólio",
            course: "Curso de Front-end Developer no Cesae Digital.",
            clinic: "Website moderno e responsivo para clínica dentária, focado na apresentação de serviços especializados e agendamento de consultas."
        },
        cta: {
            title: "Pronto para começar?",
            text: "Estou atualmente disponível para novos projetos e colaborações. Seja uma ideia específica ou apenas explorar possibilidades, adoraria ouvir-te.",
            btn: "Vamos Falar"
        },
        footer: {
            rights: "©2026 Anthony Correia | Todos os direitos reservados",
            created: "Criado por Anthony Correia",
            about: "Sobre",
            experience: "Experiência",
            skills: "Skills",
            projects: "Projetos",
            contact: "Contacto"
        }
    },

    EN: {
        nav: {
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            home: "Home",
            resume: "Resume"
        },
        hero: {
            badge: "Anthony Correia",
            title: "I'm Anthony",
            btn_portfolio: "My Portfolio",
            btn_cv: "Download CV",
            btn_contact: "Contact"
        },
        about: {
            title: "About Me",
            p1: "I build fast, clean, and functional interfaces. I turn ideas into efficient and scalable digital products.",
            p2: "I am a developer focused on creating simple, intuitive, and high-performance digital experiences. I work both on the Front-End, where I value functional design and clean code, and on the Back-End, ensuring solid and scalable architecture. I enjoy solving complex problems with elegant solutions and collaborating on projects that require attention to detail and critical thinking.",
            services: ["Design", "Frontend", "Backend", "Logic"]
        },
        experience: {
            title: "Experience",
            items: [
                {
                    title: "Bachelor's Degree in Computer Science",
                    company_name: "U.E.C.P 'Rafael Maria Baralt'",
                    date: "2010 - 2011",
                    points: []
                },
                {
                    title: "System Engineer",
                    company_name: "Instituto Universitário Politécnico Santiago Mariño",
                    date: "2011 - 2018",
                    points: []
                },
                {
                    title: "Frontend Developer",
                    company_name: "CESAE Digital",
                    date: "2025 - 2026",
                    points: ["Developing responsive UIs for global clients.", "UI/UX implementation."]
                }
            ]
        },
        projects: {
            title: "Portfolio",
            course: "Course of Front-end Developer at Cesae Digital.",
            clinic: "Modern and responsive website for a dental clinic, focused on showcasing specialized services and appointment scheduling."
        },
        cta: {
            title: "Ready to start?",
            text: "I'm currently open to new projects and collaborations. Whether you have a specific idea or just want to discuss possibilities, I'd love to hear from you.",
            btn: "Let's Talk"
        },
        footer: {
            rights: "©2026 Anthony Correia | All rights reserved",
            created: "Created by Anthony Correia",
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        }
    },

    ES: {
        nav: {
            about: "Sobre",
            experience: "Experiencia",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto",
            home: "Inicio",
            resume: "Currículum"
        },
        hero: {
            badge: "Anthony Correia",
            title: "Soy Anthony",
            btn_portfolio: "Mi Portafolio",
            btn_cv: "Descargar CV",
            btn_contact: "Contacto"
        },
        about: {
            title: "Sobre Mí",
            p1: "Construyo interfaces rápidas, limpias y funcionales. Convierto ideas en productos digitales eficientes y escalables.",
            p2: "Soy un desarrollador enfocado en crear experiencias digitales simples, intuitivas y de alto rendimiento. Trabajo tanto en el Front-End, donde valoro el diseño funcional y el código limpio, como en el Back-End, garantizando una arquitectura sólida y escalable. Me gusta resolver problemas complejos con soluciones elegantes y colaborar en proyectos que requieren atención al detalle y pensamiento crítico.",
            services: ["Diseño", "Frontend", "Backend", "Lógica"]
        },
        experience: {
            title: "Experiencia",
            items: [
                {
                    title: "Licenciatura en Ciencias de la Computación",
                    company_name: "U.E.C.P 'Rafael Maria Baralt'",
                    date: "2010 - 2011",
                    points: []
                },
                {
                    title: "Ingeniero de Sistemas",
                    company_name: "Instituto Universitário Politécnico Santiago Mariño",
                    date: "2011 - 2018",
                    points: []
                },
                {
                    title: "Frontend Developer",
                    company_name: "CESAE Digital",
                    date: "2025 - 2026",
                    points: ["Desarrollo de interfaces responsivas para clientes globales.", "Implementación de UI/UX."]
                }
            ]
        },
        projects: {
            title: "Portafolio",
            course: "Curso de Desarrollador Front-end en Cesae Digital.",
            clinic: "Sitio web moderno y adaptable para clínica dental, enfocado en la presentación de servicios especializados y reserva de citas."
        },
        cta: {
            title: "¿Listo para empezar?",
            text: "Actualmente estoy disponible para nuevos proyectos y colaboraciones. Ya sea una idea específica o solo explorar posibilidades, me encantaría escucharte.",
            btn: "Hablemos"
        },
        footer: {
            rights: "©2026 Anthony Correia | Todos los derechos reservados",
            created: "Creado por Anthony Correia",
            about: "Sobre",
            experience: "Experiencia",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto"
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('PT');

    const value = {
        language,
        setLanguage,
        t: translations[language]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
