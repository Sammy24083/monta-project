import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { ArrowUpRight, ArrowDownRight, Wallet, Info, Search, Filter, MoreHorizontal, Globe, ShieldAlert, FileText } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Dashboard = () => {
  const [showKycBanner, setShowKycBanner] = useState(true);

  // Recharts Dummy Data (Naira only)
  const chartData = [
    { name: 'Mon', amount: 120000 },
    { name: 'Tue', amount: 210000 },
    { name: 'Wed', amount: 180000 },
    { name: 'Thu', amount: 340000 },
    { name: 'Fri', amount: 290000 },
    { name: 'Sat', amount: 140000 },
    { name: 'Sun', amount: 95000 },
  ];

  const transactions = [
    { id: "TRX-109283", ref: "Payment from Lenco HQ", type: "credit", amount: "₦450,000.00", date: "Oct 24, 10:24 AM", status: "Successful" },
    { id: "TRX-109282", ref: "AWS Billing", type: "debit", amount: "₦24,500.00", date: "Oct 23, 08:15 PM", status: "Successful" },
    { id: "TRX-109281", ref: "Ref: SALARY/JD/OCT", type: "debit", amount: "₦150,000.00", date: "Oct 22, 09:00 AM", status: "Pending" },
    { id: "TRX-109280", ref: "Transfer from StartupX", type: "credit", amount: "₦1,200,500.00", date: "Oct 20, 02:40 PM", status: "Successful" },
    { id: "TRX-109279", ref: "Reversal: Failed TRX", type: "credit", amount: "₦15,000.00", date: "Oct 19, 11:15 AM", status: "Successful" },
  ];

  return (
    <DashboardLayout accountName="Monta Business Inc">
      <div className="max-w-5xl mx-auto space-y-5">
        
        {/* Compliance Banner */}
        {showKycBanner && (
          <div className="bg-white border-l-4 border-amber-500 rounded-r-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-50 p-1.5 rounded-full shrink-0">
                <ShieldAlert className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-slate-800 tracking-tight">Profile Implementation: 80%</h4>
                <p className="text-[12px] text-slate-500 mt-0.5">Please upload your directorship identification to lift the ₦2M daily limit.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 shrink-0 ml-auto sm:ml-0">
              <button onClick={() => setShowKycBanner(false)} className="text-[12px] font-bold text-slate-400 hover:text-slate-600 transition-colors px-2">Skip</button>
              <button className="text-[12px] font-bold bg-slate-900 text-white hover:bg-slate-800 px-4 py-1.5 rounded-full transition-all shadow-lg active:scale-95">Verify Now</button>
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
                   <span className="text-[10px] font-bold text-white tracking-wide">+12.5% THIS MONTH</span>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex space-x-8">
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account No.</p>
                     <p className="text-sm font-mono tracking-wider font-bold">0123456789</p>
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Bank Name</p>
                     <p className="text-sm font-bold tracking-tight">Monta Microfinance</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
             <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
               <div className="w-10 h-10 rounded-full bg-blue-50 text-monta-blue flex items-center justify-center mb-3 group-hover:bg-monta-blue group-hover:text-white transition-colors">
                 <ArrowUpRight className="w-5 h-5" />
               </div>
               <span className="text-[13px] font-bold text-slate-700">Send Money</span>
             </button>
             <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
               <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-3 group-hover:bg-green-600 group-hover:text-white transition-colors">
                 <ArrowDownRight className="w-5 h-5" />
               </div>
               <span className="text-[13px] font-bold text-slate-700">Add Money</span>
             </button>
             <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
               <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center mb-3 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                 <CreditCard className="w-5 h-5" />
               </div>
               <span className="text-[13px] font-bold text-slate-700">Cards</span>
             </button>
             <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
               <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center mb-3 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                 <FileText className="w-5 h-5" />
               </div>
               <span className="text-[13px] font-bold text-slate-700">Invoice</span>
             </button>
          </div>
        </div>

        {/* Main Grid: Chart & Transactions */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
           
           {/* Chart */}
           <div className="xl:col-span-12 bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 overflow-hidden relative">
              <div className="flex justify-between items-center mb-8">
                 <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Transaction Insights</h3>
                    <p className="text-[12px] text-slate-500 mt-1">Cash movements in the last 7 days</p>
                 </div>
                 <select className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-full px-4 py-1.5 focus:outline-none transition-colors">
                    <option>Weekly View</option>
                    <option>Monthly View</option>
                 </select>
              </div>
              
              <div className="h-64 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0052FF" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#0052FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="#F1F5F9" strokeDasharray="3 3" />
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
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', background: '#111827', color: 'white'}}
                      itemStyle={{color: '#60A5FA', fontSize: '11px', fontWeight: 800}}
                    />
                    <Area type="monotone" dataKey="amount" stroke="#0052FF" strokeWidth={3} fillOpacity={1} fill="url(#colorAmt)" animationDuration={1500} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
           </div>

           {/* Transactions Table */}
           <div className="xl:col-span-12 bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col">
              <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/30">
                 <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Recent Activity</h3>
                 <div className="flex items-center space-x-2">
                    <div className="relative">
                       <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                       <input type="text" placeholder="Search Activity..." className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all w-full sm:w-48" />
                    </div>
                    <button className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm bg-white">
                       <Filter className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                 </div>
              </div>

              <div className="overflow-x-auto overflow-y-hidden">
                 <table className="w-full text-left text-[13px]">
                   <thead className="bg-slate-50/50 text-slate-500 font-bold border-b border-slate-100">
                     <tr>
                       <th className="px-6 py-4 uppercase tracking-[0.1em] text-[10px]">Reference</th>
                       <th className="px-6 py-4 uppercase tracking-[0.1em] text-[10px]">Description</th>
                       <th className="px-6 py-4 text-right uppercase tracking-[0.1em] text-[10px]">Value</th>
                       <th className="px-6 py-4 uppercase tracking-[0.1em] text-[10px]">Date</th>
                       <th className="px-6 py-4 uppercase tracking-[0.1em] text-[10px]">Status</th>
                       <th className="px-6 py-4"></th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-50">
                     {transactions.map((tx, idx) => (
                       <tr key={idx} className="hover:bg-slate-50/50 transition-all duration-200 group">
                         <td className="px-6 py-4">
                            <span className="font-mono text-[11px] text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md font-bold">{tx.id}</span>
                         </td>
                         <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 ${tx.type === 'credit' ? 'bg-green-50 border-green-100 text-green-600' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
                                {tx.type === 'credit' ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                              </div>
                              <span className="font-bold text-slate-800">{tx.ref}</span>
                            </div>
                         </td>
                         <td className={`px-6 py-4 font-black text-right ${tx.type === 'credit' ? 'text-green-600' : 'text-slate-900'}`}>
                           {tx.type === 'credit' ? '+' : '-'}{tx.amount}
                         </td>
                         <td className="px-6 py-4 text-slate-500 font-medium">{tx.date}</td>
                         <td className="px-6 py-4">
                            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${tx.status === 'Successful' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500 animate-pulse'}`}>
                              <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${tx.status === 'Successful' ? 'bg-green-500' : 'bg-slate-400'}`}></div>
                              {tx.status}
                            </div>
                         </td>
                         <td className="px-6 py-4 text-right">
                            <button className="text-slate-300 hover:text-slate-900 transition-colors p-1.5 rounded-md hover:bg-white group-hover:shadow-sm border border-transparent">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
              </div>
              
              <div className="p-4 border-t border-slate-100 bg-slate-50/30 text-center">
                 <button className="text-xs font-bold text-monta-blue hover:text-blue-700 transition-all hover:tracking-wider">VIEW EXTENDED STATEMENT</button>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
};
