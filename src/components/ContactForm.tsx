import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Clock, X, MessageCircle } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({ 
    name: '', 
    contact: '', 
    date: '', 
    time: '', 
    type: 'videollamada', 
    location: '' 
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'trading',
    message: ''
  });
  const [lastContactWhatsappUrl, setLastContactWhatsappUrl] = useState('');
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');

  const [messageSent, setMessageSent] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);

  React.useEffect(() => {
    const handleOpenBooking = () => setIsBookingModalOpen(true);
    window.addEventListener('open-booking-modal', handleOpenBooking);
    return () => window.removeEventListener('open-booking-modal', handleOpenBooking);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const interestLabel = 
      formData.interest === 'trading' 
        ? t.form.int1
        : formData.interest === 'cafe'
        ? t.form.int2
        : t.form.int3;

    const message = language === 'EN'
      ? `Hello Jaime, I am contacting you from the Trisma Capital website:

• Name: ${formData.name.trim()}
• Email: ${formData.email.trim()}
• Area of Interest: ${interestLabel}
• Message:
${formData.message.trim()}`
      : `Hola Jaime, te contacto desde el sitio web de Trisma Capital:

• Nombre: ${formData.name.trim()}
• Correo Electrónico: ${formData.email.trim()}
• Área de Interés: ${interestLabel}
• Mensaje:
${formData.message.trim()}`;

    // Jaime's direct WhatsApp number: +1 (669) 946-7565 -> 16699467565
    const jaimePhone = '16699467565';
    const whatsappUrl = `https://wa.me/${jaimePhone}?text=${encodeURIComponent(message)}`;

    setLastContactWhatsappUrl(whatsappUrl);
    setMessageSent(true);

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const modalityLabel = 
      bookingData.type === 'videollamada' 
        ? (language === 'EN' ? 'Video call' : 'Videollamada')
        : bookingData.type === 'llamada'
        ? (language === 'EN' ? 'Phone call' : 'Llamada telefónica')
        : (language === 'EN' ? 'In-person meeting' : 'Reunión presencial');

    const locationDetail = (bookingData.type === 'presencial' && bookingData.location.trim())
      ? (language === 'EN' ? `\n• Location: ${bookingData.location.trim()}` : `\n• Ubicación: ${bookingData.location.trim()}`)
      : '';

    const message = language === 'EN'
      ? `Hello Jaime, I would like to schedule a meeting with Trisma Capital:

• Name: ${bookingData.name.trim()}
• Contact (Email/Phone): ${bookingData.contact.trim()}
• Date: ${bookingData.date}
• Time: ${bookingData.time}
• Format / Selection: ${modalityLabel}${locationDetail}`
      : `Hola Jaime, me gustaría agendar una reunión con Trisma Capital:

• Nombre: ${bookingData.name.trim()}
• Contacto (Email/Teléfono): ${bookingData.contact.trim()}
• Fecha: ${bookingData.date}
• Hora: ${bookingData.time}
• Modalidad: ${modalityLabel}${locationDetail}`;

    // Jaime's direct WhatsApp number: +1 (669) 946-7565 -> 16699467565
    const jaimePhone = '16699467565';
    const whatsappUrl = `https://wa.me/${jaimePhone}?text=${encodeURIComponent(message)}`;

    setLastWhatsappUrl(whatsappUrl);
    setIsBookingModalOpen(false);
    setBookingSent(true);

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-[#05070A] text-[#F8FAFC] py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B5945B]/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {bookingSent && (
          <div className="mt-8 p-6 bg-[#0D1117] border border-[#B5945B]/60 text-[#F8FAFC] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="text-[#25D366]" />
              </div>
              <div>
                <p className="font-medium text-sm text-[#F8FAFC]">
                  {t.modal.whatsappSuccess || 'Solicitud preparada para Jaime (+1 669 946-7565) vía WhatsApp.'}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {language === 'EN' 
                    ? 'If WhatsApp did not open automatically, click the button to send your details:' 
                    : 'Si WhatsApp no se abrió automáticamente, haz clic en el botón para enviar los datos:'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
              {lastWhatsappUrl && (
                <a 
                  href={lastWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold uppercase tracking-wider text-xs px-5 py-2.5 inline-flex items-center space-x-2 transition-all cursor-pointer shadow-lg"
                >
                  <MessageCircle size={16} />
                  <span>{t.modal.whatsappBtn || 'WhatsApp Jaime'}</span>
                </a>
              )}
              <button 
                onClick={() => setBookingSent(false)} 
                className="text-slate-400 hover:text-white p-2 cursor-pointer"
                aria-label="Cerrar notificación"
              >
                ✕
              </button>
            </div>
          </div>
        )}
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mt-16">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-light mb-6 text-[#F8FAFC]">{t.desc}</h3>
            <p className="text-slate-400 leading-relaxed mb-10 text-sm">
              {t.formSub}
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="nombre" className="text-slate-500 text-[10px] tracking-widest uppercase font-bold ml-1">
                  {t.form.name}
                </label>
                <input 
                  type="text" 
                  id="nombre"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.form.namePl}
                  className="w-full bg-[#0D1117] border border-white/10 px-4 py-3 text-[#F8FAFC] placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#B5945B]/50 focus:border-[#B5945B] transition-colors"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="correo" className="text-slate-500 text-[10px] tracking-widest uppercase font-bold ml-1">
                  {t.form.email}
                </label>
                <input 
                  type="email" 
                  id="correo"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.form.emailPl}
                  className="w-full bg-[#0D1117] border border-white/10 px-4 py-3 text-[#F8FAFC] placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#B5945B]/50 focus:border-[#B5945B] transition-colors"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="interes" className="text-slate-500 text-[10px] tracking-widest uppercase font-bold ml-1">
                  {t.form.interest}
                </label>
                <select 
                  id="interes"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-[#0D1117] border border-white/10 px-4 py-3 text-[#F8FAFC] focus:outline-none focus:ring-1 focus:ring-[#B5945B]/50 focus:border-[#B5945B] transition-colors appearance-none cursor-pointer"
                >
                  <option value="trading">{t.form.int1}</option>
                  <option value="cafe">{t.form.int2}</option>
                  <option value="otro">{t.form.int3}</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="mensaje" className="text-slate-500 text-[10px] tracking-widest uppercase font-bold ml-1">
                  {t.form.msg}
                </label>
                <textarea 
                  id="mensaje"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.form.msgPl}
                  className="w-full bg-[#0D1117] border border-white/10 px-4 py-3 text-[#F8FAFC] placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#B5945B]/50 focus:border-[#B5945B] transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-[#B5945B] hover:bg-[#c9a76d] text-[#05070A] font-bold uppercase tracking-widest text-sm py-4 px-8 hover:shadow-xl transition-all w-full md:w-auto mt-4 self-start cursor-pointer inline-flex items-center justify-center space-x-2.5 group"
              >
                <MessageCircle size={18} className="text-[#05070A] group-hover:scale-110 transition-transform" />
                <span>{t.form.btn}</span>
              </button>
              {messageSent && (
                <div className="p-4 bg-[#0D1117] border border-[#25D366]/40 text-[#F8FAFC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center shrink-0">
                      <MessageCircle size={16} className="text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-medium text-xs text-[#F8FAFC]">
                        {language === 'ES' 
                          ? 'Mensaje preparado para Jaime (+1 669 946-7565) vía WhatsApp.' 
                          : 'Message prepared for Jaime (+1 669 946-7565) via WhatsApp.'}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {language === 'ES'
                          ? 'Si WhatsApp no se abrió automáticamente, haz clic para enviar:'
                          : 'If WhatsApp did not open automatically, click here to send:'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                    {lastContactWhatsappUrl && (
                      <a 
                        href={lastContactWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold uppercase tracking-wider text-[11px] px-4 py-2 inline-flex items-center space-x-1.5 transition-all cursor-pointer shrink-0"
                      >
                        <MessageCircle size={14} />
                        <span>{language === 'ES' ? 'Abrir WhatsApp' : 'Open WhatsApp'}</span>
                      </a>
                    )}
                    <button 
                      type="button"
                      onClick={() => setMessageSent(false)} 
                      className="text-slate-400 hover:text-white p-1 cursor-pointer"
                      aria-label="Cerrar notificación"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="lg:w-1/2 flex flex-col space-y-12 justify-center w-full max-w-lg mx-auto lg:mx-0">
            {/* Direct WhatsApp Jaime */}
            <a 
              href="https://wa.me/16699467565" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start space-x-6 group cursor-pointer"
            >
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#25D366] transition-colors relative">
                <div className="absolute w-1 h-1 bg-[#25D366] -top-0.5 -right-0.5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <MessageCircle size={16} className="text-slate-400 group-hover:text-[#25D366] transition-colors" />
              </div>
              <div>
                <h4 className="text-[#F8FAFC] font-light mb-1 text-lg group-hover:text-[#25D366] transition-colors">{t.info.whatsappTitle || 'WhatsApp Directo'}</h4>
                <p className="text-slate-400 text-sm">{t.info.whatsappDesc || '+1 (669) 946-7565 (Jaime)'}</p>
              </div>
            </a>

            <a href="mailto:contacto@trismacapital.com" className="flex items-start space-x-6 group cursor-pointer">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#B5945B] transition-colors relative">
                <div className="absolute w-1 h-1 bg-[#B5945B] -top-0.5 -right-0.5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Mail size={16} className="text-slate-400 group-hover:text-[#B5945B] transition-colors" />
              </div>
              <div>
                <h4 className="text-[#F8FAFC] font-light mb-1 text-lg group-hover:text-[#B5945B] transition-colors">{t.info.emailTitle}</h4>
                <p className="text-slate-400 text-sm">contacto@trismacapital.com</p>
              </div>
            </a>
            
            <div onClick={() => setIsBookingModalOpen(true)} className="flex items-start space-x-6 group cursor-pointer">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#B5945B] transition-colors relative">
                <div className="absolute w-1 h-1 bg-[#B5945B] -top-0.5 -right-0.5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Clock size={16} className="text-slate-400 group-hover:text-[#B5945B] transition-colors" />
              </div>
              <div>
                <h4 className="text-[#F8FAFC] font-light mb-1 text-lg group-hover:text-[#B5945B] transition-colors">{t.info.hoursTitle}</h4>
                <p className="text-slate-400 text-sm">{t.info.hoursDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#05070A]/90 backdrop-blur-sm"
            onClick={() => setIsBookingModalOpen(false)}
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D1117] border border-white/10 w-full max-w-3xl max-h-[90vh] relative flex flex-col md:flex-row overflow-y-auto overflow-x-hidden"
            >
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-[#0D1117]/50 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Profile Image Section */}
              <div className="md:w-2/5 relative hidden md:block border-r border-white/5">
                <img src="/jaime_profile_pic.jpg" alt="Jaime" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-[#B5945B] text-xs font-bold tracking-widest uppercase mb-1">Mentor</p>
                  <p className="text-white font-light text-lg">Jaime Figueroa</p>
                </div>
              </div>

              {/* Form Section */}
              <div className="md:w-3/5 p-8 flex flex-col">
                <h2 className="text-2xl font-light text-[#F8FAFC] mb-2 flex items-center">
                  <img src="/jaime_profile_pic.jpg" alt="Jaime" className="w-10 h-10 rounded-full object-cover mr-4 md:hidden border border-white/20" />
                  {t.modal.title}
                </h2>
                <p className="text-slate-400 text-sm mb-8">{t.modal.sub}</p>
                
                <form onSubmit={handleBookingSubmit} className="flex flex-col space-y-5">
                  {/* Name field */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-slate-400 text-[10px] tracking-widest uppercase font-bold ml-1">
                      {t.modal.name || 'Nombre Completo'} <span className="text-[#B5945B]">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder={t.modal.namePl || 'Tu nombre y apellido'}
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      className="w-full bg-[#05070A] border border-white/10 px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#B5945B] transition-colors text-sm"
                    />
                  </div>

                  {/* Contact field (email or phone) */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-slate-400 text-[10px] tracking-widest uppercase font-bold ml-1">
                      {t.modal.contact || 'Correo o Teléfono'} <span className="text-[#B5945B]">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder={t.modal.contactPl || 'ejemplo@correo.com o +1 234 567 8900'}
                      value={bookingData.contact}
                      onChange={(e) => setBookingData({...bookingData, contact: e.target.value})}
                      className="w-full bg-[#05070A] border border-white/10 px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#B5945B] transition-colors text-sm"
                    />
                  </div>

                  {/* Date and Time row */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col space-y-2 flex-1">
                      <label className="text-slate-400 text-[10px] tracking-widest uppercase font-bold ml-1">
                        {t.modal.date} <span className="text-[#B5945B]">*</span>
                      </label>
                      <input 
                        type="date" 
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                        className="w-full bg-[#05070A] border border-white/10 px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#B5945B] transition-colors cursor-pointer [color-scheme:dark] text-sm"
                      />
                    </div>
                    <div className="flex flex-col space-y-2 flex-1">
                      <label className="text-slate-400 text-[10px] tracking-widest uppercase font-bold ml-1">
                        {t.modal.time} <span className="text-[#B5945B]">*</span>
                      </label>
                      <input 
                        type="time" 
                        required
                        value={bookingData.time}
                        onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                        className="w-full bg-[#05070A] border border-white/10 px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#B5945B] transition-colors cursor-pointer [color-scheme:dark] text-sm"
                      />
                    </div>
                  </div>

                  {/* Modality / Selection */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-slate-400 text-[10px] tracking-widest uppercase font-bold ml-1">
                      {t.modal.mode} <span className="text-[#B5945B]">*</span>
                    </label>
                    <select 
                      value={bookingData.type}
                      onChange={(e) => setBookingData({...bookingData, type: e.target.value})}
                      className="w-full bg-[#05070A] border border-white/10 px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#B5945B] transition-colors appearance-none cursor-pointer text-sm"
                    >
                      <option value="videollamada">{t.modal.mode1}</option>
                      <option value="llamada">{t.modal.mode2}</option>
                      <option value="presencial">{t.modal.mode3}</option>
                    </select>
                  </div>

                  {bookingData.type === 'presencial' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="flex flex-col space-y-2 overflow-hidden">
                      <label className="text-slate-400 text-[10px] tracking-widest uppercase font-bold ml-1">
                        {t.modal.loc} <span className="text-[#B5945B]">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder={t.modal.locPl}
                        value={bookingData.location}
                        onChange={(e) => setBookingData({...bookingData, location: e.target.value})}
                        className="w-full bg-[#05070A] border border-white/10 px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#B5945B] transition-colors text-sm"
                      />
                    </motion.div>
                  )}

                  <button 
                    type="submit" 
                    className="bg-[#B5945B] text-[#05070A] font-bold uppercase tracking-widest text-sm py-4 hover:bg-[#F8FAFC] transition-all w-full mt-4 cursor-pointer flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl"
                  >
                    <MessageCircle size={18} />
                    <span>{t.modal.btn}</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
