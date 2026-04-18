import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { FileUpload } from '../../components/ui/FileUpload';
import { SignaturePad } from '../../components/ui/SignaturePad';
import { Camera, CheckCircle, Plus, Trash2 } from 'lucide-react';

export const CorporateWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    cacNumber: '',
    tin: '',
    proprietorType: 'sole',
    proprietors: [{ id: 1, name: '', email: '', bvn: '' }]
  });
  const [isFaceVerified, setIsFaceVerified] = useState(false);
  const sigPadRef = useRef(null);
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

  const addProprietor = () => {
    setFormData({
      ...formData,
      proprietors: [...formData.proprietors, { id: Date.now(), name: '', email: '', bvn: '' }]
    });
  };

  const removeProprietor = (id) => {
    if (formData.proprietors.length > 1) {
      setFormData({
        ...formData,
        proprietors: formData.proprietors.filter(p => p.id !== id)
      });
    }
  };

  const updateProprietor = (id, field, value) => {
    setFormData({
      ...formData,
      proprietors: formData.proprietors.map(p => p.id === id ? { ...p, [field]: value } : p)
    });
  };

  const simulateFaceVerification = () => {
    setTimeout(() => setIsFaceVerified(true), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-xl mb-10">
         <ProgressBar currentStep={step} totalSteps={totalSteps} />
         <div className="flex justify-between mt-3 px-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enterprise Onboarding</span>
            <span className="text-[10px] font-bold text-monta-blue uppercase tracking-widest">Stage {step} of {totalSteps}</span>
         </div>
      </div>

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-premium border border-slate-200/60 overflow-hidden">
        <div className="p-8 pb-10">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="mb-8 text-center sm:text-left">
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Business Registration</h2>
                  <p className="text-[13px] text-slate-500 mt-1 font-medium">Verify your legal entity credentials.</p>
                </div>
                <div className="space-y-4">
                  <Input 
                    label="CAC Registration Number" 
                    placeholder="e.g. RC123456" 
                    value={formData.cacNumber}
                    onChange={(e) => setFormData({...formData, cacNumber: e.target.value})}
                  />
                  <Input 
                    label="Tax Identification Number (TIN)" 
                    placeholder="Enter 12-digit TIN" 
                    value={formData.tin}
                    onChange={(e) => setFormData({...formData, tin: e.target.value})}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <FileUpload label="CAC Certificate" />
                    <FileUpload label="Status Report" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="mb-8 text-center sm:text-left">
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Governance & Control</h2>
                  <p className="text-[13px] text-slate-500 mt-1 font-medium">Identify the beneficial owners and directors.</p>
                </div>
                
                <Select 
                  label="Entity Legal Structure" 
                  value={formData.proprietorType}
                  onChange={(e) => setFormData({...formData, proprietorType: e.target.value})}
                  options={[
                    { value: 'sole', label: 'Sole Proprietorship' },
                    { value: 'partnership', label: 'Private Limited Company (LTD)' }
                  ]}
                  className="mb-6"
                />

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {formData.proprietors.map((p, index) => (
                    <div key={p.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 relative group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Principal Officer {index + 1}</span>
                        {formData.proprietors.length > 1 && (
                          <button 
                            onClick={() => removeProprietor(p.id)}
                            className="text-red-400 hover:text-red-600 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input 
                          label="Full Legal Name" 
                          placeholder="As seen on ID"
                          value={p.name}
                          onChange={(e) => updateProprietor(p.id, 'name', e.target.value)}
                        />
                        <Input 
                          label="Corporate Email" 
                          type="email"
                          placeholder="sam@company.com"
                          value={p.email}
                          onChange={(e) => updateProprietor(p.id, 'email', e.target.value)}
                        />
                        <div className="sm:col-span-2">
                          <Input 
                            label="Personal BVN" 
                            placeholder="11-digit verification number"
                            value={p.bvn}
                            onChange={(e) => updateProprietor(p.id, 'bvn', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {formData.proprietorType === 'partnership' && (
                  <button onClick={addProprietor} className="w-full mt-4 flex items-center justify-center p-2.5 border border-dashed border-slate-300 rounded-xl text-slate-400 text-[12px] font-bold hover:border-monta-blue hover:text-monta-blue transition-all group">
                    <Plus className="w-3.5 h-3.5 mr-2" /> Add Additional Director
                  </button>
                )}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="mb-8 text-center sm:text-left">
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Authorized Mandate</h2>
                  <p className="text-[13px] text-slate-500 mt-1 font-medium">Digital signature for account operations.</p>
                </div>
                
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-1 shadow-inner">
                  <SignaturePad ref={sigPadRef} />
                </div>
                <p className="text-[11px] text-slate-400 mt-4 text-center">By signing, you agree to our <span className="font-bold text-slate-600">Corporate Terms of Service</span>.</p>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Security Protocol</h2>
                  <p className="text-[13px] text-slate-500 mt-1 font-medium">Final biometric check for the lead director.</p>
                </div>
                
                <div className="relative w-56 h-56 mx-auto rounded-full border-4 border-slate-100 bg-slate-50/50 shadow-inner flex items-center justify-center mb-8 overflow-hidden group">
                  {isFaceVerified ? (
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                         <CheckCircle className="w-10 h-10" />
                      </div>
                      <span className="text-[13px] font-bold text-green-600 mt-4">Identity Confirmed</span>
                    </motion.div>
                  ) : (
                    <div className="text-slate-400 flex flex-col items-center">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100">
                          <Camera className="w-7 h-7 text-slate-300" />
                       </div>
                       <Button size="sm" variant="outline" className="text-[11px] font-bold" onClick={simulateFaceVerification}>Simulate Biometrics</Button>
                    </div>
                  )}
                  {!isFaceVerified && (
                     <div className="absolute top-0 left-0 w-full h-1 bg-monta-blue animate-scan opacity-40"></div>
                  )}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
        
        <div className="p-5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
          <Button variant="ghost" size="sm" className="font-bold text-slate-400" onClick={prevStep} disabled={step === 1}>Previous</Button>
          <Button size="sm" className="font-bold px-8 shadow-blue-500/10" onClick={nextStep} disabled={
            (step === 4 && !isFaceVerified)
          }>
            {step === totalSteps ? "Establish Enterprise Account" : "Save & Continue"}
          </Button>
        </div>
    </div>
    </div>
  );
};
