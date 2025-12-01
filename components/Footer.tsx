import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
           <div>
              <h4 className="font-bold mb-4 text-slate-900">New to Salesforce?</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">Why Salesforce</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">What is CRM?</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">Explore All Products</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">SaaS</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">Customer Success</a></li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold mb-4 text-slate-900">About Salesforce</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">Our Story</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">Newsroom</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">Investors</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">Sustainability</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">Trust</a></li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold mb-4 text-slate-900">Popular Links</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">New Release Features</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">Salesforce Events</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">Dreamforce</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">CRM Software</a></li>
                 <li><a href="#" className="hover:text-[#0176D3] hover:underline">Salesforce Plus</a></li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold mb-4 text-slate-900">Connect</h4>
              <div className="flex space-x-4 mb-4">
                 <Facebook size={20} className="text-slate-500 hover:text-[#0176D3] cursor-pointer" />
                 <Twitter size={20} className="text-slate-500 hover:text-[#0176D3] cursor-pointer" />
                 <Linkedin size={20} className="text-slate-500 hover:text-[#0176D3] cursor-pointer" />
                 <Instagram size={20} className="text-slate-500 hover:text-[#0176D3] cursor-pointer" />
                 <Youtube size={20} className="text-slate-500 hover:text-[#0176D3] cursor-pointer" />
              </div>
              <p className="text-sm text-slate-600">Call us at 1-800-667-6389</p>
           </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs text-slate-500 mb-4 md:mb-0">
               &copy; 2024 Salesforce, Inc. All rights reserved. | <a href="#" className="hover:underline text-[#0176D3]">Privacy</a> | <a href="#" className="hover:underline text-[#0176D3]">Terms</a>
            </div>
            <div className="text-xs text-slate-500">
               Worldwide
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
