"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@heroui/react";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Award, 
  Heart, 
  Target, 
  Zap, 
  TrendingUp,
  Star 
} from "lucide-react";

// --- Configuration & Animation Constants ---
const TRANSITION_EASE = [0.25, 0.1, 0.25, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: TRANSITION_EASE },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: TRANSITION_EASE },
  },
};

// --- Sub-Components ---

const FeatureCard = ({ icon: Icon, title, description, gradient }: { icon: React.ElementType; title: string; description: string; gradient: string }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    className="relative group"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500`} />
    <div className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const StatCard = ({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05, y: -5 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-100 shadow-lg text-center sm:text-left">
      <div className="flex items-center justify-center sm:justify-start mb-3">
        <Icon className="w-8 h-8 text-purple-600" />
      </div>
      <h4 className="text-4xl font-black text-gray-900 mb-1">{value}</h4>
      <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">{label}</p>
    </div>
  </motion.div>
);

export default function AboutUsPremium() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const features = [
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Tailored education paths that adapt to each child's unique learning style and pace.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Expert Educators",
      description: "Certified teachers with passion for nurturing young minds and fostering creativity.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Safe Environment",
      description: "Secure, inspiring spaces designed for exploration, growth, and joyful learning.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Holistic Development",
      description: "Focus on academic, social, emotional, and physical growth for well-rounded students.",
      gradient: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden py-24" id="about">
      
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#6039DB 1.5px, transparent 1.5px), linear-gradient(90deg, #6039DB 1.5px, transparent 1.5px)",
            backgroundSize: "50px 50px"
          }}
        />

        {/* Gradient Orbs */}
        <motion.div 
          style={{ y }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
        />

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Section: Heading & Main Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
            
            {/* LEFT: Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col space-y-8"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 shadow-sm">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-700 text-xs font-bold uppercase tracking-wider">Who We Are</span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants} className="space-y-2">
                <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.05]">
                  Building Strong
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Foundations
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-xl text-gray-600 leading-relaxed max-w-xl">
                We provide a seamless learning journey tailored for every stage of early development. From playful exploration to structured academic excellence, we focus on{" "}
                <span className="font-bold text-purple-600">holistic growth</span> and{" "}
                <span className="font-bold text-purple-600">lifelong success</span>.
              </motion.p>

              {/* Key Points */}
              <motion.div variants={itemVariants} className="space-y-4">
                {[
                  "Individual attention for every child's unique potential",
                  "Modern facilities with latest educational technology",
                  "Strong parent-teacher partnership for success"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="p-1 rounded-full bg-purple-100 text-purple-600 group-hover:scale-110 transition-transform mt-0.5">
                      <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <span className="text-gray-700 font-medium text-base leading-relaxed">{point}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="pt-4">
                {isMounted && (
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg px-8 py-7 rounded-2xl shadow-2xl shadow-purple-500/30 flex items-center gap-3 hover:shadow-purple-500/50 transition-all data-[hover=true]:scale-105"
                    endContent={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  >
                    Start Your Journey
                  </Button>
                )}
              </motion.div>
            </motion.div>

            {/* RIGHT: Image with Floating Cards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              {/* Main Image */}
              <div className="relative w-full h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white">
                <img 
                  src="/aboutus/image11.webp"
                  alt="Students learning" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent" />
              </div>

              {/* Floating Rating Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30, x: -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-8 -left-2 lg:-left-12 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[280px] z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-4 rounded-2xl text-white shadow-lg">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="font-black text-2xl text-gray-900">4.9/5</p>
                    <p className="text-xs text-gray-500 font-semibold mt-1">
                      From 500+ happy families
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Achievement Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute top-8 -right-2 lg:-right-12 bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-3xl shadow-2xl z-20"
              >
                <div className="text-center">
                  <Award className="w-12 h-12 text-white mx-auto mb-2" />
                  <p className="font-black text-3xl text-white">12+</p>
                  <p className="text-xs text-white/90 font-bold uppercase tracking-wide">
                    Years Excellence
                  </p>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
          >
            <StatCard value="500+" label="Happy Students" icon={Users} />
            <StatCard value="25+" label="Expert Faculty" icon={Award} />
            <StatCard value="98%" label="Success Rate" icon={TrendingUp} />
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
              <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                Why Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Our School</span>
              </h3>
              <p className="text-lg text-gray-600">
                Discover what makes us the perfect choice for your child's educational journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}