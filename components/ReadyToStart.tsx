
import React from 'react';
import { READY_OPTIONS } from '../constants';
import { Monitor, Phone, PlayCircle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Monitor': <Monitor className="w-6 h-6 text-[#0176D3]" />,
  'Phone': <Phone className="w-6 h-6 text-[#0176D3]" />,
  'PlayCircle': <PlayCircle className="w-6 h-6 text-[#0176D3]" />,
};

const ReadyToStart: React.FC = () => {
  return (
    <section className="py-24 bg-[url('https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-bg-texture.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] max-w-4xl mx-auto leading-tight">
            Ready to take the next step with the #1 AI CRM for Industries?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {READY_OPTIONS.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start border border-gray-100">
              <div className="w-12 h-12 bg-[#E1F1FD] rounded-full flex items-center justify-center mb-6">
                {iconMap[option.iconName]}
              </div>
              <h3 className="text-2xl font-bold text-[#032D60] mb-4">
                {option.title}
              </h3>
              <p className="text-slate-600 mb-8 text-base leading-relaxed flex-grow">
                {option.description}
              </p>
              <a href="#" className="text-[#0176D3] font-bold text-base hover:text-[#005fb8] underline decoration-2 underline-offset-4">
                {option.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
