
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex justify-between items-center px-6 py-2 md:py-3 rounded-full transition-all duration-500 ${
          scrolled ? 'bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg' : 'bg-slate-900/20 backdrop-blur-sm border border-white/5'
        }`}>
          {/* Brand Identity */}
          <div 
            className="flex flex-col cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <span className={`text-sm md:text-base font-bold tracking-tighter font-heading uppercase leading-none transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              D-Code Web
            </span>
            <span className={`text-[8px] md:text-[9px] tracking-[0.2em] uppercase leading-none mt-0.5 transition-colors duration-500 ${scrolled ? 'text-slate-400' : 'text-slate-500'}`}>
              by danvers
            </span>
          </div>
          
          <div className="flex gap-4 md:gap-8 text-[10px] md:text-[11px] font-bold tracking-widest uppercase items-center">
            <a href="#portfolio" className={`transition-colors hidden sm:block ${scrolled ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white'}`}>Portfolio</a>
            <a href="#pricing" className={`transition-colors hidden sm:block ${scrolled ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white'}`}>Pricing</a>
            <a 
              href="https://t.me/avariosh" 
              target="_blank" 
              className={`px-5 py-2.5 transition-all text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] rounded-full ${
                scrolled ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
