import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import { translations } from '../translations';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const t = translations[language].nav;

  const links = [
    { name: t.inicio, href: '#inicio' },
    { name: t.ecosistema, href: '#ecosistema' },
    { name: t.catalogo, href: '#catalogo' },
    { name: t.aliados, href: '#partners' },
    { name: t.faq, href: '#faq' },
    { name: t.contacto, href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled ? 'bg-[#000000]/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
        {/* Logo area */}
        <div 
          className="cursor-pointer flex items-center opacity-90 hover:opacity-100 transition-opacity" 
          onClick={() => scrollTo('#inicio')}
        >
          <img src="/Trisma_icon_black_bg.png" alt="Trisma" className="h-6 md:h-7 object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 items-center">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-white/70 hover:text-white text-xs tracking-wide font-light transition-colors duration-300 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-[10px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10 rounded-full px-3 py-1 bg-white/5 hover:bg-white/10"
          >
            <span className={language === 'ES' ? 'text-white' : 'text-white/40'}>ES</span>
            <span className="text-white/20">/</span>
            <span className={language === 'EN' ? 'text-white' : 'text-white/40'}>EN</span>
          </button>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="flex md:hidden items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-[9px] font-bold tracking-widest text-slate-400 transition-colors cursor-pointer border border-white/10 rounded-full px-2 py-1 bg-white/5"
          >
            <span className={language === 'ES' ? 'text-white' : 'text-white/40'}>ES</span>
            <span className="text-white/20">/</span>
            <span className={language === 'EN' ? 'text-white' : 'text-white/40'}>EN</span>
          </button>
          
          <button
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full bg-[#000000]/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-8 py-6 space-y-6">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-white/80 hover:text-white text-lg font-light tracking-wide transition-colors duration-300 cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
