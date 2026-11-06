import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronRight, ChevronLeft, Check, X, ShieldAlert, ArrowLeft, ExternalLink, CreditCard } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center bg-white overflow-y-auto" dangerouslySetInnerHTML={{ __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DbtmisHTaEU/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DbtmisHTaEU/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DbtmisHTaEU/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Jaime Figueroa Calderon (@calderonstocks_tradeoficial)</a></p></div></blockquote>`}} />
  );
};

const CourseSkeleton = () => (
  <div className="bg-[#0D1117] border border-white/10 flex flex-col h-full overflow-hidden animate-pulse">
    <div className="h-48 w-full bg-[#1A1F26]" />
    <div className="p-8 flex flex-col flex-grow">
      <div className="w-16 h-5 bg-[#1A1F26] mb-6" />
      <div className="w-3/4 h-8 bg-[#1A1F26] mb-2" />
      <div className="w-1/3 h-4 bg-[#1A1F26] mb-6" />
      <div className="flex-grow space-y-3 mb-10">
        <div className="w-full h-3 bg-[#1A1F26]" />
        <div className="w-full h-3 bg-[#1A1F26]" />
        <div className="w-2/3 h-3 bg-[#1A1F26]" />
      </div>
      <div className="mt-auto pt-6 border-t border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-20 h-6 bg-[#1A1F26]" />
          <div className="w-24 h-6 bg-[#1A1F26]" />
        </div>
        <div className="w-full h-11 bg-[#1A1F26]" />
      </div>
    </div>
  </div>
);

