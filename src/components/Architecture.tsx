import { motion } from 'motion/react';
import { GitBranch, Github, Shield, Box, Cloud, Eye, ArrowRight, Play } from 'lucide-react';

const PIPELINE_STAGES = [
  { id: 'source', label: 'Source', icon: Github, details: 'Pull Requests / Webhooks' },
  { id: 'scan', label: 'Security Scan', icon: Shield, details: 'SAST / Dependency Check' },
  { id: 'build', label: 'CI Build', icon: Box, details: 'Docker Image / Artifacts' },
  { id: 'deploy', label: 'CD Deploy', icon: Cloud, details: 'Helm / Terraform / K8s' },
  { id: 'monitor', label: 'Observe', icon: Eye, details: 'Prometheus / Grafana' },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-brand-500/5 rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-4">Architecture Design</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">Visualizing Infrastructure Flow</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interactive visualization of a production-grade CI/CD and deployment topology 
            demonstrating end-to-end automation.
          </p>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Main Pipeline Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-12 lg:gap-4 px-4 lg:px-0">
             {PIPELINE_STAGES.map((stage, i) => (
               <div key={stage.id} className="flex flex-col lg:flex-row items-center gap-4 flex-1">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center group cursor-help p-6 rounded-2xl glass-panel border-slate-700/50 hover:border-brand-500/50 transition-all w-full max-w-[200px]"
                  >
                     <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-500 group-hover:text-brand-500 transition-colors mb-4 border border-slate-800">
                        <stage.icon className="w-8 h-8" />
                     </div>
                     <h5 className="font-bold mb-1">{stage.label}</h5>
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest">{stage.details}</p>
                     
                     <div className="absolute top-[-10px] opacity-0 group-hover:opacity-100 transition-opacity bg-brand-600 text-[8px] font-bold px-2 py-1 rounded text-white tracking-widest pointer-events-none">
                        STAGE {i + 1}
                     </div>
                  </motion.div>
                  
                  {i < PIPELINE_STAGES.length - 1 && (
                    <div className="lg:rotate-0 rotate-90 flex items-center justify-center">
                       <motion.div 
                         animate={{ x: [0, 40, 0] }}
                         transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                         className="flex items-center"
                       >
                          <div className="w-16 h-0.5 bg-gradient-to-r from-brand-500 to-transparent rounded-full" />
                          <ArrowRight className="w-4 h-4 text-brand-500 -ml-2" />
                       </motion.div>
                    </div>
                  )}
               </div>
             ))}
          </div>

          {/* Trigger Mechanism */}
          <div className="mt-20 glass-panel p-8 w-full max-w-4xl border-dashed border-2 border-slate-800/80 bg-slate-900/20">
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                   <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                      <GitBranch className="w-10 h-10" />
                   </div>
                   <div>
                      <h6 className="text-xl font-bold">Mainline Integration</h6>
                      <p className="text-sm text-slate-500">Automatic triggers on git push events</p>
                   </div>
                </div>
                
                <button className="px-10 py-5 bg-brand-500 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-600 transition-all group scale-110">
                   <div className="bg-white/20 p-2 rounded-lg">
                      <Play className="w-4 h-4 fill-white" />
                   </div>
                   SIMULATE DEPLOYMENT
                </button>
             </div>
          </div>
          
          {/* Legend / Overlay */}
          <div className="mt-12 flex flex-wrap justify-center gap-12 opacity-50">
             {['AWS S3', 'Terraform Cloud', 'Docker Registry', 'Slack Alerts'].map(tool => (
               <span key={tool} className="font-mono text-[10px] font-bold uppercase tracking-widest">{tool}</span>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
