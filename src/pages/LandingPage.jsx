import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';

export const LandingPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <main className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-monta-blue text-sm font-semibold mb-8">
              <span className="flex w-2 h-2 rounded-full bg-monta-blue mr-2"></span>
              The New Standard in Business Banking
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-7xl font-extrabold text-monta-dark tracking-tight mb-8">
                Banking, built for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Ambition.</span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                Open a business account in minutes. Manage expenses, facilitate bulk transfers, and scale seamlessly with Monta.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" onClick={() => navigate('/signup')} className="w-full sm:w-auto font-semibold text-lg px-8">
                Open an Account <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto font-semibold text-lg px-8">
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-monta-dark sm:text-4xl">Everything you need to grow</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">No hidden fees, no branch visits proper financial tooling.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-monta-blue rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
              <p className="text-slate-500">Transfers that actually work instantly. Pay vendors and employees with zero friction.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bank-Grade Security</h3>
              <p className="text-slate-500">Your funds are protected by the highest encryption standards and NDIC insurance.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Ready</h3>
              <p className="text-slate-500">Create virtual USD cards, accept international payments, and conquer the global market.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
