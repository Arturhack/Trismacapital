import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const FAQSkeleton = () => (
  <div className="border-b border-white/10 py-8 flex items-center justify-between animate-pulse">
    <div className="w-3/4 h-6 bg-[#1A1F26]" />
    <div className="w-5 h-5 bg-[#1A1F26] rounded-full" />
  </div>
);

const AccordionItem: React.FC<{ question: string, answer: string, isOpen: boolean, onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
      >
        <span className={`text-lg font-light transition-colors ${isOpen ? 'text-[#B5945B]' : 'text-[#F8FAFC] group-hover:text-[#B5945B]'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 ml-4 ${isOpen ? 'text-[#B5945B]' : 'text-slate-400 group-hover:text-[#B5945B]'}`}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 leading-relaxed pb-8 pr-8 text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const t = translations[language].faq;

  useEffect(() => {
    // Simulate loading delay for demonstration of shimmer effect
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    { question: t.q1, answer: t.a1 },
    { question: t.q2, answer: t.a2 },
    { question: t.q3, answer: t.a3 },
    { question: t.q4, answer: t.a4 },
    { question: t.q5, answer: t.a5 }
  ];

  return (
    <div className="w-full bg-[#05070A] text-[#F8FAFC] py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title={t.title} subtitle={t.sub} align="center" />
        
        <div className="flex flex-col border-t border-white/10">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="skeletons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {[1, 2, 3, 4, 5].map(item => (
                  <FAQSkeleton key={`skeleton-${item}`} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
