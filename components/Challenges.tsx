
import React from 'react';
import { CHALLENGES, CHALLENGES_TITLE, CHALLENGES_SUBTITLE } from '../constants';
import { Code2, BrainCircuit, Unplug, Coins, MessageSquareDashed, BarChart3 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Code2': <Code2 className="w-7 h-7 text-red-600" />,
  'BrainCircuit': <BrainCircuit className="w-7 h-7 text-red-600" />,
  'Unplug': <Unplug className="w-7 h-7 text-red-600" />,
  'Coins': <Coins className="w-7 h-7 text-red-600" />,
  'MessageSquareDashed': <MessageSquareDashed className="w-7 h-7 text-red-600" />,
  'BarChart3': <BarChart3 className="w-7 h-7 text-red-600" />,
};

const Challenges: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] mb-6">
            {CHALLENGES_TITLE}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {CHALLENGES_SUBTITLE}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHALLENGES.map((challenge, index) => (
            <div key={index} className="bg-white p-8 rounded-r-xl rounded-l-md shadow-sm border border-gray-100 border-l-4 border-l-red-500 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-red-50 rounded-full opacity-50 transition-transform group-hover:scale-150"></div>
              
              <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6 relative z-10">
                {iconMap[challenge.iconName]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">
                {challenge.title}
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
