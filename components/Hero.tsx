"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Play, X, User, Phone, Mail, GraduationCap } from "lucide-react";

export default function HeroPrimarySchool() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request submitted! We will contact you shortly.");
    setIsModalOpen(false);
  };

  // Ensure video plays on mobile
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
        // Fallback: try muted autoplay
        videoRef.current!.muted = true;
        videoRef.current!.play().catch(e => console.log("Muted autoplay also prevented:", e));
      });
    }
  }, []);

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden text-white" id="home">
      
      {/* Background Video - Always visible */}
      <motion.div className="absolute inset-0 z-0 h-full w-full" style={{ y }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover contrast-[1.15] saturate-[1.2] brightness-75"
          poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" // Fallback image
        >
          <source src="/background-4k.mp4" type="video/mp4" />
          {/* Add mobile-optimized video source if available */}
          <source src="/background-mobile.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-blue-600" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 md:px-8 text-center space-y-4 md:space-y-6 mt-16 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-100 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Admissions Open 2024-25
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight px-2"
        >
          <span className="block text-white drop-shadow-2xl">Where Future</span>
          <span className="block bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
            Leaders Bloom
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-50 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto font-medium leading-relaxed px-2"
        >
          Providing a world-class foundation for students from <strong>Standard 1 to 5</strong> in a safe, creative, and joyful campus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 pt-2 md:pt-4 px-2"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-5 py-3 md:px-6 md:py-3.5 bg-emerald-500 hover:bg-emerald-600 rounded-xl md:rounded-2xl font-bold text-white shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-sm md:text-base flex items-center justify-center gap-2"
          >
             Book a Campus Visit <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button className="w-full sm:w-auto px-5 py-3 md:px-6 md:py-3.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl md:rounded-2xl font-bold text-white hover:bg-white/20 active:scale-[0.98] transition-all text-sm md:text-base flex items-center justify-center gap-2">
            <Play className="w-4 h-4 md:w-5 md:h-5 fill-white" /> Watch School Life
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-emerald-200" />
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full md:w-[500px] bg-white rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90dvh] md:max-h-[85dvh]"
            >
              <div className="bg-emerald-600 p-4 md:p-6 text-white flex justify-between items-center shrink-0">
                <div>
                  <h3 className="text-lg md:text-xl font-bold">Plan Your Visit</h3>
                  <p className="text-emerald-100 text-xs md:text-sm">Experience our campus firsthand.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="p-1.5 md:p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-y-auto p-4 md:p-6 pb-8">
                <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Parent Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter name" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 99999 99999" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input 
                        type="email" 
                        required 
                        placeholder="email@example.com" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Grade</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none appearance-none">
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        <option>Grade 4</option>
                        <option>Grade 5</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-colors"
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}