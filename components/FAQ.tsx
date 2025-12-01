
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] text-center mb-12">
          Agentforce for Industries FAQs
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0 pb-4">
              <button
                className="w-full flex justify-between items-start text-left py-4 focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg md:text-xl font-bold text-[#032D60] pr-8 group-hover:text-[#0176D3] transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <div className="w-8 h-8 rounded-full bg-[#E1F1FD] flex items-center justify-center">
                      <Minus size={20} className="text-[#0176D3]" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#E1F1FD] flex items-center justify-center">
                      <Plus size={20} className="text-[#0176D3]" />
                    </div>
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 text-lg leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
