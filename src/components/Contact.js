"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiGlobe, FiServer } from 'react-icons/fi';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const formRef = useRef(null);

  const socialLinks = [
    { icon: <FiGithub size={24} />, url: 'https://github.com/roushan', label: 'GitHub' },
    { icon: <FiLinkedin size={24} />, url: 'https://linkedin.com/in/krroushan', label: 'LinkedIn' },
    { icon: <FiTwitter size={24} />, url: 'https://twitter.com/roushan', label: 'Twitter' },
    { icon: <FiMail size={24} />, url: 'mailto:kr.roushan.info@gmail.com', label: 'Email' },
    { icon: <FiGlobe size={24} />, url: 'https://www.knowledgewap.com', label: 'Personal Website' },
    { icon: <FiServer size={24} />, url: 'https://www.ghostingtech.com', label: 'Company Website' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission
    // In a real app, you would use a service like EmailJS, Formspree, or your own API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
      setSubmitMessage({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitMessage(null), 5000);
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Something went wrong. Please try again later.' });
      setTimeout(() => setSubmitMessage(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-space-grid bg-space-grid z-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
            Need a mobile app developer for your next project? Let's discuss how I can help bring your ideas to life!
            I'm available for React Native and Flutter development, mobile app consulting, and collaboration opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="order-2 lg:order-1"
          >
            <motion.form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="code-window"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-1 p-2 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-400 ml-2">message.js</span>
              </div>
              
              <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-gray-300 font-mono text-xs md:text-sm">
                    <span className="text-neon-blue">const</span> name <span className="text-neon-purple">=</span> 
                    <span className="text-white ml-2">"{formData.name || ''}"</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700 border border-gray-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-gray-300 font-mono text-xs md:text-sm">
                    <span className="text-neon-blue">const</span> email <span className="text-neon-purple">=</span> 
                    <span className="text-white ml-2">"{formData.email || ''}"</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700 border border-gray-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-gray-300 font-mono text-xs md:text-sm">
                    <span className="text-neon-blue">const</span> message <span className="text-neon-purple">=</span> 
                    <span className="text-white ml-2">"{formData.message ? `${formData.message.slice(0, 25)}${formData.message.length > 25 ? '...' : ''}` : ''}"</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-slate-700 border border-gray-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    placeholder="Hi Roushan, I'd like to discuss a mobile app project that requires your expertise in React Native..."
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full flex justify-center items-center gap-2 text-sm py-2.5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <FiSend /> Send Message
                      </>
                    )}
                  </motion.button>
                  
                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-3 rounded-md text-center text-xs md:text-sm ${
                        submitMessage.type === 'success' 
                          ? 'bg-green-900/50 text-green-400 border border-green-500/30' 
                          : 'bg-red-900/50 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {submitMessage.text}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.form>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="order-1 lg:order-2 lg:pl-6 xl:pl-10"
          >
            <motion.div 
              variants={itemVariants}
              className="code-window mb-6 md:mb-8"
            >
              <div className="flex items-center space-x-1 p-2 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-400 ml-2">contact-info.js</span>
              </div>
              
              <div className="p-4 md:p-6">
                <pre className="text-gray-300 font-mono text-xs md:text-sm whitespace-pre-wrap break-words">
{`const contactInfo = {
  email: "kr.roushan.info@gmail.com",
  location: "Rajeev Nagar, Patna, Bihar 800024",
  websites: {
    personal: "www.knowledgewap.com",
    company: "www.ghostingtech.com"
  },
  availability: "Open to mobile app projects",
  response_time: "Within 24 hours"
};`}
                </pre>
              </div>
            </motion.div>
            
            <motion.h3 
              variants={itemVariants}
              className="text-lg md:text-xl font-bold text-neon-blue font-mono mb-3 md:mb-4"
            >
              Connect With Me
            </motion.h3>
            
            <div className="space-y-3 md:space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all group hover:translate-x-2"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors">
                    <span className="text-neon-blue group-hover:text-white transition-colors">{link.icon}</span>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 