import { motion } from 'motion/react';
import { Download, Eye, Mail } from 'lucide-react';
import TerminalEffect from './TerminalEffect';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-bold tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            SYSTEM STATUS: OPERATIONAL
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Building Scalable, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-400">
              Resilient & Production-Grade
            </span> <br />
            Cloud Infrastructure
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            Expert in Architecting High-Availability Systems, K8s Ecosystems, 
            and Automated Delivery Pipelines. Demonstrating DevSecOps at scale.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-8 py-4 bg-brand-500 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/25"
            >
              <Eye className="w-5 h-5" />
              VIEW PROJECTS
            </a>
            <button className="px-8 py-4 glass-panel text-slate-100 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
              <Download className="w-5 h-5" />
              RESUME
            </button>
            <a 
              href="#contact"
              className="px-8 py-4 border border-slate-800 text-slate-400 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-900 transition-all"
            >
              <Mail className="w-5 h-5" />
              CONTACT
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <TerminalEffect />
          </div>
          
          {/* Dashboard Preview Overlay Element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-6 glass-panel p-6 shadow-2xl border-brand-500/20 z-20 hidden md:block"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                <div className="w-4 h-4 text-brand-500" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Performance</p>
                <p className="text-xl font-bold">99.98%</p>
              </div>
            </div>
            <div className="flex gap-1 h-8 items-end">
              {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                <div key={i} className="w-3 bg-brand-500/40 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
