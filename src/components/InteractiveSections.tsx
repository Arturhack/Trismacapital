import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const GridImage: React.FC<{ src: string; alt: string; opacityClass?: string }> = ({ src, alt, opacityClass = "opacity-20 group-hover:opacity-40" }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? opacityClass : 'opacity-0'}`}
      onLoad={() => setLoaded(true)}
    />
  );
};

interface SectionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
}

export const InteractiveSections: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = translations[language].sections;

  React.useEffect(() => {
    const handleOpenSection = (e: any) => {
      if (e.detail) {
        setSelectedId(e.detail);
      }
    };
    window.addEventListener('open-section', handleOpenSection);
    return () => window.removeEventListener('open-section', handleOpenSection);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const sections: SectionItem[] = [
    {
      id: 'trading',
      number: '01',
      title: t.tradingTitle,
      description: t.tradingDesc,
      video: '/assets/aistudio/PROTOTIPO_1_Filosofi_a_de_Inversio_n_y_Formacio_n_de_Portafolios_a_Largo_Plazo_ab500c4d.mp4',
      image: '/nasdaq_img.jpeg',
    },
    {
      id: 'educacion',
      number: '02',
      title: t.eduTitle,
      description: t.eduDesc,
      video: '/assets/aistudio/Quiero_que_me_crees_un_video_p_f9eab572.mp4',
      image: '/IAMGENCLARATRSIMA.png',
    },
    {
      id: 'cafe',
      number: '03',
      title: t.cafeTab,
      description: t.cafeDesc,
      video: '/assets/aistudio/Vamos_a_crear_un_video_con_est_42ebd496.mp4',
      image: '/assets/aistudio/Gemini_Generated_Image_qepiezqepiezqepi_067cedc5.jpeg',
    }
  ];

  return (
    <div className="w-full bg-[#05070A] text-[#F8FAFC] py-24 px-6 md:px-12 relative min-h-[500px] flex flex-col items-center justify-center">
      <SectionHeader title={t.header} subtitle={t.sub} align="center" />
      
      <div className="max-w-7xl mx-auto w-full relative">
        <AnimatePresence mode="wait">
          {selectedId === null ? (
            <motion.div 
              key="grid"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  layoutId={`container-${section.id}`}
                  onClick={() => setSelectedId(section.id)}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer border border-white/10 p-12 flex flex-col items-center justify-center min-h-[320px] hover:border-[#B5945B]/50 transition-colors bg-[#0D1117] relative overflow-hidden"
                >
                  {/* Media background for cards */}
                  {section.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                    >
                      <source src={section.video} type="video/mp4" />
                    </video>
                  ) : (
                    <GridImage 
                      src={section.image!} 
                      alt={section.title} 
                      opacityClass="opacity-20 group-hover:opacity-40"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/60 to-[#0D1117]/50 z-0"></div>
                  
                  <motion.p layoutId={`number-${section.id}`} className="relative z-10 text-[#B5945B] tracking-widest text-[10px] mb-4 uppercase font-bold" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                    {section.number}
                  </motion.p>
                  <motion.h2 layoutId={`title-${section.id}`} className="relative z-10 text-3xl font-light text-center" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                    {section.title}
                  </motion.h2>
                  <div className="relative z-10 mt-6 flex items-center space-x-2 text-xs font-semibold text-[#B5945B] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <span>{language === 'EN' ? 'Explore pillar' : 'Explorar pilar'}</span>
                    <ChevronRight size={14} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div key="expanded" className="w-full flex justify-center">
              {sections.filter(s => s.id === selectedId).map(section => (
                <motion.div
                  key={section.id}
                  layoutId={`container-${section.id}`}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset }) => {
                    const swipeThreshold = 50;
                    if (offset.x < -swipeThreshold) {
                      const currentIndex = sections.findIndex(s => s.id === section.id);
                      const nextIndex = (currentIndex === sections.length - 1) ? 0 : currentIndex + 1;
                      setSelectedId(sections[nextIndex].id);
                    } else if (offset.x > swipeThreshold) {
                      const currentIndex = sections.findIndex(s => s.id === section.id);
                      const prevIndex = (currentIndex === 0) ? sections.length - 1 : currentIndex - 1;
                      setSelectedId(sections[prevIndex].id);
                    }
                  }}
                  className="w-full max-w-5xl border border-white/10 overflow-hidden bg-[#0D1117] relative flex flex-col md:flex-row touch-pan-y"
                >
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-[50%] md:translate-x-1/2 z-50 flex space-x-6 md:space-x-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = sections.findIndex(s => s.id === section.id);
                        const prevIndex = (currentIndex === 0) ? sections.length - 1 : currentIndex - 1;
                        setSelectedId(sections[prevIndex].id);
                      }}
                      className="p-4 md:p-2 bg-[#05070A]/50 border border-white/10 text-white/70 hover:text-white hover:bg-[#05070A] transition-colors cursor-pointer flex items-center justify-center rounded-full md:rounded-none shadow-lg md:shadow-none"
                      aria-label="Anterior"
                    >
                      <ChevronLeft size={24} strokeWidth={1.5} className="md:w-5 md:h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = sections.findIndex(s => s.id === section.id);
                        const nextIndex = (currentIndex === sections.length - 1) ? 0 : currentIndex + 1;
                        setSelectedId(sections[nextIndex].id);
                      }}
                      className="p-4 md:p-2 bg-[#05070A]/50 border border-white/10 text-white/70 hover:text-white hover:bg-[#05070A] transition-colors cursor-pointer flex items-center justify-center rounded-full md:rounded-none shadow-lg md:shadow-none"
                      aria-label="Siguiente"
                    >
                      <ChevronRight size={24} strokeWidth={1.5} className="md:w-5 md:h-5" />
                    </button>
                  </div>

                  <div className="flex-1 p-10 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 relative z-20 bg-[#0D1117]/95">
                    {/* Close button placed safely on text column so it never blocks video or volume slider */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                      className="absolute top-4 right-4 md:top-6 md:right-6 z-30 p-2.5 bg-[#05070A]/80 border border-white/15 text-white/70 hover:text-white hover:bg-[#05070A] hover:border-[#B5945B]/60 transition-all cursor-pointer rounded-full flex items-center justify-center shadow-xl"
                      aria-label="Cerrar"
                      title="Cerrar (Esc)"
                    >
                      <X size={18} strokeWidth={2} />
                    </button>

                    <motion.p layoutId={`number-${section.id}`} className="text-[#B5945B] tracking-widest text-[10px] mb-4 uppercase font-bold" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                      {section.id === 'cafe' ? t.cafeSub : `${section.number} — ${section.title}`}
                    </motion.p>
                    <motion.h2 layoutId={`title-${section.id}`} className="text-3xl md:text-5xl font-light text-[#F8FAFC] mb-6 leading-tight" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                      {section.id === 'cafe' ? t.cafeTitle : section.title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg font-light"
                    >
                      {section.description}
                    </motion.p>

                    {section.id === 'cafe' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="w-full mt-8 max-w-md"
                      >
                        <button 
                          type="button" 
                          onClick={() => {
                            window.dispatchEvent(new CustomEvent('open-community-modal'));
                          }}
                          className="bg-[#B5945B] text-[#05070A] font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#F8FAFC] transition-all cursor-pointer inline-flex items-center justify-center shadow-lg hover:shadow-xl"
                        >
                          {t.cafeBtn}
                        </button>
                      </motion.div>
                    )}
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex-1 min-h-[340px] md:min-h-full relative bg-[#05070A] overflow-hidden flex items-center justify-center"
                  >
                    {section.video ? (
                      <div className="relative w-full h-full min-h-[340px]">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls
                          className="w-full h-full object-cover"
                        >
                          <source src={section.video} type="video/mp4" />
                        </video>
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0D1117] to-transparent pointer-events-none"></div>
                      </div>
                    ) : (
                      <GridImage 
                        src={section.image!} 
                        alt={section.title} 
                        opacityClass="opacity-90"
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
