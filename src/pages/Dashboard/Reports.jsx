import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { CATEGORY_DATA, MONTHLY_TRENDS, TRANSACTIONS } from '../../data/mockData';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { TrendingUp, ArrowUpRight, ArrowDownRight, DollarSign, PieChart as PieIcon, Activity, Star, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/utils';

export const Reports = () => {
  const COLORS = CATEGORY_DATA.map(c => c.color);

  return (
    <DashboardLayout accountName="Monta Business Inc">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Page Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold monta-text-primary tracking-tight flex items-center">
               Financial Analytics <div className="ml-3 px-2 py-0.5 bg-blue-100 dark:bg-blue-500/20 text-monta-blue dark:text-blue-400 text-[10px] rounded-md font-black uppercase tracking-widest">Premium Insights</div>
            </h1>
            <p className="text-[13px] monta-text-secondary mt-1 font-medium">Deep dive into your business's capital efficiency and spending patterns.</p>
          </div>
          <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
             <button className="px-4 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-[11px] font-bold shadow-sm">Real-time</button>
             <button className="px-4 py-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg text-[11px] font-bold transition-all">Historical</button>
          </div>
        </div>

        {/* Financial Scorecard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {[
             { title: 'Net Cash Flow', value: '₦1,061,500', trend: '+14%', icon: TrendingUp, color: 'blue' },
             { title: 'Avg. Daily Outflow', value: '₦21,900', trend: '-5%', icon: Activity, color: 'amber' },
             { title: 'Top Category', value: 'Rent', trend: 'High', icon: Star, color: 'purple' },
             { title: 'Profit Margin', value: '61.4%', trend: '+8.2%', icon: BarChart, color: 'green' }
           ].map((card, idx) => (
             <div key={idx} className="monta-card p-5 relative overflow-hidden group hover:shadow-md transition-all">
                <div className={cn("absolute -right-3 -top-3 w-12 h-12 opacity-5 transition-transform group-hover:scale-125", `text-${card.color}-500`)}>
                   <card.icon className="w-full h-full" />
                </div>
                <p className="text-[10px] font-bold monta-text-secondary uppercase tracking-widest mb-1">{card.title}</p>
                <div className="flex items-baseline space-x-2">
                   <p className="text-xl font-black monta-text-primary tracking-tight">{card.value}</p>
                   <span className={cn("text-[10px] font-bold", card.trend.startsWith('+') ? "text-green-500" : "text-amber-500")}>
                      {card.trend}
                   </span>
                </div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           {/* Bar Chart: Revenue vs Expense */}
           <div className="lg:col-span-8 monta-card p-6">
              <div className="flex items-center justify-between mb-8">
                 <div>
                    <h3 className="text-sm font-bold monta-text-primary uppercase tracking-widest">Revenue vs. Expense</h3>
                    <p className="text-[11px] monta-text-secondary font-bold uppercase tracking-widest mt-1">Last 6 Months Trend</p>
                 </div>
                 <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-monta-blue"></div>
                       <span className="text-[10px] font-bold text-slate-500">Inflow</span>
                    </div>
                    <div className="flex items-center space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                       <span className="text-[10px] font-bold text-slate-500">Outflow</span>
                    </div>
                 </div>
              </div>

              <div className="h-72 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={MONTHLY_TRENDS} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barGap={8}>
                       <CartesianGrid vertical={false} stroke="#F8FAFC" strokeDasharray="3 3" />
                       <XAxis 
                         dataKey="month" 
                         axisLine={false} 
                         tickLine={false} 
                         tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 700}} 
                         dy={10} 
                       />
                       <YAxis 
                         axisLine={false} 
                         tickLine={false} 
                         tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 700}} 
                         tickFormatter={(v) => `₦${v/1000}k`}
                       />
                       <Tooltip 
                         cursor={{fill: '#F8FAFC'}}
                         contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.15)', background: '#111827', color: 'white'}}
                         itemStyle={{fontSize: '11px', fontWeight: 800}}
                       />
                       <Bar dataKey="inflow" fill="#0052FF" radius={[4, 4, 0, 0]} barSize={28} />
                       <Bar dataKey="outflow" fill="#E2E8F0" radius={[4, 4, 0, 0]} barSize={28} />
                    </BarChart>
                 </ResponsiveContainer>
              </div>
           </div>

           {/* Pie Chart: Expense Breakdown */}
           <div className="lg:col-span-4 monta-card p-6 flex flex-col">
              <div className="mb-6">
                 <h3 className="text-sm font-bold monta-text-primary uppercase tracking-widest">Expense Distribution</h3>
                 <p className="text-[11px] monta-text-secondary font-bold uppercase tracking-widest mt-1">Top Spending Categories</p>
              </div>

              <div className="h-56 relative">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                       <Pie
                          data={CATEGORY_DATA}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={8}
                          dataKey="value"
                          stroke="none"
                       >
                          {CATEGORY_DATA.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                       </Pie>
                       <Tooltip 
                         contentStyle={{borderRadius: '12px', border: 'none', background: '#111827', color: 'white'}}
                         itemStyle={{fontSize: '11px'}}
                       />
                    </PieChart>
                 </ResponsiveContainer>
                 <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-[10px] font-bold monta-text-secondary uppercase">Total</p>
                    <p className="text-lg font-black monta-text-primary">₦694k</p>
                 </div>
              </div>

              <div className="mt-6 space-y-3">
                 {CATEGORY_DATA.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                       <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-[12px] font-bold text-slate-600 dark:text-slate-400">{item.name}</span>
                       </div>
                       <span className="text-[12px] font-black monta-text-primary">₦{(item.value/1000).toFixed(1)}k</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Insight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
           <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mb-16"></div>
              <div className="relative z-10">
                 <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                 </div>
                 <h4 className="text-xl font-bold tracking-tight mb-2">Operational Insight</h4>
                 <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    "Your operational costs have decreased by <span className="text-green-400 font-bold">12%</span> compared to September. This is primarily due to optimized cloud spending and lower miscellaneous fees."
                 </p>
                 <button className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] flex items-center hover:text-blue-400 transition-all active:scale-95">
                    GENERATE AI REPORT <ArrowRight className="ml-2 w-3.5 h-3.5" />
                 </button>
              </div>
           </div>
           
           <div className="monta-card p-8">
              <h4 className="text-sm font-bold monta-text-primary uppercase tracking-widest mb-6">Upcoming Large Payments</h4>
              <div className="space-y-4">
                 {[
                   { ref: 'Cloud Infra Renewal', amount: '₦125,000', date: 'Nov 02', status: 'Upcoming' },
                   { ref: 'Office Cleaning', amount: '₦15,000', date: 'Nov 05', status: 'Scheduled' }
                 ].map((row, idx) => (
                   <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 group hover:shadow-md transition-all">
                      <div className="flex items-center space-x-4">
                         <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400">
                            <Activity className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-[13px] font-bold monta-text-primary tracking-tight">{row.ref}</p>
                            <p className="text-[11px] monta-text-secondary font-bold uppercase tracking-widest mt-0.5">{row.date}</p>
                         </div>
                      </div>
                      <p className="text-[13px] font-black monta-text-primary">{row.amount}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
