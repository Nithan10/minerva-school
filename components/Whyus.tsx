import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility for class merging ---
function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

// --- Type Definitions ---
interface CardType {
  title: string;
  description: string;
  image: string;
  icon: string;
  accent: string;
  glowColors: string[];
  badge: string;
  stats: string;
  particles: string[];
  gradient: string;
  color: string;
}

interface NeuralConnectionsProps {
  activeIndex: number | null;
  cards: CardType[];
}

// --- Quantum Wave Animation ---
const QuantumWave = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
            <stop offset="25%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.15" />
            <stop offset="75%" stopColor="#EC4899" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
          </linearGradient>
          <filter id="quantumGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="screen" />
          </filter>
        </defs>
        
        {/* Quantum Wave Particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 1200}
            cy={Math.random() * 800}
            r={Math.random() * 3 + 1}
            fill="url(#quantumGradient)"
            filter="url(#quantumGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Wave Lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.path
            key={`wave-${i}`}
            d={`M 0,${200 + i * 50} Q 300,${150 + i * 50} 600,${200 + i * 50} T 1200,${200 + i * 50}`}
            stroke="url(#quantumGradient)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// --- Holographic Grid Background ---
const HolographicGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-blue-500/5" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_0%,_rgba(16,185,129,0.05)_50%,_transparent_100%)] animate-[shimmer_3s_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_0%,_rgba(59,130,246,0.05)_50%,_transparent_100%)] animate-[shimmer_3s_infinite] [animation-delay:-1.5s]" />
      </div>
      
      {/* 3D Grid Lines */}
      <div className="absolute inset-0 perspective-1000">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"
            style={{ top: `${i * 5}%` }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
        
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
            style={{ left: `${i * 5}%` }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.1 + 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// --- Neural Synapse Connections ---
const NeuralSynapses = ({ activeIndex, cards }: NeuralConnectionsProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1200 800">
        <defs>
          <radialGradient id="synapseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          
          <filter id="synapseFilter">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Dynamic Connections between cards */}
        {cards.map((_, i) => {
          const x1 = 200 + (i * 300);
          const x2 = 1000 - (i * 300);
          return (
            <motion.path
              key={`connection-${i}`}
              d={`M ${x1},200 Q 600,400 ${x2},600`}
              stroke="url(#synapseGlow)"
              strokeWidth="0.8"
              fill="none"
              filter="url(#synapseFilter)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: activeIndex === i ? 1 : 0.3,
                opacity: activeIndex === i ? 0.6 : 0.1,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          );
        })}
        
        {/* Synapse Nodes */}
        {[200, 500, 800].map((x, i) =>
          [200, 400, 600].map((y, j) => (
            <motion.g key={`node-${i}-${j}`}>
              <motion.circle
                cx={x}
                cy={y}
                r="4"
                fill="#10B981"
                fillOpacity="0.3"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  opacity: [0, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (i + j) * 0.3,
                }}
              />
              <motion.circle
                cx={x}
                cy={y}
                r="8"
                stroke="#3B82F6"
                strokeWidth="0.5"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: (i + j) * 0.3 + 0.5,
                }}
              />
            </motion.g>
          ))
        )}
      </svg>
    </div>
  );
};

