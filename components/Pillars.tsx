
import React, { useState, useEffect } from 'react';
import { PRODUCT_PILLARS, VALUE_PROP_TITLE, VALUE_PROP_DESC } from '../constants';
import { Layout, GitMerge, Database, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Layout': <Layout className="w-6 h-6" />,
  'GitMerge': <GitMerge className="w-6 h-6" />,
  'Database': <Database className="w-6 h-6" />,
  'Cpu': <Cpu className="w-6 h-6" />,
};

const Pillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = PRODUCT_PILLARS.map(p => document.getElementById(p.id));
      let current = '';
      
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id') || '';
          }
        }
      });
      setActivePillar(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="products" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Positioning Statement */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 text-[#0176D3] rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Core Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] mb-6 leading-tight">
            {VALUE_PROP_TITLE}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {VALUE_PROP_DESC}
          </p>
        </div>

        {/* Sticky Sub-nav */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-y border-gray-100 py-4 mb-16 shadow-sm">
          <div className="flex justify-center overflow-x-auto gap-4 md:gap-8 px-4 scrollbar-hide">
            {PRODUCT_PILLARS.map((product) => (
              <button
                key={product.id}
                onClick={() => scrollToSection(product.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap border ${
                  activePillar === product.id 
                    ? 'bg-[#0176D3] text-white border-[#0176D3] shadow-md' 
                    : 'bg-white text-slate-600 border-gray-200 hover:border-blue-300 hover:text-[#0176D3]'
                }`}
              >
                <span className={activePillar === product.id ? 'text-white' : 'text-[#0176D3]'}>
                  {React.cloneElement(iconMap[product.iconName] as React.ReactElement, { className: 'w-4 h-4' })}
                </span>
                {product.title}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Product Sections */}
        <div className="space-y-32">
          {PRODUCT_PILLARS.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div id={product.id} key={product.id} className={`flex flex-col lg:flex-row gap-12 items-center scroll-mt-32 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Content Side */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#0176D3] flex items-center justify-center shadow-lg transform rotate-3">
                        {React.cloneElement(iconMap[product.iconName] as React.ReactElement, { className: 'w-8 h-8 text-white' })}
                    </div>
                    <h3 className="text-3xl font-bold text-[#032D60]">
                        {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-xl font-light text-slate-500 mb-6">
                    {product.shortDesc}
                  </p>
                  
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                    {product.fullDesc}
                  </p>

                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                         <CheckCircle2 className="w-5 h-5 text-[#2E844A] mt-0.5 flex-shrink-0" />
                         <span className="text-base text-slate-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href={`#${product.id}`} className="inline-flex items-center text-[#0176D3] hover:text-[#005fb8] font-bold text-base group">
                    <span>Learn more about {product.title}</span>
                    <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-slate-50 aspect-[4/3] group">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 z-0"></div>
                     <img 
                        src={product.imageSrc} 
                        alt={`${product.title} Interface`}
                        className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                     />
                     
                     {/* Decorative Elements */}
                     <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-[#0176D3] rounded-full opacity-10 blur-3xl ${isEven ? '' : 'left-auto -right-10'}`}></div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Pillars;
