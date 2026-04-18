import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Briefcase, UserCircle, Globe } from 'lucide-react';
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
      <div className="hidden lg:flex lg:w-1/2 bg-white flex-col justify-between p-16 relative overflow-hidden border-r border-slate-100">
        <div className="relative z-10">
          <Link to="/" className="flex items-center space-x-2.5 shrink-0">
            <div className="w-8 h-8 bg-monta-blue rounded-lg flex flex-col items-center justify-center shadow-lg shadow-blue-500/10">
              <span className="text-white font-bold text-xl leading-none">M</span>
            </div>
            <span className="text-xl font-bold text-monta-dark tracking-tight">Monta</span>
          </Link>
        </div>
        
        <div className="relative z-10">
           <div className="bg-slate-900 p-6 rounded-2xl shadow-2xl mb-12 max-w-sm">
              <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                    <UserCircle className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-white font-bold text-sm tracking-tight">Enterprise Ready</p>
                    <p className="text-[12px] text-slate-400 mt-0.5 font-medium">Verified by top compliance standards.</p>
                 </div>
              </div>
           </div>
          <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">Open a business account in minutes.</h2>
          <p className="text-slate-500 text-lg max-w-md font-medium">Join 50,000+ businesses using Monta to power their daily operations.</p>
        </div>

        <div className="relative z-10 flex items-center space-x-2 text-slate-400">
          <Globe className="w-4 h-4" />
          <span className="text-[11px] font-bold uppercase tracking-widest">Global Payouts • Local Reliability</span>
        </div>
      </div>

      {/* Right Pane - Form Selection */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32 bg-slate-50/30">
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto w-full max-w-[420px]"
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
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Get Started</h2>
            <p className="text-[13px] text-slate-500 mt-1 font-medium">Choose your account category to continue.</p>
          </div>

          <div className="space-y-3 mb-8">
            <button
              onClick={() => setAccountType('individual')}
              className={cn(
                "w-full flex items-center p-4 rounded-xl border-2 text-left transition-all duration-300 group",
                accountType === 'individual' ? "border-monta-blue bg-white shadow-xl shadow-blue-500/5" : "border-slate-100 bg-white hover:border-slate-200"
              )}
            >
              <div className={cn("w-10 h-10 rounded-lg mr-4 flex items-center justify-center transition-all", accountType === 'individual' ? "bg-monta-blue text-white shadow-lg shadow-blue-500/20" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200")}>
                <UserCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] font-bold text-slate-900">Individual</h3>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Personal projects and freelancers.</p>
              </div>
              <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all", accountType === 'individual' ? "border-monta-blue" : "border-slate-200")}>
                 {accountType === 'individual' && <div className="w-2 h-2 rounded-full bg-monta-blue animate-in zoom-in-0 fill-mode-both"></div>}
              </div>
            </button>

            <button
              onClick={() => setAccountType('corporate')}
              className={cn(
                "w-full flex items-center p-4 rounded-xl border-2 text-left transition-all duration-300 group",
                accountType === 'corporate' ? "border-monta-blue bg-white shadow-xl shadow-blue-500/5" : "border-slate-100 bg-white hover:border-slate-200"
              )}
            >
              <div className={cn("w-10 h-10 rounded-lg mr-4 flex items-center justify-center transition-all", accountType === 'corporate' ? "bg-slate-900 text-white shadow-lg shadow-black/20" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200")}>
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] font-bold text-slate-900">Business / Corporate</h3>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Registered companies and startups.</p>
              </div>
              <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all", accountType === 'corporate' ? "border-monta-blue" : "border-slate-200")}>
                 {accountType === 'corporate' && <div className="w-2 h-2 rounded-full bg-monta-blue animate-in zoom-in-0 fill-mode-both"></div>}
              </div>
            </button>
          </div>

          <Button 
            className="w-full font-bold shadow-blue-500/10" 
            disabled={!accountType} 
            onClick={handleContinue}
          >
            Create My Account
          </Button>

          <p className="mt-8 text-center text-[13px] text-slate-500 font-medium tracking-tight">
            Protected by Monta Security. <Link to="/login" className="font-bold text-monta-blue hover:text-blue-700 transition-colors ml-1">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
