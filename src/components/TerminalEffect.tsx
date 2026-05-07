import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const MESSAGES = [
  "Initializing cloud environment...",
  "Terraform apply: infrastructure.tf [DONE]",
  "Connecting to K8s cluster: production-01 [OK]",
  "Istio sidecar injection enabled.",
  "Configuring Prometheus metrics scrape configs...",
  "Deploying multi-region failover policy...",
  "Scanning vulnerabilities in Docker images... [CLEAN]",
  "Finalizing production-grade deployment...",
  "System Ready. Resume loaded."
];

export default function TerminalEffect() {
  const [lines, setLines] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < MESSAGES.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, MESSAGES[index]]);
        setIndex(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="bg-slate-950 rounded-lg border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
      <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <span className="text-slate-500 text-xs ml-2">bash — portfolio.sh</span>
      </div>
      <div className="p-4 h-[240px] overflow-y-auto custom-scrollbar">
        {lines.map((line, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={i} 
            className="mb-1 flex gap-2"
          >
            <span className="text-brand-500">➜</span>
            <span className="text-slate-300">{line}</span>
          </motion.div>
        ))}
        {index < MESSAGES.length && (
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-brand-500 ml-6"
          />
        )}
      </div>
    </div>
  );
}
