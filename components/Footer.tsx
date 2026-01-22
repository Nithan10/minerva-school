"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Input } from "@heroui/react";
import { Send, Instagram, Twitter, Linkedin, Facebook, MapPin, Phone, Mail, ChevronRight, ChevronDown } from "lucide-react";
import { Logo } from "@/components/icons"; 

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Smooth scroll handler for internal links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId?: string) => {
    if (targetId) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-purple-900/20 rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] bg-blue-900/10 rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-14 lg:mb-16"
        >
          {/* --- COLUMN 1: BRANDING --- */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="text-white flex-shrink-0">
                 <Logo size={32} className="md:w-10 md:h-10" /> 
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight">Minervaa Vidhya Mandhir</span>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Empowering students with knowledge and character in the heart of Pollachi.
            </p>

            <div className="flex gap-2 md:gap-3 lg:gap-4 pt-2">
                 {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="text-gray-400 hover:text-[#6039DB] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 flex items-center justify-center"
                      aria-label={`Follow us on ${Icon.name}`}
                    >
                        <Icon size={16} className="md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    </a>
                 ))}
            </div>
          </motion.div>

          {/* --- COLUMN 2: USEFUL LINKS --- */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Useful Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Programs", href: "#programs" },
                { label: "Why Us", href: "#about" },
                { label: "Gallery", href: "#gallery" }
              ].map((link) => (
                <li key={link.label}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleScroll(e, link.href.replace('#', ''))}
                      className="text-gray-400 hover:text-white transition-colors text-sm md:text-base font-medium block py-1"
                    >
                        {link.label}
                    </a>
                </li>
              ))}
              <li>
                  <a 
                    href="#more" 
                    className="text-[#6039DB] hover:text-white transition-colors text-sm md:text-base font-bold flex items-center gap-1 py-1"
                  >
                      More <ChevronDown size={12} className="md:w-3 md:h-3 lg:w-4 lg:h-4" />
                  </a>
              </li>
            </ul>
          </motion.div>

          {/* --- COLUMN 3: NAVIGATION --- */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Discover</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Videos", href: "#videos" },
                { label: "Mandatory Disclosure", href: "#disclosure" }
              ].map((link) => (
                <li key={link.label}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleScroll(e, link.href.replace('#', ''))}
                      className="text-gray-400 hover:text-white transition-colors text-sm md:text-base font-medium block py-1 flex items-center gap-1 group"
                    >
                        {link.label}
                        {link.label === "Mandatory Disclosure" && (
                          <ChevronRight size={12} className="md:w-3 md:h-3 lg:w-4 lg:h-4 group-hover:translate-x-0.5 transition-transform" />
                        )}
                    </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- COLUMN 4: CONTACT --- */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#6039DB] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  A21, A22 D Colony, Near Northside to water tank, JothiNagar,<br /> 
                  Pollachi HO, Pollachi, 642001,<br /> 
                  Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#6039DB] shrink-0" />
                <a 
                  href="tel:+919994959484" 
                  className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
                >
                  +91-9994959484
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#6039DB] shrink-0" />
                <a 
                  href="mailto:minervaavidhyamandhir@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm break-all"
                >
                  minervaavidhyamandhir@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          variants={itemVariants}
          className="w-full h-px bg-white/10 mb-6 md:mb-8" 
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 relative z-10">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © {currentYear} Minervaa Vidhya Mandhir. All rights reserved.
          </p>
          <div className="flex gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
             <a 
               href="#terms" 
               onClick={(e) => handleScroll(e, 'terms')}
               className="hover:text-white transition-colors px-1 py-0.5"
             >
               Terms
             </a>
             <span className="text-gray-600">•</span>
             <a 
               href="#privacy" 
               onClick={(e) => handleScroll(e, 'privacy')}
               className="hover:text-white transition-colors px-1 py-0.5"
             >
               Privacy
             </a>
             <span className="text-gray-600">•</span>
             <a 
               href="#cookies" 
               onClick={(e) => handleScroll(e, 'cookies')}
               className="hover:text-white transition-colors px-1 py-0.5"
             >
               Cookies
             </a>
          </div>
        </div>

        {/* Optional: Back to Top Button for Mobile */}
        <motion.div
          variants={itemVariants}
          className="fixed bottom-4 right-4 md:hidden z-50"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#6039DB] text-white p-2 rounded-full shadow-lg hover:bg-[#5029c9] transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronDown className="w-5 h-5 rotate-180" />
          </button>
        </motion.div>

        {/* Big Watermark - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.02]">
           <h1 className="text-[8vw] font-black text-white leading-[0.8] tracking-tighter">MINERVAA</h1>
        </div>
      </div>
    </footer>
  );
}