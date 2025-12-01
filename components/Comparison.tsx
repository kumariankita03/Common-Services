
import React from 'react';
import { OVERVIEW_SOLUTIONS, COMPARISON_MAIN_TITLE } from '../constants';
import { Zap, ShieldCheck, Layers, Infinity, Timer, TrendingUp } from 'lucide-react';

const solutionIconMap: Record<string, React.ReactNode> = {
  'Zap': <Zap className="w-6 h-6 text-[#0176D3]" />,
  'ShieldCheck': <ShieldCheck className="w-6 h-6 text-[#0176D3]" />,
  'Layers': <Layers className="w-6 h-6 text-[#0176D3]" />,
  'Infinity': <Infinity className="w-6 h-6 text-[#0176D3]" />,
  'Timer': <Timer className="w-6 h-6 text-[#0176D3]" />,
  'TrendingUp': <TrendingUp className="w-6 h-6 text-[#0176D3]" />,
};

const Comparison: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#032D60] leading-tight mb-2">
            {COMPARISON_MAIN_TITLE}
          </h2>
          <p className="text-base text-slate-500">
            Move from fragmented legacy systems to a unified agentic foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {OVERVIEW_SOLUTIONS.map((solution, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm">
                  {solutionIconMap[solution.iconName]}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#032D60] mb-1">
                  {solution.title}
                </h3>
                <p className="text-slate-600 leading-snug text-sm">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Comparison;
