import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { TransactionList } from '../../components/transactions/TransactionList';
import { SendMoneyModal } from '../../components/transactions/SendMoneyModal';
import { AddMoneyModal } from '../../components/transactions/AddMoneyModal';
import { TRANSACTIONS, CHART_DATA } from '../../data/mockData';
import { ArrowUpRight, ArrowDownRight, CreditCard, FileText, Search, Filter, ShieldAlert } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Dashboard = () => {
  const [showKycBanner, setShowKycBanner] = useState(true);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isAddMoneyModalOpen, setIsAddMoneyModalOpen] = useState(false);

  return (
    <DashboardLayout accountName="Monta Business Inc">
      <div className="max-w-5xl mx-auto space-y-5 px-1 sm:px-0">
        
        {/* Compliance Banner */}
        {showKycBanner && (
          <div className="bg-white dark:bg-slate-900 border-l-4 border-amber-500 rounded-r-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm dark:border-amber-500/50">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-50 dark:bg-amber-500/10 p-1.5 rounded-full shrink-0">
                <ShieldAlert className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-slate-800 dark:text-white tracking-tight">Profile Implementation: 80%</h4>
                <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Please upload your directorship identification to lift the ₦2M daily limit.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 shrink-0 ml-auto sm:ml-0">
              <button onClick={() => setShowKycBanner(false)} className="text-[12px] font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors px-2">Skip</button>
              <button className="text-[12px] font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-4 py-1.5 rounded-full transition-all shadow-lg active:scale-95">Verify Now</button>
            </div>
          </div>
        )}

        {/* Hero Balance & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          <div className="lg:col-span-8 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center space-x-2 text-slate-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Total Available Balance</span>
                </div>
                <div className="flex items-baseline space-x-2">
                   <span className="text-3xl sm:text-5xl font-extrabold tracking-tighter">₦2,450,105<span className="text-slate-400 text-xl font-medium sm:text-2xl">.00</span></span>
                </div>
                <div className="mt-4 inline-flex items-center px-2 py-0.5 bg-white/10 rounded-full border border-white/5 backdrop-blur-sm">
                   <ArrowUpRight className="w-3 h-3 text-green-400 mr-1" />
                   <span className="text-[10px] font-bold text-white tracking-wide uppercase tracking-widest">+12.5% THIS MONTH</span>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex space-x-8 text-inter">
                   <div>
                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Account No.</p>
                     <p className="text-sm font-bold tracking-wider">0123456789</p>
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank Name</p>
                     <p className="text-sm font-bold tracking-tight">Monta Microfinance</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
             <button 
               onClick={() => setIsSendModalOpen(true)}
               className="flex flex-col items-center justify-center p-4 rounded-2xl monta-card hover:shadow-xl hover:-translate-y-1 transition-all group active:scale-95"
             >
               <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-monta-blue flex items-center justify-center mb-3 group-hover:bg-monta-blue group-hover:text-white transition-all shadow-blue-500/5 group-hover:shadow-blue-500/20">
                 <ArrowUpRight className="w-6 h-6" />
               </div>
               <span className="text-[13px] font-bold monta-text-primary">Send Money</span>
             </button>
             <button 
               onClick={() => setIsAddMoneyModalOpen(true)}
               className="flex flex-col items-center justify-center p-4 rounded-2xl monta-card hover:shadow-xl hover:-translate-y-1 transition-all group active:scale-95"
             >
               <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-500/10 text-green-600 flex items-center justify-center mb-3 group-hover:bg-green-600 group-hover:text-white transition-all shadow-green-500/5 group-hover:shadow-green-500/20">
                 <ArrowDownRight className="w-6 h-6" />
               </div>
               <span className="text-[13px] font-bold monta-text-primary">Add Money</span>
             </button>
             <button className="flex flex-col items-center justify-center p-4 rounded-2xl monta-card hover:shadow-xl hover:-translate-y-1 transition-all group active:scale-95">
               <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 flex items-center justify-center mb-3 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-all group-hover:shadow-slate-500/20">
                 <CreditCard className="w-6 h-6" />
               </div>
               <span className="text-[13px] font-bold monta-text-primary">Cards</span>
             </button>
             <button className="flex flex-col items-center justify-center p-4 rounded-2xl monta-card hover:shadow-xl hover:-translate-y-1 transition-all group active:scale-95">
               <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 flex items-center justify-center mb-3 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-all group-hover:shadow-slate-500/20">
                 <FileText className="w-6 h-6" />
               </div>
               <span className="text-[13px] font-bold monta-text-primary">Invoice</span>
             </button>
          </div>
        </div>

        {/* Main Grid: Chart & Transactions */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
           
           {/* Chart */}
           <div className="xl:col-span-12 monta-card p-6 overflow-hidden relative">
              <div className="flex justify-between items-center mb-8">
                 <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Transaction Insights</h3>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Cash movements in the last 7 days</p>
                 </div>
                 <select className="bg-slate-100 dark:bg-slate-800 border-none text-slate-700 dark:text-slate-300 text-[11px] font-bold rounded-full px-4 py-1.5 focus:outline-none transition-all hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer">
                    <option>Weekly View</option>
                    <option>Monthly View</option>
                 </select>
              </div>
              
              <div className="h-64 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={CHART_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0052FF" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#0052FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="#F8FAFC" strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 700}} 
                      dy={10} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 700}} 
                      tickFormatter={(value) => `₦${value/1000}k`} 
                    />
                    <Tooltip 
                      formatter={(value) => [`₦${value.toLocaleString()}`, "Transaction Amount"]}
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.15)', background: '#111827', color: 'white'}}
                      itemStyle={{color: '#60A5FA', fontSize: '12px', fontWeight: 800, padding: 0}}
                    />
                    <Area type="monotone" dataKey="amount" stroke="#0052FF" strokeWidth={3} fillOpacity={1} fill="url(#colorAmt)" animationDuration={1500} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
           </div>

           {/* Transactions List */}
           <div className="xl:col-span-12">
             <TransactionList transactions={TRANSACTIONS} />
           </div>
        </div>

        {/* Modal */}
        <SendMoneyModal 
          isOpen={isSendModalOpen} 
          onClose={() => setIsSendModalOpen(false)} 
        />
        <AddMoneyModal
          isOpen={isAddMoneyModalOpen}
          onClose={() => setIsAddMoneyModalOpen(false)}
        />
      </div>
    </DashboardLayout>
  );
};
