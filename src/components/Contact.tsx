import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MessageSquare, Terminal, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 tech-grid">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <h3 className="text-5xl font-bold mb-8">Let's build more <br /><span className="text-slate-500 italic">stable infrastructure.</span></h3>
            
            <p className="text-lg text-slate-400 mb-12 max-w-md">
              Available for high-impact DevOps roles, cloud architecture consulting, 
              or speaking opportunities about K8s and CI/CD.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-500 group-hover:bg-brand-500 group-hover:text-white transition-all border border-slate-800">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-0.5">Email</p>
                  <a href="mailto:hello@cloudops.io" className="text-xl font-bold hover:text-brand-500 transition-colors">hello@cloudops.io</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-500 group-hover:bg-brand-500 group-hover:text-white transition-all border border-slate-800">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-0.5">LinkedIn</p>
                  <a href="#" className="text-xl font-bold hover:text-brand-500 transition-colors">linkedin.com/in/devops-expert</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-500 group-hover:bg-brand-500 group-hover:text-white transition-all border border-slate-800">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-xl font-bold">San Francisco, CA (Remote Friendly)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <a href="#" className="p-3 rounded-full bg-slate-900 text-slate-500 hover:text-brand-500 transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="p-3 rounded-full bg-slate-900 text-slate-500 hover:text-brand-500 transition-colors"><Terminal className="w-6 h-6" /></a>
            </div>
          </div>

          <div className="glass-panel p-8 lg:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl -z-10" />
             
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                   <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                   <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                 </div>
               </div>
               
               <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Professional Inquiry</label>
                 <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-slate-100 focus:outline-none focus:border-brand-500 transition-colors appearance-none">
                    <option>Hiring (Full-time)</option>
                    <option>Freelance / Consulting</option>
                    <option>Infrastructure Audit</option>
                    <option>General Coffee Chat</option>
                 </select>
               </div>
               
               <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                 <textarea 
                  rows={4}
                  placeholder="How can I help your team scale?" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                />
               </div>
               
               <button className="w-full py-5 bg-brand-500 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20 active:scale-[0.98]">
                 <MessageSquare className="w-5 h-5" />
                 INITIATE HANDSHAKE 
               </button>
             </form>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 opacity-30 text-[10px] font-mono font-bold tracking-[0.2em] uppercase">
           <p>© 2026 CLOUDOPS.IO — ALL INFRASTRUCTURE AS CODE</p>
           <p>SYSTEMS_OPERATIONAL_99_99_PERCENT</p>
           <p>SF • REMOTE • CLOUD</p>
        </div>
      </div>
    </section>
  );
}
