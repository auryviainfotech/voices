'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: '/img-1.JPEG',
      title: 'Healthcare Innovation',
      subtitle: 'Discover cutting-edge medical technologies and breakthrough treatments'
    },
    {
      image: '/img-2.JPEG', 
      title: 'Expert Insights',
      subtitle: 'Learn from leading healthcare professionals and researchers'
    },
    {
      image: '/img-3.JPEG',
      title: 'Patient Care Excellence',
      subtitle: 'Stories of compassion and advancement in healthcare delivery'
    },
    {
      image: '/img-4.JPEG',
      title: 'Medical Research',
      subtitle: 'Exploring the latest discoveries in medical science'
    },
    {
      image: '/img-5.jpeg',
      title: 'Advanced Medical Procedures',
      subtitle: 'State-of-the-art techniques for better patient outcomes'
    },
    {
      image: '/img-6.jpeg',
      title: 'Healthcare Teamwork',
      subtitle: 'Collaborative care for comprehensive patient treatment'
    },
    {
      image: '/img-7.jpeg',
      title: 'Surgical Excellence',
      subtitle: 'Precision and expertise in the operating room'
    },
    {
      image: '/img-8.jpeg',
      title: 'Patient Consultation',
      subtitle: 'Personalized care through expert medical consultations'
    },
    {
      image: '/img-9.jpeg',
      title: 'Medical Technology',
      subtitle: 'Innovative tools transforming healthcare delivery'
    },
    {
      image: '/img-10.jpeg',
      title: 'Healthcare Professionals',
      subtitle: 'Dedicated experts committed to your well-being'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg mx-auto">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60" />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlideshow
