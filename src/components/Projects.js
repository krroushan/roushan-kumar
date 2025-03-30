"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: 'SERQ - On-Demand Service Provider App',
      description: 'A comprehensive marketplace app connecting customers with service providers for daily needs like plumbing, electricians, cleaning, and more.',
      tags: ['React Native', 'Firebase', 'Payment Gateway', 'Real-time Tracking'],
      github: 'https://github.com/roushan/serq-app',
      demo: 'https://play.google.com/store/apps/details?id=com.serq',
      image: '/projects/serq.jpg',
      category: 'mobile',
    },
    {
      title: 'GhostingTech Service Platform',
      description: 'A flagship service provider marketplace platform with real-time location tracking, secure payment gateways, and automated commission systems.',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
      github: 'https://github.com/roushan/ghosting-marketplace',
      demo: 'https://ghostingtech.com/app',
      image: '/projects/ghosting.jpg',
      category: 'mobile',
    },
    {
      title: 'Codequery Mobile Application',
      description: 'A mobile solution that streamlines booking systems for services with real-time notifications, tracking, and secure payments.',
      tags: ['Flutter', 'Firebase', 'REST API'],
      github: 'https://github.com/roushan/codequery-mobile',
      demo: null,
      image: '/projects/codequery.jpg',
      category: 'mobile',
    },
    {
      title: 'SEO Analytics Dashboard',
      description: 'An interactive dashboard for visualizing SEO metrics and analytics, leveraging my background in SEO and digital marketing.',
      tags: ['React.js', 'Chart.js', 'API Integration'],
      github: 'https://github.com/roushan/seo-dashboard',
      demo: null,
      image: '/projects/seodash.jpg',
      category: 'web',
    },
    {
      title: 'Multi-vendor E-Commerce App',
      description: 'A complete mobile e-commerce solution with multi-vendor support, product management, and secure checkout process.',
      tags: ['React Native', 'Redux', 'Payment Integration'],
      github: 'https://github.com/roushan/ecommerce-app',
      demo: 'https://apps.apple.com/app/multivendor-shop',
      image: '/projects/ecommerce.jpg',
      category: 'mobile',
    },
    {
      title: 'Digital Marketing Portfolio',
      description: 'A web portfolio showcasing SEO and digital marketing work with performance analytics and case studies.',
      tags: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
      github: 'https://github.com/roushan/marketing-portfolio',
      demo: 'https://knowledgewap.com',
      image: '/projects/marketing.jpg',
      category: 'web',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'Mobile', value: 'mobile' },
    { name: 'Backend', value: 'backend' },
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
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-neon-blue/5 to-slate-900/0 opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and 
            learning opportunity. Feel free to explore the code and live demos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filters.map((filter) => (
              <motion.button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                    : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700 hover:text-white backdrop-blur-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} itemVariants={itemVariants} />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <a 
            href="https://github.com/roushan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all"
          >
            <FiGithub /> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, itemVariants }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    
    x.set(xPct * 100);
    y.set(yPct * 100);
  };
  
  // New addition - render badges with more appealing design
  const renderTags = (tags) => {
    return tags.map((tag, idx) => (
      <span 
        key={idx} 
        className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-700/80 text-neon-blue backdrop-blur-sm"
      >
        {tag}
      </span>
    ));
  };
  
  // Add a new function to render service count icon similar to Serq.in
  const renderCategory = (category) => {
    let icon, label, color;
    
    switch(category) {
      case 'mobile':
        icon = '📱';
        label = 'Mobile App';
        color = 'from-blue-500/20 to-blue-600/20';
        break;
      case 'web':
        icon = '🌐';
        label = 'Web Project';
        color = 'from-emerald-500/20 to-emerald-600/20';
        break;
      case 'backend':
        icon = '⚙️';
        label = 'Backend';
        color = 'from-amber-500/20 to-amber-600/20';
        break;
      default:
        icon = '💻';
        label = 'Project';
        color = 'from-purple-500/20 to-purple-600/20';
    }
    
    return (
      <div className={`absolute top-4 left-4 bg-gradient-to-r ${color} backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 z-20`}>
        <span>{icon}</span>
        <span className="text-xs font-medium text-white">{label}</span>
      </div>
    );
  };
  
  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      style={{ 
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="group"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          x.set(0);
          y.set(0);
        }}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{
          rotateX: { duration: 0.2, ease: "easeOut" },
          rotateY: { duration: 0.2, ease: "easeOut" },
        }}
        whileHover={{ scale: 1.02 }}
        className="card bg-slate-800/90 backdrop-blur-sm rounded-xl overflow-hidden h-full flex flex-col justify-between border border-slate-700/50 shadow-lg"
      >
        <div>
          <div className="h-56 overflow-hidden relative">
            {renderCategory(project.category)}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent z-10"></div>
            
            {/* Project image backdrop */}
            <div className="bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 h-full flex items-center justify-center relative">
              {/* Custom project icon based on Serq.in design */}
              <div className="relative w-16 h-16 rounded-full bg-slate-700/80 flex items-center justify-center backdrop-blur-sm z-20">
                <FiFolder size={32} className="text-neon-blue" />
              </div>
              
              {/* Animated background effect similar to Serq.in */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute w-40 h-40 rounded-full bg-neon-blue/40 -top-10 -left-10 blur-2xl"></div>
                <div className="absolute w-40 h-40 rounded-full bg-neon-purple/40 -bottom-10 -right-10 blur-2xl"></div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-5 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {renderTags(project.tags)}
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center p-6 border-t border-slate-700/50">
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-700/80 text-gray-300 hover:text-neon-blue hover:bg-slate-600 transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View GitHub repository"
              >
                <FiGithub size={18} />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-700/80 text-gray-300 hover:text-neon-blue hover:bg-slate-600 transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View live demo"
              >
                <FiExternalLink size={18} />
              </motion.a>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium text-neon-blue hover:underline"
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
} 