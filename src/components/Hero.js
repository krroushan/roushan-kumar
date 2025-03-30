"use client";

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Hero() {
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/roushan' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/krroushan' },
    { icon: <FiTwitter size={20} />, url: 'https://twitter.com/roushan' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-space-grid bg-space-grid z-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-neon-blue font-mono">Hello, I am</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient">
              <span className="block">ROUSHAN KUMAR</span>
              <TypeAnimation
                sequence={[
                  'Mobile App Developer',
                  2000, 
                  'React Native Expert',
                  2000,
                  'Flutter Developer',
                  2000,
                  'Full-Stack Mobile Developer',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block mt-2"
              />
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              I specialize in building high-performance mobile applications using React Native and Flutter.
              With expertise in full-stack mobile development, I create solutions that combine 
              beautiful interfaces with robust functionality.
            </p>
            
            <div className="flex gap-4">
              <motion.a 
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="#contact"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full overflow-hidden"
          >
            <div className="w-full h-96 relative flex items-center justify-center">
              {/* Simulated planet/orbit graphic */}
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 animate-float"></div>
              <div className="absolute w-64 h-64 rounded-full border-2 border-neon-blue/20 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute w-80 h-80 rounded-full border-2 border-neon-purple/10 animate-spin" style={{ animationDuration: '25s' }}></div>
              <div className="absolute w-96 h-96 rounded-full border-2 border-neon-pink/5 animate-spin" style={{ animationDuration: '30s' }}></div>
              
              {/* Sample code snippets orbiting */}
              <motion.div 
                className="absolute code-window max-w-[180px] text-xs shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                animate={{
                  rotate: [0, 360],
                  x: [40, -40, 40],
                  y: [20, -20, 20],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <pre className="whitespace-pre-wrap break-words">{`import React from 'react';
import { View } from 'react-native';

const App = () => {
  return <View />;
}`}</pre>
              </motion.div>
              
              <motion.div 
                className="absolute code-window max-w-[180px] text-xs shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                animate={{
                  rotate: [0, -360],
                  x: [-50, 50, -50],
                  y: [-30, 30, -30],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <pre className="whitespace-pre-wrap break-words">{`void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp();
  }
}`}</pre>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 