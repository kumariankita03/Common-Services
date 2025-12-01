import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const LeadGen: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#032D60] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Accelerate your Salesforce Industries Implementation
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Each of these solutions is offered by certified Salesforce consulting partners who are enabled to integrate these products with the core Salesforce Industries CRM stack.
            </p>
            
            <ul className="space-y-4">
              {[
                'Unlock limitless productivity for humans and agents.',
                'Build a robust foundation for an agentic enterprise.',
                'Consistent, compliant, and scalable rule execution.'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#2E844A]" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg p-8 shadow-2xl text-slate-800">
            <h3 className="text-2xl font-bold mb-6 text-center">Get the Accelerator Report</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">First Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded p-2 focus:border-[#0176D3] focus:ring-1 focus:ring-[#0176D3] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Last Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded p-2 focus:border-[#0176D3] focus:ring-1 focus:ring-[#0176D3] outline-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1">Work Email</label>
                <input type="email" className="w-full border border-gray-300 rounded p-2 focus:border-[#0176D3] focus:ring-1 focus:ring-[#0176D3] outline-none" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Company</label>
                <input type="text" className="w-full border border-gray-300 rounded p-2 focus:border-[#0176D3] focus:ring-1 focus:ring-[#0176D3] outline-none" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Industry</label>
                 <select className="w-full border border-gray-300 rounded p-2 focus:border-[#0176D3] focus:ring-1 focus:ring-[#0176D3] outline-none bg-white">
                    <option>Financial Services</option>
                    <option>Healthcare & Life Sciences</option>
                    <option>Communications</option>
                    <option>Public Sector</option>
                    <option>Energy & Utilities</option>
                 </select>
              </div>

              <button className="w-full bg-[#0176D3] hover:bg-[#005fb8] text-white font-bold py-3 rounded transition-colors mt-4">
                Download Report
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By registering, you agree to the processing of your personal data by Salesforce as described in the Privacy Statement.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadGen;
