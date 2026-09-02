import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  {
    url: '/hero1.jpg',
    caption: 'Biomass & Renewable Energy Infrastructure',
  },
  {
    url: '/hero2.jpg',
    caption: 'Aerial View of Bio-Energy Storage & Processing',
  },
  {
    url: '/hero3.jpg',
    caption: 'Advanced Environmental & Energy Complex',
  },
];

export interface HeroSliderBackgroundProps {
  children?: React.ReactNode;
  overlayOpacity?: string;
  autoPlayInterval?: number;
}

export const HeroSliderBackground: React.FC<HeroSliderBackgroundProps> = ({
  children,
  overlayOpacity = 'bg-dark/75 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/65',
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-dark">
      {/* Sliding Background Images with Ken Burns & Fade Effect */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img
            src={heroImages[currentIndex].url}
            alt={heroImages[currentIndex].caption}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay for High Contrast Text Legibility */}
      <div className={`absolute inset-0 z-10 pointer-events-none ${overlayOpacity}`} />

      {/* Slide Navigation Controls (Bottom Right) */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex items-center gap-3 bg-dark/60 backdrop-blur-md border border-white/20 p-2 rounded-full shadow-2xl">
        <button
          type="button"
          onClick={handlePrev}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2 px-1">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-7 bg-cerd-cyan'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full">{children}</div>
    </div>
  );
};
