"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isMobile, setIsMobile] = useState(false);
  const AUTO_PLAY_INTERVAL = 5000;

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  };

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, nextSlide]);

  // Mobile: Simple vertical layout
  if (isMobile) {
    return (
      <section className="py-12 md:py-24 bg-[#F9FAFB] overflow-hidden relative" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-gray-600 mb-3 md:mb-4">
              <Sparkles className="w-4 h-4 text-purple-600" />
              Our Programs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Future Leaders</span>
            </h2>
          </div>

          <div className="space-y-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${program.color} shadow-lg`}>
                    {program.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2 mb-6">
                    {program.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`p-1 rounded-full bg-gradient-to-r ${program.color}`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full bg-gradient-to-r ${program.color} text-white font-semibold shadow-md`}
                    endContent={<ArrowRight size={16} />}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: 3D Carousel
  return (
    <section className="py-12 md:py-24 bg-[#F9FAFB] overflow-hidden relative" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-gray-600 mb-3 md:mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Our Programs
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Future Leaders</span>
          </h2>
        </div>

        <div className="relative h-[500px] flex items-center justify-center perspective-1000">
          {programs.map((program, index) => {
            const offset = (index - currentIndex + programs.length) % programs.length;
            let style: any = {};

            if (offset === 0) {
              style = { zIndex: 20, opacity: 1, scale: 1, x: 0, rotateY: 0 };
            } else if (offset === 1) {
              style = { zIndex: 10, opacity: 0.6, scale: 0.85, x: "60%", rotateY: -15 };
            } else if (offset === programs.length - 1) {
              style = { zIndex: 10, opacity: 0.6, scale: 0.85, x: "-60%", rotateY: 15 };
            } else {
              style = { zIndex: 0, opacity: 0, scale: 0.5, x: 0 };
            }

            return (
              <motion.div
                key={program.id}
                className="absolute w-full max-w-4xl h-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100"
                animate={style}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${program.color} shadow-lg`}>
                    {program.category}
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{program.description}</p>
                  <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {program.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`p-1 rounded-full bg-gradient-to-r ${program.color}`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`bg-gradient-to-r ${program.color} text-white font-semibold shadow-md w-full md:w-auto`}
                    endContent={<ArrowRight size={16} />}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-6 mt-8 md:mt-12">
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              onClick={() => { setPaused(true); prevSlide(); }}
              className="p-2 md:p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all shadow-sm"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="flex gap-2">
              {programs.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => { setPaused(true); setCurrentIndex(i); }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${i === currentIndex ? 'bg-purple-600 scale-125' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button 
              onClick={() => { setPaused(true); nextSlide(); }}
              className="p-2 md:p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all shadow-sm"
            >
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="text-xs text-gray-500">
            {paused ? "Hover to pause" : "Auto-playing"}
          </div>
        </div>
      </div>
    </section>
  );
}