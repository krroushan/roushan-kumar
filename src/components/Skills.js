"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiDatabase, 
  FiCpu,
  FiStar
} from 'react-icons/fi';
import { FaReact, FaNodeJs, FaApple, FaGitAlt, FaAndroid } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiJavascript, SiNextdotjs, SiMongodb } from 'react-icons/si';
import { FaSearch } from 'react-icons/fa';
import { MdApi } from 'react-icons/md';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillGroups = [
    {
      category: "Mobile Development",
      icon: <FiCode />,
      skills: [
        { name: 'React Native', level: 95 },
        { name: 'Flutter', level: 85 },
        { name: 'iOS Development', level: 80 },
        { name: 'Android Development', level: 85 },
        { name: 'Mobile UI/UX', level: 90 },
      ],
    },
    {
      category: "Frontend Technologies",
      icon: <FiStar />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'React.js', level: 90 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'UI/UX Design', level: 80 },
      ],
    },
    {
      category: "Backend & APIs",
      icon: <FiDatabase />,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Firebase', level: 90 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      category: "Development Tools & Other Skills",
      icon: <FiCpu />,
      skills: [
        { name: 'Git & Version Control', level: 85 },
        { name: 'SEO & Digital Marketing', level: 90 },
        { name: 'MVVM Architecture', level: 85 },
        { name: 'Payment Gateway Integration', level: 80 },
        { name: 'Google Maps & Location Services', level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            As a mobile app developer specializing in React Native and Flutter, I've developed a versatile skill set
            that combines technical expertise with business insight, allowing me to create fully functional and market-ready
            mobile applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {skillGroups.map((skillGroup, groupIndex) => (
              <motion.div key={groupIndex} variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-neon-blue">{skillGroup.icon}</span>
                  <h3 className="text-xl font-bold font-mono">{skillGroup.category}</h3>
                </div>
                <div className="space-y-4">
                  {skillGroup.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-neon-blue font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.1 * (index + 1) }}
                          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative lg:flex lg:items-center lg:justify-center hidden"
          >
            <div className="code-window w-full max-w-lg">
              <div className="flex items-center space-x-1 p-2 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-400 ml-2">skills.json</span>
              </div>
              <div className="p-4 text-sm">
                <pre className="text-gray-300">
{`{
  "technicalHighlights": [
    "Full-stack mobile development",
    "React Native & Flutter expertise",
    "API integration & backend dev",
    "Real-time feature implementation",
    "Performance optimization",
    "SEO-friendly mobile architecture"
  ],
  "businessImpact": [
    "Led development of 5+ mobile apps",
    "Improved app store visibility",
    "Enhanced user acquisition",
    "Reduced customer acquisition costs",
    "Increased user engagement",
    "40% reduction in app loading times",
    "30% user growth from new features",
    "99.9% crash-free sessions"
  ],
  "certifications": [
    "Data Structures and Algorithms",
    "Digital Marketing Fundamentals",
    "Flutter & Dart - Complete Guide",
    "Android (Kotlin) Development",
    "Core Java Training"
  ]
}`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {[
            { name: 'React Native', icon: 'FaReact', color: '#61DAFB' },
            { name: 'Flutter', icon: 'SiFlutter', color: '#02569B' },
            { name: 'Firebase', icon: 'SiFirebase', color: '#FFCA28' },
            { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
            { name: 'Node.js', icon: 'FaNodeJs', color: '#339933' },
            { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
            { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
            { name: 'REST API', icon: 'MdApi', color: '#FF5722' },
            { name: 'Android', icon: 'FaAndroid', color: '#3DDC84' },
            { name: 'iOS', icon: 'FaApple', color: '#000000' },
            { name: 'Git', icon: 'FaGitAlt', color: '#F05032' },
            { name: 'SEO', icon: 'FaSearch', color: '#38bdf8' }
          ].map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center"
              custom={index}
            >
              <div className="w-full p-4 sm:p-6 bg-slate-800 rounded-xl flex flex-col items-center justify-center mb-3 sm:mb-4 shadow-lg hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all group hover:-translate-y-2 cursor-pointer">
                <div 
                  className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-gray-400 group-hover:text-neon-blue transition-all"
                  style={{ color: tech.color }}
                >
                  {tech.icon === 'FaReact' && <FaReact size={48} />}
                  {tech.icon === 'SiFlutter' && <SiFlutter size={48} />}
                  {tech.icon === 'SiFirebase' && <SiFirebase size={48} />}
                  {tech.icon === 'SiJavascript' && <SiJavascript size={48} />}
                  {tech.icon === 'FaNodeJs' && <FaNodeJs size={48} />}
                  {tech.icon === 'SiNextdotjs' && <SiNextdotjs size={48} />}
                  {tech.icon === 'SiMongodb' && <SiMongodb size={48} />}
                  {tech.icon === 'MdApi' && <MdApi size={48} />}
                  {tech.icon === 'FaAndroid' && <FaAndroid size={48} />}
                  {tech.icon === 'FaApple' && <FaApple size={48} />}
                  {tech.icon === 'FaGitAlt' && <FaGitAlt size={48} />}
                  {tech.icon === 'FaSearch' && <FaSearch size={48} />}
                </div>
                <h3 className="text-sm sm:text-lg font-medium text-white group-hover:text-neon-blue transition-all">{tech.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 