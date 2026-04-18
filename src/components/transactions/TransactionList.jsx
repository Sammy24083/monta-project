import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { TransactionItem } from './TransactionItem';

export const TransactionList = ({ transactions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTransactions = transactions.filter(tx => 
    tx.ref.toLowerCase().includes(searchTerm.toLowerCase()) || 
    tx.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="monta-card overflow-hidden flex flex-col">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/30 dark:bg-slate-900/50 font-inter">
        <h3 className="text-sm font-bold monta-text-primary uppercase tracking-widest">Recent Activity</h3>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search Activity..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs focus:outline-none focus:ring-4 focus:ring-slate-900/5 dark:focus:ring-white/5 transition-all w-full sm:w-48 placeholder:text-slate-400 font-medium monta-text-primary" 
            />
          </div>
          <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm bg-white dark:bg-slate-900 active:scale-95">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-hidden custom-scrollbar">
        <table className="w-full text-left text-[13px]">
          <thead className="bg-slate-50/50 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
            <tr>
              <th className="px-6 py-4 uppercase tracking-[0.1em] text-[10px]">Reference</th>
              <th className="px-6 py-4 uppercase tracking-[0.1em] text-[10px]">Description</th>
              <th className="px-6 py-4 text-right uppercase tracking-[0.1em] text-[10px]">Value</th>
              <th className="px-6 py-4 uppercase tracking-[0.1em] text-[10px] hidden sm:table-cell">Date</th>
              <th className="px-6 py-4 uppercase tracking-[0.1em] text-[10px]">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx) => (
                <TransactionItem key={tx.id} tx={tx} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-3">
                      <Search className="w-6 h-6 text-slate-300 dark:text-slate-700" />
                    </div>
                    <p className="monta-text-primary font-bold text-sm">No transactions found</p>
                    <p className="monta-text-secondary text-[12px] mt-1 font-medium">Try adjusting your search criteria</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/50 text-center">
        <button className="text-[11px] font-bold text-monta-blue hover:text-blue-700 dark:hover:text-blue-400 transition-all hover:tracking-wider uppercase tracking-widest">
          View Extended Statement
        </button>
      </div>
    </div>
  );
};
