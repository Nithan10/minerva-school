"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, 
  GraduationCap, 
  Trophy, 
  Palette, 
  Building2, 
  X, 
  Maximize2,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@heroui/react"; 

// --- Types & Data ---

type Category = "All" | "Academics" | "Sports" | "Arts" | "Campus" | "Events";

interface PhotoItem {
  id: number;
  src: string;
  category: Category;
  caption: string;
  featured?: boolean;
}

// --- UPDATED DATA WITH CORRECT ABSOLUTE PATHS (Added leading '/') ---
const galleryData: PhotoItem[] = [
  { id: 1, category: "Campus", caption: "The Main Historic Building", src: "/back.jpeg", featured: true },
  { id: 2, category: "Academics", caption: "Smart Class Learning", src: "/gal/sm.jpg" },
  { id: 3, category: "Sports", caption: "Football Championship", src: "/gal/sp.jpg" },
  { id: 4, category: "Arts", caption: "Spring Theater Production", src: "/gal/art.jpg", featured: true },
  { id: 5, category: "Events", caption: "Graduation Ceremony", src: "/gal/en.jpg" },
  { id: 6, category: "Campus", caption: "Autumn on the Quad", src: "/gal/camp4.jpg" },
  { id: 7, category: "Academics", caption: "Biology Research", src: "/gal/ad.jpg" },
  { id: 8, category: "Campus", caption: "Modern Library Wing", src: "/gal/camp5.png", featured: true },
  { id: 9, category: "Events", caption: "Cultural Festival", src: "/gal/ev3.jpg" },
  { id: 10, category: "Sports", caption: "Basketball Team", src: "/gal/sp1.jpg" },
  { id: 11, category: "Events", caption: "Dance Performance", src: "/gal/ev6.jpg" },
  { id: 12, category: "Events", caption: "Cultural Dance", src: "/gal/ev2.jpg" },
  { id: 13, category: "Campus", caption: "Student Walkway", src: "/gal/camp2.jpg" },
  { id: 14, category: "Academics", caption: "Chemistry Lab", src: "/gal/ad1.jpg" }, 
  { id: 15, category: "Events", caption: "Music Fest 2025", src: "/gal/ev4.jpg" },
  { id: 16, category: "Campus", caption: "Morning Assembly", src: "/gal/camp.jpg" },
];

const categories: { label: Category; icon: React.ElementType }[] = [
  { label: "All", icon: Camera },
  { label: "Academics", icon: GraduationCap },
  { label: "Sports", icon: Trophy },
  { label: "Arts", icon: Palette },
  { label: "Campus", icon: Building2 },
  { label: "Events", icon: Camera },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<PhotoItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const filteredPhotos = galleryData.filter((photo) => 
    activeCategory === "All" ? true : photo.category === activeCategory
  );

  // Safe Src helper with fallback
  const getSafeSrc = (src: string) => src && src.trim() !== "" ? src : "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2629&auto=format&fit=crop";

  if (!isMounted) return null;

  return (
    <section className="relative w-full bg-white py-24 lg:py-32" id="gallery">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* --- Header & Filter Layout --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          
          {/* Title Area */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="h-px w-8 bg-[#6039DB]" />
              <span className="text-[#6039DB] text-sm font-bold tracking-widest uppercase">
                Our Gallery
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight"
            >
              Capturing Life at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6039DB] to-pink-600">
                Minerva.
              </span>
            </motion.h1>
          </div>

          {/* Filter Tabs */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0"
          >
            <div className="flex bg-gray-100/50 p-1.5 rounded-2xl gap-1 w-max">
              {categories.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => setActiveCategory(label)}
                  className={cn(
                    "relative px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2.5 outline-none focus:ring-2 focus:ring-purple-200",
                    activeCategory === label
                      ? "text-white shadow-lg shadow-purple-500/25"
                      : "text-gray-500 hover:text-gray-900 hover:bg-white"
                  )}
                >
                  {activeCategory === label && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#6039DB] rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} />
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- Mosaic Grid --- */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px] grid-flow-dense"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                key={photo.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setSelectedImage(photo)}
                className={cn(
                  "relative group rounded-3xl overflow-hidden cursor-pointer",
                  // Featured logic: Spans 2x2 rows/cols for visual interest
                  photo.featured ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
                )}
              >
                {/* Image */}
                <div className="w-full h-full overflow-hidden">
                  <motion.img
                    src={getSafeSrc(photo.src)}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2629&auto=format&fit=crop";
                    }}
                  />
                </div>

                {/* Glassmorphism Overlay (Reveals on Hover) */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 flex items-center justify-between">
                    <div>
                      <p className="text-[#6039DB] text-xs font-bold uppercase tracking-wider mb-1">
                        {photo.category}
                      </p>
                      <h3 className="text-gray-900 font-bold text-sm line-clamp-1">
                        {photo.caption}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#6039DB] text-white flex items-center justify-center shrink-0">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* Default State Badge (Hidden on Hover) */}
                <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="bg-black/30 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                      {photo.category}
                    </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPhotos.length === 0 && (
          <div className="w-full h-64 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-3xl">
            <Camera size={48} className="mb-4 opacity-20" />
            <p className="text-lg font-medium">No photos found in this category.</p>
          </div>
        )}
      </div>

      {/* --- Modern Lightbox --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-white/10 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
               className="absolute top-4 right-4 md:top-8 md:right-8 bg-black text-white hover:bg-gray-800 rounded-full p-3 transition-transform hover:rotate-90 z-50 shadow-lg"
               onClick={() => setSelectedImage(null)}
            >
               <X size={24} />
            </button>
            
            <motion.div
              layoutId={`photo-${selectedImage.id}`}
              className="relative w-full max-w-5xl overflow-hidden shadow-2xl rounded-[2rem] bg-black group"
              onClick={(e) => e.stopPropagation()}
            >
               <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
                   <img
                    src={getSafeSrc(selectedImage.src)}
                    alt={selectedImage.caption}
                    className="w-full h-full object-contain bg-black"
                  />
               </div>
              
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 md:p-10 pt-24 text-white">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                   <div>
                     <span className="inline-block px-3 py-1 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest mb-3 text-white/80">
                         {selectedImage.category}
                     </span>
                     <h3 className="text-2xl md:text-4xl font-bold leading-tight">{selectedImage.caption}</h3>
                   </div>
                   
                   <button className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[#a78bfa] transition-colors">
                     <Maximize2 size={16} />
                     View Full Size
                   </button>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}