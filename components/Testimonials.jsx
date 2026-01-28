import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mayur Bhatt",
    role: "Parent",
    content: "The best school as per my knowledge. They help the children to learn effectively.",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=MB&backgroundColor=eab308", // Auto-generated avatar
    rating: 5,
  },
  {
    id: 2,
    name: "Neha Mishra",
    role: "Parent",
    content: "The best school as per my knowledge. They help the children to learn effectively.", // Using text from your image
    image: "https://api.dicebear.com/9.x/initials/svg?seed=NM&backgroundColor=db2777",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Sharma",
    role: "Parent",
    content: "Impressive infrastructure and the teachers are very supportive. My child loves going to school.",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=RS&backgroundColor=2563eb",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Singh",
    role: "Mother of 2",
    content: "A perfect balance of academics and extracurricular activities. Highly recommended!",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=PS&backgroundColor=16a34a",
    rating: 4,
  },
];

const TestimonialCard = ({ data }) => {
  return (
    <div className="relative w-[350px] flex-shrink-0 rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-900">
      
      {/* Quote Icon Background */}
      <div className="absolute -right-4 -top-4 opacity-5 transform rotate-12">
        <Quote size={120} />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between gap-4">
        <div>
          {/* Rating Stars */}
          <div className="mb-4 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < data.rating ? "#eab308" : "transparent"}
                className={i < data.rating ? "text-yellow-500" : "text-slate-300"}
              />
            ))}
          </div>

          <p className="text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-300">
            "{data.content}"
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <img
            src={data.image}
            alt={data.name}
            className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
          />
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white">{data.name}</h4>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{data.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-24 dark:bg-slate-950">
      
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-blue-600">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Trusted by Parents
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex w-full flex-col gap-8 overflow-hidden py-4">
        
        {/* Left Fade Gradient */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950"></div>
        
        {/* Right Fade Gradient */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950"></div>

        {/* Marquee Track */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30, // Adjust speed (higher = slower)
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max gap-8 px-4 hover:[animation-play-state:paused]"
          >
            {/* We duplicate the list to create the infinite loop effect */}
            {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
              <TestimonialCard key={`${item.id}-${idx}`} data={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}