

import React from 'react';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';
import { PlayCircle, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#032D60] overflow-hidden">
      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#00A1E0] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-[#2E844A] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-400 bg-purple-900/50 text-purple-100 text-xs font-semibold uppercase tracking-wide mb-6">
              Agentforce Industries Accelerators
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {HERO_TITLE}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 font-light leading-relaxed">
              {HERO_SUBTITLE}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA: Watch Video */}
              <button className="bg-[#0176D3] hover:bg-[#005fb8] text-white px-8 py-4 rounded text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <PlayCircle size={24} />
                Watch Video
              </button>
              {/* Secondary CTA: Contact Us */}
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded text-lg font-bold transition-all flex items-center justify-center gap-2">
                <MessageSquare size={24} />
                Contact Us
              </button>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              See how Agentforce transforms industries in 2 minutes.
            </p>
          </div>

          {/* Right Column: Video Placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer bg-slate-900 aspect-video">
              <img 
                src="https://placehold.co/1200x675/0a1f3d/00a1e0?text=Agentforce+Demo+Preview" 
                alt="Agentforce Demo" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <div className="w-16 h-16 bg-[#0176D3] rounded-full flex items-center justify-center shadow-lg">
                      <PlayCircle className="text-white w-8 h-8 ml-1" fill="currentColor" />
                   </div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots/elements around video */}
            <div className="absolute -bottom-6 -right-6 -z-10">
               <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                     <circle cx="2" cy="2" r="2" className="text-blue-500/40" fill="currentColor"/>
                  </pattern>
                  <rect width="100" height="100" fill="url(#dot-pattern)"/>
               </svg>
            </div>
          </div>

        </div>
      </div>
      
      {/* Curve Separator Removed to allow seamless flow into ValuePropsBar */}
    </div>
  );
};

export default Hero;