// --- 3D Holographic Orb ---
const HolographicOrb = ({ color = "#10B981" }) => {
  return (
    <motion.div
      className="relative w-full h-full"
      animate={{
        rotateY: 360,
        rotateX: 180,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 blur-xl" />
      <motion.div
        className="absolute inset-4 rounded-full border-2"
        style={{ borderColor: `${color}30` }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border"
        style={{ borderColor: `${color}20` }}
        animate={{
          rotateZ: 360,
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-white/5" />
    </motion.div>
  );
};

// --- 3D Floating Card with Advanced Effects ---
interface AdvancedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColors?: string[];
  hoverIntensity?: number;
  index?: number;
}

const AdvancedCard = ({ children, className, glowColors = ["#10B981", "#3B82F6"], hoverIntensity = 20, index = 0 }: AdvancedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotationX = useMotionValue(0);
  const rotationY = useMotionValue(0);
  const isHovering = useMotionValue(0);
  const floatOffset = useMotionValue(0);

  const floatSpring = useSpring(floatOffset, { stiffness: 100, damping: 10 });
  const hoverSpring = useSpring(isHovering, { stiffness: 200, damping: 20 });
  const rotateXSpring = useSpring(rotationX, { stiffness: 300, damping: 30 });
  const rotateYSpring = useSpring(rotationY, { stiffness: 300, damping: 30 });

  // Floating animation
  useEffect(() => {
    const float = () => {
      floatOffset.set(Math.sin(Date.now() * 0.001 + index) * 10);
      requestAnimationFrame(float);
    };
    const animationId = requestAnimationFrame(float);
    return () => cancelAnimationFrame(animationId);
  }, [index, floatOffset]);

  const transform = useMotionTemplate`
    perspective(1200px)
    rotateX(${rotateXSpring}deg)
    rotateY(${rotateYSpring}deg)
    translateZ(${useMotionTemplate`calc(${hoverSpring} * 40 + ${floatSpring})`}px)
    scale(${useMotionTemplate`calc(1 + ${hoverSpring} * 0.05)`})
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    isHovering.set(1);

    const rotateY = ((e.clientX - centerX) / rect.width) * hoverIntensity;
    const rotateX = ((centerY - e.clientY) / rect.height) * hoverIntensity;

    rotationX.set(rotateX);
    rotationY.set(rotateY);
  };

  const handleMouseLeave = () => {
    rotationX.set(0);
    rotationY.set(0);
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
        "group relative h-full rounded-4xl",
        "bg-gradient-to-br from-white/95 via-white/90 to-white/85",
        "shadow-2xl shadow-blue-500/10",
        "backdrop-blur-xl",
        "border border-white/30",
        "transition-all duration-700",
        "hover:shadow-3xl hover:shadow-emerald-500/20",
        "before:absolute before:inset-0 before:rounded-4xl",
        "before:bg-gradient-to-br before:from-emerald-500/10 before:to-blue-500/10",
        "before:opacity-0 before:transition-opacity before:duration-700",
        "group-hover:before:opacity-100",
        "after:absolute after:inset-0 after:rounded-4xl",
        "after:bg-gradient-to-br after:from-white/0 after:via-white/5 after:to-white/0",
        "after:opacity-0 after:transition-opacity after:duration-500",
        "group-hover:after:opacity-100",
        className
      )}
    >
      {/* Holographic Edge Glow */}
      <div className="absolute -inset-px rounded-4xl bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
      
      {/* Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${glowColors[0]}15,
              transparent 60%
            )
          `,
        }}
      />
      
      {/* Inner Content with 3D Depth */}
      <div 
        className="relative h-full w-full rounded-4xl overflow-hidden z-10"
        style={{ 
          transform: "translateZ(60px)",
          background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)"
        }}
      >
        {/* Micro Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full bg-emerald-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {children}
      </div>
    </motion.div>
  );
};

// --- DNA Helix Animation with Particles ---
const AdvancedDNAHelix = () => {
  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-64 h-64 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* DNA Strand 1 */}
        <motion.path
          d="M 40,20 Q 100,10 160,20 Q 100,60 40,80 Q 100,100 160,80 Q 100,140 40,160 Q 100,170 160,160"
          stroke="#10B981"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* DNA Strand 2 */}
        <motion.path
          d="M 160,20 Q 100,10 40,20 Q 100,60 160,80 Q 100,100 40,80 Q 100,140 160,160 Q 100,170 40,160"
          stroke="#3B82F6"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 4 }}
        />
        
        {/* DNA Nodes */}
        {[20, 60, 100, 140, 180].map((y, i) => (
          <motion.g key={i}>
            <motion.circle
              cx="40"
              cy={y}
              r="3"
              fill="#10B981"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
            <motion.circle
              cx="160"
              cy={y}
              r="3"
              fill="#3B82F6"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5 + 0.2,
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

// --- Main Component ---
export default function WhyUsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cards: CardType[] = [
    {
      title: "Holistic Development",
      description: "We nurture every aspect of a child's growth through comprehensive academic programmes that develop mind, body, and character in perfect harmony.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
      icon: "🧬",
      accent: "text-emerald-600",
      glowColors: ["#10B981", "#3B82F6"],
      badge: "Whole Child Approach",
      stats: "98% Satisfaction",
      particles: ["🧠", "❤️", "🌟"],
      gradient: "from-emerald-500/30 via-blue-500/20 to-purple-500/10",
      color: "#10B981"
    },
    {
      title: "Innovative Learning",
      description: "Our cutting-edge approach empowers students with practical, lifelong skills through immersive project-based and experiential learning methodologies.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
      icon: "⚡",
      accent: "text-purple-600",
      glowColors: ["#8B5CF6", "#EC4899"],
      badge: "Future Ready",
      stats: "3x Engagement",
      particles: ["🚀", "💡", "🎯"],
      gradient: "from-purple-500/30 via-pink-500/20 to-rose-500/10",
      color: "#8B5CF6"
    },
    {
      title: "Inquiry-Based Education",
      description: "Students thrive through curiosity-driven inquiry, making education engaging, effective, and memorable with innovative student-centered methodologies.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop",
      icon: "🔭",
      accent: "text-blue-600",
      glowColors: ["#3B82F6", "#06B6D4"],
      badge: "Active Learning",
      stats: "95% Retention",
      particles: ["🔍", "💭", "✨"],
      gradient: "from-blue-500/30 via-cyan-500/20 to-emerald-500/10",
      color: "#3B82F6"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50/30"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`,
      }}
    >
      {/* Advanced Background Effects */}
      <HolographicGrid />
      <QuantumWave />
      <NeuralSynapses activeIndex={activeIndex} cards={cards} />
      
      {/* Floating Quantum Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
        animate={{
          y: [0, -20, 0],
          rotate: 360,
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      >
        <HolographicOrb color="#10B981" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 translate-x-1/2 translate-y-1/2"
        animate={{
          y: [0, 20, 0],
          rotate: -360,
        }}
        transition={{
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 50, repeat: Infinity, ease: "linear" }
        }}
      >
        <HolographicOrb color="#3B82F6" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24 relative"
        >
          <AdvancedDNAHelix />
          
          {/* Animated Quantum Badge */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-white/30 backdrop-blur-2xl mb-12 shadow-2xl"
          >
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="relative w-3 h-3"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 blur-sm" />
            </motion.div>
            <span className="text-sm font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wider">
              QUANTUM EDUCATION SYSTEM
            </span>
            <motion.div 
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, delay: 1 }
              }}
              className="relative w-3 h-3"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm" />
            </motion.div>
          </motion.div>
          
          {/* Main Title with Advanced Gradient */}
          <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter relative"
          >
            <span className="relative">
              <span className="absolute -inset-2 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 blur-3xl opacity-30" />
              <span className="relative bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why
              </span>
            </span>
            <span className="text-slate-900 ml-4 relative">
              <span className="absolute -inset-1 bg-white blur-xl opacity-30" />
              <span className="relative">Choose Us</span>
            </span>
          </motion.h1>
          
          {/* Animated Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-2xl text-slate-700 leading-relaxed font-light"
          >
            Where <span className="font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">cutting-edge pedagogy</span> meets 
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> revolutionary technology</span> to create 
            the ultimate learning ecosystem for tomorrow's innovators.
          </motion.p>
        </motion.div>

        {/* 3D Advanced Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="h-[600px] relative"
            >
              {/* Card Background Glow */}
              <motion.div 
                className="absolute -inset-4 rounded-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at center, ${card.color}20, transparent 70%)`,
                }}
              />
              
              <AdvancedCard glowColors={card.glowColors} hoverIntensity={25} index={index}>
                <div className="flex flex-col h-full p-2">
                  {/* Quantum Particles in Card */}
                  <div className="absolute inset-0 overflow-hidden rounded-4xl">
                    {card.particles.map((particle, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          x: [0, Math.random() * 100 - 50, 0],
                          y: [0, Math.random() * 100 - 50, 0],
                          rotate: 360,
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: Math.random() * 8 + 6,
                          repeat: Infinity,
                          delay: Math.random() * 3,
                          ease: "linear"
                        }}
                      >
                        {particle}
                      </motion.div>
                    ))}
                  </div>

                  {/* Image with Parallax and Glow */}
                  <div className="relative h-72 overflow-hidden rounded-3xl group/image">
                    <motion.div 
                      className="absolute inset-0 z-10"
                      style={{
                        background: `linear-gradient(135deg, ${card.gradient})`,
                      }}
                    />
                    <motion.img 
                      src={card.image} 
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      animate={{
                        scale: activeIndex === index ? 1.3 : 1.1,
                      }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    
                    {/* Animated Badge */}
                    <motion.div 
                      className="absolute top-6 right-6 z-20"
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="px-5 py-2.5 text-sm font-bold bg-white/90 backdrop-blur-xl text-slate-900 rounded-full border border-white/40 shadow-2xl">
                        {card.badge}
                      </span>
                    </motion.div>
                    
                    {/* Quantum Icon */}
                    <motion.div 
                      className="absolute bottom-6 left-6 z-20 text-5xl"
                      animate={{
                        y: [0, -15, 0],
                        rotate: activeIndex === index ? [0, 360] : 0,
                      }}
                      transition={{ 
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 3 }
                      }}
                    >
                      {card.icon}
                    </motion.div>
                    
                    {/* Image Overlay Glow */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 p-8 flex flex-col">
                    <div className="flex-1">
                      <motion.h3 
                        className="text-4xl font-bold text-slate-900 mb-6"
                        animate={{
                          background: activeIndex === index 
                            ? `linear-gradient(45deg, ${card.glowColors.join(', ')})`
                            : "transparent",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        transition={{ duration: 0.7 }}
                      >
                        {card.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-slate-700 leading-relaxed text-lg mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {card.description}
                      </motion.p>
                    </div>

                    {/* Interactive Stats */}
                    <div className="pt-8 border-t border-white/30">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-slate-600 font-medium">Success Metric</span>
                        <motion.span 
                          className={`text-2xl font-black ${card.accent}`}
                          animate={{
                            scale: activeIndex === index ? [1, 1.1, 1] : 1,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {card.stats}
                        </motion.span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="h-2 bg-white/50 rounded-full overflow-hidden mb-8">
                        <motion.div 
                          className={`h-full rounded-full bg-gradient-to-r ${card.gradient}`}
                          initial={{ width: "0%" }}
                          whileInView={{ width: "92%" }}
                          transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                        />
                      </div>
                      
                      {/* Quantum CTA */}
                      <motion.div 
                        className="flex items-center justify-between group/cta cursor-pointer"
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="relative w-10 h-10 rounded-full bg-gradient-to-r from-white to-white/80 flex items-center justify-center border border-white/30 shadow-lg"
                            whileHover={{ scale: 1.15 }}
                            animate={{
                              boxShadow: [
                                "0 0 20px rgba(16, 185, 129, 0.3)",
                                "0 0 40px rgba(16, 185, 129, 0.6)",
                                "0 0 20px rgba(16, 185, 129, 0.3)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <motion.svg 
                              className="w-5 h-5 text-emerald-600" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </motion.svg>
                          </motion.div>
                          <span className="text-slate-900 font-semibold text-lg group-hover/cta:text-emerald-700 transition-colors duration-300">
                            Explore Quantum Learning
                          </span>
                        </div>
                        
                        {/* Quantum Arrow */}
                        <motion.div
                          animate={{ 
                            x: [0, 8, 0],
                            rotate: [0, 360],
                          }}
                          transition={{ 
                            x: { duration: 2, repeat: Infinity },
                            rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                          }}
                        >
                          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </AdvancedCard>
            </motion.div>
          ))}
        </div>

        {/* Quantum Stats Dashboard */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-32 p-12 rounded-4xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-2xl border border-white/30 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "25+", label: "Years of Excellence", icon: "🏆", color: "from-emerald-500 to-emerald-600" },
              { value: "98%", label: "Parent Satisfaction", icon: "😊", color: "from-blue-500 to-cyan-500" },
              { value: "1:15", label: "Student-Teacher Ratio", icon: "👨‍🏫", color: "from-purple-500 to-pink-500" },
              { value: "100%", label: "University Placement", icon: "🎓", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.div 
                  className="text-5xl mb-4 inline-block"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    rotate: { duration: 5, repeat: Infinity },
                    y: { duration: 3, repeat: Infinity }
                  }}
                >
                  {stat.icon}
                </motion.div>
                <div className="relative">
                  <motion.div 
                    className="text-6xl font-black mb-2 bg-gradient-to-r bg-clip-text text-transparent"
                    animate={{
                      backgroundImage: `linear-gradient(to right, ${stat.color})`,
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-slate-700 text-lg font-medium">{stat.label}</div>
                  
                  {/* Animated underline */}
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 mt-2"
                    style={{ backgroundImage: `linear-gradient(to right, transparent, ${stat.color.split(' ')[1]}, transparent)` }}
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quantum Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-32 text-center"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-12 text-slate-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ready for the{" "}
            <span className="relative">
              <span className="absolute -inset-2 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 blur-3xl opacity-40" />
              <span className="relative bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quantum Leap
              </span>
            </span>
            ?
          </motion.h2>
          
          <motion.p 
            className="max-w-3xl mx-auto text-2xl text-slate-700 leading-relaxed mb-16 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join our community of innovators, thinkers, and future leaders. Experience education 
            reimagined for the quantum age.
          </motion.p>
          
          {/* Quantum Button */}
          <motion.div 
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="relative px-16 py-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white font-bold text-2xl shadow-2xl overflow-hidden group"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                backgroundPosition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              {/* Button Glow */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Button Text */}
              <span className="relative z-10 flex items-center gap-4">
                Schedule Quantum Tour
                <motion.svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ 
                    x: [0, 5, 0],
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    x: { duration: 1.5, repeat: Infinity },
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}