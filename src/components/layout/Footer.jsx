import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 shrink-0 mb-4">
              <div className="w-8 h-8 bg-monta-blue rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                <span className="text-white font-bold text-xl relative z-10 leading-none pb-0.5">M</span>
              </div>
              <span className="text-xl font-bold text-monta-dark tracking-tight">Monta</span>
            </Link>
            <p className="text-sm text-slate-500 max-w-xs">
              Next generation banking. Smooth, powerful, and built for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="#" className="hover:text-monta-blue transition-colors">Individual Accounts</Link></li>
              <li><Link to="#" className="hover:text-monta-blue transition-colors">Business Accounts</Link></li>
              <li><Link to="#" className="hover:text-monta-blue transition-colors">Corporate Accounts</Link></li>
              <li><Link to="#" className="hover:text-monta-blue transition-colors">Cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="#" className="hover:text-monta-blue transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-monta-blue transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-monta-blue transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-monta-blue transition-colors">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="#" className="hover:text-monta-blue transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-monta-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-monta-blue transition-colors">Security</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Monta Technologies Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
