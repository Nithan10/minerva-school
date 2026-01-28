import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink } from "lucide-react";

// --- Utility: Extract YouTube ID & Generate URLs ---
const getYouTubeDetails = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = (match && match[2].length === 11) ? match[2] : null;

  return {
    embedUrl: videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null,
    thumbnailUrl: videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null,
    valid: !!videoId
  };
};

// --- Sub-Component: The Cinema Modal (Lightbox) ---
const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  // Use the helper to get the correct embed URL
  const { embedUrl } = getYouTubeDetails(video.src);
  // Fallback for custom videos (if you have local files later)
  const finalSrc = video.type === 'youtube' ? embedUrl : video.src;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video area
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full transition-colors backdrop-blur-sm"
        >
          <X size={24} />
        </button>

        {video.type === "youtube" && embedUrl ? (
          <iframe
            src={finalSrc}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <p>Video Source Not Found</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// --- Sub-Component: The Interactive Card ---
const VideoCard = ({ video, onClick }) => {
  // Automatically get thumbnail if it's YouTube, otherwise use provided thumbnail
  const ytDetails = video.type === 'youtube' ? getYouTubeDetails(video.src) : null;
  const displayThumbnail = video.type === 'youtube' ? ytDetails.thumbnailUrl : video.thumbnail;

  return (
    <motion.div
      layoutId={`card-${video.id}`}
      whileHover={{ y: -10 }}
      className="group relative cursor-pointer"
      onClick={() => onClick(video)}
    >
      {/* Card Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-900 shadow-xl ring-1 ring-white/10">
        
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={displayThumbnail}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
        </div>

        {/* Content Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8">
          
          {/* Play Icon Container */}
          <div className="mb-auto self-center opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/90 text-white shadow-lg shadow-blue-600/20 backdrop-blur-sm">
                <Play fill="currentColor" className="ml-1 h-6 w-6" />
             </div>
          </div>

          {/* Text Content */}
          <div className="transform transition-transform duration-500 group-hover:translate-y-0">
             <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                  {video.type === 'youtube' ? 'YouTube' : 'Event'}
                </span>
                <span className="text-xs text-slate-400">HD Quality</span>
             </div>
             
             <h3 className="text-xl font-bold text-white leading-tight mb-2">
               {video.title}
             </h3>
             
             <div className="flex items-center gap-2 text-sm text-slate-300 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 delay-75">
                <span>Watch Now</span>
                <ExternalLink size={14} />
             </div>
          </div>
        </div>

        {/* Glowing Border Effect on Hover */}
        <div className="absolute inset-0 z-20 rounded-3xl border-2 border-transparent transition-colors duration-300 group-hover:border-blue-500/30 pointer-events-none" />
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Observational Learning",
      type: "youtube",
      // Fixed: The actual link provided
      src: "https://youtu.be/GK6tGFjCOAM", 
    },
    {
      id: 2,
      title: "Educational Toys for Kids",
      type: "youtube",
      src: "https://youtu.be/e4VyhryO_0c", 
    },
    {
      id: 3,
      title: "Science Experiment Day",
      type: "youtube",
      // Custom requires a manual thumbnail",
      src: "https://www.youtube.com/watch?v=rV93gM0aEpk", // Add local path later
    },
    {
      id: 4,
      title: "School Annual Day",
      type: "youtube",
      // Fallback placeholder link
      src: "https://www.youtube.com/watch?v=Wtv-JjlTjIA&list=RDWtv-JjlTjIA&start_radio=1",
    }
  ];

  return (
    <section className="relative w-full bg-slate-50 py-24 dark:bg-slate-950 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full mix-blend-multiply" />
          <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-500/5 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span> Our World
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
              Watch highlights, learning sessions, and memorable moments from our campus.
            </p>
          </motion.div>
        </div>

        {/* Video Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {videos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onClick={setSelectedVideo} 
            />
          ))}
        </div>
      </div>

      {/* Full Screen Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal 
            video={selectedVideo} 
            onClose={() => setSelectedVideo(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}