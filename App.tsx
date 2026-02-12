
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoryReveal from './components/StoryReveal';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative selection:bg-navy-900 selection:text-white bg-[#fafafa]">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-slate-900 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="flex flex-col">
        <Hero />
        <StoryReveal />
        <Portfolio />
        <Pricing />
        <Benefits />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
