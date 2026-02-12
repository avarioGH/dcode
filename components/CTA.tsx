
import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-slate-900 relative overflow-hidden">
      {/* Abstract light effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          className="text-white text-[10px] tracking-[0.5em] uppercase mb-10"
        >
          Ready to elevate?
        </motion.p>
        
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-8xl font-bold font-heading uppercase tracking-tighter text-white mb-16 leading-[1.1] md:leading-[0.9]"
        >
          Let's build something people remember.
        </motion.h2>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a 
            href="https://t.me/avariosh" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 md:px-16 py-5 md:py-6 bg-white text-slate-900 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] hover:bg-slate-200 transition-all rounded-full shadow-2xl"
          >
            Start a project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
