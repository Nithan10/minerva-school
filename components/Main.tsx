"use client";

import React from 'react';
import { Mainnavbar } from './Mainnavbar'; 
import Hero from './Hero';
import Programs from './Program'; 
import WhyUs from './Whyus'; 
import Gallery from './Gallery'; 
import Videos from './Videos'; 
import AboutUs from './Aboutus'; 
import Admissions from './Admissions';
import Testimonials from './Testimonials'; // <-- 1. Import Here
import Contact from './Contact'; 
import Footer from './Footer';     

export default function Main() {
  return (
    <div className="relative w-full bg-background">
      
      {/* Navigation Bar */}
      <Mainnavbar />
      
      {/* 1. Home */}
      <section id="home">
        <Hero />
      </section>

      {/* 2. Programs */}
      <section id="programs" className="scroll-mt-24">
        <Programs />
      </section>

      {/* 3. Why Us */}
      <section id="whyus" className="scroll-mt-24">
        <WhyUs />
      </section>

      {/* 4. Gallery */}
      <section id="gallery" className="scroll-mt-24">
        <Gallery />
      </section>

      {/* 5. Videos */}
      <section id="videos" className="scroll-mt-24">
        <Videos />
      </section>

      {/* 6. About Us */}
      <section id="about" className="scroll-mt-24">
        <AboutUs />
      </section>

      {/* 7. Admissions */}
      <section id="admissions" className="scroll-mt-10">
        <Admissions />
      </section>

      {/* 8. Testimonials (New) */}
      <section id="testimonials" className="scroll-mt-24">
        <Testimonials />
      </section>

      {/* 9. Contact */}
      <section id="contact" className="scroll-mt-10">
        <Contact />
      </section>

      {/* 10. Footer */}
      <Footer />

    </div>
  );
}