
import React from 'react';
import { IMPACT_STATS } from '../constants';

const ValuePropsBar: React.FC = () => {
  return (
    <div className="bg-[#032D60] relative pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {IMPACT_STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center py-6 md:py-0 px-4 text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00A1E0] mb-2">
                {stat.value}
              </div>
              <div className="text-white font-semibold tracking-wider text-sm uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Curve Separator moved here */}
      <div className="absolute bottom-0 w-full translate-y-[1px]">
         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L1440 120L1440 60C1440 60 1082.5 120 720 120C357.5 120 0 60 0 60L0 120Z" fill="white"/>
         </svg>
      </div>
    </div>
  );
};

export default ValuePropsBar;
