import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { Activity, Cpu, Database, Network, Server, Zap } from 'lucide-react';

const PERFORMANCE_DATA = [
  { time: '00:00', cpu: 20, mem: 45, net: 10 },
  { time: '04:00', cpu: 35, mem: 52, net: 40 },
  { time: '08:00', cpu: 65, mem: 60, net: 85 },
  { time: '12:00', cpu: 45, mem: 55, net: 60 },
  { time: '16:00', cpu: 90, mem: 80, net: 95 },
  { time: '20:00', cpu: 55, mem: 65, net: 30 },
  { time: '23:59', cpu: 30, mem: 48, net: 15 },
];

const CLUSTER_HEALTH = [
  { name: 'K8s-Prod', value: 98, color: '#0ea5e9' },
  { name: 'K8s-Stg', value: 85, color: '#6366f1' },
  { name: 'K8s-Dev', value: 92, color: '#fbbf24' },
  { name: 'AWS-East', value: 99, color: '#10b981' },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-4">Infrastructure Observability</h2>
          <h3 className="text-4xl font-bold">Real-time Metrics Dashboard</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 glass-panel p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-xl font-bold">Cluster Traffic Analysis</h4>
                <p className="text-sm text-slate-500">Live network & compute demand visualization</p>
              </div>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-brand-500" />
                   <span className="text-xs text-slate-400">Network</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-indigo-500" />
                   <span className="text-xs text-slate-400">Memory</span>
                 </div>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PERFORMANCE_DATA}>
                  <defs>
                    <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#475569" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                    itemStyle={{ color: '#0ea5e9' }}
                  />
                  <Area type="monotone" dataKey="net" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorNet)" strokeWidth={3} />
                  <Area type="monotone" dataKey="mem" stroke="#6366f1" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
               {[
                 { label: 'Latency', value: '42ms', icon: Zap, trend: '-12%' },
                 { label: 'Uptime', value: '99.9%', icon: Activity, trend: 'Stable' },
                 { label: 'Nodes', value: '248', icon: Server, trend: '+4' },
                 { label: 'Requests', value: '1.2M', icon: Network, trend: '+15%' }
               ].map((stat, i) => (
                 <div key={i} className="glass-panel p-4 flex flex-col justify-between">
                   <stat.icon className="w-5 h-5 text-brand-500 mb-4" />
                   <div>
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</p>
                     <p className="text-xl font-bold">{stat.value}</p>
                     <p className="text-[10px] text-emerald-500 font-bold mt-1">{stat.trend}</p>
                   </div>
                 </div>
               ))}
            </div>
            
            <div className="glass-panel p-6 flex-1">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Regional Health</h5>
              <div className="space-y-4">
                 {CLUSTER_HEALTH.map((h) => (
                   <div key={h.name} className="space-y-1.5">
                     <div className="flex justify-between text-xs font-medium">
                       <span className="text-slate-500">{h.name}</span>
                       <span className="text-slate-300">{h.value}%</span>
                     </div>
                     <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: `${h.value}%` }}
                         transition={{ duration: 1, delay: 0.2 }}
                         className="h-full rounded-full" 
                         style={{ backgroundColor: h.color }} 
                       />
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>

        {/* Console Mini Widget */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
           <div className="lg:col-span-1 glass-panel p-6 border-brand-500/10">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-brand-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">EC2 Instances</span>
              </div>
              <div className="flex items-center justify-between">
                 <span className="text-3xl font-bold">1,242</span>
                 <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-[10px]">ACTIVE</span>
              </div>
           </div>
           
           <div className="lg:col-span-3 glass-panel p-4 flex items-center gap-6 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-3 shrink-0">
                 <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                 <span className="text-xs font-mono text-slate-400">LOG: k8s-scheduler: pod-deployment-successful (4s ago)</span>
              </div>
              <div className="h-4 w-px bg-slate-800" />
              <div className="flex items-center gap-3 shrink-0">
                 <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                 <span className="text-xs font-mono text-slate-400">TRAFFIC: us-east-1: peak-demand-scaling-initiated</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
