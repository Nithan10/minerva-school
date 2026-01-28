"use client";

import React from 'react';
import { Mainnavbar } from './Mainnavbar'; 
import Hero from './Hero';
import Programs from './Program'; 
import WhyUs from './Whyus'; 
import Gallery from './Gallery';
import Videos from './Videos'; // <-- 1. Import Videos here
import AboutUs from './Aboutus'; 
import Admissions from './Admissions';
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

      {/* 3. Why Us Section */}
      <section id="whyus" className="scroll-mt-24">
        <WhyUs />
      </section>

      {/* 4. Gallery Section */}
      <section id="gallery" className="scroll-mt-24">
        <Gallery />
      </section>

      {/* 5. Videos Section (New) */}
      <section id="videos" className="scroll-mt-24">
        <Videos />
      </section>

      {/* 6. About Us Section */}
      <section id="about" className="scroll-mt-24">
        <AboutUs />
      </section>

      {/* 7. Admissions Section */}
      <section id="admissions" className="scroll-mt-10">
        <Admissions />
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="scroll-mt-10">
        <Contact />
      </section>

      {/* 9. Footer */}
      <Footer />

    </div>
  );
}