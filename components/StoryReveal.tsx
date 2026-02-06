
import React from 'react';
import { motion } from 'framer-motion';

const sentences = [
  "Design is not decoration.",
  "It's how people feel your brand.",
  "And we design with intention."
];

const StoryReveal: React.FC = () => {
  return (
    <section className="bg-slate-950 text-white py-12 md:py-24 flex flex-col justify-center min-h-[70vh] border-t border-slate-900/50">
      <div className="max-w-5xl mx-auto px-6 w-full">
        {sentences.map((text, idx) => (
          <RevealItem key={idx} text={text} index={idx} />
        ))}
      </div>
    </section>
  );
};

const RevealItem = ({ text, index }: { text: string; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-24 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold font-heading uppercase tracking-tighter leading-[1.1] md:leading-[0.9] text-slate-100">
        {text.split(' ').map((word, i) => (
          <span key={i} className="inline-block mr-2 md:mr-4 mb-2">
            {word}
          </span>
        ))}
      </h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        transition={{ delay: 0.4, duration: 1 }}
        className={`h-[1px] bg-blue-500 mt-4 md:mt-8 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`} 
      />
    </motion.div>
  );
};

export default StoryReveal;