const CourseCardMedia: React.FC<{ src: string; alt: string; videoSrc?: string }> = ({ src, alt, videoSrc }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative h-48 w-full bg-[#1A1F26] overflow-hidden group/media">
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'opacity-80 scale-100 group-hover:scale-105' : 'opacity-0 scale-105'}`}
          onLoad={() => setLoaded(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-transparent z-10"></div>
    </div>
  );
};

type CategoryKey = 'TRADING' | 'CAFE';
type Course = { 
  id: number; 
  category: CategoryKey; 
  title: string; 
  level: string; 
  description: string; 
  price: string; 
  image: string; 
  video?: string;
  paymentUrl: string;
};

export const CourseCatalog: React.FC = () => {
  const [filter, setFilter] = useState<CategoryKey>('TRADING');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showMentorBio, setShowMentorBio] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const t = translations[language].catalog;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCourse(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Distinct videos and non-repeating rich images with direct Stripe payment checkout links
  const courses: Course[] = [
    {
      id: 1,
      category: 'TRADING',
      title: t.tradingC1.title,
      level: t.tradingC1.level,
      description: t.tradingC1.desc,
      price: '$99 USD',
      image: '/IAMGENCLARATRSIMA.png',
      video: '/assets/aistudio/PROTOTIPO_1_Filosofi_a_de_Inversio_n_y_Formacio_n_de_Portafolios_a_Largo_Plazo_ab500c4d.mp4',
      paymentUrl: 'https://buy.stripe.com/4gM6oIe5ucrfew14F64ko02'
    },
    {
      id: 2,
      category: 'TRADING',
      title: t.tradingC2.title,
      level: t.tradingC2.level,
      description: t.tradingC2.desc,
      price: '$149 USD',
      image: '/nasdaq_img.jpeg',
      paymentUrl: 'https://buy.stripe.com/dRm28se5uaj75Zvc7y4ko03'
    },
    {
      id: 3,
      category: 'TRADING',
      title: t.tradingC3.title,
      level: t.tradingC3.level,
      description: t.tradingC3.desc,
      price: '$250 USD',
      image: '/coffee_map.png',
      video: '/assets/aistudio/Quiero_que_me_crees_un_video_p_f9eab572.mp4',
      paymentUrl: 'https://buy.stripe.com/6oU28s7H60IxfA5fjK4ko04'
    },
    {
      id: 4,
      category: 'TRADING',
      title: t.tradingC4.title,
      level: t.tradingC4.level,
      description: t.tradingC4.desc,
      price: '$250 USD',
      image: '/LOGOTRISMA.png',
      paymentUrl: 'https://buy.stripe.com/00waEY7H676VcnT9Zq4ko05'
    },
    // Unique Coffee Course
    {
      id: 5,
      category: 'CAFE',
      title: t.coffeeCourse.title,
      level: t.coffeeCourse.level,
      description: t.coffeeCourse.desc,
      price: '$99 USD',
      image: '/assets/aistudio/Gemini_Generated_Image_qepiezqepiezqepi_067cedc5.jpeg',
      video: '/assets/aistudio/Vamos_a_crear_un_video_con_est_42ebd496.mp4',
      paymentUrl: 'https://buy.stripe.com/4gM4gA0eE4YNdrX5Ja4ko08'
    }
  ];

  const filteredCourses = courses.filter(
    course => course.category === filter
  );

  const handleNavigate = (e: React.MouseEvent, direction: number) => {
    e.stopPropagation();
    if (!selectedCourse) return;
    
    const currentIndex = filteredCourses.findIndex(c => c.id === selectedCourse.id);
    if (currentIndex === -1) return;
    
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = filteredCourses.length - 1;
    if (nextIndex >= filteredCourses.length) nextIndex = 0;
    
    setSelectedCourse(filteredCourses[nextIndex]);
    setShowMentorBio(false);
  };

  return (
    <div className="w-full bg-[#05070A] text-[#F8FAFC] py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={t.title} subtitle={t.sub} align="center" />
        
        {/* Category Filters: ONLY TRADING and CAFÉ (TODOS deleted) */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-[#0D1117] border border-white/10 rounded-none space-x-2">
            {(['TRADING', 'CAFE'] as CategoryKey[]).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all cursor-pointer ${
                  filter === cat 
                    ? 'bg-[#B5945B] text-[#05070A] shadow-lg shadow-[#B5945B]/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {t.filters[cat]}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div 
                key="skeletons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={filter === 'CAFE' ? "max-w-xl mx-auto w-full" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"}
              >
                {(filter === 'CAFE' ? [1] : [1, 2, 3, 4]).map(item => (
                  <CourseSkeleton key={`skeleton-${item}`} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key={filter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={filteredCourses.length === 1 ? "max-w-xl mx-auto w-full" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"}
              >
                {filteredCourses.map(course => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#0D1117] border border-white/10 flex flex-col hover:border-[#B5945B]/50 transition-colors overflow-hidden group shadow-xl"
                  >
                    <CourseCardMedia src={course.image} alt={course.title} videoSrc={course.video} />
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="inline-block px-3 py-1 bg-[#05070A] border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-widest w-fit mb-6">
                        {t.filters[course.category]}
                      </div>
                      
                      <h3 className="text-2xl font-light mb-2 leading-tight">{course.title}</h3>
                      <p className="text-[#B5945B] text-xs uppercase tracking-widest mb-6">{t.level}: {course.level}</p>
                      
                      <p className="text-slate-400 leading-relaxed mb-10 flex-grow text-sm font-light">
                        {course.description}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t border-white/10 flex flex-col space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                              {language === 'EN' ? 'Price' : 'Precio'}
                            </span>
                            <span className="text-xl font-light text-[#B5945B] tracking-tight">{course.price}</span>
                          </div>
                          <button 
                            onClick={() => setSelectedCourse(course)}
                            className="text-slate-400 hover:text-white hover:border-[#B5945B]/50 font-bold text-[11px] transition-colors uppercase tracking-[0.15em] cursor-pointer px-3 py-1.5 border border-white/10 inline-flex items-center space-x-1"
                          >
                            <span>{t.view}</span>
                            <ChevronRight size={13} />
                          </button>
                        </div>
                        
                        <a 
                          href={course.paymentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full bg-[#B5945B] text-[#05070A] hover:bg-[#F8FAFC] font-bold text-xs py-3.5 px-4 transition-all uppercase tracking-widest cursor-pointer inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-[#B5945B]/25 group/btn"
                        >
                          <CreditCard size={15} className="shrink-0 group-hover/btn:scale-110 transition-transform" />
                          <span>{t.payBtn || (language === 'EN' ? 'Pay / Enroll' : 'Pagar / Inscribirme')}</span>
                          <ExternalLink size={13} className="ml-0.5 shrink-0 opacity-70 group-hover/btn:opacity-100" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal Detail */}
        <AnimatePresence>
          {selectedCourse && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#05070A]/90 backdrop-blur-sm"
              onClick={() => setSelectedCourse(null)}
            >
              <div className="absolute inset-y-0 left-4 md:left-8 z-50 flex items-center pointer-events-none">
                <button
                  onClick={(e) => handleNavigate(e, -1)}
                  className="p-3 bg-[#0D1117]/80 hover:bg-[#B5945B] hover:text-[#05070A] text-white border border-white/10 transition-colors pointer-events-auto cursor-pointer"
                  aria-label="Curso anterior"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>

              <div className="absolute inset-y-0 right-4 md:right-8 z-50 flex items-center pointer-events-none">
                <button
                  onClick={(e) => handleNavigate(e, 1)}
                  className="p-3 bg-[#0D1117]/80 hover:bg-[#B5945B] hover:text-[#05070A] text-white border border-white/10 transition-colors pointer-events-auto cursor-pointer"
                  aria-label="Siguiente curso"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset }) => {
                  const swipeThreshold = 50;
                  if (offset.x < -swipeThreshold) handleNavigate(e as any, 1);
                  else if (offset.x > swipeThreshold) handleNavigate(e as any, -1);
                }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0D1117] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative touch-pan-y"
              >
                {/* Video/Image Area in Modal */}
                <div className="md:w-1/2 min-h-[280px] md:min-h-full relative bg-[#1A1F26] flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
                  {selectedCourse.id === 2 ? (
                    <InstagramEmbed />
                  ) : selectedCourse.video ? (
                    <div className="relative w-full h-full min-h-[280px]">
                      <video
                        autoPlay
                        loop
                        controls
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={selectedCourse.video} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <>
                      <img src={selectedCourse.image} alt={selectedCourse.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
                      <div className="relative z-10 w-16 h-16 rounded-full bg-[#B5945B]/20 border border-[#B5945B]/50 flex items-center justify-center cursor-pointer hover:bg-[#B5945B]/40 transition-colors">
                        <Play size={24} className="text-[#B5945B] ml-1" />
                      </div>
                    </>
                  )}
                </div>

                {/* Course Details / Mentor Bio */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col relative overflow-x-hidden overflow-y-auto">
                  {/* Close button placed safely in details column to prevent locking video volume / controls */}
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="absolute top-4 right-4 z-50 p-2.5 bg-[#05070A]/80 border border-white/10 text-white/70 hover:text-white hover:bg-[#05070A] hover:border-[#B5945B]/60 transition-all cursor-pointer rounded-full shadow-lg"
                    aria-label="Cerrar modal"
                    title="Cerrar (Esc)"
                  >
                    <X size={18} strokeWidth={2} />
                  </button>
                  <AnimatePresence mode="wait">
                    {showMentorBio ? (
                      <motion.div 
                        key="mentor-bio"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            transition: { staggerChildren: 0.1, delayChildren: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                          },
                          exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
                        }}
                        className="flex flex-col h-full"
                      >
                        <motion.button 
                          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          onClick={() => setShowMentorBio(false)}
                          className="flex items-center text-slate-400 hover:text-white mb-8 text-xs uppercase tracking-widest cursor-pointer w-fit"
                        >
                          <ChevronLeft size={16} className="mr-1" /> {t.mentor?.back || 'Volver'}
                        </motion.button>
                        
                        <motion.div 
                          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-center space-x-4 mb-6"
                        >
                          <img src="/jaime_profile_pic.jpg" alt="Jaime Figueroa" className="w-16 h-16 rounded-full object-cover grayscale-[20%] border border-[#B5945B]/50" />
                          <div>
                            <h3 className="text-xl font-light text-[#F8FAFC]">Jaime Figueroa</h3>
                            <p className="text-xs text-[#B5945B] uppercase tracking-widest">{t.mentor?.role || 'Mentor Principal'}</p>
                          </div>
                        </motion.div>

                        <motion.p 
                          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="text-slate-400 text-sm leading-relaxed mb-8 font-light"
                        >
                          {t.mentor?.bio || 'Experto en trading algorítmico y futuros del Nasdaq. Más de 5 años guiando a traders hacia la consistencia.'}
                        </motion.p>

                        <motion.div 
                          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="mt-auto"
                        >
                          <button 
                            type="button"
                            onClick={() => {
                              setSelectedCourse(null);
                              window.dispatchEvent(new CustomEvent('open-booking-modal'));
                            }}
                            className="w-full block text-center bg-[#B5945B] text-[#05070A] font-bold uppercase tracking-widest text-xs py-4 hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                          >
                            {t.mentor?.btn || 'Agendar Reunión'}
                          </button>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="course-details"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            transition: { staggerChildren: 0.1, delayChildren: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                          },
                          exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
                        }}
                        className="flex flex-col h-full"
                      >
                        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="mb-4">
                          <span className="text-[#B5945B] text-xs font-bold uppercase tracking-widest">
                            {t.filters[selectedCourse.category]} — {t.level}: {selectedCourse.level}
                          </span>
                        </motion.div>
                        
                        <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-3xl font-light mb-6">
                          {selectedCourse.title}
                        </motion.h2>

                        {/* Interactive Mentor Profile Row */}
                        <motion.button 
                          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          onClick={() => setShowMentorBio(true)}
                          className="flex items-center p-3 mb-6 bg-[#05070A] border border-white/10 hover:border-[#B5945B]/50 transition-colors cursor-pointer group text-left w-full"
                        >
                          <img src="/jaime_profile_pic.jpg" alt="Jaime Figueroa" className="w-10 h-10 rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all mr-3 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <span className="text-xs text-slate-400 block">{t.mentor?.role || 'Mentor'}</span>
                            <span className="text-sm text-[#F8FAFC] font-medium group-hover:text-[#B5945B] transition-colors truncate block">Jaime Figueroa</span>
                          </div>
                          <ChevronRight size={16} className="text-slate-500 group-hover:text-[#B5945B] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                        </motion.button>
                        
                        <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                          {selectedCourse.description}
                        </motion.p>
                        
                        <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-slate-300 text-xs italic mb-6">
                          {t.descAppend}
                        </motion.p>
                        
                        <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="space-y-4 mb-8">
                          <div className="flex justify-between items-center py-2 border-b border-white/10">
                            <span className="text-slate-400 text-sm">{t.cost}</span>
                            <span className="text-2xl font-light text-[#B5945B]">{selectedCourse.price}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 text-sm">{t.methods}</span>
                            <span className="text-[#F8FAFC] text-sm text-right">{t.methodsList || 'Stripe, Crypto, Zelle'}</span>
                          </div>
                        </motion.div>
                        
                        <motion.a 
                          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          href={selectedCourse.paymentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#B5945B] text-[#05070A] font-bold uppercase tracking-widest text-xs py-4 hover:bg-[#F8FAFC] transition-all cursor-pointer mb-4 flex items-center justify-center space-x-2 shadow-lg hover:shadow-[#B5945B]/20"
                        >
                          <CreditCard size={15} />
                          <span>{t.enroll}</span>
                          <ExternalLink size={14} className="ml-1" />
                        </motion.a>

                        {/* Refund Policy Link */}
                        <div className="text-center pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCourse(null);
                              const refundBtn = document.querySelector('[data-policy="refund"]') as HTMLButtonElement;
                              if (refundBtn) refundBtn.click();
                            }}
                            className="inline-flex items-center text-[11px] text-slate-400 hover:text-[#B5945B] transition-colors underline cursor-pointer"
                          >
                            <ShieldAlert size={12} className="mr-1.5 text-[#B5945B]" />
                            {t.refundNotice || 'Compras sujetas a nuestra Política de Reembolso'}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
