import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = {
    accounts: [
      { name: "Personal Account", desc: "For individuals and freelancers" },
      { name: "Business Account", desc: "For registered SMEs and startups" },
      { name: "Corporate Account", desc: "For large organizations" },
    ]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 shrink-0">
              <div className="w-8 h-8 bg-monta-blue rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400"></div>
                <span className="text-white font-bold text-xl relative z-10 leading-none pb-0.5">M</span>
              </div>
              <span className="text-xl font-bold text-monta-dark tracking-tight">Monta</span>
            </Link>

            <div className="hidden md:flex space-x-1">
              <div className="relative">
                <button 
                  onClick={() => handleDropdown('accounts')}
                  className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-slate-600 rounded-md hover:text-monta-dark hover:bg-slate-50 transition-colors"
                >
                  <span>Accounts</span>
                  <ChevronDown className="w-4 h-4 ml-1 text-slate-400" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'accounts' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"
                    >
                      <div className="p-2">
                        {menuItems.accounts.map((item, idx) => (
                          <Link key={idx} to="/signup" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                            <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/" className="px-4 py-2 text-sm font-medium text-slate-600 rounded-md hover:text-monta-dark hover:bg-slate-50 transition-colors">
                Company
              </Link>
              <Link to="/" className="px-4 py-2 text-sm font-medium text-slate-600 rounded-md hover:text-monta-dark hover:bg-slate-50 transition-colors">
                Help
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-monta-dark transition-colors">
              Sign In
            </Link>
            <Button onClick={() => navigate('/signup')}>Open an Account</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-monta-dark hover:bg-slate-50"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-100 bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-soft">
              <div className="space-y-1">
                <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Account Types</p>
                {menuItems.accounts.map((item, idx) => (
                  <Link key={idx} to="/signup" className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50 hover:text-monta-blue">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <Button variant="outline" className="w-full justify-center" onClick={() => navigate('/login')}>Sign In</Button>
                <Button className="w-full justify-center" onClick={() => navigate('/signup')}>Open an Account</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
