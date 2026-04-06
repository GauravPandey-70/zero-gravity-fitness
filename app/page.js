'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Navigation, BiometricTicker, Footer, IMAGES, SharedStyles } from '../components/SharedUI';

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0 text-white">
      <div className="absolute inset-0 bg-neutral-950"></div>
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#39FF14]/5 via-transparent to-transparent"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#39FF14]/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#39FF14] to-transparent blur-md animate-float-slow" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39FF14] to-transparent blur-sm rotate-12 animate-float-medium" style={{ animationDelay: '-3s' }}></div>
      </div>
    </div>
    <div className="relative z-10 w-full max-w-[1920px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="font-headline text-[#39FF14] uppercase tracking-[0.5em] text-sm mb-6 block">PRECISION ENGINEERED</span>
        <h1 className="font-headline text-7xl lg:text-9xl font-black italic tracking-tighter leading-[0.9] text-white mb-8">
          BUILD YOUR <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#1fd100] text-glow">POWER</span>
        </h1>
        <p className="font-body text-xl text-neutral-400 max-w-xl mb-12 leading-relaxed">
          Step into the future of physical evolution. Kinetic Precision merges advanced biometrics with elite-level mechanical training.
        </p>
        <div className="flex flex-wrap gap-6">
          <button className="group relative px-10 py-5 bg-gradient-to-br from-[#39FF14] to-[#1fd100] text-black font-headline font-black text-lg uppercase tracking-wider rounded-md overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(57,255,20,0.3)]">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
          </button>
        </div>
      </div>
      <div className="relative h-[600px] lg:h-[800px] flex items-center justify-center perspective-2000">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute z-30 w-80 h-80 animate-float-slow rotate-y-25 transition-transform duration-700 hover:scale-110">
            <img alt="3D render of futuristic dumbbell" className="w-full h-full object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#39FF14]/20" src={IMAGES.dumbbell} />
          </div>
          <div className="absolute z-20 top-20 right-0 w-96 h-96 -rotate-12 blur-[1px] opacity-70 animate-float-medium transition-all duration-1000 hover:blur-0 hover:opacity-100 hover:scale-105" style={{ animationDelay: '-3s' }}>
            <img alt="3D treadmill" className="w-full h-full object-cover rounded-xl" src={IMAGES.treadmill} />
          </div>
          <div className="absolute z-10 bottom-24 left-10 w-48 h-48 rotate-12 blur-[2px] opacity-50 animate-float-fast" style={{ animationDelay: '-1s' }}>
            <img alt="3D Kettlebell" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,245,255,0.3)]" src={IMAGES.kettlebell} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Programs = () => (
  <section className="py-32 relative">
    <div className="max-w-[1920px] mx-auto px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="font-headline text-[#39FF14] uppercase tracking-widest text-sm">ELITE PROTOCOLS</span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold italic tracking-tighter mt-4 text-white">TRAINING CYCLES</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 relative group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/15 glass-panel transition-all duration-500 hover:border-[#39FF14]/40 min-h-[400px]">
          <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-110 transition-transform duration-700">
            <img alt="Weight plates" className="w-full h-full object-cover" src={IMAGES.kettlebell} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <div className="relative z-20 h-full p-12 flex flex-col justify-end">
            <span className="font-headline text-[#39FF14] text-xs tracking-widest uppercase mb-4">NEURAL DRIVE</span>
            <h3 className="font-headline text-5xl font-bold italic mb-6 text-white text-glow">STRENGTH PRECISION</h3>
            <p className="text-neutral-400 font-body text-lg max-w-md mb-8">Heavy mechanical loading focused on myofibrillar hypertrophy and central nervous system adaptation.</p>
          </div>
        </div>
        <div className="md:col-span-5 relative group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/15 glass-panel transition-all duration-500 hover:border-[#39FF14]/40 min-h-[400px]">
          <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-110 transition-transform duration-700">
            <img alt="Cardio equipment" className="w-full h-full object-cover" src={IMAGES.treadmill} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <div className="relative z-20 h-full p-12 flex flex-col justify-end text-white">
            <span className="font-headline text-[#39FF14] text-xs tracking-widest uppercase mb-4">METABOLIC FLOW</span>
            <h3 className="font-headline text-4xl font-bold italic mb-4">VASCULAR FLUX</h3>
            <p className="text-neutral-400 font-body text-base mb-6">High-intensity aerobic conditioning leveraging heart-rate variability.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Staff = () => (
  <section className="py-32 bg-black relative overflow-hidden">
    <div className="max-w-[1920px] mx-auto px-12">
      <div className="text-center mb-24">
        <span className="font-headline text-[#39FF14] uppercase tracking-[0.4em] text-sm mb-4 block">THE ARCHITECTS</span>
        <h2 className="font-headline text-6xl font-black italic tracking-tighter uppercase text-white">Elite Performance Staff</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        {[
          { name: "VICTOR VANCE", role: "LEAD BIOMETRICIAN", img: IMAGES.victor },
          { name: "SARAH KINETIC", role: "NEURAL OPTIMIZER", img: IMAGES.sarah },
          { name: "JAXON REID", role: "KINETIC SPECIALIST", img: IMAGES.jaxon }
        ].map(staff => (
          <div key={staff.name} className="group perspective-2000">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105">
              <img alt={staff.name} className="w-full h-full object-cover desaturate group-hover:desaturate-0 transition-all duration-700" src={staff.img} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline text-3xl font-bold italic mb-2">{staff.name}</h4>
                <p className="font-headline text-[#39FF14] text-sm tracking-widest uppercase mb-4">{staff.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="max-w-[1920px] mx-auto px-12">
      <div className="text-center mb-24">
        <span className="font-headline text-neutral-500 uppercase tracking-widest text-xs mb-4 block">INVEST IN EVOLUTION</span>
        <h2 className="font-headline text-6xl font-black italic tracking-tighter text-white">PRICING TIERS</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { name: "Core Access", price: "199", features: ["24/7 Lab Access", "Digital Protocol Library", "Standard Biometrics"] },
          { name: "Apex Protocol", price: "450", features: ["All Core Features", "Monthly 1:1 Bio-Review", "Cryotherapy & Recovery Suite"], featured: true },
          { name: "Kinetic Black", price: "999", features: ["Full Apex Features", "Daily Performance Chef", "24/7 Dedicated Concierge"] }
        ].map(tier => (
          <div key={tier.name} className={`p-10 rounded-xl bg-neutral-900 border ${tier.featured ? 'border-[#39FF14] border-2 shadow-[0_0_40px_rgba(57,255,20,0.1)] -translate-y-4' : 'border-neutral-800/15'} glass-panel transition-all hover:-translate-y-2`}>
            <span className="font-headline text-sm uppercase tracking-widest text-[#39FF14]">{tier.name}</span>
            <div className="my-8">
              <span className="font-headline text-5xl font-black italic text-white">${tier.price}</span>
              <span className="text-neutral-500 font-headline text-sm uppercase">/ Month</span>
            </div>
            <ul className="space-y-6 mb-12">
              {tier.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-neutral-400">
                  <span className="material-symbols-outlined text-[#39FF14] text-lg">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 border border-neutral-800 text-white font-headline font-bold uppercase tracking-wider rounded-md hover:bg-neutral-800 transition-colors ${tier.featured ? 'bg-[#39FF14] text-black border-none' : ''}`}>
              Initialize Apex
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const shards = document.querySelectorAll('.floating-shard');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      shards.forEach((shard, index) => {
        const depth = (index + 1) * 15;
        const moveX = (mouseX - 0.5) * depth;
        const moveY = (mouseY - 0.5) * depth;
        if (shard instanceof HTMLElement) {
          shard.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${index * 45}deg)`;
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white font-body overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <SharedStyles />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden text-neutral-900/40">
        <div className="floating-shard w-16 h-16 top-[15%] left-[5%] animate-float-slow opacity-40 bg-[#39FF14]/10 rounded-sm"></div>
        <div className="floating-shard w-24 h-24 top-[60%] right-[8%] animate-float-medium opacity-20 rotate-45 bg-[#39FF14]/10 rounded-sm" style={{ animationDelay: '-2s' }}></div>
      </div>
      <Navigation />
      <Hero />
      <BiometricTicker />
      <Programs />
      <Staff />
      <Pricing />
      <Footer />
    </main>
  );
}
