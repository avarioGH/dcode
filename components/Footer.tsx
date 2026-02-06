
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] pt-24 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-slate-900 pb-16">
          <div className="flex items-center gap-4">
            <div>
              <div className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-100 font-heading uppercase leading-none">
                D-Code Web
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.3em] text-slate-500 uppercase mt-2">
                By Danvers
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-6">Social</p>
              <ul className="flex flex-col gap-4 text-sm font-medium text-slate-400">
                <li><a href="https://t.me/dcodeweb" className="hover:text-blue-400 transition-colors uppercase">Telegram</a></li>
                <li><a href="https://instagram.com/dcodeweb" className="hover:text-blue-400 transition-colors uppercase">Instagram</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-6">Explore</p>
              <ul className="flex flex-col gap-4 text-sm font-medium text-slate-400">
                <li><a href="#portfolio" className="hover:text-blue-400 transition-colors uppercase">Work</a></li>
                <li><a href="#pricing" className="hover:text-blue-400 transition-colors uppercase">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-slate-600">
            © {new Date().getFullYear()} D-Code Web Studio. All rights reserved.
          </p>
          <div className="h-[1px] hidden md:block flex-grow mx-12 bg-slate-900" />
          <p className="text-[10px] uppercase tracking-widest text-slate-600">
            Design with Intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
