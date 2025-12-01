
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ACCELERATOR_TITLE, ACCELERATOR_TEXT, ACCELERATOR_CTA } from '../constants';

const Accelerator: React.FC = () => {
  const benefits = [
    "Reusable logic & assets.",
    "Consistent framework.",
    "Advisory-Led Quick Starts.",
    "Proven patterns."
  ];

  return (
    <section id="accelerator" className="py-12 bg-[#032D60] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content Side */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {ACCELERATOR_TITLE}
            </h2>
            <p className="text-base text-blue-100 mb-6 leading-relaxed">
              {ACCELERATOR_TEXT}
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#2E844A] w-4 h-4 flex-shrink-0" />
                  <span className="text-sm text-blue-50 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Card Side */}
          <div className="bg-white rounded-lg p-6 shadow-xl text-slate-800 border border-blue-900/10">
            <h3 className="text-lg font-bold mb-2 text-[#032D60]">Register for Workshop</h3>
            <p className="text-slate-500 mb-4 text-xs leading-relaxed">
                {ACCELERATOR_CTA}
            </p>
            
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-[#0176D3] outline-none" />
                <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-[#0176D3] outline-none" />
              </div>
              <input type="email" placeholder="Work Email" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-[#0176D3] outline-none" />
              
              <button className="w-full bg-[#0176D3] hover:bg-[#005fb8] text-white font-bold py-2.5 rounded text-sm transition-all shadow-sm">
                Sign Up Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Accelerator;
