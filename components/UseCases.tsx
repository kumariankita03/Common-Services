
import React from 'react';
import { INDUSTRY_CARDS } from '../constants';
import { 
  Landmark, 
  HeartPulse, 
  ShoppingBag, 
  Factory, 
  Wifi, 
  Check, 
  Sparkles,
  Car,
  Building2,
  Zap,
  Clapperboard,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Tag,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Landmark': <Landmark size={24} />,
  'HeartPulse': <HeartPulse size={24} />,
  'ShoppingBag': <ShoppingBag size={24} />,
  'Factory': <Factory size={24} />,
  'Wifi': <Wifi size={24} />,
  'Car': <Car size={24} />,
  'Building2': <Building2 size={24} />,
  'Zap': <Zap size={24} />,
  'Clapperboard': <Clapperboard size={24} />,
  'GraduationCap': <GraduationCap size={24} />,
  'HeartHandshake': <HeartHandshake size={24} />,
  'Leaf': <Leaf size={24} />,
  'Tag': <Tag size={24} />
};

const UseCases: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Width of a card + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="industries" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative mb-10">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#032D60]">
              Agentforce Industries Accelerators extend industry use cases.
            </h2>
            <p className="text-sm text-slate-500 mt-2">Explore capabilities across 13 Industry Clouds</p>
          </div>
          
          <div className="absolute right-0 bottom-1 hidden md:flex gap-2">
             <button onClick={() => scroll('left')} className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-slate-600 hover:text-[#0176D3] transition-colors shadow-sm">
                <ChevronLeft size={20} />
             </button>
             <button onClick={() => scroll('right')} className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-slate-600 hover:text-[#0176D3] transition-colors shadow-sm">
                <ChevronRight size={20} />
             </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem' }}
        >
          {INDUSTRY_CARDS.map((industry) => (
            <div 
              key={industry.id} 
              className="flex-shrink-0 w-[300px] md:w-[340px] bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all snap-center flex flex-col h-full"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                   <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0176D3] flex items-center justify-center">
                      {iconMap[industry.iconName]}
                   </div>
                   <div className="inline-flex items-center gap-1 px-2 py-1 bg-purple-50 text-purple-700 rounded text-[10px] font-bold uppercase tracking-wide">
                      <Sparkles size={10} />
                      Pre-built Workflows
                   </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#032D60] mb-2">{industry.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6 h-10 line-clamp-2">
                   {industry.description}
                </p>
                
                <div className="space-y-3">
                   {industry.useCases.slice(0, 4).map((useCase, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                         <Check size={14} className="text-[#2E844A] mt-1 flex-shrink-0" />
                         <span className="text-sm font-medium text-slate-700 leading-snug">
                            {useCase}
                         </span>
                      </div>
                   ))}
                </div>
              </div>
              
              <div className="mt-auto px-6 py-4 border-t border-gray-50 bg-gray-50/50 rounded-b-xl">
                 <button className="text-xs font-bold text-[#0176D3] hover:text-[#005fb8] flex items-center gap-1 group">
                    View Solution Details
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex justify-center mt-4">
           <div className="text-xs text-slate-400 animate-pulse flex items-center gap-2">
              <span>Swipe to explore</span>
              <ArrowRightIcon />
           </div>
        </div>

      </div>
    </section>
  );
};

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default UseCases;
