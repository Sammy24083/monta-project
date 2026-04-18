import React from 'react';
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../utils/utils';

export const TransactionItem = ({ tx }) => {
  const isCredit = tx.type === 'credit';
  
  return (
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-all duration-200 group">
      <td className="px-6 py-4">
        <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md font-bold">
          {tx.id}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 transition-transform group-hover:scale-110",
            isCredit ? "bg-green-50 dark:bg-green-500/10 border-green-100 dark:border-green-500/20 text-green-600 dark:text-green-400" : "bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400"
          )}>
            {isCredit ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
          </div>
          <div className="flex flex-col">
            <span className="font-bold monta-text-primary">{tx.ref}</span>
            <span className="text-[10px] monta-text-secondary font-medium sm:hidden">{tx.date}</span>
          </div>
        </div>
      </td>
      <td className={cn(
        "px-6 py-4 font-black text-right transition-colors",
        isCredit ? "text-green-600 dark:text-green-500" : "monta-text-primary"
      )}>
        {isCredit ? '+' : '-'}{tx.amount}
      </td>
      <td className="px-6 py-4 text-slate-500 font-medium hidden sm:table-cell">
        {tx.date}
      </td>
      <td className="px-6 py-4">
        <div className={cn(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold",
          tx.status === 'Successful' ? "bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 animate-pulse"
        )}>
          <div className={cn(
            "w-1.5 h-1.5 rounded-full mr-1.5",
            tx.status === 'Successful' ? "bg-green-500" : "bg-slate-400 dark:bg-slate-600"
          )}></div>
          {tx.status}
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="text-slate-300 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors p-1.5 rounded-md hover:bg-white dark:hover:bg-slate-800 group-hover:shadow-sm border border-transparent">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
};
