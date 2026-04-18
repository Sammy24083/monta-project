import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useTheme } from '../../context/ThemeContext';
import { User, Shield, Moon, Sun, Bell, ChevronRight, Mail, Phone, Camera, Lock, Eye, CheckCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { cn } from '../../utils/utils';

export const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'appearance', name: 'Appearance', icon: Moon },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
  ];

  return (
    <DashboardLayout accountName="Monta Business Inc">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Account Settings</h1>
            <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Manage your personal information and preferences.</p>
          </div>
          {isSaved && (
            <motion.div 
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex items-center space-x-2 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-2 rounded-xl border border-green-100 dark:border-green-500/20 shadow-sm"
            >
               <CheckCircle className="w-4 h-4" />
               <span className="text-[12px] font-bold">Changes saved successfully</span>
            </motion.div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
           {/* Sidebar Tabs */}
           <div className="lg:w-64 shrink-0 flex flex-col space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-2xl text-[14px] font-bold transition-all group",
                    activeTab === tab.id 
                      ? "bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900" 
                      : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  )}
                >
                  <tab.icon className={cn("w-4 h-4", activeTab === tab.id ? "text-white dark:text-slate-900" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200")} />
                  <span>{tab.name}</span>
                </button>
              ))}
           </div>

           {/* Content Area */}
           <div className="flex-1 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200/60 dark:border-slate-800 shadow-premium p-8 lg:p-10">
              {activeTab === 'profile' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
                   <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                      <div className="relative group">
                         <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 overflow-hidden">
                            <User className="w-10 h-10 text-slate-300" />
                         </div>
                         <button className="absolute bottom-0 right-0 p-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-lg hover:scale-110 transition-transform">
                            <Camera className="w-4 h-4" />
                         </button>
                      </div>
                      <div className="text-center sm:text-left">
                         <h3 className="text-lg font-bold text-slate-900 dark:text-white">Profile Photo</h3>
                         <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-1">Recommended 400x400 JPG or PNG.</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Full Name" placeholder="Samuel Ademola" defaultValue="SAMUEL ADEMOLA J." />
                      <Input label="Display Name" placeholder="Samuel J." defaultValue="Monta Business Inc" />
                      <Input label="Email Address" placeholder="samuel@monta.com" icon={Mail} defaultValue="samuel.ademola@gmail.com" />
                      <Input label="Phone Number" placeholder="+234 810 ..." icon={Phone} defaultValue="+234 812 345 6789" />
                   </div>
                   
                   <div className="pt-4 border-t border-slate-50 dark:border-slate-800 flex justify-end">
                      <Button className="px-10 font-bold" onClick={handleSave}>Save Changes</Button>
                   </div>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
                   <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Theme Preference</h3>
                      <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1">Customize your Monta experience with Light or Dark mode.</p>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button 
                         onClick={() => setTheme('light')}
                         className={cn(
                           "p-6 rounded-2xl border-2 text-left transition-all group relative overflow-hidden",
                           theme === 'light' ? "border-monta-blue bg-blue-50/20 dark:bg-blue-500/5" : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-white dark:bg-slate-900"
                         )}
                      >
                         {theme === 'light' && (
                           <div className="absolute top-3 right-3 w-5 h-5 bg-monta-blue text-white rounded-full flex items-center justify-center shadow-lg">
                              <Check className="w-3 h-3" />
                           </div>
                         )}
                         <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
                            <Sun className="w-5 h-5" />
                         </div>
                         <p className="text-[14px] font-bold monta-text-primary">Light Mode</p>
                         <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Clear and bright for day use.</p>
                      </button>

                      <button 
                         onClick={() => setTheme('dark')}
                         className={cn(
                           "p-6 rounded-2xl border-2 text-left transition-all group relative overflow-hidden",
                           theme === 'dark' ? "border-monta-blue bg-blue-50/20 dark:bg-blue-500/5" : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-white dark:bg-slate-900"
                         )}
                      >
                         {theme === 'dark' && (
                           <div className="absolute top-3 right-3 w-5 h-5 bg-monta-blue text-white rounded-full flex items-center justify-center shadow-lg">
                              <Check className="w-3 h-3" />
                           </div>
                         )}
                         <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-800 text-blue-400 flex items-center justify-center mb-4">
                            <Moon className="w-5 h-5" />
                         </div>
                         <p className="text-[14px] font-bold monta-text-primary">Dark Mode</p>
                         <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Elegant and easier on the eyes.</p>
                      </button>
                   </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
                   <div className="flex items-center space-x-4 p-4 bg-amber-50 dark:bg-amber-500/5 rounded-2xl border border-amber-100 dark:border-amber-500/20">
                      <Shield className="w-6 h-6 text-amber-500" />
                      <div>
                         <p className="text-sm font-bold text-amber-900 dark:text-amber-400">Security Recommendation</p>
                         <p className="text-[12px] text-amber-600 font-medium">Enable 2FA to strengthen your account security against unauthorized access.</p>
                      </div>
                   </div>

                   <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                         <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 flex items-center justify-center">
                               <Lock className="w-5 h-5" />
                            </div>
                            <div>
                               <p className="text-[14px] font-bold text-slate-900 dark:text-white">Change Password</p>
                               <p className="text-[12px] text-slate-500 dark:text-slate-400">Updated 3 months ago</p>
                            </div>
                         </div>
                         <button className="text-[11px] font-black tracking-widest text-monta-blue uppercase hover:underline">Update</button>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                         <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 flex items-center justify-center">
                               <Shield className="w-5 h-5" />
                            </div>
                            <div>
                               <p className="text-[14px] font-bold text-slate-900 dark:text-white">Two-Factor Auth</p>
                               <p className="text-[12px] text-slate-500 dark:text-slate-400">Currently Disabled</p>
                            </div>
                         </div>
                         <div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full relative cursor-pointer">
                            <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                         </div>
                      </div>
                   </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                 <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                    {[
                      { title: 'Inflow Alerts', desc: 'Receive a notification for every incoming payment.' },
                      { title: 'Outflow Alerts', desc: 'Alert me when funds are moved from my account.' },
                      { title: 'Security Alerts', desc: 'Important alerts about account logins and changes.' },
                      { title: 'Marketing', desc: 'Get updates on new Monta features and rewards.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2">
                         <div className="max-w-[80%]">
                            <p className="text-[14px] font-bold text-slate-900 dark:text-white">{item.title}</p>
                            <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                         </div>
                         <div className={cn(
                           "w-10 h-5 rounded-full relative cursor-pointer transition-colors",
                           idx < 3 ? "bg-monta-blue" : "bg-slate-200 dark:bg-slate-700"
                         )}>
                            <div className={cn("absolute top-1 w-3 h-3 bg-white rounded-full transition-all", idx < 3 ? "right-1" : "left-1")}></div>
                         </div>
                      </div>
                    ))}
                 </div>
              )}
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
