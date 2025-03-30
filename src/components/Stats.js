"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiCoffee, FiStar } from 'react-icons/fi';

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <StatCard 
            icon={<FiCode />}
            value={50}
            label="Projects Completed"
            inView={inView}
          />
          <StatCard 
            icon={<FiUsers />}
            value={25}
            label="Satisfied Clients"
            inView={inView}
          />
          <StatCard 
            icon={<FiStar />}
            value={5}
            suffix="+"
            label="Years Experience"
            inView={inView}
          />
          <StatCard 
            icon={<FiCoffee />}
            value={1000}
            suffix="+"
            label="Cups of Coffee"
            inView={inView}
          />
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label, suffix = "", inView }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  
  // Animation duration in ms
  const duration = 2000;
  // Number of steps in the animation
  const steps = 50;
  
  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const increment = Math.ceil(value / steps);
    const interval = duration / steps;
    
    countRef.current = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(countRef.current);
      }
      setCount(start);
    }, interval);
    
    return () => {
      if (countRef.current) clearInterval(countRef.current);
    };
  }, [inView, value]);

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="card text-center py-8"
    >
      <div className="text-neon-blue text-3xl mb-4">{icon}</div>
      <h3 className="text-4xl font-bold mb-2 text-gradient">
        {count}{suffix}
      </h3>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
} 