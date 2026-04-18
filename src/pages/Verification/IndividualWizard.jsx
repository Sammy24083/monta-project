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
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 sm:px-6">
      <div className="w-full max-w-lg mb-8">
         <ProgressBar currentStep={step} totalSteps={totalSteps} />
      </div>

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">BVN Verification</h2>
                <p className="text-slate-500 mb-6">Enter your 11-digit Bank Verification Number.</p>
                <Input 
                  label="Bank Verification Number (BVN)" 
                  placeholder="e.g. 222XXXXXXXX" 
                  value={formData.bvn}
                  onChange={(e) => setFormData({...formData, bvn: e.target.value})}
                  maxLength={11}
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">NIN Verification</h2>
                <p className="text-slate-500 mb-6">Enter your National Identity Number.</p>
                <Input 
                  label="National Identity Number (NIN)" 
                  placeholder="e.g. 12345678901" 
                  value={formData.nin}
                  onChange={(e) => setFormData({...formData, nin: e.target.value})}
                  maxLength={11}
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Proof of Address</h2>
                <p className="text-slate-500 mb-6">Upload a recent utility bill (not older than 3 months).</p>
                <FileUpload 
                  label="Utility Bill" 
                  onFileSelect={(file) => setFormData({...formData, utilityBill: file})} 
                />
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Facial Verification</h2>
                <p className="text-slate-500 mb-8">Please position your face within the frame.</p>
                
                <div className="relative w-64 h-64 mx-auto rounded-full border-4 border-dashed border-slate-300 bg-slate-100 overflow-hidden flex items-center justify-center mb-8">
                  {isFaceVerified ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col items-center text-green-500">
                      <CheckCircle className="w-16 h-16 mb-2" />
                      <span className="font-semibold">Verified!</span>
                    </motion.div>
                  ) : (
                    <div className="text-slate-400 flex flex-col items-center">
                       <Camera className="w-12 h-12 mb-2" />
                       <Button size="sm" onClick={simulateFaceVerification}>Simulate Camera Scan</Button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between">
          <Button variant="ghost" onClick={prevStep} disabled={step === 1}>Back</Button>
          <Button onClick={nextStep} disabled={
             (step === 1 && formData.bvn.length < 11) ||
             (step === 2 && formData.nin.length < 11) ||
             (step === 3 && !formData.utilityBill) ||
             (step === 4 && !isFaceVerified)
          }>
            {step === totalSteps ? "Finish & Go to Dashboard" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};
