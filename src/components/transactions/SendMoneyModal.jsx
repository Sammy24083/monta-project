import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Search, CheckCircle, ChevronRight, Wallet, Landmark } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { cn } from '../../utils/utils';

export const SendMoneyModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bank: '',
    accountNumber: '',
    amount: '',
    narration: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const BANKS = [
    { value: 'gtbank', label: 'Guaranty Trust Bank' },
    { value: 'zenith', label: 'Zenith Bank' },
    { value: 'kuda', label: 'Kuda Microfinance' },
    { value: 'opay', label: 'OPay / Blueridge' },
    { value: 'access', label: 'Access Bank' },
  ];

  const handleSend = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
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
              <div className="w-10 h-10 rounded-xl bg-monta-blue flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight">Send Money</h2>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Instant Bank Transfer</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-slate-900 border border-transparent hover:border-slate-100">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-5"
                >
                  <Select 
                    label="Recipient's Bank" 
                    placeholder="Search Banks..."
                    options={BANKS}
                    value={formData.bank}
                    onChange={(e) => setFormData({...formData, bank: e.target.value})}
                  />
                  
                  <div className="space-y-4">
                    <Input 
                      label="Account Number" 
                      placeholder="e.g. 0123456789" 
                      maxLength={10}
                      value={formData.accountNumber}
                      onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
                    />
                    
                    {formData.accountNumber.length === 10 && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/50 flex items-center space-x-3"
                      >
                         <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-blue-100">
                           <Landmark className="w-4 h-4 text-monta-blue" />
                         </div>
                         <div>
                            <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Account Found</p>
                            <p className="text-[13px] font-bold text-slate-900 tracking-tight">SAMUEL ADEMOLA J.</p>
                         </div>
                      </motion.div>
                    )}
                  </div>

                  <Button 
                    className="w-full font-bold mt-4 py-6 text-[15px] shadow-blue-500/10"
                    disabled={!formData.bank || formData.accountNumber.length < 10}
                    onClick={() => setStep(2)}
                  >
                    Continue to Amount
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Sending to</p>
                    <p className="text-[15px] font-bold text-slate-900">SAMUEL ADEMOLA J.</p>
                    <p className="text-[12px] text-slate-500 font-medium">Kuda Microfinance • 0123456789</p>
                  </div>

                  <Input 
                    label="Amount (₦)" 
                    placeholder="0.00" 
                    type="number"
                    className="text-2xl font-black text-center py-4 h-auto"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  />
                  
                  <Input 
                    label="Narration / Reference (Optional)" 
                    placeholder="What's this for?" 
                    value={formData.narration}
                    onChange={(e) => setFormData({...formData, narration: e.target.value})}
                  />

                  <div className="flex flex-col gap-2 mt-4">
                    <Button 
                      className="w-full font-bold py-6 text-[15px]"
                      disabled={!formData.amount || isProcessing}
                      onClick={handleSend}
                    >
                      {isProcessing ? "Processing..." : `Send ₦${Number(formData.amount).toLocaleString()}`}
                    </Button>
                    <Button variant="ghost" className="text-slate-400 font-bold" onClick={() => setStep(1)}>Go Back</Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center text-white shadow-xl shadow-green-500/30 mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Transfer Successful</h2>
                  <p className="text-[13px] text-slate-500 mt-2 font-medium">Your transfer of <span className="text-slate-900 font-bold">₦{Number(formData.amount).toLocaleString()}</span> has been processed successfully.</p>
                  
                  <div className="mt-8 space-y-3">
                    <Button variant="outline" className="w-full font-bold">Download Receipt</Button>
                    <Button className="w-full font-bold" onClick={onClose}>Done</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900/20" />
            <div className="w-8 h-1 rounded-full bg-slate-900" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900/20" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
