"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, TargetAndTransition } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@heroui/react"; 

const programs = [
  {
    id: 1,
    title: "Correspondent's Message",
    category: "Vision",
    image: "/programs/program1.webp",
    description: "At Minervaa Vidhya Mandhir, education is about nurturing confident, compassionate individuals in a safe and inspiring environment.",
    points: ["Holistic child development", "Safe & inclusive campus", "Strong moral values"],
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Community Welfare",
    category: "Responsibility",
    image: "/programs/program2.webp",
    description: "Students actively engage in social welfare projects to build empathy, leadership, and responsibility towards the society.",
    points: ["Community outreach", "Environmental awareness", "Charity initiatives"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "Principal's Message",
    category: "Leadership",
    image: "/programs/program3.webp",
    description: "Education transforms individuals into responsible citizens with discipline, confidence, and purpose.",
    points: ["Academic excellence", "Discipline & values", "Student-centered approach"],
    color: "from-orange-500 to-red-600",
  },
];

export default function Programs3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const AUTO_PLAY_INTERVAL = 4000; // Speed in ms (4 seconds)

  // Memoized Next Slide function to be used in interval
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  };

  // --- AUTOMATIC MOVEMENT LOGIC ---
  useEffect(() => {
    // If paused, clear any existing timer and do nothing
    if (paused) return;

    // Set the interval
    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    // Clean up on unmount or when dependencies change
    return () => clearInterval(timer);
  }, [paused, nextSlide]); 
  // Dependency on 'nextSlide' handles the index update correctly due to functional state update


  // Helper to get slide positions relative to current index
  const getSlideStyles = (index: number): TargetAndTransition => {
    const offset = (index - currentIndex + programs.length) % programs.length;
    
    // Active Slide
    if (offset === 0) {
      return {
        zIndex: 20,
        opacity: 1,
        scale: 1,
        x: 0,
        rotateY: 0,
        filter: "brightness(1)",
        pointerEvents: "auto" as const,
        display: "flex" // Ensure flex layout is kept
      } as TargetAndTransition;
    }
    // Next Slide (Right)
    if (offset === 1) {
      return {
        zIndex: 10,
        opacity: 0.6,
        scale: 0.85,
        x: "60%", 
        rotateY: -15, 
        filter: "brightness(0.5) blur(2px)",
        pointerEvents: "none" as const,
        display: "flex"
      } as TargetAndTransition;
    }
    // Previous Slide (Left) 
    if (offset === programs.length - 1) {
      return {
        zIndex: 10,
        opacity: 0.6,
        scale: 0.85,
        x: "-60%", 
        rotateY: 15, 
        filter: "brightness(0.5) blur(2px)",
        pointerEvents: "none" as const,
        display: "flex"
      } as TargetAndTransition;
    }
    // Hidden slides
    return {
      zIndex: 0,
      opacity: 0,
      scale: 0.5, // Scale down more to hide better
      x: 0,
      rotateY: 0,
      filter: "blur(10px)",
      pointerEvents: "none" as const,
      display: "none" // Hide completely to prevent layout issues
    } as TargetAndTransition;
  };

  return (
    <section className="py-24 bg-[#F9FAFB] overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-gray-600 mb-4"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            Our Programs
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Future Leaders</span>
          </motion.h2>
        </div>

        {/* 3D Carousel Container */}
        {/* MOVED onMouseEnter/Leave HERE so it only pauses when touching the cards */}
        <div 
          className="relative h-[600px] sm:h-[500px] flex items-center justify-center perspective-1000"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {programs.map((program, index) => {
            const styles = getSlideStyles(index);
            const isActive = index === currentIndex;

            return (
              <motion.div
                key={program.id}
                className="absolute w-full max-w-4xl h-full sm:h-[450px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col sm:flex-row border border-gray-100"
                initial={false}
                animate={styles}
                // Smoother, less bouncy transition for automatic flow
                transition={{ duration: 0.8, ease: "easeInOut" }} 
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Image Section */}
                <div className="w-full sm:w-1/2 h-48 sm:h-full relative overflow-hidden group">
                  <motion.div 
                    className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" 
                  />
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Category Tag on Image */}
                  <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${program.color} shadow-lg`}>
                    {program.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full sm:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-white/80 backdrop-blur-sm relative">
                  <div className={`absolute -right-20 -top-20 w-60 h-60 bg-gradient-to-br ${program.color} rounded-full blur-3xl opacity-10`} />

                  <AnimatePresence mode="wait">
                     {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {program.description}
                        </p>

                        <div className="space-y-3 mb-8">
                          {program.points.map((point, i) => (
                            <motion.div 
                              key={i} 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 + (i * 0.1) }}
                              className="flex items-center gap-3"
                            >
                              <div className={`p-1 rounded-full bg-gradient-to-r ${program.color}`}>
                                <CheckCircle2 className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-gray-700 font-medium text-sm">{point}</span>
                            </motion.div>
                          ))}
                        </div>

                        <Button 
                          className={`bg-gradient-to-r ${program.color} text-white font-semibold shadow-lg shadow-purple-500/30`}
                          endContent={<ArrowRight size={16} />}
                        >
                          Learn More
                        </Button>
                      </motion.div>
                     )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls & Progress */}
        <div className="flex flex-col items-center gap-6 mt-8">
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => { setPaused(true); prevSlide(); }}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:scale-110 transition-all shadow-sm"
            >
              <ArrowLeft size={20} />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {programs.map((_, i) => (
                <div 
                  key={i} 
                  onClick={() => { setPaused(true); setCurrentIndex(i); }}
                  className={`cursor-pointer transition-all duration-300 rounded-full h-2 ${
                    i === currentIndex ? "w-8 bg-purple-600" : "w-2 bg-gray-300 hover:bg-purple-300"
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={() => { setPaused(true); nextSlide(); }}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:scale-110 transition-all shadow-sm"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Auto-play Progress Bar */}
          <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
            {/* The key={currentIndex} is CRITICAL. 
               It forces the animation to destroy and restart every time the slide changes.
            */}
            {!paused && (
                <motion.div
                    key={currentIndex} 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                    className="h-full bg-purple-600"
                />
            )}
            {paused && (
                <div className="h-full bg-gray-300 w-full" />
            )}
          </div>
          
          <p className="text-xs text-gray-400 font-medium h-4">
             {paused ? "Paused (Hovering)" : "Auto-playing"}
          </p>

        </div>

      </div>
      
      {/* CSS for 3D Perspective */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}