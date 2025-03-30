"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "John's work on our e-commerce platform was exceptional. He delivered a clean, efficient codebase that was easy to maintain and extend. His attention to detail and user experience is outstanding.",
      name: "Sarah Johnson",
      position: "CTO, TechRetail Inc.",
      image: "/testimonials/sarah.jpg",
    },
    {
      quote: "Working with John was a pleasure. He quickly grasped our complex requirements and translated them into an intuitive interface. His communication skills and technical expertise are top-notch.",
      name: "Michael Chen",
      position: "Product Manager, DataViz Solutions",
      image: "/testimonials/michael.jpg",
    },
    {
      quote: "John transformed our outdated website into a modern, responsive platform. The results exceeded our expectations, and we've seen a significant increase in user engagement and conversions since the launch.",
      name: "Emily Rodriguez",
      position: "Marketing Director, Innovate LLC",
      image: "/testimonials/emily.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  // Auto-advance carousel
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView, testimonials.length]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-space-grid bg-space-grid z-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Here's what clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative px-4 py-10">
            {/* Decorative code comment styling */}
            <div className="absolute top-0 left-0 text-6xl text-neon-blue opacity-20">
              <FiMessageSquare />
            </div>
            <div className="absolute bottom-0 right-0 text-6xl text-neon-blue opacity-20 transform rotate-180">
              <FiMessageSquare />
            </div>
            
            <div className="h-80 relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-full h-full"
                >
                  <div className="card h-full flex flex-col justify-center items-center text-center p-8 md:p-12">
                    <blockquote className="text-gray-200 text-lg mb-6 font-mono relative">
                      <span className="text-neon-blue text-4xl absolute -top-6 -left-4 opacity-50">&#8220;</span>
                      {testimonials[currentIndex].quote}
                      <span className="text-neon-blue text-4xl absolute -bottom-10 -right-4 opacity-50">&#8221;</span>
                    </blockquote>
                    <div className="mt-6">
                      <div className="w-16 h-16 rounded-full bg-slate-700 mx-auto mb-3">
                        {/* Placeholder for when actual images are available */}
                        <div className="w-full h-full flex items-center justify-center text-neon-blue">
                          {testimonials[currentIndex].name.charAt(0)}
                        </div>
                      </div>
                      <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                      <p className="text-neon-blue text-sm">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={24} />
              </motion.button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? 'bg-neon-blue'
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 