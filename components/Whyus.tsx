import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility for class merging ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Neural Connection Lines (Animated SVG lines) ---
const NeuralConnections = ({ activeIndex, cards }) => {
  const paths = [
    "M 100,100 Q 250,50 400,150",
    "M 100,250 Q 250,200 400,300",
    "M 100,400 Q 250,350 400,450",
    "M 400,150 Q 550,100 700,250",
    "M 400,300 Q 550,250 700,400",
    "M 400,450 Q 550,400 700,550"
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 650">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="url(#neuralGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Animated nodes at connection points */}
        {[100, 250, 400, 550, 700].map((x) =>
          [100, 250, 400, 550].map((y) => (
            <motion.circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r="2"
              fill="#3B82F6"
              fillOpacity="0.4"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (x + y) * 0.001,
              }}
            />
          ))
        )}
      </svg>
    </div>
  );
};

// --- Floating Particles Background ---
const ParticleBackground = () => {
  const particles = Array.from({ length: 50 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// --- Advanced Spotlight with Multiple Lights ---
const NeuralSpotlight = ({ mouseX, mouseY, colors = ["#3B82F6", "#8B5CF6", "#06B6D4"] }) => {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-4xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${colors[0]}08,
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-4xl opacity-0 transition-opacity duration-700 group-hover:opacity-50 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${colors[1]}06,
              transparent 70%
            )
          `,
        }}
      />
    </>
  );
};

// --- 3D Holographic Card with Depth Effect ---
const HolographicCard = ({ children, className, glowColors, rotationIntensity = 15 }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isHovering = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });
  const hoverSpring = useSpring(isHovering, { stiffness: 100, damping: 10 });

  const transform = useMotionTemplate`
    perspective(1000px)
    rotateX(${xSpring}deg)
    rotateY(${ySpring}deg)
    translateZ(${useMotionTemplate`calc(${hoverSpring} * 20)`}px)
  `;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseXRel = e.clientX - rect.left;
    const mouseYRel = e.clientY - rect.top;
    
    mouseX.set(mouseXRel);
    mouseY.set(mouseYRel);
    isHovering.set(1);

    const rotateY = ((e.clientX - centerX) / rect.width) * rotationIntensity;
    const rotateX = ((centerY - e.clientY) / rect.height) * rotationIntensity;

    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    isHovering.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={cn(
        "group relative h-full rounded-4xl border",
        "bg-gradient-to-br from-white/90 to-white/70",
        "shadow-lg shadow-blue-500/5",
        "backdrop-blur-sm",
        "transition-all duration-500",
        "hover:shadow-xl hover:shadow-blue-500/10",
        "before:absolute before:inset-0 before:rounded-4xl",
        "before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5",
        "before:opacity-0 before:transition-opacity before:duration-500",
        "hover:before:opacity-100",
        "border-slate-200/60 hover:border-blue-200/60",
        className
      )}
    >
      {/* Holographic Edge Glow */}
      <div className="absolute -inset-0.5 rounded-4xl bg-gradient-to-r from-blue-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 z-0" />
      
      <NeuralSpotlight mouseX={mouseX} mouseY={mouseY} colors={glowColors} />
      
      {/* Inner Content Container with 3D Depth */}
      <div 
        className="relative h-full w-full rounded-4xl overflow-hidden z-10"
        style={{ 
          transform: "translateZ(40px)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)"
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

// --- DNA Helix Animation for Header ---
const DNAHelix = () => {
  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-48 h-48 opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <motion.path
          d="M 20,10 Q 50,20 80,10 Q 50,40 20,50 Q 50,60 80,50 Q 50,80 20,90"
          stroke="#3B82F6"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 80,10 Q 50,20 20,10 Q 50,40 80,50 Q 50,60 20,50 Q 50,80 80,90"
          stroke="#8B5CF6"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </svg>
    </div>
  );
};

// --- Main Component ---
export default function NeuralEducationSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const cards = [
    {
      title: "Cognitive Architecture",
      description: "Building neural pathways through structured learning experiences that optimize brain development and memory retention.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      icon: "🧠",
      accent: "text-blue-600",
      glowColors: ["#3B82F6", "#06B6D4"],
      badge: "Neuro-Optimized",
      stats: "94% Retention",
      particles: ["⚡", "🔬", "🎯"],
      gradient: "from-blue-400/20 to-cyan-400/20"
    },
    {
      title: "Synaptic Connections",
      description: "Fostering interdisciplinary learning that creates meaningful connections between diverse fields of knowledge.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
      icon: "🔗",
      accent: "text-purple-600",
      glowColors: ["#8B5CF6", "#EC4899"],
      badge: "Interconnected",
      stats: "360° Learning",
      particles: ["🌐", "🔄", "✨"],
      gradient: "from-purple-400/20 to-pink-400/20"
    },
    {
      title: "Adaptive Intelligence",
      description: "AI-enhanced personalized learning paths that evolve with each student's unique cognitive development.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      icon: "🤖",
      accent: "text-emerald-600",
      glowColors: ["#10B981", "#3B82F6"],
      badge: "AI-Enhanced",
      stats: "Real-Time Adaptation",
      particles: ["🚀", "💡", "🎮"],
      gradient: "from-emerald-400/20 to-blue-400/20"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.03) 0%, transparent 50%)`,
      }}
    >
      {/* Advanced Background Effects */}
      <ParticleBackground />
      <NeuralConnections activeIndex={activeIndex} cards={cards} />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header with DNA Helix */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24 relative"
        >
          <DNAHelix />
          
          {/* Animated Badge */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 border border-blue-200 backdrop-blur-sm mb-8 shadow-sm"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
            />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wider">
              NEURO-EDUCATION 4.0
            </span>
          </motion.div>
          
          {/* Main Title with Gradient Text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Mind
            </span>
            <span className="text-slate-900 ml-4">Evolution</span>
          </h1>
          
          {/* Animated Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed"
          >
            Where cognitive science meets cutting-edge technology to create the ultimate learning experience. 
            We don't just teach—we rewire thinking patterns for lifelong mastery.
          </motion.p>
        </motion.div>

        {/* 3D Holographic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="h-[550px]"
            >
              <HolographicCard glowColors={card.glowColors} rotationIntensity={20}>
                <div className="flex flex-col h-full p-1">
                  {/* Floating Particles in Card */}
                  <div className="absolute inset-0 overflow-hidden rounded-4xl">
                    {card.particles.map((particle, i) => (
                      <motion.span
                        key={i}
                        className="absolute text-2xl opacity-10"
                        initial={{ 
                          x: Math.random() * 100 - 50,
                          y: Math.random() * 100 - 50
                        }}
                        animate={{ 
                          x: Math.random() * 100 - 50,
                          y: Math.random() * 100 - 50,
                          rotate: 360
                        }}
                        transition={{
                          duration: Math.random() * 10 + 10,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        {particle}
                      </motion.span>
                    ))}
                  </div>

                  {/* Image with Parallax Effect */}
                  <div className="relative h-64 overflow-hidden rounded-3xl">
                    <motion.div 
                      className="absolute inset-0 z-10"
                      style={{
                        background: `linear-gradient(135deg, ${card.gradient})`
                      }}
                    />
                    <motion.img 
                      src={card.image} 
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      animate={{
                        scale: activeIndex === index ? 1.2 : 1.1,
                      }}
                      transition={{ duration: 1.5 }}
                    />
                    
                    {/* Animated Badge */}
                    <motion.div 
                      className="absolute top-6 right-6 z-20"
                      animate={{
                        y: activeIndex === index ? [0, -5, 0] : 0,
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="px-4 py-2 text-xs font-bold bg-white/80 backdrop-blur-md text-slate-800 rounded-full border border-slate-200 shadow-lg">
                        {card.badge}
                      </span>
                    </motion.div>
                    
                    {/* Icon Floating Animation */}
                    <motion.div 
                      className="absolute bottom-6 left-6 z-20 text-4xl"
                      animate={{
                        y: [0, -10, 0],
                        rotate: activeIndex === index ? 360 : 0,
                      }}
                      transition={{ 
                        y: { duration: 3, repeat: Infinity },
                        rotate: { duration: 2 }
                      }}
                    >
                      {card.icon}
                    </motion.div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 p-8 flex flex-col">
                    <div className="flex-1">
                      <motion.h3 
                        className="text-3xl font-bold text-slate-900 mb-4"
                        animate={{
                          background: activeIndex === index 
                            ? `linear-gradient(45deg, ${card.glowColors.join(', ')})`
                            : "transparent",
                          backgroundClip: activeIndex === index ? "text" : "",
                          WebkitBackgroundClip: activeIndex === index ? "text" : "",
                          WebkitTextFillColor: activeIndex === index ? "transparent" : "",
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {card.title}
                      </motion.h3>
                      
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {card.description}
                      </p>
                    </div>

                    {/* Interactive Stats Bar */}
                    <div className="pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-slate-500">Cognitive Score</span>
                        <span className={`text-lg font-bold ${card.accent}`}>{card.stats}</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full rounded-full bg-gradient-to-r ${card.gradient}`}
                          initial={{ width: "0%" }}
                          whileInView={{ width: "85%" }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                      
                      {/* Interactive CTA */}
                      <motion.div 
                        className="mt-6 flex items-center justify-between group/cta cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 flex items-center justify-center border border-slate-200"
                            whileHover={{ scale: 1.1 }}
                          >
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </motion.div>
                          <span className="text-slate-800 font-medium group-hover/cta:text-blue-600 transition-colors">
                            Explore Neural Pathways
                          </span>
                        </div>
                        
                        {/* Animated Arrow */}
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </div>

        {/* Floating Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10 border border-slate-200/60 backdrop-blur-sm shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "97%", label: "Neural Retention", icon: "📈" },
              { value: "3.2x", label: "Learning Speed", icon: "⚡" },
              { value: "360°", label: "Cognitive Coverage", icon: "🎯" },
              { value: "24/7", label: "AI Adaptation", icon: "🤖" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2 opacity-80">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}