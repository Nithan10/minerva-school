"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Play, X, User, Phone, Mail, GraduationCap } from "lucide-react";

export default function HeroPrimarySchool() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Request submitted! We will contact you shortly.");
    setIsModalOpen(false);
  };

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden text-white" id="home">
      
      {/* Background Video */}
      <motion.div className="absolute inset-0 z-0 h-full w-full" style={{ y }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/3195862/free-video-3195862.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="w-full h-full object-cover contrast-[1.15] saturate-[1.2] brightness-75"
        >
          <source src="background-4k.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 sm:bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 text-center space-y-6 mt-16 sm:mt-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-6 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-100 text-[10px] sm:text-sm font-bold tracking-wider uppercase shadow-xl">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
            Admissions Open 2024-25
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tight"
        >
          <span className="block text-white drop-shadow-2xl">Where Future</span>
          <span className="block bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent drop-shadow-lg pb-2">
            Leaders Bloom
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm sm:text-lg md:text-2xl text-emerald-50 max-w-xl md:max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md px-4"
        >
          Providing a world-class foundation for students from <strong>Standard 1 to 5</strong> in a safe, creative, and joyful campus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 px-4 sm:px-0"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-emerald-500 rounded-xl sm:rounded-2xl font-bold text-white shadow-xl hover:scale-105 transition-all text-sm sm:text-base flex items-center justify-center gap-2"
          >
             Book a Campus Visit <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl font-bold text-white hover:bg-white/20 transition-all text-sm sm:text-base flex items-center justify-center gap-2">
            <Play className="w-4 h-4 fill-white" /> Watch School Life
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <ChevronDown className="w-6 h-6 text-emerald-200" />
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4">
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
              className="relative w-full sm:w-[500px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85dvh]"
            >
              <div className="bg-emerald-600 p-4 text-white flex justify-between items-center shrink-0">
                <div>
                  <h3 className="text-lg font-bold">Plan Your Visit</h3>
                  <p className="text-emerald-100 text-xs">Experience our campus firsthand.</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-1.5 bg-white/20 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-y-auto p-5 pb-8 sm:pb-6">
                <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Parent Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input type="text" required placeholder="Enter name" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input type="tel" required placeholder="+91 99999 99999" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input type="email" required placeholder="email@example.com" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
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
                  <button type="submit" className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg mt-2">Confirm Booking</button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}