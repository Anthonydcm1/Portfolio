import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const languages = ['PT', 'EN', 'ES'];

    return (
        <div className="language-switcher">
            {languages.map((lang, index) => (
                <React.Fragment key={lang}>
                    <button
                        className={`lang-btn ${language === lang ? 'active' : ''}`}
                        onClick={() => setLanguage(lang)}
                    >
                        {lang}
                    </button>
                    {index < languages.length - 1 && <span className="lang-separator">|</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
