
import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] tracking-[0.4em] uppercase text-slate-500 mb-4"
            >
              Why us?
            </motion.p>
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-7xl font-bold font-heading uppercase tracking-tighter text-slate-200 mb-8 leading-tight"
            >
              The D-Code Standard
            </motion.h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed mb-8 max-w-md">
              We merge creative vision with technical precision to build digital experiences that move people.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
            {BENEFITS.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col"
              >
                <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 mb-6 flex items-center justify-center text-blue-400 text-xs font-bold rounded-full">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="text-lg md:text-xl font-bold font-heading uppercase text-slate-100 mb-3 tracking-tight">
                  {benefit.title}
                </h4>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
