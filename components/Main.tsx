"use client";

import React from 'react';
import { Mainnavbar } from './Mainnavbar'; 
import Hero from './Hero';
import Programs from './Program'; 
import Gallery from './Gallery'; 
import AboutUs from './Aboutus'; 
import Admissions from './Admissions'; // <--- IMPORT ADMISSIONS
import Contact from './Contact'; 
import Footer from './Footer';    

export default function Main() {
  return (
    <div className="relative w-full bg-background">
      
      {/* Navigation Bar */}
      <Mainnavbar />
      
      {/* 1. Home Section */}
      <section id="home">
        <Hero />
      </section>

      {/* 2. Programs Section */}
      <section id="programs" className="scroll-mt-24">
        <Programs />
      </section>

      {/* 3. Gallery Section */}
      <section id="gallery" className="scroll-mt-24">
        <Gallery />
      </section>

      {/* 4. About Us Section */}
      <section id="about" className="scroll-mt-24">
        <AboutUs />
      </section>

      {/* 5. Admissions Section (NEW) */}
      <section id="admissions" className="scroll-mt-10">
        <Admissions />
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="scroll-mt-10">
        <Contact />
      </section>

      {/* 7. Footer */}
      <Footer />

    </div>
  );
}