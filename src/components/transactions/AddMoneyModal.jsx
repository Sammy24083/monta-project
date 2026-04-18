import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Landmark, CreditCard, Smartphone, Copy, CheckCircle, ChevronRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { cn } from '../../utils/utils';

export const AddMoneyModal = ({ isOpen, onClose }) => {
  const [view, setView] = useState('menu'); // menu, bank, card, ussd
  const [copied, setCopied] = useState(false);
  const [cardStep, setCardStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const accountDetails = {
    bank: "Monta Microfinance Bank",
    accountNo: "0123456789",
    accountName: "Monta Business / SAMUEL ADEMOLA"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(accountDetails.accountNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCardPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCardStep(3);
    }, 2500);
  };

  const USSD_CODES = [
    { bank: 'GTBank', code: '*737*2*Amount*0123456789#' },
    { bank: 'Zenith', code: '*966*Amount*0123456789#' },
    { bank: 'Access', code: '*901*Amount*0123456789#' },
    { bank: 'First Bank', code: '*894*Amount*0123456789#' },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
            <div className="flex items-center space-x-3">
              {view !== 'menu' && (
                <button 
                  onClick={() => { setView('menu'); setCardStep(1); }}
                  className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-slate-900 border border-transparent hover:border-slate-100 mr-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                  {view === 'menu' ? 'Add Money' : 
                   view === 'bank' ? 'Bank Transfer' : 
                   view === 'card' ? 'Fund via Card' : 'USSD Funding'}
                </h2>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Choose your preferred method</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-slate-900 border border-transparent hover:border-slate-100">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 min-h-[340px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {view === 'menu' && (
                <motion.div 
                  key="menu"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-3"
                >
                  <button 
                    onClick={() => setView('bank')}
                    className="w-full p-4 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-blue-500/5">
                          <Landmark className="w-6 h-6" />
                       </div>
                       <div className="text-left">
                          <p className="text-[15px] font-bold text-slate-900">Bank Transfer</p>
                          <p className="text-[12px] text-slate-500 font-medium">Fund via your virtual account</p>
                       </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                  </button>

                  <button 
                    onClick={() => setView('card')}
                    className="w-full p-4 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all shadow-purple-500/5">
                          <CreditCard className="w-6 h-6" />
                       </div>
                       <div className="text-left">
                          <p className="text-[15px] font-bold text-slate-900">Card Payment</p>
                          <p className="text-[12px] text-slate-500 font-medium">Fund using Mastercard, Visa, Verve</p>
                       </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                  </button>

                  <button 
                    onClick={() => setView('ussd')}
                    className="w-full p-4 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all shadow-green-500/5">
                          <Smartphone className="w-6 h-6" />
                       </div>
                       <div className="text-left">
                          <p className="text-[15px] font-bold text-slate-900">USSD Code</p>
                          <p className="text-[12px] text-slate-500 font-medium">Generate bank-specific USSD</p>
                       </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                  </button>
                </motion.div>
              )}

              {view === 'bank' && (
                <motion.div 
                  key="bank"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="p-6 bg-slate-900 rounded-3xl text-white relative overflow-hidden shadow-xl">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-8 -mt-8"></div>
                     <div className="relative z-10 space-y-4">
                        <div>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Bank Name</p>
                           <p className="text-sm font-bold">{accountDetails.bank}</p>
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Number</p>
                           <div className="flex items-center justify-between">
                              <p className="text-2xl font-black tracking-widest">{accountDetails.accountNo}</p>
                              <button 
                                onClick={handleCopy}
                                className={cn(
                                  "p-2 rounded-lg transition-all active:scale-90",
                                  copied ? "bg-green-500/20 text-green-400" : "bg-white/10 text-white hover:bg-white/20"
                                )}
                              >
                                 {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              </button>
                           </div>
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Name</p>
                           <p className="text-xs font-bold text-slate-300">{accountDetails.accountName}</p>
                        </div>
                     </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
                     <p className="text-[11px] text-amber-700 font-medium leading-relaxed italic text-center">
                       "Transfers to this account will reflect in your Monta balance within minutes."
                     </p>
                  </div>
                </motion.div>
              )}

              {view === 'card' && (
                <motion.div 
                  key="card"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  {cardStep === 1 && (
                    <div className="space-y-5">
                      <Input label="Amount to Add (₦)" placeholder="0.00" type="number" />
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                         <div className="flex items-center space-x-3">
                            <div className="w-10 h-6 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase">Card</div>
                            <span className="text-[13px] font-bold text-slate-800">Use Saved Card (**** 4432)</span>
                         </div>
                         <div className="w-4 h-4 rounded-full border-2 border-monta-blue flex items-center justify-center p-0.5">
                            <div className="w-full h-full rounded-full bg-monta-blue"></div>
                         </div>
                      </div>
                      <Button className="w-full font-bold py-6" onClick={() => setCardStep(2)}>Continue to Checkout</Button>
                    </div>
                  )}

                  {cardStep === 2 && (
                    <div className="text-center space-y-6">
                       <div className="w-16 h-16 border-4 border-slate-100 border-t-monta-blue rounded-full animate-spin mx-auto"></div>
                       <div>
                          <p className="text-lg font-bold text-slate-900 tracking-tight">Processing Payment</p>
                          <p className="text-[13px] text-slate-500 font-medium mt-1">Please do not refresh this page...</p>
                       </div>
                       <Button className="w-full font-bold py-6 opacity-0" onClick={handleCardPayment} />
                       {/* Auto trigger simulation */}
                       {setTimeout(() => handleCardPayment(), 2000) && null}
                    </div>
                  )}

                  {cardStep === 3 && (
                    <div className="text-center py-4 space-y-6">
                       <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center text-white shadow-xl shadow-green-500/30">
                          <CheckCircle className="w-10 h-10" />
                       </div>
                       <div>
                          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Wallet Funded!</h2>
                          <p className="text-[13px] text-slate-500 font-medium mt-2">Your payment has been received and your wallet balance updated.</p>
                       </div>
                       <Button className="w-full font-bold py-6" onClick={onClose}>Back to Dashboard</Button>
                    </div>
                  )}
                </motion.div>
              )}

              {view === 'ussd' && (
                <motion.div 
                  key="ussd"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-3"
                >
                   {USSD_CODES.map((bank, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group">
                         <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{bank.bank}</p>
                            <p className="text-[15px] font-black text-slate-900 tracking-tight">{bank.code}</p>
                         </div>
                         <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                            <Copy className="w-4 h-4" />
                         </button>
                      </div>
                   ))}
                   <p className="text-[11px] text-slate-400 text-center font-medium mt-4">Dial these codes from your registered phone number.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-center space-x-2">
            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", view === 'menu' ? "w-8 bg-slate-900" : "bg-slate-900/20")} />
            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", view !== 'menu' ? "w-8 bg-slate-900" : "bg-slate-900/20")} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
