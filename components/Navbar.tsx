import React, { useState } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';
import { APP_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            {/* Logo Placeholder - Simulating the Cloud Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <svg className="h-10 w-10 text-[#00A1E0]" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M17.5,19c4.1,0,7.5-3.4,7.5-7.5c0-4.1-3.4-7.5-7.5-7.5c-0.7,0-1.4,0.1-2.1,0.3C14.7,1.7,12,0,9,0C4.6,0,1,3.6,1,8 c0,0.4,0,0.7,0.1,1.1C0.4,9.6,0,10.3,0,11c0,2.2,1.8,4,4,4h13.5z"/>
              </svg>
              <span className="font-bold text-xl tracking-tight text-slate-900 w-48 leading-tight">
                {APP_NAME}
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#products" className="text-gray-700 hover:text-[#0176D3] px-3 py-2 text-sm font-medium transition-colors">Products</a>
              <a href="#benefits" className="text-gray-700 hover:text-[#0176D3] px-3 py-2 text-sm font-medium transition-colors">Benefits</a>
              <a href="#industries" className="text-gray-700 hover:text-[#0176D3] px-3 py-2 text-sm font-medium transition-colors">Industries</a>
              <a href="#resources" className="text-gray-700 hover:text-[#0176D3] px-3 py-2 text-sm font-medium transition-colors">Resources</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-500 hover:text-[#0176D3]">
                <Search size={20} />
            </button>
            <button className="text-gray-500 hover:text-[#0176D3]">
                <Globe size={20} />
            </button>
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <a href="#contact" className="text-gray-700 font-bold text-sm hover:text-[#0176D3]">Contact Us</a>
            <button className="bg-[#2E844A] hover:bg-[#1f5c32] text-white px-5 py-2.5 rounded text-sm font-bold transition-colors shadow-sm">
              Try for Free
            </button>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#0176D3] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0176D3] hover:bg-gray-50">Products</a>
            <a href="#benefits" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0176D3] hover:bg-gray-50">Benefits</a>
            <a href="#industries" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0176D3] hover:bg-gray-50">Industries</a>
             <button className="w-full text-left mt-4 block px-3 py-2 bg-[#2E844A] text-white rounded font-bold">
              Try for Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
