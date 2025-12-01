
import React from 'react';
import { RESOURCES } from '../constants';
import { FileText, Video, BookOpen, Newspaper } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'FileText': <FileText size={32} className="text-slate-700" />,
  'Video': <Video size={32} className="text-slate-700" />,
  'BookOpen': <BookOpen size={32} className="text-slate-700" />,
  'Newspaper': <Newspaper size={32} className="text-slate-700" />,
};

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#032D60]">
            Keep up with the latest Agentforce trends, <br className="hidden md:block" />
            insights, and conversations.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((resource, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              {/* Illustration Area */}
              <div className={`h-40 ${resource.imageColor} relative overflow-hidden flex items-center justify-center`}>
                 <div className="absolute inset-0 bg-white/20 rounded-full scale-150 translate-y-10"></div>
                 <div className="relative z-10 p-4 bg-white/60 rounded-full shadow-sm backdrop-blur-sm">
                   {iconMap[resource.iconName]}
                 </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="inline-block bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                  {resource.type}
                </div>
                <h3 className="text-xl font-bold text-[#032D60] mb-6 line-clamp-3">
                  {resource.title}
                </h3>
                <div className="mt-auto pt-4">
                  <a href="#" className="text-[#0176D3] font-bold text-base hover:underline decoration-2 underline-offset-4">
                    {resource.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
