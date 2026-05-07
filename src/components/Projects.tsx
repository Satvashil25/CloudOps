import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, X, CheckCircle2, Layout, Database, Server, Workflow } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold italic">Production-Grade Projects</h3>
          </div>
          <p className="text-slate-400 max-w-md">
            A selection of architectural solutions focused on high-availability, 
            cost-governance, and automated service meshes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={project.id}
              className="glass-panel overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-8 pb-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mb-2 group-hover:text-brand-500 transition-colors">{project.title}</h4>
                <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-medium italic">{project.tagline}</p>
                <p className="text-slate-400 mb-8 line-clamp-2">{project.problem}</p>
              </div>
              
              <div className="bg-slate-900/50 p-8 border-t border-slate-800/50 flex items-center justify-between">
                <div className="flex gap-10">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{key}</p>
                      <p className="font-mono font-bold text-brand-500">{value}</p>
                    </div>
                  ))}
                </div>
                <button className="text-brand-500 font-bold text-sm flex items-center gap-2">
                  CASE STUDY <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div 
              layoutId={selectedProject.id}
              className="glass-panel w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl overflow-x-hidden"
            >
              <div className="p-8 md:p-12">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded bg-brand-500/10 text-brand-500 text-xs font-bold uppercase tracking-widest border border-brand-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-4xl font-bold mb-4">{selectedProject.title}</h3>
                    <p className="text-slate-400 text-lg mb-8 italic">{selectedProject.tagline}</p>
                    
                    <div className="space-y-8">
                      <div>
                        <h5 className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-3">Problem Statement</h5>
                        <p className="text-slate-300 leading-relaxed">{selectedProject.problem}</p>
                      </div>
                      <div>
                        <h5 className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-3">Solution</h5>
                        <p className="text-slate-300 leading-relaxed">{selectedProject.solution}</p>
                      </div>
                      <div>
                        <h5 className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-3">Key Features</h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedProject.features.map(f => (
                            <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                              <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-12">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-slate-950 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-500 hover:text-white transition-all">
                        <Github className="w-5 h-5" /> GITHUB REPO
                      </a>
                    </div>
                  </div>

                  <div className="lg:pt-12">
                     <div className="glass-panel p-6 border-slate-700/50 bg-slate-900/80">
                        <div className="flex items-center gap-3 mb-8">
                          <Layout className="w-5 h-5 text-brand-500" />
                          <span className="font-mono text-sm tracking-tighter font-bold">ARCHITECTURE_PREVIEW</span>
                        </div>
                        
                        <div className="relative h-80 flex flex-col items-center justify-center gap-4">
                          <motion.div 
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="p-4 rounded-lg bg-brand-500/20 border border-brand-500/40 text-brand-500"
                          >
                            <Layout className="w-8 h-8" />
                          </motion.div>
                          
                          <div className="flex gap-8">
                             {[1, 2, 3].map(i => (
                               <motion.div 
                                 key={i}
                                 initial={{ opacity: 0.5 }}
                                 animate={{ opacity: 1 }}
                                 transition={{ delay: i * 0.2, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
                                 className="flex flex-col items-center"
                               >
                                  <div className="w-0.5 h-12 bg-gradient-to-b from-brand-500/50 to-brand-500/0" />
                                  <div className="p-3 rounded bg-slate-800 border border-slate-700">
                                    {i === 1 ? <Server className="w-5 h-5 text-slate-400" /> : i === 2 ? <Database className="w-5 h-5 text-slate-400" /> : <Workflow className="w-5 h-5 text-slate-400" />}
                                  </div>
                               </motion.div>
                             ))}
                          </div>
                          
                          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                            <div className="w-full h-full border-[20px] border-dotted border-white/20 rounded-full animate-spin-slow" />
                          </div>
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-slate-800">
                           <h6 className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">Live Metrics Simulator</h6>
                           <div className="space-y-3">
                              {['Replication Delay', 'Queue Depth', 'Error Rate'].map(m => (
                                <div key={m} className="flex items-center justify-between text-xs">
                                  <span className="text-slate-400">{m}</span>
                                  <span className="font-mono text-brand-500">{(Math.random() * 10).toFixed(2)}ms</span>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
