"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, ChevronDown, Play, X, User, Phone, 
  Mail, GraduationCap, Star, Book, Heart, 
  Rocket, Sparkles, Calendar, ShieldCheck,
  Target
} from "lucide-react";

export default function HeroPrimarySchool() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application Received! Welcome to the family.");
    setIsModalOpen(false);
  };

  const FloatingElement = ({ Icon, color, position, size = "md", delay = 0, mobileShow = false }: any) => (
    <motion.div
      className={`absolute ${position} ${mobileShow ? 'block' : 'hidden'} md:block z-20`}
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{ 
        scale: 1,
        opacity: [0.7, 1, 0.7],
        y: [0, -15, 0],
        rotate: 0
      }}
      transition={{
        scale: { duration: 0.8, ease: "backOut", delay },
        opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 0.8, ease: "backOut", delay }
      }}
    >
      <div className={`
        p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 
        shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:shadow-[0_8px_32px_rgba(0,0,0,0.08)] 
        hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300 ${color}
        ${size === "lg" ? "p-3 md:p-4" : size === "sm" ? "p-1.5 md:p-2" : "p-2 md:p-3"}
      `}>
        <Icon 
          size={size === "lg" ? 20 : size === "sm" ? 16 : 18} 
          className="md:size-6 drop-shadow-sm"
          strokeWidth={1.8} 
        />
      </div>
    </motion.div>
  );

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      
      {/* Background Layer */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ y, opacity, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white/90 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent z-5" />
        <video
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background-4k.mp4" type="video/mp4" />
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022" alt="Background" />
        </video>
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-1 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Elements - Mobile Responsive */}
      <FloatingElement 
        Icon={Book} 
        color="text-blue-600" 
        position="top-[10%] left-[5%] md:top-[15%] md:left-[8%]" 
        size="lg"
        delay={0.2}
        mobileShow={true}
      />
      <FloatingElement 
        Icon={Rocket} 
        color="text-purple-600" 
        position="bottom-[25%] left-[8%] md:bottom-[30%] md:left-[12%]" 
        delay={0.4}
        mobileShow={true}
      />
      <FloatingElement 
        Icon={Star} 
        color="text-amber-500" 
        position="top-[20%] right-[6%] md:top-[25%] md:right-[10%]" 
        size="lg"
        delay={0.6}
        mobileShow={true}
      />
      <FloatingElement 
        Icon={Heart} 
        color="text-rose-500" 
        position="bottom-[12%] right-[5%] md:bottom-[15%] md:right-[8%]" 
        delay={0.8}
        mobileShow={true}
      />
      <FloatingElement 
        Icon={Target} 
        color="text-emerald-600" 
        position="top-[35%] left-[3%] md:top-[40%] md:left-[5%]" 
        size="sm"
        delay={1}
        mobileShow={false}
      />

      {/* Main Content Container */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center pt-8 md:pt-12 lg:pt-20">
        
        {/* Admissions Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4 sm:mb-6 md:mb-8 lg:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-white"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white">
              Admissions Open 2024-25
            </span>
          </div>
        </motion.div>

        {/* Hero Headlines */}
        <div className="text-center space-y-1 sm:space-y-2 md:space-y-4 mb-6 sm:mb-8 md:mb-10 lg:mb-14 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-blue-500/10 to-rose-500/10 blur-xl sm:blur-2xl md:blur-3xl rounded-full" />
            <h1 className="relative text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black tracking-tight leading-[0.85] text-slate-900">
              MINERVAA
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="relative"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent italic leading-tight">
              Vidhya Mandhir
            </h2>
            <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-rose-500 rounded-full" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto font-medium mt-4 sm:mt-5 md:mt-6 lg:mt-8 leading-relaxed sm:leading-relaxed"
          >
            Where curiosity meets excellence, and every child discovers their 
            <span className="relative inline-block mx-1 sm:mx-2">
              <span className="relative z-10 font-bold text-slate-900">unique brilliance</span>
              <span className="absolute bottom-0.5 sm:bottom-1 left-0 w-full h-2 sm:h-3 bg-rose-400/20 -rotate-1" />
            </span>
          </motion.p>
        </div>

        {/* CTA Actions - Fully Responsive */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none px-4 sm:px-0"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl md:rounded-2xl font-bold text-base sm:text-lg hover:shadow-xl sm:hover:shadow-2xl hover:shadow-slate-900/25 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-rose-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-sm sm:text-base">Begin Your Journey</span>
            <ArrowRight size={18} className="relative w-4 sm:w-[18px] md:w-5 h-4 sm:h-[18px] md:h-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-white/90 backdrop-blur-md text-slate-900 border border-white/60 rounded-xl md:rounded-2xl font-bold text-base sm:text-lg hover:shadow-xl sm:hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
          >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-500 to-rose-500 flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
              <Play size={10} className="text-white fill-white ml-0.5 sm:w-3 md:w-3.5" />
            </div>
            <span className="relative text-sm sm:text-base">Virtual Tour</span>
          </motion.button>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500 px-4 text-center"
        >
          <ShieldCheck size={16} className="text-emerald-500 flex-shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
          <span className="font-medium">Trusted by 500+ families worldwide</span>
        </motion.div>
      </div>

      {/* Scroll Indicator - Mobile Responsive */}
      <motion.div 
        animate={{ y: [0, 6, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 z-30"
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-[10px] sm:text-xs font-medium text-slate-500 tracking-widest uppercase hidden sm:block">Explore</span>
          <div className="w-5 sm:w-5.5 md:w-6 h-5 sm:h-5.5 md:h-6 flex items-center justify-center">
            <ChevronDown size={20} className="text-slate-400" />
          </div>
        </div>
      </motion.div>

      {/* Application Modal - Mobile Responsive */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-md"
            />
            
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl bg-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-xl sm:shadow-2xl overflow-hidden flex flex-col lg:flex-row my-auto max-h-[90dvh] sm:max-h-[85dvh] overflow-y-auto"
              >
                {/* Modal Sidebar */}
                <div className="relative w-full lg:w-2/5 bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 md:p-10 lg:p-12 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-500/10 rounded-full -translate-y-16 sm:-translate-y-24 md:-translate-y-32 translate-x-16 sm:translate-x-24 md:translate-x-32 blur-2xl sm:blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-rose-500/10 rounded-full translate-y-16 sm:translate-y-24 md:translate-y-32 -translate-x-16 sm:-translate-x-24 md:-translate-x-32 blur-2xl sm:blur-3xl" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-7 sm:w-8 md:w-9 mb-4 sm:mb-6">
                        <Sparkles className="text-amber-400 w-full h-full" />
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-3 sm:mb-4">
                        Shape Tomorrow's<br />Leaders
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                        Join our community of innovators, thinkers, and creators. Limited seats available for the 2024 academic year.
                      </p>
                      
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-emerald-400" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium">Accredited Curriculum</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-blue-400" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium">1:8 Teacher Ratio</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-purple-400" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium">Flexible Programs</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 sm:pt-8 border-t border-white/10 mt-4 sm:mt-6">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-400">
                        <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                        <span>Your information is 100% secure and confidential</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Form */}
                <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative bg-white">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-6 lg:right-6 p-1.5 sm:p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
                  >
                    <X size={18} className="text-slate-400 w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                  </button>

                  <div className="max-w-md mx-auto">
                    <div className="mb-4 sm:mb-6 md:mb-8">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Admission Inquiry</h4>
                      <p className="text-slate-500 text-xs sm:text-sm">
                        Complete the form below and our admissions team will contact you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
                      {[
                        { icon: User, placeholder: "Parent Full Name", type: "text" },
                        { icon: Mail, placeholder: "Email Address", type: "email" },
                        { icon: Phone, placeholder: "Phone Number", type: "tel" },
                      ].map((field, index) => (
                        <div key={index} className="relative group">
                          <field.icon className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
                          <input
                            required
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full pl-9 sm:pl-10 md:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-3.5 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-lg sm:rounded-xl outline-none transition-all font-medium text-slate-700 text-sm sm:text-base placeholder:text-slate-400 focus:shadow-lg focus:shadow-blue-500/10"
                          />
                        </div>
                      ))}

                      <div className="relative group">
                        <GraduationCap className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
                        <select 
                          required 
                          className="w-full pl-9 sm:pl-10 md:pl-12 pr-8 sm:pr-10 py-2.5 sm:py-3 md:py-3.5 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-lg sm:rounded-xl outline-none transition-all font-medium text-slate-700 text-sm sm:text-base appearance-none cursor-pointer focus:shadow-lg focus:shadow-blue-500/10"
                        >
                          <option value="" disabled selected>Select Grade Level</option>
                          <option>Pre-Kindergarten</option>
                          <option>Kindergarten</option>
                          <option>Primary (Grades 1-5)</option>
                          <option>Middle School</option>
                        </select>
                        <ChevronDown className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg sm:rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base md:text-lg"
                      >
                        Submit Application
                      </motion.button>
                      
                      <p className="text-center text-[10px] sm:text-xs text-slate-400 pt-2 sm:pt-3 md:pt-4">
                        By submitting, you agree to our privacy policy and terms of service
                      </p>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}