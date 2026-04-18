import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CreditCard, Activity, Settings, LogOut, Menu, X, Bell, Search, Briefcase, FileText, ChevronDown, Monitor } from 'lucide-react';
import { NotificationPanel } from './NotificationPanel';
import { cn } from '../../utils/utils';

export const DashboardLayout = ({ children, accountName = "John Doe" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isTestMode, setIsTestMode] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Transfer Received', message: 'You have received ₦450,000.00 from Lenco HQ.', time: '2m ago', type: 'credit', read: false },
    { id: 2, title: 'New Login', message: 'Your account was accessed from a new Chrome browser on Mac.', time: '1h ago', type: 'security', read: false },
    { id: 3, title: 'KYC Update', message: 'Your business verification is 80% complete. Upload ID to finish.', time: '3h ago', type: 'info', read: true },
  ]);
  
  const location = useLocation();
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMarkAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const menuSections = [
    {
      title: "Main",
      items: [
        { name: 'Overview', path: '/dashboard', icon: Home },
        { name: 'Transactions', path: '/transactions', icon: Activity },
        { name: 'Cards', path: '#', icon: CreditCard },
      ]
    },
    {
      title: "Tools",
      items: [
        { name: 'Invoices', path: '#', icon: FileText },
        { name: 'Reports', path: '/reports', icon: Monitor },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-300">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 z-40 lg:hidden backdrop-blur-[2px]" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-60 bg-[#0B0F19] dark:bg-black text-slate-400 border-r border-slate-800/50 dark:border-slate-800 transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl lg:shadow-none",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="h-16 flex items-center px-6 border-b border-slate-800/40">
          <div className="flex items-center space-x-2.5 shrink-0">
            <div className="w-7 h-7 bg-monta-blue rounded flex flex-col items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-lg leading-none">M</span>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">Monta</span>
          </div>
          <button className="ml-auto lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Environment Toggle */}
        <div className="p-4">
          <div className="flex items-center p-0.5 bg-slate-800/40 rounded-lg border border-slate-700/30">
            <button 
              onClick={() => setIsTestMode(false)}
              className={cn("flex-1 text-[11px] font-bold py-1.5 rounded-md transition-all duration-200", !isTestMode ? "bg-slate-700 text-white shadow-sm" : "text-slate-500 hover:text-slate-300")}
            >
              LIVE
            </button>
            <button 
              onClick={() => setIsTestMode(true)}
              className={cn("flex-1 text-[11px] font-bold py-1.5 rounded-md transition-all duration-200", isTestMode ? "bg-amber-500/90 text-white shadow-sm" : "text-slate-500 hover:text-slate-300")}
            >
              TEST
            </button>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto py-2 flex flex-col gap-6 px-3">
          {menuSections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <p className="px-3 text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2">{section.title}</p>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-md text-[13px] font-medium transition-all group",
                        isActive ? "bg-monta-blue/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <Icon className={cn("w-4 h-4 transition-colors", isActive ? "text-monta-blue" : "text-slate-500 group-hover:text-slate-300")} />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-slate-800/40 flex flex-col gap-0.5">
          <Link to="/settings" className={cn(
            "flex items-center space-x-3 px-3 py-2 rounded-md text-[13px] font-medium transition-all group",
            location.pathname === '/settings' ? "bg-monta-blue/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
          )}>
            <Settings className={cn("w-4 h-4 transition-colors", location.pathname === '/settings' ? "text-monta-blue" : "text-slate-500 group-hover:text-slate-300")} />
            <span>Settings</span>
          </Link>
          <Link to="/login" className="flex items-center space-x-3 px-3 py-2 rounded-md text-[13px] font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all">
            <LogOut className="w-4 h-4 text-slate-500" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Test Mode Banner */}
        {isTestMode && (
          <div className="bg-amber-500/90 text-white text-[10px] font-bold text-center py-1 absolute top-0 left-0 right-0 z-20 w-full uppercase tracking-[0.2em] flex items-center justify-center shadow-md">
            <Monitor className="w-3 h-3 mr-2" /> Test Environment Active
          </div>
        )}

        {/* Top Header */}
        <header className={cn("h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10", isTestMode && "mt-5")}>
          <div className="flex items-center">
            <button 
              className="lg:hidden p-2 -ml-2 mr-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center text-xs font-semibold">
              <span className="text-slate-400">Pages</span>
              <span className="text-slate-300 mx-2">/</span>
              <span className="text-slate-800 dark:text-slate-100 capitalize">{location.pathname.replace('/', '') || 'Dashboard'}</span>
            </div>
          </div>
          
          <div className="flex-1 flex justify-end items-center space-x-3 sm:space-x-5">
            <div className="hidden md:flex relative max-w-[280px] w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-monta-blue transition-colors" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-slate-100/50 dark:bg-slate-800/50 border border-transparent rounded-full pl-9 pr-4 py-1.5 text-[13px] focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-slate-200 dark:focus:border-slate-700 focus:ring-4 focus:ring-slate-900/5 transition-all text-slate-900 dark:text-white"
              />
            </div>

            {/* Notification Trigger */}
            <div className="relative" ref={notificationRef}>
              <button 
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className={cn(
                  "relative p-2 transition-all rounded-full border shadow-sm",
                  isNotificationOpen ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-lg" : "text-slate-500 bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                )}
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white dark:border-slate-900"></div>
                )}
              </button>
              
              <NotificationPanel 
                isOpen={isNotificationOpen} 
                onClose={() => setIsNotificationOpen(false)} 
                notifications={notifications}
                onMarkAsRead={handleMarkAsRead}
                onClearAll={handleClearAll}
              />
            </div>

            <div className="flex items-center space-x-2 pl-2 border-l border-slate-200 dark:border-slate-800">
               <div className="h-8 w-8 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-[12px] font-bold text-white dark:text-slate-900 shadow-lg ring-2 ring-white dark:ring-slate-800 cursor-pointer hover:scale-105 transition-transform">
                {accountName.charAt(0)}
              </div>
              <div className="hidden xl:block">
                 <p className="text-[12px] font-bold text-slate-800 dark:text-white leading-none">{accountName}</p>
                 <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-1">Free Tier</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto monta-bg-page p-4 sm:p-6 lg:p-8 custom-scrollbar transition-colors duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};
