import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { TransactionList } from '../../components/transactions/TransactionList';
import { TRANSACTIONS } from '../../data/mockData';
import { ArrowDownRight, ArrowUpRight, Filter, Download } from 'lucide-react';

export const Transactions = () => {
  // Simple summary logic for the header
  const totalCredit = TRANSACTIONS
    .filter(t => t.type === 'credit')
    .reduce((acc, t) => acc + parseFloat(t.amount.replace('₦', '').replace(/,/g, '')), 0);
    
  const totalDebit = TRANSACTIONS
    .filter(t => t.type === 'debit')
    .reduce((acc, t) => acc + parseFloat(t.amount.replace('₦', '').replace(/,/g, '')), 0);

  return (
    <DashboardLayout accountName="Monta Business Inc">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold monta-text-primary tracking-tight">Financial Records</h1>
            <p className="text-[13px] monta-text-secondary mt-1 font-medium">Manage and export your business transaction history.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-[12px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm active:scale-95">
               <Filter className="w-3.5 h-3.5 mr-2" /> Filter
            </button>
            <button className="flex items-center px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-[12px] font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg shadow-black/5 active:scale-95">
               <Download className="w-3.5 h-3.5 mr-2" /> Export CSV
            </button>
          </div>
        </div>

        {/* Financial Summary Snippets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
           <div className="monta-card p-5">
              <p className="text-[10px] font-bold monta-text-secondary uppercase tracking-[0.2em] mb-3">Total Inflow (Oct)</p>
              <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center">
                    <ArrowDownRight className="w-5 h-5" />
                 </div>
                 <span className="text-xl font-bold monta-text-primary tracking-tight">₦{totalCredit.toLocaleString()}.00</span>
              </div>
           </div>
           
           <div className="monta-card p-5">
              <p className="text-[10px] font-bold monta-text-secondary uppercase tracking-[0.2em] mb-3">Total Outflow (Oct)</p>
              <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5" />
                 </div>
                 <span className="text-xl font-bold monta-text-primary tracking-tight">₦{totalDebit.toLocaleString()}.00</span>
              </div>
           </div>

           <div className="hidden lg:block bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 p-5 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-2xl"></div>
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-3">Net Balance (Oct)</p>
              <span className="text-xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">₦{(totalCredit - totalDebit).toLocaleString()}.00</span>
           </div>
        </div>

        {/* Transactions Section */}
        <div className="pt-2">
           <TransactionList transactions={TRANSACTIONS} />
        </div>
      </div>
    </DashboardLayout>
  );
};
