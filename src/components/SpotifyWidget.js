"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMusic, FiPause, FiPlay } from 'react-icons/fi';

export default function SpotifyWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Mock data - in a real app, this would come from the Spotify API
  const currentTrack = {
    title: "Synthwave Dreams",
    artist: "Coding Beats",
    album: "Late Night Sessions",
    albumArt: "/spotify/album-art.jpg",
    progress: 65, // percent
    duration: "3:45",
  };

  // Simulate a disk rotation
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    let interval = null;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setRotation(prev => (prev + 1) % 360);
      }, 50);
    }
    
    // Clean up interval on unmount or when dependencies change
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.div
        className={`bg-slate-800 rounded-lg shadow-2xl overflow-hidden transition-all ${
          isExpanded ? 'w-72' : 'w-12'
        }`}
        layout
      >
        {/* Toggle button */}
        <motion.button
          className="w-12 h-12 flex items-center justify-center text-neon-blue bg-slate-800 absolute top-0 left-0 z-10"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiMusic size={20} />
        </motion.button>
        
        {/* Widget content */}
        <div className={`ml-12 py-3 pr-3 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center">
            {/* Album art or vinyl */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
              <div 
                className="w-full h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                </div>
              </div>
            </div>
            
            {/* Track info */}
            <div className="truncate">
              <h4 className="text-white font-medium text-sm truncate">{currentTrack.title}</h4>
              <p className="text-gray-400 text-xs truncate">{currentTrack.artist}</p>
              
              {/* Progress bar */}
              <div className="mt-1 w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  style={{ width: `${currentTrack.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Controls */}
          <div className="mt-2 flex justify-end">
            <button 
              className="text-gray-400 hover:text-neon-blue transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <FiPause size={14} /> : <FiPlay size={14} />}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 