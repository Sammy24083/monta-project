import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { ArrowUpRight, ArrowDownRight, Wallet, Info, Search, Filter, MoreHorizontal, Globe, ShieldAlert, FileText } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Dashboard = () => {
  const [showKycBanner, setShowKycBanner] = useState(true);

  // Recharts Dummy Data
  const chartData = [
    { name: 'Mon', in: 120000, out: 45000 },
    { name: 'Tue', in: 210000, out: 80000 },
    { name: 'Wed', in: 180000, out: 120000 },
    { name: 'Thu', in: 340000, out: 210000 },
    { name: 'Fri', in: 290000, out: 140000 },
    { name: 'Sat', in: 140000, out: 55000 },
    { name: 'Sun', in: 95000, out: 30000 },
  ];

  const transactions = [
    { id: "TRX-109283", ref: "Payment from Lenco HQ", type: "credit", amount: "₦450,000.00", date: "Oct 24, 10:24 AM", status: "Successful" },
    { id: "TRX-109282", ref: "AWS Cloud Services", type: "debit", amount: "₦24,500.00", date: "Oct 23, 08:15 PM", status: "Successful" },
    { id: "TRX-109281", ref: "Salary - John Doe", type: "debit", amount: "₦150,000.00", date: "Oct 22, 09:00 AM", status: "Pending" },
    { id: "TRX-109280", ref: "Invoice #0023 - StartupX", type: "credit", amount: "₦1,200,500.00", date: "Oct 20, 02:40 PM", status: "Successful" },
    { id: "TRX-109279", ref: "Failed transfer reversal", type: "credit", amount: "₦15,000.00", date: "Oct 19, 11:15 AM", status: "Successful" },
  ];

  return (
    <DashboardLayout accountName="Monta Business Inc">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Compliance Banner */}
        {showKycBanner && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <ShieldAlert className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-amber-900">Your profile is 80% complete</h4>
                <p className="text-sm text-amber-700 mt-0.5">Please upload your directorship identification to lift the ₦2M daily transaction limit.</p>
              </div>
            </div>
            <div className="flex space-x-3 shrink-0">
              <button onClick={() => setShowKycBanner(false)} className="px-3 py-1.5 text-sm font-medium text-amber-700 hover:bg-amber-100 rounded-lg transition-colors">Dismiss</button>
              <button className="px-3 py-1.5 text-sm font-medium bg-amber-500 text-white hover:bg-amber-600 rounded-lg shadow-sm transition-colors">Complete KYC</button>
            </div>
          </div>
        )}

        {/* Balances and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="p-6 md:p-8 flex-1 border-b md:border-b-0 md:border-r border-slate-100">
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-6 h-4 rounded-[2px] bg-green-600 shadow-sm relative overflow-hidden flex flex-col justify-between py-[2px] px-[1px]">
                  <span className="w-full h-1/3 bg-white"></span>
                  <span className="w-full h-1/3 bg-white"></span>
                </span>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">NGN Wallet</p>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-1">₦2,450,105.00</h2>
              <p className="text-sm text-green-600 font-medium flex items-center">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                +12.5% from last week
              </p>
            </div>
            
            <div className="p-6 md:p-8 flex-1 bg-slate-50 flex flex-col justify-center">
               <div className="flex items-center space-x-2 mb-2">
                <span className="w-6 h-4 rounded-[2px] bg-blue-900 shadow-sm relative overflow-hidden flex items-center justify-center">
                  <span className="text-[10px] text-white">★</span>
                </span>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">USD Wallet</p>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-1">$4,500.00</h2>
               <p className="text-sm text-slate-400 font-medium whitespace-nowrap">Receive USD globally.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-center">
             <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Quick Actions</h3>
             <div className="grid grid-cols-2 gap-3">
               <button className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-blue-50 text-monta-blue hover:bg-blue-100 transition-colors">
                 <ArrowUpRight className="w-6 h-6 mb-2" />
                 <span className="text-xs font-semibold">Send</span>
               </button>
               <button className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors">
                 <ArrowDownRight className="w-6 h-6 mb-2" />
                 <span className="text-xs font-semibold">Add Money</span>
               </button>
               <button className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors">
                 <Globe className="w-6 h-6 mb-2" />
                 <span className="text-xs font-semibold">FX Swap</span>
               </button>
               <button className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors">
                 <FileText className="w-6 h-6 mb-2" />
                 <span className="text-xs font-semibold">Invoice</span>
               </button>
             </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
           <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Cash Flow</h3>
                <p className="text-sm text-slate-500">Money in vs Money out over the last 7 days</p>
              </div>
              <select className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-monta-blue focus:border-monta-blue block px-3 py-2">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
           </div>
           
           <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} tickFormatter={(value) => `₦${value/1000}k`} />
                <CartesianGrid vertical={false} stroke="#E2E8F0" strokeDasharray="4 4" />
                <Tooltip 
                  formatter={(value) => `₦${value.toLocaleString()}`}
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="in" name="Money In" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorIn)" />
                <Area type="monotone" dataKey="out" name="Money Out" stroke="#EF4444" strokeWidth={3} fillOpacity={1} fill="url(#colorOut)" />
              </AreaChart>
            </ResponsiveContainer>
           </div>
        </div>

        {/* Transactions Data Grid */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h3 className="font-bold text-slate-900 text-lg">Recent Transactions</h3>
            <div className="flex space-x-2">
               <div className="relative">
                 <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                 <input type="text" placeholder="Search..." className="pl-9 pr-3 py-1.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-1 focus:ring-monta-blue w-full sm:w-48" />
               </div>
               <button className="px-3 py-1.5 border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-50 flex items-center bg-white shadow-sm">
                 <Filter className="w-4 h-4 mr-2 text-slate-400" /> Filter
               </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-4">Reference</th>
                  <th className="px-6 py-4">Counterparty / Concept</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((tx, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                       <span className="font-mono text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">{tx.id}</span>
                    </td>
                    <td className="px-6 py-4">
                       <div className="flex items-center space-x-3">
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600'}`}>
                           {tx.type === 'credit' ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                         </div>
                         <span className="font-medium text-slate-900">{tx.ref}</span>
                       </div>
                    </td>
                    <td className={`px-6 py-4 font-bold text-right ${tx.type === 'credit' ? 'text-green-600' : 'text-slate-900'}`}>
                      {tx.type === 'credit' ? '+' : '-'}{tx.amount}
                    </td>
                    <td className="px-6 py-4 text-slate-500">{tx.date}</td>
                    <td className="px-6 py-4">
                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tx.status === 'Successful' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                         {tx.status}
                       </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                       <button className="text-slate-400 hover:text-slate-600 p-1">
                         <MoreHorizontal className="w-5 h-5" />
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
            <button className="text-sm font-semibold text-monta-blue hover:text-blue-700">View all transactions</button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};
