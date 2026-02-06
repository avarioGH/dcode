
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const logoUrl = "https://raw.githubusercontent.com/avarioGH/dcode/1deb7197f29ab541a9f84347b89c9fe63a20dd99/Untitled%20design%20(42).png";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax movement
  const textY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 50 : 100]);
  
  // Opacity stays 1 until 60% of the scroll, then fades out quickly towards the end
  const textOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617]">
      {/* Background Ambience - Unified and Deep */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_rgba(30,58,138,0.15)_0%,_rgba(2,6,23,1)_70%)]" />
      </div>

      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center px-6 flex flex-col items-center pt-10"
      >
        {/* Logo Section */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-0"
        >
          <img 
            src={logoUrl} 
            alt="D-Code Web Logo" 
            className="h-48 sm:h-64 md:h-[350px] w-auto object-contain drop-shadow-[0_0_50px_rgba(30,58,138,0.2)]" 
          />
        </motion.div>

        {/* Headline - Now with delayed fade */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-3xl md:text-5xl text-slate-200 max-w-4xl mx-auto font-light leading-snug tracking-tight px-4 mt-2 mb-4 md:mb-6"
        >
          We design interactive websites<br className="hidden sm:block" /> that people remember.
        </motion.h1>
        
        {/* Signature */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-[9px] md:text-[11px] tracking-[0.6em] text-slate-500 uppercase font-bold"
        >
          By Danvers
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
