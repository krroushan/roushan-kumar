"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEgg() {
  const [isActivated, setIsActivated] = useState(false);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  useEffect(() => {
    const keydownHandler = (e) => {
      // Check if the pressed key matches the next key in sequence
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        // If the entire sequence is entered correctly
        if (konamiIndex === konamiCode.length) {
          setIsActivated(true);
          setTimeout(() => {
            setIsActivated(false);
            konamiIndex = 0;
          }, 4000); // Hide after 4 seconds
        }
      } else {
        // Reset if wrong key is pressed
        konamiIndex = 0;
      }
    };
    
    window.addEventListener('keydown', keydownHandler);
    
    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, []);

  return (
    <AnimatePresence>
      {isActivated && <ParticleExplosion />}
    </AnimatePresence>
  );
}

function ParticleExplosion() {
  // Generate random particles
  const particles = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    x: Math.random() * 360 - 180, // Random X position (-180 to 180)
    y: Math.random() * 360 - 180, // Random Y position (-180 to 180)
    scale: Math.random() * 0.5 + 0.5, // Random size
    color: getRandomColor(),
    duration: Math.random() * 1 + 1, // Random animation duration (1-2 seconds)
    delay: Math.random() * 0.2, // Random delay for start
  }));
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: particle.color,
              width: `${8 * particle.scale}px`,
              height: `${8 * particle.scale}px`,
              top: '50%',
              left: '50%',
              boxShadow: `0 0 10px ${particle.color}`,
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: [0, 1, 0],
              scale: [0, particle.scale, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeOut",
            }}
          />
        ))}
        
        {/* Center explosion flash */}
        <motion.div
          className="absolute rounded-full bg-white"
          style={{
            width: "30px",
            height: "30px",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 30px white',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      </div>
      
      {/* Secret message */}
      <motion.div
        className="absolute bottom-10 text-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-neon-blue text-2xl font-bold font-mono">🎮 KONAMI CODE ACTIVATED! 🎮</div>
        <div className="text-gray-300 mt-2">You found the secret easter egg!</div>
      </motion.div>
    </motion.div>
  );
}

// Helper to generate random neon colors
function getRandomColor() {
  const colors = [
    '#38bdf8', // neon-blue
    '#a855f7', // neon-purple
    '#ec4899', // neon-pink
    '#4ade80', // terminal-green
    '#f97316', // orange
    '#facc15', // yellow
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
} 