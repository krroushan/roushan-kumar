"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [stars, setStars] = useState([]);
  
  // Only generate star data on the client side
  useEffect(() => {
    const generatedStars = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-blue px-4 py-20 relative overflow-hidden">
      {/* Star background */}
      <div className="absolute inset-0 bg-space-grid bg-space-grid z-0 opacity-10"></div>
      
      {/* Animated planet */}
      <motion.div 
        className="absolute w-64 h-64 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full"
        style={{ filter: "blur(20px)" }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated astronaut */}
      <motion.div
        className="mb-8"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-neon-blue text-9xl"
        >
          👨‍🚀
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="text-center z-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-2">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Lost in the Galaxy</h2>
        <p className="text-gray-300 mb-8 max-w-md">
          The page you're looking for has drifted beyond our reach. Let's navigate back to familiar territory.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary flex items-center gap-2">
            <FiHome /> Return Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn btn-outline flex items-center gap-2"
          >
            <FiArrowLeft /> Go Back
          </button>
        </div>
      </motion.div>
      
      {/* Stars - only render when we have client-side values */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: star.width,
            height: star.height,
            left: star.left,
            top: star.top,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
} 