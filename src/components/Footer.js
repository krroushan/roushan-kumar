"use client";

import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <FiTwitter />, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: <FiMail />, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <footer className="py-10 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-2">
              <span className="font-mono">&lt;ROUSHAN/&gt;</span>
            </div>
            <p className="text-gray-400 text-sm">
              Full Stack Developer & Mobile App Specialist
            </p>
          </div>
          
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors"
                aria-label={link.label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>
            © {currentYear} Roushan | All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex gap-6">
              <a href="#home" className="hover:text-neon-blue transition-colors">Home</a>
              <a href="#about" className="hover:text-neon-blue transition-colors">About</a>
              <a href="#projects" className="hover:text-neon-blue transition-colors">Projects</a>
              <a href="/resume" className="hover:text-neon-blue transition-colors">Resume</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
} 