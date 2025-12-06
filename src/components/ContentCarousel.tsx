'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const slideVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring', 
      stiffness: 100,
      damping: 20
    }
  },
  exit: { opacity: 0, x: -50 }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 100
    }
  }
};

const hoverEffect = {
  scale: 1.02,
  transition: { 
    type: 'spring',
    stiffness: 400,
    damping: 10
  }
};

const tapEffect = {
  scale: 0.98
};

interface ContentSlide {
  id: string;
  content: React.ReactNode;
}

interface ContentCarouselProps {
  slides: ContentSlide[];
}

export default function ContentCarousel({ slides }: ContentCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slideHeight, setSlideHeight] = useState('auto');
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto-advance only when not hovered
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(timer);
  }, [currentSlide, isHovered, nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    } else if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  // Update slide height based on the tallest slide
  useEffect(() => {
    const updateSlideHeight = () => {
      const heights = Array.from(document.querySelectorAll('.slide-content')).map(
        el => el.clientHeight
      );
      const maxHeight = Math.max(...heights, 400); // Minimum height of 400px
      setSlideHeight(`${maxHeight}px`);
    };

    // Initial height calculation
    updateSlideHeight();

    // Recalculate on window resize
    window.addEventListener('resize', updateSlideHeight);
    return () => window.removeEventListener('resize', updateSlideHeight);
  }, [slides]);

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentSlide, nextSlide]);

  return (
    <div 
      className="w-full px-4 sm:px-6 lg:px-8"
      ref={carouselRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative w-full max-w-[1100px] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur-sm"
        style={{ minHeight: '260px', height: 'auto' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div 
            key={currentSlide}
            className="w-full shrink-0"
            style={{ minHeight: slideHeight }}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="h-full flex items-center justify-center p-2"
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              <div className="slide-content w-full h-full bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 shadow-lg">
                <motion.div
                  variants={itemVariants}
                >
                  {slides[currentSlide].content}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl z-10"
          whileHover={{ 
            scale: 1.1,
            backgroundColor: 'rgba(255, 255, 255, 1)'
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-purple-600" />
        </motion.button>
        
        <motion.button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl z-10"
          whileHover={{ 
            scale: 1.1,
            backgroundColor: 'rgba(255, 255, 255, 1)'
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-purple-600" />
        </motion.button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 overflow-hidden">
          <motion.div 
            className="h-full bg-linear-to-r from-purple-500 to-pink-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: 8, 
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop'
            }}
          />
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-linear-to-br from-purple-600 to-pink-600' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-6">
        <motion.span 
          className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {currentSlide + 1} / {slides.length}
        </motion.span>
      </div>
    </div>
  );
}
