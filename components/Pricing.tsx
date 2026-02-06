
import React from 'react';
import { motion } from 'framer-motion';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16 md:mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.4em] uppercase text-slate-500 mb-4"
          >
            Tiered Solutions
          </motion.p>
          <h2 className="text-4xl md:text-7xl font-bold font-heading uppercase tracking-tighter text-slate-200">
            Investment
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PRICING.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, index }: { plan: any; index: number }) => {
  const priceText = plan.price || "";
  const isStartFrom = priceText.toLowerCase().includes('start from');
  const displayPrice = isStartFrom ? priceText.replace(/start from/i, '').trim() : priceText;

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ y: -10 }}
      className={`relative p-8 md:p-10 rounded-2xl border transition-all duration-500 flex flex-col ${
        plan.featured 
          ? 'bg-blue-600/10 border-blue-500/30 text-white shadow-2xl shadow-blue-500/5' 
          : 'bg-slate-900/40 border-slate-800 text-slate-200 hover:border-slate-700'
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
          Most Popular
        </span>
      )}
      <div className="flex-grow">
        <h3 className="text-xl font-bold uppercase tracking-tighter font-heading mb-2 text-slate-100">
          {plan.title}
        </h3>
        <p className={`text-xs md:text-sm mb-8 font-light ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>
          {plan.description}
        </p>
        
        <div className="mb-8 min-h-[60px]">
          {isStartFrom && (
            <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest block mb-1">
              Start From
            </span>
          )}
          <div className="text-2xl md:text-3xl font-bold font-heading flex items-baseline text-slate-100">
            {displayPrice}
            <span className="text-[10px] font-normal tracking-widest uppercase ml-2 opacity-30">Base</span>
          </div>
        </div>
      </div>
      
      <a 
        href="https://t.me/avariosh" 
        target="_blank"
        className={`block w-full text-center py-4 px-6 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
          plan.featured 
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20' 
            : 'bg-slate-100 text-slate-900 hover:bg-white'
        }`}
      >
        {plan.cta}
      </a>
    </motion.div>
  );
};

export default Pricing;
