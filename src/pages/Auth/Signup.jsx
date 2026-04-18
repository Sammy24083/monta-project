import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Briefcase, UserCircle } from 'lucide-react';
import { cn } from '../../utils/utils';

export const Signup = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState(null); // 'individual' or 'corporate'

  const handleContinue = () => {
    if (accountType === 'individual') {
      navigate('/verify-individual');
    } else if (accountType === 'corporate') {
      navigate('/verify-corporate');
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Pane - Brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-50 flex-col justify-between p-12 relative overflow-hidden border-r border-slate-100">
        <div className="relative z-10">
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <div className="w-8 h-8 bg-monta-blue rounded-lg flex flex-col items-center justify-center">
              <span className="text-white font-bold text-xl leading-none pb-0.5">M</span>
            </div>
            <span className="text-xl font-bold text-monta-dark tracking-tight">Monta</span>
          </Link>
        </div>
        
        <div className="relative z-10 max-w-md">
           <div className="bg-white p-6 rounded-2xl shadow-soft mb-8 animate-bounce-slow">
              <div className="flex items-center space-x-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl"> ✓ </div>
                 <div>
                    <p className="text-slate-900 font-bold">Fast Account Opening</p>
                    <p className="text-sm text-slate-500">Get your account number in 5 mins.</p>
                 </div>
              </div>
           </div>
          <h2 className="text-4xl font-bold text-monta-dark mb-6 leading-tight">Start banking better today.</h2>
          <p className="text-slate-500 text-lg">Create an account to manage your money efficiently.</p>
        </div>
      </div>

      {/* Right Pane - Form Selection */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
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

          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Create an account</h2>
          <p className="text-sm text-slate-500 mb-8">Select the type of account you want to open.</p>

          <div className="space-y-4 mb-8">
            <button
              onClick={() => setAccountType('individual')}
              className={cn(
                "w-full flex items-start p-5 rounded-xl border-2 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-monta-blue focus:ring-offset-2",
                accountType === 'individual' ? "border-monta-blue bg-blue-50/50" : "border-slate-200 hover:border-slate-300"
              )}
            >
              <div className={cn("p-3 rounded-lg mr-4", accountType === 'individual' ? "bg-monta-blue text-white" : "bg-slate-100 text-slate-500")}>
                <UserCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Individual Account</h3>
                <p className="text-sm text-slate-500 mt-1">For freelancers, solo workers, and personal finances.</p>
              </div>
            </button>

            <button
              onClick={() => setAccountType('corporate')}
              className={cn(
                "w-full flex items-start p-5 rounded-xl border-2 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-monta-blue focus:ring-offset-2",
                accountType === 'corporate' ? "border-monta-blue bg-blue-50/50" : "border-slate-200 hover:border-slate-300"
              )}
            >
              <div className={cn("p-3 rounded-lg mr-4", accountType === 'corporate' ? "bg-monta-blue text-white" : "bg-slate-100 text-slate-500")}>
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Corporate / Business</h3>
                <p className="text-sm text-slate-500 mt-1">For registered startups, SMEs, and large organizations.</p>
              </div>
            </button>
          </div>

          <Button 
            className="w-full text-lg" 
            disabled={!accountType} 
            onClick={handleContinue}
          >
            Continue
          </Button>

          <div className="mt-8 text-center text-sm text-slate-600">
            Already have an account? <Link to="/login" className="font-semibold text-monta-blue hover:underline">Sign in</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
