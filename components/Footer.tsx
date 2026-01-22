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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-20 pb-10 overflow-hidden" id="contact">
      
      {/* 1. Background Gradients */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16"
        >
          {/* --- COLUMN 1: BRANDING --- */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="text-white">
                 <Logo size={40} /> 
              </div>
              <span className="text-xl font-bold tracking-tight">Minervaa Vidhya Mandhir</span>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering students with knowledge and character in the heart of Pollachi.
            </p>

            <div className="flex gap-4 pt-2">
                 {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="text-gray-400 hover:text-[#6039DB] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                        <Icon size={18} />
                    </a>
                 ))}
            </div>
          </motion.div>

          {/* --- COLUMN 2: USEFUL LINKS --- */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Useful Links</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Programs", "Why Us", "Gallery"].map((link) => (
                <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium block">
                        {link}
                    </a>
                </li>
              ))}
              <li>
                  <a href="#" className="text-[#6039DB] hover:text-white transition-colors text-sm font-bold flex items-center gap-1">
                      More <ChevronDown size={14} />
                  </a>
              </li>
            </ul>
          </motion.div>

          {/* --- COLUMN 3: NAVIGATION --- */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Discover</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Videos"].map((link) => (
                <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium block">
                        {link}
                    </a>
                </li>
              ))}
               <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-1 group">
                        Mandatory Disclosure 
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </li>
            </ul>
          </motion.div>

          {/* --- COLUMN 4: CONTACT --- */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#6039DB] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  A21, A22 D Colony, Near Northside to water tank, JothiNagar,<br /> 
                  Pollachi HO, Pollachi, 642001,<br /> 
                  Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#6039DB] shrink-0" />
                <a href="tel:+919994959484" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +91-9994959484
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#6039DB] shrink-0" />
                <a href="mailto:minervaavidhyamandhir@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                  minervaavidhyamandhir@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full h-px bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-gray-500 text-sm">© {currentYear} Minervaa Vidhya Mandhir. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-gray-500">
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

        {/* Big Watermark */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.03]">
           <h1 className="text-[12vw] font-black text-white leading-[0.8] tracking-tighter">MINERVAA</h1>
        </div>
      </div>
    </footer>
  );
}