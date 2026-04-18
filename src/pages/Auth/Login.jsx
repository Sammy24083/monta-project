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
      <div className="hidden lg:flex lg:w-1/2 bg-monta-dark flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/50 z-0"></div>
        <div className="relative z-10">
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <div className="w-8 h-8 bg-monta-blue rounded-lg flex flex-col items-center justify-center">
              <span className="text-white font-bold text-xl leading-none pb-0.5">M</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Monta</span>
          </Link>
        </div>
        <div className="relative z-10 max-w-md">
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Manage your finances like a pro.</h2>
          <p className="text-slate-300 text-lg">Join thousands of modern businesses who rely on Monta to scale their operations efficiently.</p>
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="mb-10 lg:hidden">
             <Link to="/" className="flex items-center space-x-2 shrink-0">
              <div className="w-8 h-8 bg-monta-blue rounded-lg flex flex-col items-center justify-center">
                <span className="text-white font-bold text-xl leading-none pb-0.5">M</span>
              </div>
              <span className="text-xl font-bold text-monta-dark tracking-tight">Monta</span>
            </Link>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome back</h2>
          <p className="text-sm text-slate-500 mb-8">Please enter your details to sign in.</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="Enter your email" 
              required 
            />
            <div className="space-y-1">
              <Input 
                label="Password" 
                type="password" 
                placeholder="••••••••" 
                required 
              />
              <div className="flex justify-end">
                <Link to="#" className="text-sm font-medium text-monta-blue hover:underline">Forgot password?</Link>
              </div>
            </div>
            
            <Button type="submit" className="w-full text-lg mt-2">Sign In</Button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-600">
            Don't have an account? <Link to="/signup" className="font-semibold text-monta-blue hover:underline">Sign up</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
