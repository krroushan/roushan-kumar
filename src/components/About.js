"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            <div className="relative w-full h-80 md:h-96">
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