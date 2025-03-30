"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiPlay, FiCode, FiLayers, FiDatabase } from 'react-icons/fi';

export default function FeaturedProject() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('overview');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(0.7); // Configurable scroll speed
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(500);

  // Demo featured project data
  const featuredProject = {
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution with user authentication, payment processing, product management, and an admin dashboard. This project demonstrates full-stack development expertise.",
    image: "/projects/tarkari-com.png",
    github: "https://github.com/yourusername/ecommerce",
    liveDemo: "https://ecommerce-demo.com",
    videoDemo: "https://youtube.com/watch?v=demo",
    techStack: [
      { name: "React", icon: <FiCode /> },
      { name: "Next.js", icon: <FiLayers /> },
      { name: "Node.js", icon: <FiCode /> },
      { name: "MongoDB", icon: <FiDatabase /> },
      { name: "Stripe API", icon: <FiCode /> },
      { name: "JWT Auth", icon: <FiCode /> },
    ],
    codeSnippet: `// Example authentication middleware
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find user by ID
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    
    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Not authorized' });
  }
};`,
    challenges: [
      "Implementing secure payment processing with Stripe",
      "Building a responsive UI that works across all device sizes",
      "Designing an efficient database schema for product relationships",
      "Optimizing image loading for better performance",
    ],
    solutions: [
      "Used Stripe's webhook system for secure payment confirmation",
      "Implemented a mobile-first design approach with Tailwind CSS",
      "Designed a NoSQL schema with proper indexing for quick queries",
      "Implemented image optimization and lazy loading techniques",
    ],
  };

  const tabContent = {
    overview: (
      <div className="space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">{featuredProject.description}</p>
        
        <div>
          <h4 className="text-xl font-bold text-neon-blue mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-3">
            {featuredProject.techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-slate-700 px-3 py-1 rounded-full text-sm"
              >
                <span className="text-neon-blue">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4">
          <a
            href={featuredProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline flex items-center gap-2"
          >
            <FiGithub /> View Code
          </a>
          <a
            href={featuredProject.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center gap-2"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    ),
    code: (
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-neon-blue mb-3">Code Highlights</h4>
        <div className="code-window overflow-auto max-h-80">
          <pre className="p-4 text-gray-300 whitespace-pre text-sm">
            {featuredProject.codeSnippet}
          </pre>
        </div>
      </div>
    ),
    challenges: (
      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-bold text-neon-blue mb-3">Challenges</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {featuredProject.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-neon-blue mb-3">Solutions</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {featuredProject.solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
    demo: (
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-neon-blue mb-3">Video Demo</h4>
        <div className="rounded-lg overflow-hidden bg-slate-700 aspect-video flex items-center justify-center">
          <a
            href={featuredProject.videoDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors"
          >
            <FiPlay size={48} />
            <span>Watch Demo on YouTube</span>
          </a>
        </div>
      </div>
    ),
  };

  // Fix the useEffect that's causing the maximum update depth error
  useEffect(() => {
    let animationFrame;
    
    // Calculate actual max scroll based on content height when component mounts
    if (imageRef.current && containerRef.current) {
      const imageHeight = imageRef.current.scrollHeight;
      const containerHeight = containerRef.current.clientHeight;
      setMaxScroll(imageHeight - containerHeight);
    }
    
    if (isHovering && imageRef.current) {
      const scrollImage = () => {
        setScrollPosition(prev => {
          // More gradual scrolling with easing
          const newPosition = prev + scrollSpeed;
          return Math.min(newPosition, maxScroll);
        });
        
        animationFrame = requestAnimationFrame(scrollImage);
      };
      
      animationFrame = requestAnimationFrame(scrollImage);
    } else if (!isHovering && scrollPosition > 0) {
      // Smoothly reset back to top when not hovering
      const resetScroll = () => {
        setScrollPosition(prev => {
          const newPosition = prev - (scrollSpeed * 2); // Faster reset
          if (newPosition <= 0) return 0;
          animationFrame = requestAnimationFrame(resetScroll);
          return newPosition;
        });
      };
      
      animationFrame = requestAnimationFrame(resetScroll);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isHovering, maxScroll, scrollSpeed]); // Remove scrollPosition from dependencies

  return (
    <section id="featured-project" className="py-20 relative">
      <div className="absolute inset-0 bg-space-grid bg-space-grid z-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Featured Project</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A deep dive into my most complex and comprehensive project, showcasing the full range of my development skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div 
              ref={containerRef}
              className="rounded-lg overflow-hidden bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 relative"
              style={{ height: '500px', maxWidth: '100%' }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div 
                ref={imageRef}
                className="transition-transform duration-300 ease-out w-full"
                style={{ 
                  transform: `translateY(-${scrollPosition}px)`,
                }}
              >
                {/* Use a real project screenshot from Tarkari or your own project */}
                <img 
                  src="/projects/tarkari-com.png" 
                  alt={featuredProject.title}
                  className="w-full object-contain max-w-full"
                />
              </div>
              
              {/* Improved scroll indicators with gradient overlays */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-slate-900/80 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none flex items-center justify-center">
                <span className="text-white text-xs bg-neon-blue/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  Hover to explore
                </span>
              </div>
              
              {/* Optional: Add side indicators to show scroll progress */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 h-1/3 w-1 bg-slate-700/50 rounded-full overflow-hidden">
                <div 
                  className="bg-neon-blue w-full rounded-full"
                  style={{ 
                    height: `${(scrollPosition / maxScroll) * 100}%`,
                    transition: 'height 0.1s ease-out'
                  }}
                ></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-6 mb-2">{featuredProject.title}</h3>
            
            <div className="flex space-x-2 mt-6 border-b border-slate-700">
              {['overview', 'code', 'challenges', 'demo'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'text-neon-blue border-b-2 border-neon-blue'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="mt-6">
              {tabContent[activeTab]}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="sticky top-20 w-full overflow-hidden">
              <div className="code-window h-[600px] overflow-hidden relative">
                <div className="flex items-center space-x-1 p-2 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-400 ml-2">project-demo.js</span>
                </div>
                
                <div className="p-4 h-full overflow-auto space-y-4 custom-scrollbar">
                  <pre className="text-gray-300 text-sm overflow-x-auto break-words whitespace-pre-wrap">
{`// E-Commerce Platform Architecture
const services = {
  auth: {
    register: async (user) => { /* ... */ },
    login: async (credentials) => { /* ... */ },
    verify: (token) => { /* ... */ }
  },
  products: {
    list: async (filters) => { /* ... */ },
    details: async (id) => { /* ... */ },
    search: async (query) => { /* ... */ }
  },
  cart: {
    add: async (userId, product) => { /* ... */ },
    remove: async (userId, productId) => { /* ... */ },
    checkout: async (userId) => { /* ... */ }
  },
  payment: {
    process: async (orderId, paymentMethod) => { /* ... */ },
    verify: async (paymentId) => { /* ... */ }
  }
};

// Frontend React Component Example
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await services.products.list();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  return (
    <div className="product-grid">
      {loading ? (
        <LoadingSpinner />
      ) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}`}
                  </pre>
                  
                  <div className="text-neon-blue border border-neon-blue rounded p-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <h5 className="font-bold mb-2">Project Highlights:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                      <li>Microservices architecture</li>
                      <li>Responsive React components with hooks</li>
                      <li>Server-side rendering with Next.js</li>
                      <li>JWT authentication system</li>
                      <li>Stripe payment integration</li>
                      <li>MongoDB database with Mongoose ODM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 