import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCircle2, AlertCircle, Info, ArrowRight, Wallet, ShieldCheck, X } from 'lucide-react';
import { cn } from '../../utils/utils';

export const NotificationPanel = ({ isOpen, onClose, notifications, onMarkAsRead, onClearAll }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="absolute right-0 top-full mt-3 w-[380px] z-50">
        {/* Backdrop for mobile (invisible on desktop) */}
        <div className="fixed inset-0 lg:hidden" onClick={onClose} />
        
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200/60 overflow-hidden flex flex-col max-h-[500px]"
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
            <div className="flex items-center space-x-2">
              <h3 className="text-[15px] font-bold text-slate-900 tracking-tight">Notifications</h3>
              <span className="bg-monta-blue text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                {notifications.filter(n => !n.read).length}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={onClearAll}
                className="text-[11px] font-bold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-widest"
              >
                Clear All
              </button>
              <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-full text-slate-400 sm:hidden">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {notifications.length > 0 ? (
              <div className="divide-y divide-slate-50">
                {notifications.map((notif) => (
                  <div 
                    key={notif.id} 
                    className={cn(
                      "p-5 hover:bg-slate-50 transition-all cursor-pointer group relative",
                      !notif.read && "bg-blue-50/20"
                    )}
                    onClick={() => onMarkAsRead(notif.id)}
                  >
                    {!notif.read && (
                      <div className="absolute top-6 left-2 w-1.5 h-1.5 bg-monta-blue rounded-full"></div>
                    )}
                    <div className="flex space-x-4">
                      <div className={cn(
                        "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm",
                        notif.type === 'credit' ? "bg-green-50 text-green-600" :
                        notif.type === 'security' ? "bg-amber-50 text-amber-600" :
                        "bg-blue-50 text-blue-600"
                      )}>
                        {notif.type === 'credit' ? <Wallet className="w-5 h-5" /> :
                         notif.type === 'security' ? <ShieldCheck className="w-5 h-5" /> :
                         <Info className="w-5 h-5" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-0.5">
                          <p className="text-[13px] font-bold text-slate-900 leading-snug pr-4">{notif.title}</p>
                          <span className="text-[10px] text-slate-400 font-bold whitespace-nowrap">{notif.time}</span>
                        </div>
                        <p className="text-[12px] text-slate-500 line-clamp-2 leading-relaxed font-medium">
                          {notif.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-100/50">
                  <Bell className="w-8 h-8 text-slate-200" />
                </div>
                <p className="text-[14px] font-bold text-slate-900">All caught up!</p>
                <p className="text-[12px] text-slate-400 mt-1 font-medium">No new notifications at the moment.</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <button className="p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-center border-t border-slate-100 group">
            <span className="text-[12px] font-bold text-slate-600 group-hover:text-monta-blue transition-colors flex items-center justify-center">
              View All Notifications <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
