'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const metrics = [
  {
    value: '1',
    title: 'Volumes Published',
    description: 'Comprehensive healthcare insights',
  },
  {
    value: '10+',
    title: 'Subscribers',
    description: 'Expanding community base',
  },
  {
    value: '971+',
    title: 'Global Community Impact',
    description: 'Global professional reach',
  },
  {
    value: '19',
    title: 'Trusted Medical Partners',
    description: 'Trusted healthcare network',
  },
];

export default function ImpactCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === metrics.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? metrics.length - 1 : prev - 1));
  };

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
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="w-full">
      <div 
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="w-full shrink-0 px-4 py-8 md:py-12 text-center group"
            >
              <div className="mb-4">
                <div className="text-5xl font-bold text-purple-600 mb-2">
                  {metric.value}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {metric.title}
              </h3>
              <p className="text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 ml-2"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-purple-600" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 mr-2"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-purple-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {metrics.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-purple-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
