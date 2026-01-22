"use client";

import React from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, Globe, ArrowRight } from "lucide-react";

export default function ContactCompact() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 overflow-hidden" id="contact">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-[100px]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      </div>

      {/* --- MAIN COMPACT CARD --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 z-10"
      >
        
        {/* ====== LEFT PANEL: INFO (40%) ====== */}
        <div className="lg:col-span-2 bg-[#1A1A2E] text-white p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Gradient Overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
            <p className="text-gray-400 text-sm mb-8">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-purple-500 transition-colors">
                  <Phone size={20} className="text-purple-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Phone</p>
                  <a href="tel:+919994959484" className="text-sm font-semibold hover:text-purple-300 transition-colors block mt-0.5">+91 99949 59484</a>
                  <a href="tel:+919894886733" className="text-sm font-semibold hover:text-purple-300 transition-colors block">+91 98948 86733</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-pink-500 transition-colors">
                  <Mail size={20} className="text-pink-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email</p>
                  <a href="mailto:mvmofficepollachi@gmail.com" className="text-sm font-semibold hover:text-pink-300 transition-colors block mt-0.5">mvmofficepollachi@gmail.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-blue-500 transition-colors">
                  <MapPin size={20} className="text-blue-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium leading-relaxed mt-0.5 text-gray-200">
                    A21, A22 D Colony, Near water tank,<br />
                    JothiNagar, Pollachi, TN 642001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Socials / Mini Map Link */}
          <div className="relative z-10 mt-8 lg:mt-0">
             <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 mb-3">
                    <Clock size={16} className="text-yellow-400" />
                    <span className="text-xs font-semibold text-gray-300">Mon - Sat: 9:00 AM - 4:00 PM</span>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-white text-gray-900 font-bold hover:bg-gray-200"
                  endContent={<ArrowRight size={14} />}
                  as="a"
                  href="https://maps.google.com" // Replace with actual map link
                  target="_blank"
                >
                  View on Google Maps
                </Button>
             </div>
          </div>
        </div>

        {/* ====== RIGHT PANEL: FORM (60%) ====== */}
        <div className="lg:col-span-3 bg-white p-8 lg:p-10 relative">
          <div className="max-w-md mx-auto lg:max-w-none">
            <div className="mb-8">
               <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
               <p className="text-gray-500 mt-1">We'd love to hear from you. Send us a message!</p>
            </div>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Input 
                   type="text" 
                   label="Parent's Name" 
                   variant="bordered" 
                   radius="sm"
                   classNames={{
                     inputWrapper: "border-gray-200 focus-within:border-purple-500 hover:border-purple-300 h-12 bg-gray-50/50",
                     label: "text-gray-500 text-sm"
                   }}
                />
                 <Input 
                   type="text" 
                   label="Student's Name" 
                   variant="bordered" 
                   radius="sm"
                   classNames={{
                     inputWrapper: "border-gray-200 focus-within:border-purple-500 hover:border-purple-300 h-12 bg-gray-50/50",
                     label: "text-gray-500 text-sm"
                   }}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Input 
                   type="email" 
                   label="Email Address" 
                   variant="bordered" 
                   radius="sm"
                   classNames={{
                     inputWrapper: "border-gray-200 focus-within:border-purple-500 hover:border-purple-300 h-12 bg-gray-50/50",
                     label: "text-gray-500 text-sm"
                   }}
                />
                <Input 
                   type="tel" 
                   label="Phone Number" 
                   variant="bordered" 
                   radius="sm"
                   classNames={{
                     inputWrapper: "border-gray-200 focus-within:border-purple-500 hover:border-purple-300 h-12 bg-gray-50/50",
                     label: "text-gray-500 text-sm"
                   }}
                />
              </div>

              <Input 
                 type="text" 
                 label="Subject" 
                 variant="bordered" 
                 radius="sm"
                 classNames={{
                   inputWrapper: "border-gray-200 focus-within:border-purple-500 hover:border-purple-300 h-12 bg-gray-50/50",
                   label: "text-gray-500 text-sm"
                 }}
              />

              <Textarea 
                label="Message" 
                minRows={3}
                variant="bordered"
                radius="sm"
                placeholder="How can we help you?"
                classNames={{
                   inputWrapper: "border-gray-200 focus-within:border-purple-500 hover:border-purple-300 bg-gray-50/50",
                   label: "text-gray-500 text-sm"
                }}
              />

              <div className="pt-2">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[#1A1A2E] to-[#2d2d44] text-white font-bold text-md shadow-lg shadow-gray-900/20 hover:scale-[1.01] transition-transform"
                  endContent={<Send size={18} />}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>

      </motion.div>
    </section>
  );
}