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
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 sm:px-6">
      <div className="w-full max-w-2xl mb-8">
         <ProgressBar currentStep={step} totalSteps={totalSteps} />
      </div>

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Company Information</h2>
                <p className="text-slate-500 mb-6">Enter your registered business details.</p>
                <div className="space-y-5">
                  <Input 
                    label="CAC Registration Number" 
                    placeholder="e.g. RC123456" 
                    value={formData.cacNumber}
                    onChange={(e) => setFormData({...formData, cacNumber: e.target.value})}
                  />
                  <Input 
                    label="Tax Identification Number (TIN)" 
                    placeholder="Enter TIN" 
                    value={formData.tin}
                    onChange={(e) => setFormData({...formData, tin: e.target.value})}
                  />
                  <FileUpload label="Upload CAC Certificate" />
                  <FileUpload label="Upload Status Report / MemArt" />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Proprietor Details</h2>
                <p className="text-slate-500 mb-6">Add the principal officers of the business.</p>
                
                <Select 
                  label="Business Type" 
                  value={formData.proprietorType}
                  onChange={(e) => setFormData({...formData, proprietorType: e.target.value})}
                  options={[
                    { value: 'sole', label: 'Sole Proprietorship' },
                    { value: 'partnership', label: 'Partnership / LLC' }
                  ]}
                  className="mb-6"
                />

                <div className="space-y-6">
                  {formData.proprietors.map((p, index) => (
                    <div key={p.id} className="p-5 border border-slate-200 rounded-xl bg-slate-50 relative">
                      <h4 className="font-semibold text-slate-900 mb-4">Director {index + 1}</h4>
                      {formData.proprietors.length > 1 && (
                        <button 
                          onClick={() => removeProprietor(p.id)}
                          className="absolute top-4 right-4 text-red-500 hover:bg-red-50 p-1.5 rounded-md"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input 
                          label="Full Name" 
                          value={p.name}
                          onChange={(e) => updateProprietor(p.id, 'name', e.target.value)}
                        />
                        <Input 
                          label="Email Address" 
                          type="email"
                          value={p.email}
                          onChange={(e) => updateProprietor(p.id, 'email', e.target.value)}
                        />
                        <Input 
                          label="BVN" 
                          className="md:col-span-2"
                          value={p.bvn}
                          onChange={(e) => updateProprietor(p.id, 'bvn', e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {formData.proprietorType === 'partnership' && (
                  <Button variant="outline" className="w-full mt-4" onClick={addProprietor}>
                    <Plus className="w-4 h-4 mr-2" /> Add Another Director
                  </Button>
                )}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Authorized Signature</h2>
                <p className="text-slate-500 mb-6">Please provide an on-screen signature representing the business mandate.</p>
                
                <h4 className="text-sm font-medium text-slate-700 mb-2">Draw Signature Here:</h4>
                <SignaturePad ref={sigPadRef} />
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Final Verification</h2>
                <p className="text-slate-500 mb-8">Director facial verification against registered ID.</p>
                
                <div className="relative w-64 h-64 mx-auto rounded-full border-4 border-dashed border-slate-300 bg-slate-100 overflow-hidden flex items-center justify-center mb-8">
                  {isFaceVerified ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col items-center text-green-500">
                      <CheckCircle className="w-16 h-16 mb-2" />
                      <span className="font-semibold">Match Confirmed!</span>
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
            (step === 4 && !isFaceVerified)
          }>
            {step === totalSteps ? "Finish & Open Account" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};
