import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Pane - Brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0B0F19] flex-col justify-between p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent z-0"></div>
        <div className="relative z-10">
          <Link to="/" className="flex items-center space-x-2.5 shrink-0">
            <div className="w-8 h-8 bg-monta-blue rounded-lg flex flex-col items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-xl leading-none">M</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Monta</span>
          </Link>
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl xl:text-5xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">Financial infrastructure for modern teams.</h2>
          <p className="text-slate-400 text-lg max-w-sm font-medium">Streamline your business operations with our tailored banking solutions.</p>
        </div>
        <div className="relative z-10 flex items-center space-x-2">
           <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
           <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">REGULATED BY CBN</span>
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32 bg-slate-50/50">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto w-full max-w-[380px]"
        >
          <div className="mb-12 lg:hidden">
             <Link to="/" className="flex items-center space-x-2.5 shrink-0">
              <div className="w-8 h-8 bg-monta-blue rounded-lg flex flex-col items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">M</span>
              </div>
              <span className="text-xl font-bold text-monta-dark tracking-tight">Monta</span>
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back</h2>
            <p className="text-[13px] text-slate-500 mt-1 font-medium">Continue to your business dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="e.g. sam@company.com" 
              required 
            />
            <div className="space-y-2">
              <Input 
                label="Password" 
                type="password" 
                placeholder="••••••••" 
                required 
              />
              <div className="flex justify-end">
                <Link to="#" className="text-[12px] font-bold text-monta-blue hover:text-blue-700 transition-colors">Recovery password?</Link>
              </div>
            </div>
            
            <Button type="submit" className="w-full font-bold mt-4 shadow-blue-500/10">Sign In</Button>
          </form>

          <p className="mt-10 text-center text-[13px] text-slate-500 font-medium">
            New to Monta? <Link to="/signup" className="font-bold text-monta-blue hover:text-blue-700 transition-colors">Create an account</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
