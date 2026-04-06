'use client';

import { motion } from 'framer-motion';
import { Navigation, BiometricTicker, Footer, SharedStyles } from '../../components/SharedUI';

export default function Philosophy() {
  return (
    <main className="bg-black min-h-screen text-white font-body overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <SharedStyles />
      <Navigation />
      <BiometricTicker />
      
      <section className="pt-48 pb-32 px-12 max-w-[1920px] mx-auto min-h-screen">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <span className="font-headline text-[#39FF14] uppercase tracking-[0.5em] text-sm mb-6 block">CORE_LOGIC</span>
          <h1 className="font-headline text-8xl font-black italic tracking-tighter leading-tight text-white mb-12">Mechanical <br/> Evolution</h1>
          <p className="text-neutral-400 font-body text-2xl leading-relaxed italic">
            "The body is a machine that operates on the laws of physics. Efficiency is the only objective."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-48">
          <div className="space-y-12">
            <div>
               <h3 className="font-headline text-4xl font-bold italic mb-6 text-white uppercase tracking-tighter">01. Neural Alignment</h3>
               <p className="text-neutral-400 font-body text-xl leading-relaxed">
                 We believe in the synchronicity of the central nervous system and muscular output. At Kinetic Precision, we don't just train muscles; we reprogram the neural pathways that command them. 
               </p>
            </div>
            <div>
               <h3 className="font-headline text-4xl font-bold italic mb-6 text-white uppercase tracking-tighter">02. Mechanical Torque</h3>
               <p className="text-neutral-400 font-body text-xl leading-relaxed">
                 By understanding the lever systems of the human skeletal structure, we maximize force production through precise mechanical angles and loading parameters.
               </p>
            </div>
          </div>
          <div className="relative aspect-square bg-[#0a0a0a] border border-neutral-800 rounded-full flex items-center justify-center group overflow-hidden">
             <div className="absolute inset-20 border border-[#39FF14]/20 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
             <div className="absolute inset-40 border-2 border-dashed border-[#39FF14]/10 rounded-full animate-spin-slow"></div>
             <div className="relative z-10 text-center p-12">
                <span className="material-symbols-outlined text-8xl text-[#39FF14] mb-8 animate-pulse">architecture</span>
                <p className="font-headline text-xs tracking-[0.3em] uppercase text-neutral-500">PRECISION_UNIT_758</p>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="relative p-24 bg-neutral-900/40 rounded-xl border border-neutral-800/15 glass-panel text-center mb-32 group hover:border-[#39FF14]/30 transition-all duration-700">
           <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-black border border-neutral-800 rounded-full flex items-center justify-center">
             <span className="material-symbols-outlined text-[#39FF14] text-4xl">experiment</span>
           </div>
           <h2 className="font-headline text-5xl font-black italic mb-8 uppercase tracking-tighter">The Laboratory Standard</h2>
           <p className="text-neutral-400 font-body text-xl max-w-3xl mx-auto leading-relaxed mb-12">
             Kinetic Precision is not a gym. It is a research facility dedicated to the optimization of the human organism through quantified loading and scientific recovery protocols.
           </p>
           <button className="px-12 py-4 bg-transparent border border-white text-white font-headline font-black text-sm uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-all">
              Initialize Protocols
           </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
