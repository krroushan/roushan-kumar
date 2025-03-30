"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiPrinter, FiShare2, FiExternalLink } from 'react-icons/fi';

export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);
  
  // Function to handle PDF load completion
  const handlePdfLoad = () => {
    setIsLoading(false);
  };
  
  // Functions to control zoom
  const zoomIn = () => setScale(prev => Math.min(prev + 0.1, 2));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));
  const resetZoom = () => setScale(1);
  
  return (
    <section id="resume" className="py-20 relative">
      <div className="absolute inset-0 bg-space-grid bg-space-grid z-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            View my professional experience, education, and skills. Feel free to download a copy for your records.
          </p>
        </motion.div>
        
        {/* Resume actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl"
        >
          <div className="flex items-center gap-2">
            <button 
              onClick={zoomIn}
              className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-gray-300 transition-colors"
              aria-label="Zoom in"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>
            <button 
              onClick={zoomOut}
              className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-gray-300 transition-colors"
              aria-label="Zoom out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>
            <button 
              onClick={resetZoom}
              className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-gray-300 transition-colors"
              aria-label="Reset zoom"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"></path>
                <path d="M14 8l-6 8"></path>
                <path d="M10 8v4"></path>
                <path d="M10 12h4"></path>
              </svg>
            </button>
            <span className="text-sm text-gray-400 ml-2">Zoom: {Math.round(scale * 100)}%</span>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="/resume.pdf" 
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-blue text-white hover:bg-neon-blue/90 transition-colors"
            >
              <FiDownload size={16} />
              <span>Download</span>
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-gray-300 transition-colors"
              aria-label="Open in new tab"
            >
              <FiExternalLink size={18} />
            </a>
            <button 
              onClick={() => window.print()}
              className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-gray-300 transition-colors"
              aria-label="Print resume"
            >
              <FiPrinter size={18} />
            </button>
            <button 
              onClick={() => {
                navigator.share && 
                navigator.share({
                  title: 'My Resume',
                  text: 'Check out my professional resume',
                  url: window.location.href,
                }).catch(err => console.error('Error sharing', err));
              }}
              className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-gray-300 transition-colors"
              aria-label="Share resume"
            >
              <FiShare2 size={18} />
            </button>
          </div>
        </motion.div>
        
        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative rounded-xl overflow-hidden bg-slate-900 shadow-xl mb-8"
          style={{ height: '80vh' }}
        >
          {/* Loading overlay */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-gray-700 border-t-neon-blue rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-400">Loading resume...</p>
              </div>
            </div>
          )}
          
          {/* PDF iframe with transform scale for zoom */}
          <div 
            className="w-full h-full overflow-auto flex justify-center" 
            style={{ 
              background: 'rgba(15, 23, 42, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div 
              style={{ 
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease-out',
                padding: '1rem',
                maxWidth: '850px', // Set maximum width for the container
                width: '100%',     // Make it responsive but not exceed maxWidth
              }}
            >
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0"
                className="w-full h-[calc(80vh_/_scale)]"
                onLoad={handlePdfLoad}
                style={{ 
                  background: 'white',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  minHeight: '1100px', // Typical height for a letter-sized document
                  width: '100%',
                  maxWidth: '100%',    // Ensure iframe doesn't exceed parent width
                }}
                title="Resume"
              />
          </div>
        </div>
      </motion.div>
      
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 p-6 rounded-xl bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-slate-700/50"
        >
          <h3 className="text-xl font-bold mb-3">Interested in working together?</h3>
          <p className="text-gray-300 mb-4">
            If my experience and skills match what you're looking for, I'd love to discuss how I can contribute to your team.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
} 