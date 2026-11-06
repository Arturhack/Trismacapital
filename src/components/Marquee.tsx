import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const Marquee: React.FC = () => {
  const { language } = useLanguage();
  const words = translations[language].marquee;
  
  return (
    <div className="w-full bg-[#B5945B] text-[#05070A] py-3 overflow-hidden whitespace-nowrap relative border-b border-white/10 z-40">
      <div className="inline-block animate-[marquee_30s_linear_infinite]">
        {[...Array(2)].map((_, i) => (
          <span key={i} className="inline-flex items-center">
            {words.map((word, j) => (
              <React.Fragment key={`${i}-${j}`}>
                <span className="text-xs font-bold uppercase tracking-[0.2em] mx-6">
                  {word}
                </span>
                <span className="text-[#05070A]/30">✦</span>
              </React.Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};
