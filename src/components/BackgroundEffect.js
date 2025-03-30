"use client";

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export default function BackgroundEffect() {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Create stars
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    const createStars = () => {
      const starsCount = Math.floor((window.innerWidth + window.innerHeight) / 10);
      
      for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random twinkle animation duration
        star.style.setProperty('--duration', `${(Math.random() * 3) + 2}s`);
        
        // Random delay for the animation
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(star);
      }
    };
    
    createStars();
    
    const handleResize = () => {
      container.innerHTML = '';
      createStars();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Matrix rain effect
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    // Characters to display
    const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = characters.split('');
    
    const fontSize = 14;
    const columns = width / fontSize;
    
    // Array to track the y position of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    // Drawing the characters
    function draw() {
      if (theme !== 'dark') {
        ctx.clearRect(0, 0, width, height);
        return;
      }
      
      // Semi-transparent black background for the trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = '#0f0'; // Green text like in The Matrix
      ctx.font = `${fontSize}px monospace`;
      
      // Looping over drops
      for (let i = 0; i < drops.length; i++) {
        // Random character to print
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // x = i * fontSize, y = value of drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Sending the drop back to the top randomly after it has crossed the screen
        // Adding randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Incrementing Y coordinate
        drops[i]++;
      }
    }
    
    // Animation loop
    let animationFrameId;
    function animate() {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width;
      canvas.height = height;
      
      // Recalculate columns and drops
      const newColumns = width / fontSize;
      
      // Reset drops array
      drops.length = 0;
      for (let i = 0; i < newColumns; i++) {
        drops[i] = 1;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <>
      <div className="stars-container" ref={containerRef}></div>
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full z-[-1] opacity-10 pointer-events-none"
      ></canvas>
    </>
  );
} 