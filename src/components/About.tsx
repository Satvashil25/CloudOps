import { motion } from 'motion/react';
import { SKILLS, EXPERIENCE } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950 tech-grid">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-4">Engineer Introduction</h2>
            <h3 className="text-4xl font-bold mb-8">DevOps Philosophy</h3>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              I believe in "Infrastructure as a Product". My approach focuses on 
              <span className="text-slate-100 font-semibold"> observability-driven development</span>, 
              where security is shifted left and resiliency is built into the architecture from day one. 
              I specialize in bridging the gap between developers and production operations.
            </p>
            
            <div className="space-y-8">
              {EXPERIENCE.map((exp, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={exp.role} 
                  className="relative pl-8 border-l-2 border-slate-800"
                >
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-slate-900 border-2 border-brand-500" />
                  <p className="text-xs text-brand-500 font-bold mb-1">{exp.period}</p>
                  <h4 className="text-xl font-bold">{exp.role}</h4>
                  <p className="text-slate-500 mb-2">{exp.company}</p>
                  <p className="text-sm text-slate-400">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-4xl font-bold mb-8">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SKILLS.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    key={skill.name}
                    className="glass-panel p-4 flex flex-col items-center gap-3 group hover:border-brand-500/50 hover:bg-brand-500/5 transition-all cursor-default"
                  >
                    <div className="p-3 rounded-lg bg-slate-800 text-slate-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-sm">{skill.name}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">{skill.category}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
