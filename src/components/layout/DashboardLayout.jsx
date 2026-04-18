import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CreditCard, Activity, Settings, LogOut, Menu, X, Bell, Search, Briefcase, FileText, ChevronDown, Monitor } from 'lucide-react';
import { cn } from '../../utils/utils';

export const DashboardLayout = ({ children, accountName = "John Doe" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isTestMode, setIsTestMode] = useState(false);
  const location = useLocation();

  const menuSections = [
    {
      title: "Core",
      items: [
        { name: 'Overview', path: '/dashboard', icon: Home },
        { name: 'Transactions', path: '#', icon: Activity },
        { name: 'Balances', path: '#', icon: Briefcase },
      ]
    },
    {
      title: "Payments",
      items: [
        { name: 'Cards', path: '#', icon: CreditCard },
        { name: 'Invoices', path: '#', icon: FileText },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-sm" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 border-r border-slate-800 transform transition-transform duration-200 ease-in-out flex flex-col",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="h-20 flex items-center px-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center space-x-2 shrink-0">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex flex-col items-center justify-center">
              <span className="text-white font-bold text-xl leading-none pb-0.5">M</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Monta</span>
          </div>
          <button className="ml-auto lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Environment Toggle */}
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center justify-between p-1 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <button 
              onClick={() => setIsTestMode(false)}
              className={cn("flex-1 text-xs font-semibold py-1.5 rounded-md transition-colors", !isTestMode ? "bg-white text-slate-900 shadow" : "text-slate-400 hover:text-white")}
            >
              Live API
            </button>
            <button 
              onClick={() => setIsTestMode(true)}
              className={cn("flex-1 text-xs font-semibold py-1.5 rounded-md transition-colors", isTestMode ? "bg-amber-500 text-white shadow" : "text-slate-400 hover:text-white")}
            >
              Test Mode
            </button>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-6 px-4">
          {menuSections.map((section, idx) => (
             <div key={idx}>
               <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{section.title}</p>
               <div className="space-y-1">
                 {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                 })}
               </div>
             </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-slate-800 flex flex-col gap-1 bg-slate-950">
          <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <Link to="/login" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-red-400 transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Test Mode Banner */}
        {isTestMode && (
          <div className="bg-amber-500 text-white text-xs font-bold text-center py-1 absolute top-0 left-0 right-0 z-10 w-full uppercase tracking-widest flex items-center justify-center">
            <Monitor className="w-3 h-3 mr-2" /> You are viewing test data
          </div>
        )}

        {/* Top Header */}
        <header className={cn("h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8", isTestMode && "mt-6")}>
          <div className="flex items-center">
            <button 
              className="lg:hidden p-2 -ml-2 mr-2 text-slate-500 hover:bg-slate-100 rounded-lg"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:flex items-center text-sm">
              <span className="font-semibold text-slate-800">{accountName}</span>
              <span className="text-slate-400 mx-2">/</span>
              <span className="text-slate-500">Overview</span>
            </div>
          </div>
          
          <div className="flex-1 flex justify-end items-center space-x-4 sm:space-x-6">
            <div className="hidden md:flex relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search transactions, customers..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-monta-blue transition-shadow"
              />
            </div>
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 rounded-full border border-slate-200">
              <Bell className="w-5 h-5" />
              <div className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-50"></div>
            </button>
            <div className="h-9 w-9 rounded-full bg-monta-blue flex flex-col items-center justify-center text-sm font-semibold text-white shadow-sm ring-2 ring-white cursor-pointer">
              {accountName.charAt(0)}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
