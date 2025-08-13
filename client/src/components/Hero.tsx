import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircleIcon, UserGroupIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1604514628550-37477afdf9e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Discover BTS.',
    subtitle: 'Join the ARMY.',
    description: 'Your ultimate hub for music, updates, and fan stories. Connect with millions of ARMY members worldwide and experience the BTS journey like never before.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Latest Album',
    subtitle: 'Proof',
    description: 'Experience the anthology album that celebrates BTS\'s journey with new tracks and greatest hits.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1608889825271-969628360141?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'World Tour',
    subtitle: 'PTD On Stage',
    description: 'Relive the magic of BTS\'s Permission to Dance On Stage world tour with exclusive content and highlights.'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => {
        nextSlide();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isHovered]);

  return (
    <section 
      className="relative h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="BTS Hero Carousel"
    >
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={slide.id}
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-bts-dark to-transparent opacity-90 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-bts-purple/30 to-bts-pink/30 z-10"></div>
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-105"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
                aria-hidden="true"
              ></div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 z-30 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 z-30 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            currentSlide === index && (
              <motion.div
                key={slide.id}
                className="max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}<br />
                  <span className="bg-gradient-to-r from-bts-pink to-bts-purple bg-clip-text text-transparent">
                    {slide.subtitle}
                  </span>
                </h1>
                <p className="text-xl text-gray-200 mb-10 max-w-2xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-bts-pink to-bts-purple text-white font-medium text-lg hover:opacity-90 transition-opacity shadow-lg shadow-bts-pink/30 hover:shadow-bts-purple/50"
                  >
                    <PlayCircleIcon className="h-6 w-6 mr-2" />
                    Learn More
                  </Link>
                  <Link
                    to="/community"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-medium text-lg hover:bg-white/10 transition-colors"
                  >
                    <UserGroupIcon className="h-6 w-6 mr-2" />
                    Join Community
                  </Link>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50 w-2'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-bounce">
          <svg
            className="h-6 w-6 text-white/80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
