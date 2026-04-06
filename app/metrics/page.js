'use client';

import { motion } from 'framer-motion';
import { Navigation, BiometricTicker, Footer, SharedStyles } from '../../components/SharedUI';

const MetricCard = ({ label, value, unit, trend, color }) => (
  <div className="relative p-10 bg-neutral-900/40 border border-neutral-800/15 rounded-xl glass-panel group hover:border-[#39FF14]/40 transition-all duration-500 overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
      <span className="material-symbols-outlined text-6xl text-[#39FF14]">monitoring</span>
    </div>
    <span className="font-headline text-neutral-500 text-xs tracking-widest uppercase mb-4 block">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className="font-headline text-5xl font-black italic text-white tracking-tighter">{value}</span>
      <span className="font-headline text-neutral-500 text-sm italic">{unit}</span>
    </div>
    <div className="mt-8 flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${trend > 0 ? 'bg-[#39FF14]' : 'bg-red-500'} animate-pulse`}></div>
      <span className={`font-headline text-xs tracking-widest ${trend > 0 ? 'text-[#39FF14]' : 'text-red-500'}`}>
        {trend > 0 ? '+' : ''}{trend}% EFFICIENCY
      </span>
    </div>
  </div>
);

const ChartSimulator = () => (
  <div className="relative h-64 w-full bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-end px-4 gap-2 py-8 group">
    {[60, 45, 80, 55, 90, 70, 85, 40, 65, 75, 95, 50].map((h, i) => (
      <div 
        key={i} 
        className="flex-1 bg-[#39FF14]/20 border-t-2 border-[#39FF14] transition-all duration-1000 group-hover:bg-[#39FF14]/40" 
        style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
      >
        <div className="w-full h-full bg-gradient-to-t from-[#39FF14]/10 to-transparent"></div>
      </div>
    ))}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
       <span className="font-headline text-neutral-800 text-[100px] font-black opacity-10 tracking-[0.2em]">ANALYZING</span>
    </div>
  </div>
);

export default function Metrics() {
  return (
    <main className="bg-black min-h-screen text-white font-body overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <SharedStyles />
      <Navigation />
      <BiometricTicker />
      
      <section className="pt-48 pb-32 px-12 max-w-[1920px] mx-auto">
        <div className="mb-24">
          <span className="font-headline text-[#39FF14] uppercase tracking-[0.4em] text-sm mb-4 block">LIVE FEED</span>
          <h1 className="font-headline text-7xl font-black italic tracking-tighter uppercase text-white">Biometric Array</h1>
          <p className="text-neutral-400 font-body text-xl max-w-2xl mt-8 leading-relaxed">
            Data is the blueprint for mechanical evolution. Monitor your neural load, cardiac output, and recovery precision in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <MetricCard label="VO2 MAX" value="64.2" unit="ml/kg/min" trend={4.2} />
          <MetricCard label="NEURAL FREQUENCY" value="98.8" unit="Hz" trend={1.5} />
          <MetricCard label="PEAK TORQUE" value="840" unit="N⋅m" trend={2.8} />
          <MetricCard label="RECOVERY INDEX" value="94" unit="%" trend={-1.2} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 p-12 bg-neutral-900 border border-neutral-800 rounded-xl">
             <h3 className="font-headline text-2xl font-bold italic mb-12 text-white uppercase tracking-widest">Neural Recruitment Waveform</h3>
             <ChartSimulator />
             <div className="mt-12 flex justify-between items-center text-neutral-500 font-headline text-[10px] tracking-widest uppercase">
               <span>TIME_MARKER_00:00:24</span>
               <span>SYSTEM_SYNC_ACTIVE</span>
               <span>ERROR_RATE: 0.0001%</span>
             </div>
          </div>
          <div className="lg:col-span-4 p-12 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col justify-between">
             <div>
               <h3 className="font-headline text-2xl font-bold italic mb-6 text-white uppercase tracking-widest">System Health</h3>
               <ul className="space-y-6">
                 {[
                   { l: "Cardiac Reserve", v: "85%" },
                   { l: "Metabolic Flux", v: "92%" },
                   { l: "Synaptic Speed", v: "High" }
                 ].map(item => (
                   <li key={item.l} className="flex justify-between items-center pb-4 border-b border-neutral-800 text-neutral-400">
                     <span className="font-label uppercase tracking-widest text-xs">{item.l}</span>
                     <span className="font-headline text-[#39FF14] text-sm">{item.v}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <button className="w-full py-4 bg-transparent border border-[#39FF14] text-[#39FF14] font-headline font-black text-sm uppercase tracking-widest rounded-sm hover:bg-[#39FF14] hover:text-black transition-all">
                Export Data
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
