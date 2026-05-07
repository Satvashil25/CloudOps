import { motion } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-slate-950/50 border-b border-slate-800/50"
    >
      <div className="flex items-center gap-2">
        <div className="bg-brand-500 p-1.5 rounded-lg">
          <TerminalIcon className="w-5 h-5 text-white" />
        </div>
        <span className="font-mono font-bold text-xl tracking-tighter">
          CLOUDOPS<span className="text-brand-500">.IO</span>
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a 
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-slate-400 hover:text-brand-500 transition-colors uppercase tracking-widest"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a 
        href="#contact"
        className="px-5 py-2 bg-slate-100 text-slate-950 rounded-full text-sm font-bold hover:bg-brand-500 hover:text-white transition-all shadow-lg shadow-brand-500/10"
      >
        HIRE ME
      </a>
    </motion.nav>
  );
}
