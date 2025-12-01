
import React from 'react';
import { WHAT_IS_TITLE, WHAT_IS_DESC } from '../constants';

const Overview: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header and Description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] mb-6">
            {WHAT_IS_TITLE}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
            {WHAT_IS_DESC}
          </p>
        </div>

        {/* Architecture Image Placeholder */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-100 bg-slate-50 aspect-[16/9] flex items-center justify-center group">
            <img 
              src="https://placehold.co/1200x675/f1f5f9/032d60?text=Agentforce+Architecture+Diagram" 
              alt="Agentforce Architecture" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply pointer-events-none"></div>
             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold text-slate-500 shadow-sm border border-slate-200">
                Architecture Overview
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Overview;
