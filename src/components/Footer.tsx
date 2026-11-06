import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Instagram, Youtube, Send, ShieldCheck, AlertCircle, FileText, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const Footer: React.FC = () => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'refund' | 'privacy' | 'terms'>('refund');
  const { language } = useLanguage();
  const t = translations[language];

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLegal = (tab: 'refund' | 'privacy' | 'terms') => {
    setActiveTab(tab);
    setIsLegalOpen(true);
  };

  const contentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  useEffect(() => {
    const handleOpenLegalEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ tab?: 'refund' | 'privacy' | 'terms' }>;
      const targetTab = customEvent.detail?.tab || 'refund';
      setActiveTab(targetTab);
      setIsLegalOpen(true);
    };

    window.addEventListener('open-legal-modal', handleOpenLegalEvent);
    return () => {
      window.removeEventListener('open-legal-modal', handleOpenLegalEvent);
    };
  }, []);

  const currentYear = new Date().getFullYear();
  const legalData = t.footer.legal;

  return (
    <>
      <footer className="w-full bg-[#05070A] border-t border-white/10 pt-16 pb-8 px-6 md:px-12 text-[#F8FAFC]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col max-w-sm">
            <img src="/Trisma_icon_black_bg.png" alt="Trisma Capital" className="h-10 object-contain object-left mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/calderonstocks_tradeoficial?igsi=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#B5945B] hover:border-[#B5945B] transition-all cursor-pointer">
                <Instagram size={16} />
              </a>
              <a href="https://t.me/Trismabot_agente_bot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#B5945B] hover:border-[#B5945B] transition-all cursor-pointer">
                <Send size={16} />
              </a>
              <a href="https://youtube.com/@trismatrading?si=-vOJqEsbIOt3n0Cm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#B5945B] hover:border-[#B5945B] transition-all cursor-pointer">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[#B5945B] text-[10px] tracking-widest uppercase font-bold mb-2">{t.footer.explore}</h4>
            <button onClick={() => scrollTo('#inicio')} className="text-left text-slate-400 hover:text-white transition-colors text-sm cursor-pointer">{t.nav.inicio}</button>
            <button onClick={() => scrollTo('#ecosistema')} className="text-left text-slate-400 hover:text-white transition-colors text-sm cursor-pointer">{t.nav.ecosistema}</button>
            <button onClick={() => scrollTo('#catalogo')} className="text-left text-slate-400 hover:text-white transition-colors text-sm cursor-pointer">{t.nav.catalogo}</button>
            <button onClick={() => scrollTo('#partners')} className="text-left text-slate-400 hover:text-white transition-colors text-sm cursor-pointer">{t.nav.aliados}</button>
            <button onClick={() => scrollTo('#faq')} className="text-left text-slate-400 hover:text-white transition-colors text-sm cursor-pointer">{t.nav.faq}</button>
            <button onClick={() => scrollTo('#contacto')} className="text-left text-slate-400 hover:text-white transition-colors text-sm cursor-pointer">{t.nav.contacto}</button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 mb-6 gap-4">
          <p>&copy; {currentYear} Trisma Capital LLC. {t.footer.rights}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
            <button 
              onClick={() => openLegal('refund')} 
              className="text-slate-400 hover:text-[#B5945B] transition-colors cursor-pointer text-xs"
            >
              {t.footer.refundLink}
            </button>
            <span className="text-white/20 hidden sm:inline">•</span>
            <button 
              onClick={() => openLegal('privacy')} 
              className="text-slate-400 hover:text-[#B5945B] transition-colors cursor-pointer text-xs"
            >
              {t.footer.privacyLink}
            </button>
            <span className="text-white/20 hidden sm:inline">•</span>
            <button 
              onClick={() => openLegal('terms')} 
              className="text-slate-400 hover:text-[#B5945B] transition-colors cursor-pointer text-xs"
            >
              {t.footer.tc}
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center border-t border-white/5 pt-6 text-[10px] text-slate-600/70 space-y-2">
          <p className="uppercase tracking-widest text-[#B5945B]/60 font-bold mb-4">{t.footer.design}</p>
          <p className="max-w-4xl mx-auto leading-relaxed">
            {t.footer.disclaimer}
          </p>
        </div>
      </footer>

      {/* Comprehensive Legal Modal (Refund, Privacy, Terms) */}
      <AnimatePresence>
        {isLegalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-[#05070A]/90 backdrop-blur-md"
            onClick={() => setIsLegalOpen(false)}
          >
            <motion.div 
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D1117] border border-white/10 w-full max-w-4xl rounded-none relative flex flex-col max-h-[90vh] shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 md:p-8 border-b border-white/10 flex items-start justify-between bg-[#080B10] shrink-0">
                <div>
                  <div className="flex items-center space-x-2 text-[#B5945B] mb-2">
                    {activeTab === 'refund' && <ShieldCheck size={20} />}
                    {activeTab === 'privacy' && <Lock size={20} />}
                    {activeTab === 'terms' && <FileText size={20} />}
                    <span className="text-[11px] font-bold tracking-widest uppercase">Trisma Capital LLC Legal</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-light text-[#F8FAFC]">
                    {legalData[activeTab].title}
                  </h2>
                  <span className="inline-block mt-1 text-[11px] text-slate-500 font-mono">
                    {legalData[activeTab].updated}
                  </span>
                </div>

                <button 
                  onClick={() => setIsLegalOpen(false)}
                  className="p-2.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Spacious Navigation Tab Buttons (Generous Space & Full Visibility) */}
              <div className="shrink-0 bg-[#06090E] border-b border-white/10 p-3 sm:p-4 md:p-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  <button
                    onClick={() => setActiveTab('refund')}
                    className={`w-full min-h-[56px] px-4 py-3 sm:py-3.5 rounded-none flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer border ${
                      activeTab === 'refund'
                        ? 'bg-[#B5945B]/15 border-[#B5945B] text-[#B5945B] shadow-[0_0_20px_rgba(181,148,91,0.15)] font-bold'
                        : 'bg-[#0D1117] border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/25 hover:bg-white/[0.03]'
                    }`}
                  >
                    <ShieldCheck size={18} className="shrink-0 text-current" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-center leading-snug">
                      {legalData.tabs.refund}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab('privacy')}
                    className={`w-full min-h-[56px] px-4 py-3 sm:py-3.5 rounded-none flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer border ${
                      activeTab === 'privacy'
                        ? 'bg-[#B5945B]/15 border-[#B5945B] text-[#B5945B] shadow-[0_0_20px_rgba(181,148,91,0.15)] font-bold'
                        : 'bg-[#0D1117] border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/25 hover:bg-white/[0.03]'
                    }`}
                  >
                    <Lock size={18} className="shrink-0 text-current" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-center leading-snug">
                      {legalData.tabs.privacy}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab('terms')}
                    className={`w-full min-h-[56px] px-4 py-3 sm:py-3.5 rounded-none flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer border ${
                      activeTab === 'terms'
                        ? 'bg-[#B5945B]/15 border-[#B5945B] text-[#B5945B] shadow-[0_0_20px_rgba(181,148,91,0.15)] font-bold'
                        : 'bg-[#0D1117] border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/25 hover:bg-white/[0.03]'
                    }`}
                  >
                    <FileText size={18} className="shrink-0 text-current" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-center leading-snug">
                      {legalData.tabs.terms}
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Scrollable Content Body with Dedicated Flex Scroll */}
              <div 
                ref={contentRef}
                className="flex-1 min-h-0 overflow-y-auto p-6 sm:p-8 md:p-10 space-y-6 text-slate-300 text-sm leading-relaxed"
              >
                {/* Intro */}
                <p className="text-slate-400 italic bg-[#05070A]/60 p-4 border-l-2 border-[#B5945B]">
                  {legalData[activeTab].intro}
                </p>

                {/* Sections */}
                {legalData[activeTab].sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3 pt-2">
                    <h3 className="text-white text-base font-medium flex items-center">
                      <span className="text-[#B5945B] mr-2">▪</span>
                      {sec.title}
                    </h3>

                    {sec.text && (
                      <p className="text-slate-400 leading-relaxed pl-4">
                        {sec.text}
                      </p>
                    )}

                    {sec.bullets && sec.bullets.length > 0 && (
                      <ul className="space-y-2.5 pl-6 pt-1">
                        {sec.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-slate-300 text-sm list-disc leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Fraud Highlight Note in Refund tab */}
                    {activeTab === 'refund' && idx === 2 && (
                      <div className="mt-4 p-4 bg-red-950/20 border border-red-500/30 text-red-200/90 text-xs flex items-start space-x-3">
                        <AlertCircle size={18} className="shrink-0 text-red-400 mt-0.5" />
                        <p>
                          {language === 'ES' 
                            ? 'Aviso de prevención: Cualquier contracargo injustificado o disputa de pago de productos descargados será documentado formalmente y remitido al departamento de riesgos de Stripe con evidencia técnica y direcciones IP registradas.'
                            : 'Notice: Any unauthorized chargeback or payment dispute for downloaded digital assets will be formally disputed with technical logs and IP verification systematically presented to Stripe risk mitigation.'}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Bottom Quick Section Switcher */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                  <span className="text-slate-500">
                    {language === 'ES' ? 'Explorar otras secciones:' : 'Explore other sections:'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeTab !== 'refund' && (
                      <button 
                        onClick={() => setActiveTab('refund')} 
                        className="px-3 py-1.5 bg-white/5 hover:bg-[#B5945B]/15 hover:text-[#B5945B] border border-white/10 transition-colors cursor-pointer text-xs"
                      >
                        ← {legalData.tabs.refund}
                      </button>
                    )}
                    {activeTab !== 'privacy' && (
                      <button 
                        onClick={() => setActiveTab('privacy')} 
                        className="px-3 py-1.5 bg-white/5 hover:bg-[#B5945B]/15 hover:text-[#B5945B] border border-white/10 transition-colors cursor-pointer text-xs"
                      >
                        {legalData.tabs.privacy}
                      </button>
                    )}
                    {activeTab !== 'terms' && (
                      <button 
                        onClick={() => setActiveTab('terms')} 
                        className="px-3 py-1.5 bg-white/5 hover:bg-[#B5945B]/15 hover:text-[#B5945B] border border-white/10 transition-colors cursor-pointer text-xs"
                      >
                        {legalData.tabs.terms} →
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-white/10 bg-[#080B10] flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
                <span className="text-[11px] text-slate-500">
                  Trisma Capital LLC • {language === 'ES' ? 'Cumplimiento Legal' : 'Legal Compliance'}
                </span>
                <button 
                  onClick={() => setIsLegalOpen(false)}
                  className="w-full sm:w-auto bg-[#B5945B] text-[#05070A] font-bold uppercase tracking-widest text-xs py-3 px-8 hover:bg-[#F8FAFC] transition-colors cursor-pointer text-center"
                >
                  {legalData.closeBtn}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

