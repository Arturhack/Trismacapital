import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { MapPin, Mountain, Award, Sparkles, Coffee, HeartHandshake, ArrowRight } from 'lucide-react';

export const CoffeePartners: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].partners;

  // Curated media per partner - using unique rich assets so nothing repeats
  const partnerMedia = [
    {
      type: 'image',
      src: '/assets/aistudio/Gemini_Generated_Image_qepiezqepiezqepi_067cedc5.jpeg',
      alt: 'Fincas Campesinas Cafeteras'
    },
    {
      type: 'video',
      src: '/assets/aistudio/Vamos_a_crear_un_video_con_est_42ebd496.mp4',
      alt: 'Tostaduría Artesanal de Especialidad'
    },
    {
      type: 'image',
      src: '/coffee_cup.png',
      alt: 'Laboratorio Sensorial & Catación Q-Grader'
    },
    {
      type: 'image',
      src: '/coffee_map.png',
      alt: 'Red de Baristas & Cafés de Autor'
    }
  ];

  const partnerIcons = [
    <Mountain size={20} className="text-[#B5945B]" />,
    <Sparkles size={20} className="text-[#B5945B]" />,
    <Award size={20} className="text-[#B5945B]" />,
    <Coffee size={20} className="text-[#B5945B]" />
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="partners" className="w-full bg-[#05070A] text-[#F8FAFC] py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#B5945B]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-amber-900/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader title={t.title} subtitle={t.sub} align="center" />

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
            {t.desc}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {t.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0D1117] border border-white/10 p-6 flex flex-col items-center text-center relative group hover:border-[#B5945B]/40 transition-colors"
            >
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#B5945B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-3xl md:text-4xl font-light text-[#B5945B] tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F8FAFC] mb-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-500">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Partners Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t.list.map((partner, idx) => {
            const media = partnerMedia[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#0D1117] border border-white/10 hover:border-[#B5945B]/50 transition-all duration-300 flex flex-col group overflow-hidden relative shadow-xl"
              >
                {/* Image/Video banner */}
                <div className="relative h-60 w-full overflow-hidden bg-[#161B22]">
                  {media.type === 'video' ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    >
                      <source src={media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={media.src} 
                      alt={media.alt || partner.name} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" 
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/30 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 bg-[#05070A]/80 backdrop-blur-md border border-white/10 px-3 py-1.5">
                    {partnerIcons[idx]}
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#B5945B]">
                      {partner.category}
                    </span>
                  </div>
                </div>

                {/* Partner Details */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-light text-[#F8FAFC] mb-4 group-hover:text-[#B5945B] transition-colors leading-snug">
                    {partner.name}
                  </h3>

                  {/* Specs / Tags */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-y border-white/10 mb-6 text-xs text-slate-400">
                    <div className="flex items-center space-x-2">
                      <MapPin size={14} className="text-[#B5945B] shrink-0" />
                      <span className="truncate">{partner.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mountain size={14} className="text-[#B5945B] shrink-0" />
                      <span className="truncate">{partner.elevation}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:col-span-2">
                      <Coffee size={14} className="text-[#B5945B] shrink-0" />
                      <span className="truncate"><strong className="text-slate-300 font-normal">{language === 'EN' ? 'Varieties:' : 'Variedades:'}</strong> {partner.varieties}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                    {partner.description}
                  </p>

                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B5945B] bg-[#B5945B]/10 px-3 py-1.5 border border-[#B5945B]/20">
                      {partner.process}
                    </span>
                    <button
                      onClick={scrollToContact}
                      className="text-xs text-slate-400 hover:text-white flex items-center space-x-1.5 transition-colors cursor-pointer group/link"
                    >
                      <span>{t.ctaBtn}</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform text-[#B5945B]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership Call to Action banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0D1117] via-[#161B22] to-[#0D1117] border border-[#B5945B]/30 p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <HeartHandshake size={36} className="text-[#B5945B] mb-4" />
            <h3 className="text-2xl md:text-3xl font-light text-[#F8FAFC] mb-4">
              {language === 'EN' ? 'Are you a coffee grower or artisanal roaster?' : '¿Eres productor o tostador de café de especialidad?'}
            </h3>
            <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed font-light">
              {language === 'EN' 
                ? 'Join the Trisma Capital network. We connect financial liquidity with direct origin investment, without intermediaries.' 
                : 'Únete a la red de aliados de Trisma Capital. Conectamos la liquidez de los mercados bursátiles con inversión directa en origen sin intermediarios.'}
            </p>
            <button
              onClick={scrollToContact}
              className="bg-[#B5945B] text-[#05070A] font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#F8FAFC] transition-colors cursor-pointer shadow-lg"
            >
              {language === 'EN' ? 'Partner with Trisma' : 'Ser Aliado Trisma'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
