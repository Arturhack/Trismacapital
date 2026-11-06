import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      <span className="text-[#B5945B] tracking-[0.3em] text-[10px] uppercase font-bold mb-4 block">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-light text-[#F8FAFC] tracking-tight">
        {title}
      </h2>
      <div className={`h-px w-24 bg-[#B5945B]/50 mt-8 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};
