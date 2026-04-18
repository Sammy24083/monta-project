import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { FileUpload } from '../../components/ui/FileUpload';
import { Camera, CheckCircle } from 'lucide-react';

export const IndividualWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ bvn: '', nin: '', utilityBill: null });
  const [isFaceVerified, setIsFaceVerified] = useState(false);
  const navigate = useNavigate();

  const totalSteps = 4;

  const nextStep = () => {
     if (step === totalSteps) {
        navigate('/dashboard');
     } else {
        setStep((prev) => prev + 1);
     }
  };
  const prevStep = () => setStep((prev) => prev - 1);

  const simulateFaceVerification = () => {
    setTimeout(() => setIsFaceVerified(true), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-md mb-10">
         <ProgressBar currentStep={step} totalSteps={totalSteps} />
         <div className="flex justify-between mt-3 px-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verification Progress</span>
            <span className="text-[10px] font-bold text-monta-blue uppercase tracking-widest">Step {step} of {totalSteps}</span>
         </div>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-premium border border-slate-200/60 overflow-hidden">
        <div className="p-8 pb-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="mb-8 text-center sm:text-left">
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Identity Verification</h2>
                  <p className="text-[13px] text-slate-500 mt-1 font-medium">Please provide your 11-digit BVN.</p>
                </div>
                <Input 
                  label="Bank Verification Number" 
                  placeholder="e.g. 22210987345" 
                  value={formData.bvn}
                  onChange={(e) => setFormData({...formData, bvn: e.target.value})}
                  maxLength={11}
                />
                <p className="text-[11px] text-slate-400 mt-4 leading-relaxed italic">Your BVN is required by regulation. We do not store your biometrics.</p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="mb-8 text-center sm:text-left">
                   <h2 className="text-xl font-bold text-slate-900 tracking-tight">Citizenship Check</h2>
                   <p className="text-[13px] text-slate-500 mt-1 font-medium">Enter your National Identity Number.</p>
                </div>
                <Input 
                  label="NIN (National ID)" 
                  placeholder="e.g. 12345678901" 
                  value={formData.nin}
                  onChange={(e) => setFormData({...formData, nin: e.target.value})}
                  maxLength={11}
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                 <div className="mb-8 text-center sm:text-left">
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">Proof of Residence</h2>
                    <p className="text-[13px] text-slate-500 mt-1 font-medium">Upload a valid utility bill or lease agreement.</p>
                 </div>
                <FileUpload 
                  label="Residential Document" 
                  onFileSelect={(file) => setFormData({...formData, utilityBill: file})} 
                />
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Liveness Check</h2>
                  <p className="text-[13px] text-slate-500 mt-1 font-medium">Position your face within the frame below.</p>
                </div>
                
                <div className="relative w-56 h-56 mx-auto rounded-full border-4 border-slate-100 bg-slate-50/50 shadow-inner flex items-center justify-center mb-8 overflow-hidden group">
                  {isFaceVerified ? (
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                         <CheckCircle className="w-10 h-10" />
                      </div>
                      <span className="text-[13px] font-bold text-green-600 mt-4">Recognition Successful</span>
                    </motion.div>
                  ) : (
                    <div className="text-slate-400 flex flex-col items-center">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100">
                          <Camera className="w-7 h-7 text-slate-300" />
                       </div>
                       <Button size="sm" variant="outline" className="text-[11px] font-bold" onClick={simulateFaceVerification}>Start Camera Scan</Button>
                    </div>
                  )}
                  
                  {/* Scan Animation Overlay */}
                  {!isFaceVerified && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-monta-blue animate-scan opacity-50"></div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="p-5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
          <Button variant="ghost" size="sm" className="font-bold text-slate-400" onClick={prevStep} disabled={step === 1}>Previous</Button>
          <Button size="sm" className="font-bold px-6" onClick={nextStep} disabled={
             (step === 1 && formData.bvn.length < 11) ||
             (step === 2 && formData.nin.length < 11) ||
             (step === 3 && !formData.utilityBill) ||
             (step === 4 && !isFaceVerified)
          }>
            {step === totalSteps ? "Launch Dashboard" : "Save & Continue"}
          </Button>
        </div>
    </div>
    </div>
  );
};
