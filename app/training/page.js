'use client';

import { motion } from 'framer-motion';
import { Navigation, BiometricTicker, Footer, IMAGES, SharedStyles } from '../../components/SharedUI';

const TrainingProtocol = ({ title, code, description, image, color, tags }) => (
  <div className={`relative group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/15 glass-panel transition-all duration-500 hover:border-${color}/40 p-10 flex flex-col justify-between min-h-[400px]`}>
    <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-110 transition-transform duration-700">
      <img alt={title} className="w-full h-full object-cover" src={image} />
    </div>
    <div className="relative z-10">
      <span className={`font-headline text-${color} text-xs tracking-widest uppercase mb-4 block`}>{code}</span>
      <h3 className="font-headline text-4xl font-bold italic mb-4 text-white uppercase tracking-tighter">{title}</h3>
      <p className="text-neutral-400 font-body text-base max-w-sm leading-relaxed">{description}</p>
    </div>
    <div className="relative z-10 flex flex-wrap gap-3 mt-8">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700 text-neutral-300 text-[10px] font-headline uppercase tracking-widest">
          {tag}
        </span>
      ))}
    </div>
    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
  </div>
);

export default function Training() {
  return (
    <main className="bg-black min-h-screen text-white font-body overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <SharedStyles />
      <Navigation />
      <BiometricTicker />
      
      <section className="pt-48 pb-32 px-12 max-w-[1920px] mx-auto">
        <div className="mb-24">
          <span className="font-headline text-[#39FF14] uppercase tracking-[0.4em] text-sm mb-4 block">MODULAR EVOLUTION</span>
          <h1 className="font-headline text-7xl font-black italic tracking-tighter uppercase text-white">Elite Protocols</h1>
          <p className="text-neutral-400 font-body text-xl max-w-2xl mt-8 leading-relaxed">
            Every movement is a calculation. Our training modules are engineered to optimize neural recruitment and mechanical torque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TrainingProtocol 
            title="Strength Precision" 
            code="PROTOCOL_S_01" 
            description="Heavy mechanical loading focused on myofibrillar hypertrophy and central nervous system adaptation."
            image={IMAGES.dumbbell}
            color="[#39FF14]"
            tags={["High Load", "Neural Drive", "Hypertrophy"]}
          />
          <TrainingProtocol 
            title="Vascular Flux" 
            code="PROTOCOL_V_02" 
            description="High-intensity aerobic conditioning leveraging heart-rate variability and peak oxygen utilization."
            image={IMAGES.treadmill}
            color="[#39FF14]"
            tags={["Aerobic", "VO2 Max", "Flux"]}
          />
          <TrainingProtocol 
            title="Neural Sync" 
            code="PROTOCOL_N_03" 
            description="Proprioceptive drills and reaction-time training to align mental focus with explosive physical output."
            image={IMAGES.kettlebell}
            color="[#39FF14]"
            tags={["Agility", "Reaction", "Balance"]}
          />
          <div className="lg:col-span-2 relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-neutral-800 p-12 flex items-center gap-12 group">
            <div className="flex-1">
              <h3 className="font-headline text-4xl font-black italic mb-6">CUSTOM PROTOCOLS</h3>
              <p className="text-neutral-400 mb-8 max-w-lg">Request a biometric scan to generate a training sequence tailored to your unique mechanical levers and recovery rate.</p>
              <button className="px-8 py-3 bg-[#39FF14] text-black font-headline font-bold uppercase tracking-wider rounded-sm hover:scale-105 transition-transform">
                Request Scan
              </button>
            </div>
            <div className="w-64 h-64 relative hidden md:block">
              <div className="absolute inset-0 border-4 border-dashed border-[#39FF14]/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border-2 border-[#39FF14]/40 rounded-full animate-reverse-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#39FF14] text-6xl animate-pulse">biotech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-reverse-spin { animation: reverse-spin 8s linear infinite; }
      `}</style>
    </main>
  );
}
