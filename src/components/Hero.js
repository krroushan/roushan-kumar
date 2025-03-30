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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 galaxy-swirl">
      <div className="absolute inset-0 bg-space-grid bg-space-grid z-0 opacity-20"></div>
      
      {/* Floating cosmic particles */}
      <div className="absolute w-2 h-2 rounded-full bg-neon-blue/70 blur-sm top-1/4 left-1/4 animate-pulse"></div>
      <div className="absolute w-3 h-3 rounded-full bg-neon-purple/70 blur-sm top-1/3 right-1/3 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute w-2 h-2 rounded-full bg-neon-blue/70 blur-sm bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-1 h-1 rounded-full bg-white/70 blur-sm top-2/3 left-1/3 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute w-2 h-2 rounded-full bg-neon-purple/70 blur-sm bottom-1/3 left-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-neon-blue font-mono relative">
              <span className="absolute -left-4 opacity-70 text-neon-blue">&gt;</span> Hello, I am
              <span className="inline-block ml-1 animate-blink">_</span>
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold group">
              <span className="block relative text-gradient">
                ROUSHAN KUMAR
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              </span>
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
                className="block mt-2 text-gradient"
              />
            </h1>
            <p className="text-lg text-gray-300 max-w-lg relative cosmic-dust">
              I specialize in building high-performance mobile applications using React Native and Flutter.
              With expertise in full-stack mobile development, I create solutions that combine 
              beautiful interfaces with robust functionality.
            </p>
            
            <div className="flex gap-4">
              <motion.a 
                href="#projects"
                className="btn btn-primary relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/20 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </motion.a>
              <motion.a 
                href="#contact"
                className="btn btn-outline relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-neon-blue/10 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                <span className="relative z-10">Contact Me</span>
              </motion.a>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 relative group"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="absolute -inset-2 bg-slate-800/50 rounded-full scale-0 group-hover:scale-100 transition-all duration-300 -z-10 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.5)]"></span>
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
            <div className="w-full h-[450px] relative flex items-center justify-center">
              {/* Simulated planet/orbit graphic with enhanced visuals */}
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 animate-float"></div>
              <div className="absolute w-64 h-64 rounded-full border-2 border-neon-blue/20 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute w-80 h-80 rounded-full border-2 border-neon-purple/10 animate-spin" style={{ animationDuration: '25s' }}></div>
              <div className="absolute w-96 h-96 rounded-full border-2 border-neon-pink/5 animate-spin" style={{ animationDuration: '30s' }}></div>
              
              {/* Add space nebula effect in the background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-neon-purple/5 to-transparent rounded-full blur-xl animate-pulse-slow"></div>
              
              {/* Space dust particles */}
              <div className="absolute w-1 h-1 bg-white/70 rounded-full top-1/4 right-1/3 animate-float-slow"></div>
              <div className="absolute w-1 h-1 bg-white/70 rounded-full bottom-1/3 left-1/4 animate-float-slow" style={{animationDelay: '1s'}}></div>
              <div className="absolute w-1 h-1 bg-white/70 rounded-full top-1/2 left-1/2 animate-float-slow" style={{animationDelay: '2s'}}></div>
              
              {/* Sample code snippets orbiting with upgraded styling */}
              <motion.div 
                className="absolute code-window max-w-[180px] text-xs shadow-[0_0_15px_rgba(56,189,248,0.3)] custom-scrollbar"
                animate={{
                  rotate: [0, 360],
                  x: [40, -40, 40],
                  y: [10, -10, 10],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="flex items-center space-x-1 p-1 border-b border-gray-700">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-400 ml-1">react-native.js</span>
                </div>
                <pre className="whitespace-pre-wrap break-words p-2">{`import React from 'react';
import { View } from 'react-native';

const App = () => {
  return <View />;
}`}</pre>
              </motion.div>
              
              <motion.div 
                className="absolute code-window max-w-[180px] text-xs shadow-[0_0_15px_rgba(168,85,247,0.3)] custom-scrollbar"
                animate={{
                  rotate: [0, -360],
                  x: [-50, 50, -50],
                  y: [-15, 15, -15],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="flex items-center space-x-1 p-1 border-b border-gray-700">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-400 ml-1">flutter.dart</span>
                </div>
                <pre className="whitespace-pre-wrap break-words p-2">{`void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp();
  }
}`}</pre>
              </motion.div>
              
              {/* Add a third floating code snippet */}
              <motion.div 
                className="absolute code-window max-w-[180px] text-xs shadow-[0_0_15px_rgba(239,68,68,0.2)] custom-scrollbar"
                animate={{
                  rotate: [0, 180, 0],
                  x: [30, -20, 30],
                  y: [-20, 10, -20],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="flex items-center space-x-1 p-1 border-b border-gray-700">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-400 ml-1">api.js</span>
                </div>
                <pre className="whitespace-pre-wrap break-words p-2">{`const fetchData = async () => {
  try {
    const response = await 
      api.get('/endpoint');
    return response.data;
  } catch (error) {
    console.error(error);
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