"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FiCode, FiSmartphone, FiGlobe, FiUser } from 'react-icons/fi';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const profileRef = useRef(null);
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    if (inView) {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    }
  }, [inView]);
  
  const handleMouseMove = (e) => {
    if (!profileRef.current) return;
    
    const rect = profileRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };

  const timelineItems = [
    {
      year: '2021-2024',
      title: 'Freelance (Fiverr)',
      description: 'Provided customized SEO services and completed over 100 projects with positive client feedback.',
    },
    {
      year: '2024 (March-January)',
      title: 'SEO Executive at Ghosting Tech',
      description: 'Developed SEO strategies, improved search rankings, and increased organic traffic for clients.',
    },
    {
      year: '2024 (December) - Present',
      title: 'App Developer at Ghosting Tech',
      description: 'Spearheading the development of mobile solutions using React Native and Flutter, reducing app loading times by 40%.',
    },
    {
      year: '2025 (February) - Present',
      title: 'App Developer at Codequery Technology',
      description: 'Designing and developing mobile apps for Android and iOS that solve real-world problems.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Building on my foundation in IT services and digital marketing,
            I've successfully transitioned into mobile app development. With a strong technical 
            background in Computer Science (B.Tech, CSE) and experience in SEO, I now lead the development 
            of innovative mobile solutions that bridge business needs with user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* profile image */}
            <div 
                ref={profileRef}
                className="relative w-full h-96 md:h-[350px] flex items-center justify-center mt-8"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/95 to-slate-900/80 backdrop-blur-sm z-0"></div>
                  
                  {particles.map(particle => (
                    <motion.div
                      key={particle.id}
                      className="absolute rounded-full bg-neon-blue/40 z-0"
                      style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                      }}
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0, 0.8, 0]
                      }}
                      transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear"
                      }}
                    />
                  ))}
                  
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.1)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
                </div>
                
                <div className="absolute left-4 top-1/4 text-5xl font-bold text-neon-blue/30 z-10">{`{`}</div>
                <div className="absolute right-4 bottom-1/4 text-5xl font-bold text-neon-blue/30 z-10">{`}`}</div>
                
                <motion.div
                  className="relative z-10 rounded-full overflow-hidden border-4 border-neon-blue/50 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                  animate={{
                    boxShadow: isHovering 
                      ? [
                          "0 0 30px rgba(56,189,248,0.3)",
                          "0 0 50px rgba(56,189,248,0.5)",
                          "0 0 30px rgba(56,189,248,0.3)"
                        ]
                      : "0 0 30px rgba(56,189,248,0.3)",
                  }}
                  transition={{ duration: 2, repeat: isHovering ? Infinity : 0 }}
                  style={{
                    transform: isHovering ? `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 10}deg) rotateX(${(0.5 - mousePosition.y) * 10}deg)` : "none",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.2s ease-out",
                  }}
                >
                  <div className="w-48 h-48 md:w-64 md:h-64 relative">
                    <Image
                      src="/profile2.jpg" 
                      alt="Roushan Kumar"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-neon-blue/80 to-transparent opacity-0 transition-opacity duration-300 flex items-end justify-center pb-6 ${isHovering ? 'opacity-70' : ''}`}>
                    <span className="text-white font-bold text-xl">ROUSHAN KUMAR</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-10 left-10 z-20 bg-slate-800/80 backdrop-blur-sm p-3 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FiCode className="text-neon-blue text-xl" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-10 left-10 z-20 bg-slate-800/80 backdrop-blur-sm p-3 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <FiSmartphone className="text-neon-purple text-xl" />
                </motion.div>
                
                <motion.div 
                  className="absolute top-10 right-10 z-20 bg-slate-800/80 backdrop-blur-sm p-3 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <FiGlobe className="text-neon-blue text-xl" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-10 right-10 z-20 bg-slate-800/80 backdrop-blur-sm p-3 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <FiUser className="text-neon-purple text-xl" />
                </motion.div>
              </div>

              {/* code window */}
              <div className="relative w-full h-80 md:h-96 mb-8">
                <div className="w-full h-full rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20"></div>
                  <div className="code-window absolute inset-0 flex flex-col">
                    <div className="flex items-center space-x-1 p-2 border-b border-gray-700">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-400 ml-2">about-me.js</span>
                    </div>
                    <div className="p-4 text-sm">
                      <pre className="text-gray-300">
{`const developer = {
  name: "ROUSHAN KUMAR",
  location: "Patna, Bihar, India",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    university: "Rajasthan Technical University",
    year: "2017-2021"
  },
  languages: ["React Native", "Flutter", "JavaScript"],
  frameworks: ["React", "Next.js", "Node.js", "Express"],
  interests: [
    "Mobile Development", 
    "Full Stack Development", 
    "SEO",
    "Digital Marketing"
  ],
  learning: "Always something new!",

  getCurrentProject: () => {
    return "Building amazing mobile apps"
  }
};`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-neon-blue font-mono"
            >
              My Journey
            </motion.h3>
            
            <div className="relative pl-8 border-l-2 border-gray-700">
              {timelineItems.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="mb-8 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(56,189,248,0.5)] -left-[11px]"></div>
                  
                  <div className="card hover:-translate-x-1 hover:border-l-neon-blue">
                    <span className="text-sm font-mono text-neon-blue">{item.year}</span>
                    <h4 className="text-xl font-bold mt-1">{item.title}</h4>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 