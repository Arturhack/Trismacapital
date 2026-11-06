import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ES' | 'EN';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ES',
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ES');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved === 'ES' || saved === 'EN') {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'ES' ? 'EN' : 'ES';
      localStorage.setItem('language', next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
