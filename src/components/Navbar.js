"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-slate-900/90 backdrop-blur-md shadow-lg" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
          <span className="font-mono">&lt;ROUSHAN/&gt;</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="font-mono text-gray-300 hover:text-neon-blue transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <FiSun className="text-yellow-300" />
            ) : (
              <FiMoon className="text-blue-300" />
            )}
          </button>
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="btn btn-primary flex items-center gap-2 hover:scale-105"
          >
            <FiDownload /> Resume
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-slate-800 hover:bg-slate-700"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <FiSun className="text-yellow-300" />
            ) : (
              <FiMoon className="text-blue-300" />
            )}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ 
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-slate-800 shadow-xl"
      >
        <div className="container mx-auto px-4 py-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="block py-3 font-mono text-gray-300 hover:text-neon-blue border-b border-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 py-3 font-mono text-neon-blue"
          >
            <FiDownload /> Download Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
} 