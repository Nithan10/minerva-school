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

type Category = "All" | "Academics" | "Sports" | "Arts" | "Campus" | "Events";

interface PhotoItem {
  id: number;
  src: string;
  category: Category;
  caption: string;
  featured?: boolean;
}

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

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<PhotoItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const filteredPhotos = galleryData.filter((photo) => 
    activeCategory === "All" ? true : photo.category === activeCategory
  );

  if (!isMounted) return null;

  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-24" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10 mb-8 md:mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
              <div className="h-px w-6 md:w-8 bg-[#6039DB]" />
              <span className="text-[#6039DB] text-xs md:text-sm font-bold tracking-wider uppercase">
                Our Gallery
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              Capturing Life at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6039DB] to-pink-600">
                Minerva.
              </span>
            </h1>
          </div>

          {/* Filter Tabs */}
          <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
            <div className="flex bg-gray-100/50 p-1 rounded-xl md:rounded-2xl gap-1 w-max">
              {categories.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => setActiveCategory(label)}
                  className={cn(
                    "relative px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 md:gap-2.5",
                    activeCategory === label
                      ? "text-white shadow-md shadow-purple-500/25"
                      : "text-gray-500 hover:text-gray-900 hover:bg-white"
                  )}
                >
                  {activeCategory === label && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#6039DB] rounded-lg md:rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
                    <Icon size={14} className="md:w-4 md:h-4" />
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedImage(photo)}
              className={cn(
                "relative group rounded-xl md:rounded-2xl overflow-hidden cursor-pointer",
                photo.featured ? "sm:col-span-2 sm:row-span-2" : "col-span-1 row-span-1"
              )}
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2629&auto=format&fit=crop";
                  }}
                />
              </div>
              
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <div className="bg-white/90 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-4 shadow-lg border border-white/20 flex items-center justify-between">
                  <div className="overflow-hidden">
                    <p className="text-[#6039DB] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 truncate">
                      {photo.category}
                    </p>
                    <h3 className="text-gray-900 font-bold text-xs md:text-sm truncate">
                      {photo.caption}
                    </h3>
                  </div>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#6039DB] text-white flex items-center justify-center flex-shrink-0 ml-2">
                    <ArrowUpRight size={12} className="md:w-4 md:h-4" />
                  </div>
                </div>
              </div>

              <div className="absolute top-2 left-2 md:top-3 md:left-3 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-black/30 backdrop-blur-md text-white text-[9px] md:text-[10px] font-bold px-2 md:px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                  {photo.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="w-full h-48 md:h-64 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl md:rounded-3xl mt-4">
            <Camera size={32} className="md:w-12 md:h-12 mb-3 opacity-20" />
            <p className="text-sm md:text-lg font-medium">No photos found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-2 md:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 md:p-3 transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-xl md:rounded-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full h-full object-contain bg-black"
                />
              </div>
              
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 md:p-6 pt-16 text-white">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-4">
                  <div className="overflow-hidden">
                    <span className="inline-block px-2 md:px-3 py-1 rounded-full border border-white/30 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 text-white/80">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-lg md:text-2xl font-bold leading-tight truncate">
                      {selectedImage.caption}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}