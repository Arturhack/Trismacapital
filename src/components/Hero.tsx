import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X, Instagram, Send, Youtube, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  React.useEffect(() => {
    const handleOpenCommunity = () => {
      setIsCommunityModalOpen(true);
    };
    window.addEventListener('open-community-modal', handleOpenCommunity);
    return () => window.removeEventListener('open-community-modal', handleOpenCommunity);
  }, []);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    window.dispatchEvent(new CustomEvent('open-section', { detail: 'trading' }));
    scrollTo('#ecosistema');
  };

  return (
    <div className="w-full bg-[#05070A] min-h-[92vh] flex items-center justify-center text-center px-6 md:px-12 relative overflow-hidden">
      {/* Cinematic Background Video: Me_gusta_la_introduccio_n_del_P_0b2b3ce1.mp4 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-25 scale-105 filter brightness-75 contrast-125"
        >
          <source src="/assets/aistudio/Me_gusta_la_introduccio_n_del_P_0b2b3ce1.mp4" type="video/mp4" />
        </video>
        {/* Cinematic gradient vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070A] via-[#05070A]/70 to-[#05070A]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#05070A]/60 to-[#05070A]" />
      </div>

      {/* Abstract background glow elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B5945B]/10 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Subtle audio toggle in bottom corner for video preview */}
      <button
        type="button"
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 right-6 z-20 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#05070A]/80 border border-white/10 text-xs text-slate-400 hover:text-[#B5945B] hover:border-[#B5945B]/40 transition-all backdrop-blur-md cursor-pointer"
        aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
        title={isMuted ? 'Audio intro' : 'Silenciar'}
      >
        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-[#B5945B]" />}
        <span className="text-[10px] tracking-wider uppercase font-semibold">Intro Sound</span>
      </button>

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <img src="/LOGOTRISMA.png" alt="Trisma Logo" className="h-24 md:h-32 object-contain mx-auto drop-shadow-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-[#B5945B] tracking-[0.3em] text-[10px] md:text-xs uppercase font-bold mb-6 block">
            {t.subtitle}
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-[#F8FAFC] tracking-tight mb-8 leading-[1.1]"
        >
          {t.title.split('. ')[0]}.<br />
          <span className="font-serif italic text-white/70">{t.title.split('. ')[1]}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          {t.desc}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={handleExploreClick}
            className="group relative bg-[#B5945B] text-[#05070A] font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#F8FAFC] transition-all duration-300 flex items-center cursor-pointer overflow-hidden shadow-lg"
          >
            <span className="relative z-10">{t.btn1}</span>
            <ChevronRight size={16} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-[#F8FAFC] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
          </button>
          
          <button 
            onClick={() => setIsCommunityModalOpen(true)}
            className="group text-[#F8FAFC] font-bold uppercase tracking-widest text-xs px-8 py-4 border border-white/20 hover:border-[#B5945B] hover:text-[#B5945B] transition-colors flex items-center cursor-pointer backdrop-blur-sm bg-[#05070A]/30"
          >
            <span>{t.btn2}</span>
          </button>
        </motion.div>
      </div>

      {/* Community Modal */}
      <AnimatePresence>
        {isCommunityModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#05070A]/90 backdrop-blur-sm"
            onClick={() => setIsCommunityModalOpen(false)}
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D1117] border border-white/10 w-full max-w-md p-8 relative flex flex-col text-left"
            >
              <button 
                onClick={() => setIsCommunityModalOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-light text-[#F8FAFC] mb-2">{t.communityModalTitle}</h2>
              <p className="text-slate-400 text-sm mb-8">{t.communityModalSub}</p>
              
              <div className="flex justify-center space-x-6 mb-8 py-4 border-y border-white/5">
                <a href="https://www.instagram.com/calderonstocks_tradeoficial?igsi=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#B5945B] hover:border-[#B5945B] transition-all cursor-pointer">
                  <Instagram size={20} />
                </a>
                <a href="https://t.me/Trismabot_agente_bot" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#B5945B] hover:border-[#B5945B] transition-all cursor-pointer">
                  <Send size={20} />
                </a>
                <a href="https://youtube.com/@trismatrading?si=-vOJqEsbIOt3n0Cm" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#B5945B] hover:border-[#B5945B] transition-all cursor-pointer">
                  <Youtube size={20} />
                </a>
              </div>

              <a 
                href="#contacto"
                onClick={() => setIsCommunityModalOpen(false)}
                className="w-full text-center bg-[#B5945B] text-[#05070A] font-bold uppercase tracking-widest text-xs py-4 hover:bg-[#F8FAFC] transition-colors cursor-pointer"
              >
                {t.signIn}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
