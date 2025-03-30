"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FiCalendar, FiClock, FiArrowRight, FiCode, FiPenTool, FiTrendingUp } from 'react-icons/fi';

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogs = [
    {
      title: 'Building Responsive UIs with Tailwind CSS',
      excerpt: 'Learn how to quickly build beautiful, responsive user interfaces using Tailwind CSS utility classes.',
      date: 'April 10, 2023',
      readTime: '5 min read',
      category: 'Frontend',
      icon: <FiCode />,
      slug: '/blog/building-responsive-uis-with-tailwind-css',
    },
    {
      title: 'React Hooks: A Deep Dive',
      excerpt: 'Explore the power of React Hooks and how they can simplify your component logic in functional components.',
      date: 'March 22, 2023',
      readTime: '8 min read',
      category: 'React',
      icon: <FiPenTool />,
      slug: '/blog/react-hooks-a-deep-dive',
    },
    {
      title: 'Optimizing Next.js Applications',
      excerpt: 'Techniques for improving the performance and user experience of your Next.js applications.',
      date: 'February 15, 2023',
      readTime: '6 min read',
      category: 'Performance',
      icon: <FiTrendingUp />,
      slug: '/blog/optimizing-nextjs-applications',
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
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Blog</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            I share my thoughts, experiences, and technical knowledge through articles.
            Here are some of my recent publications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="card group hover:bg-slate-800/80 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-neon-blue rounded-full text-xs font-mono flex items-center gap-1">
                    {blog.icon} {blog.category}
                  </span>
                  <div className="text-xs text-gray-400 flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={12} />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock size={12} />
                      {blog.readTime}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">{blog.excerpt}</p>
                
                <Link 
                  href={blog.slug} 
                  className="inline-flex items-center font-mono text-neon-blue hover:text-neon-purple transition-colors mt-auto"
                >
                  Read More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link 
            href="/blog"
            className="btn btn-outline inline-flex items-center gap-2"
          >
            View All Posts <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 