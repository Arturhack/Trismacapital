/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Marquee } from './components/Marquee';
import { Hero } from './components/Hero';
import { InteractiveSections } from './components/InteractiveSections';
import { CourseCatalog } from './components/CourseCatalog';
import { CoffeePartners } from './components/CoffeePartners';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './context/LanguageContext';

const Divider = () => (
  <div className="w-full h-px bg-white/5 max-w-7xl mx-auto"></div>
);

const FadeInSection = ({ children, delay = 0, id, className = "" }: { children: React.ReactNode; delay?: number; id?: string; className?: string }) => (
  <motion.div
    id={id}
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#05070A] font-sans text-[#F8FAFC] overflow-x-hidden pt-20">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Marquee />
          
          <div id="inicio" className="scroll-mt-20">
            <Hero />
          </div>
          
          <Divider />
          
          <FadeInSection id="ecosistema" className="scroll-mt-20">
            <InteractiveSections />
          </FadeInSection>
          
          <Divider />
          
          <FadeInSection id="catalogo" className="scroll-mt-20">
            <CourseCatalog />
          </FadeInSection>
          
          <Divider />
          
          <FadeInSection id="partners" className="scroll-mt-20">
            <CoffeePartners />
          </FadeInSection>
          
          <Divider />
          
          <FadeInSection id="faq" className="scroll-mt-20">
            <FAQ />
          </FadeInSection>
          
          <Divider />
          
          <FadeInSection id="contacto" className="scroll-mt-20">
            <ContactForm />
          </FadeInSection>
          
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
