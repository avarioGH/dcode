
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 md:mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.4em] uppercase text-slate-500 mb-4"
          >
            Digital Collection
          </motion.p>
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter text-slate-200"
          >
            Studio Portfolio
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="group bg-slate-900/40 rounded-2xl p-4 md:p-5 border border-slate-800 hover:border-slate-700 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-800 mb-6">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-100 rounded-full border border-white/10 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="flex-grow px-2">
        <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-100 uppercase tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="mt-auto px-2 pb-2">
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full py-4 px-6 bg-slate-800 text-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all duration-500 border border-slate-700"
        >
          View Project
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Portfolio;
