'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

const IMAGES = {
  dumbbell: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXAO__F3bjDWdkfX3pE4tCS4A7kWWmx0BxqEmD_GRjzV1lDCWjuXX8dHIqD8WbpJHbqPtkoSrNQ-_70rsFDVMxqkMYYRMOwfoJsGi1bWRXM5mb9QiIDFrzuvWBtSYSuYqTnb_oZoEb1VNLotK1dxxAvbtPlHXXcA_p9puoTwxGeYrhCCOIc88ry_pZAXwE82Nvt185mayzQIQ7vSE2tlgVpD_9q0RrZCWrJX2sr12_yEg7BK6zMYEdO1WVvWoQnQehZmROKQXp56Q",
  treadmill: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtlgZotKmvUZI6H5savJBduPnUf0PIFXQU65YNtazgw0BYrYWunkQRzM2tERYYOS5uHspXz8gBO5o1h8i8HufDX8CnGHiDNYA6uzZFoUtFpI2VBXxcX6rbAnjcxGOe-1AYP7dzgLv96MVusG4nq7oB-Fo665x9GyxRm2NhQ53I7LmNMTdiJGUC1cN3e6Xbm3RsbL84n-9ppGDvlGxF9HOGOYjTcV1P8oeJy7cswrBe1l35oKnCWv408LCZEWdvKG7f6btajThbwRk",
  kettlebell: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtKZvo8zxK-By41uz52vmHPFvPCqZZIz_m5k0hYl7lGQKaVP91_Cz1KMzMBMPI1PKPOlyssEQ2gEODLU3UljgqOk11BPkXZqNuaYDqoQcA2fDr_l2hIhxniaNbja_b5szOlkFUTkIgM2aKk84EROjO_OV1WI8MRATrIgp5oeGAIBiuNYiP9X_t4yGzCV1GkFAacRSDBdi4F6uZMBjbbEZC26uPa9wa12RZgHOKk_L7loq1KOEfQv3hUsLXsx1EL8si9-ZSMl8pMVg",
  victor: "https://lh3.googleusercontent.com/aida-public/AB6AXuACwF7eARrttVV2zAKwQr6kA00y_XDWmRYhiJyq7FA6KD06exn-TS_D1vnG08yPgtL-tgegdREC_61yJ82SUh0YI4oK6jtGXrUCaj0CKXgRRsnPGz5ekhegQJlZGd6PLk6Z4bkBwCGZbJgD4Ap4vMNQbsATeCMRj_NVexWmqVxNnsI5tn1f01RjMKLnWkFVEmoacy2E4_rjf1OtHDvQbDEBZ2IvGzvIspyRow96xJcjofqGE7zJZpae29Nb1TpiA7LyvPVkFnnQPYw",
  sarah: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl2gFDEcQzi-AAhw-Q2xJLI0sMRHkhik5usS84HtJ95pLz0ffdYsfymTDTXWeIQdWJrMJhhnYL9EbWqlkeiFN0onmYuPVSWQDkYrpe6RBGaDIXsCdD75fR57GSfb3hN8MOw-OlCyn1ymTCzl5gf1VwWZdTeIRhf4AXByunHdIPzcWLpDxFVkm4HnYjvWiPK68-zoVut4vSw_yb2O9CDJX4z2MIzh-9NybTSRrwIQa0UaP9wXaHSZWTGGvPYxk7EMi1C2KQ7FcFoh0",
  jaxon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl0jYTVoQTFaItELt5izxqml0BfJj73HcW7dWfHFl3U4sXuUSbHjTRZh7ivvqhIdrqbqvm4vwGeFHKPWYR4uqajBjnzZ2EDoqztl8gmUfRW0aepzJHlqF8Bib8TXg5mK_hSEqykBCpL3djtREpMTL-C7iyYcmBO8-UlSs_vYsBVGowAhNS19zhd_YourrlGZKAgorEOZXvt8zKdhBSfiXAYBWcrk-vaS3muUYGJik5hw9_-LBSiWyiDmBMEH7kWj1TUtXnedkvoy8"
};

const Navigation = () => (
  <nav className="fixed top-0 w-full z-50 bg-neutral-950/40 backdrop-blur-lg shadow-[0_0_20px_rgba(57,255,20,0.1)]">
    <div className="flex justify-between items-center px-12 py-6 max-w-[1920px] mx-auto">
      <div className="text-2xl font-black tracking-tighter text-[#39FF14] italic font-headline">KINETIC</div>
      <div className="hidden md:flex gap-12 items-center font-headline uppercase tracking-widest text-sm">
        <a className="text-neutral-400 hover:text-neutral-100 transition-colors" href="#">Training</a>
        <a className="text-neutral-400 hover:text-neutral-100 transition-colors" href="#">Metrics</a>
        <a className="text-neutral-400 hover:text-neutral-100 transition-colors" href="#">Philosophy</a>
        <a className="text-neutral-400 hover:text-neutral-100 transition-colors" href="#">Locations</a>
      </div>
      <button className="px-8 py-2 bg-gradient-to-r from-primary-fixed to-primary-container text-on-primary-fixed font-headline font-bold uppercase tracking-tighter rounded-md hover:scale-105 hover:shadow-[0_0_15px_rgba(57,255,20,0.4)] transition-all duration-300">
        Join Now
      </button>
    </div>
  </nav>
);

const BiometricTicker = () => (
  <div className="fixed top-24 w-full z-40 pointer-events-none overflow-hidden">
    <div className="flex whitespace-nowrap gap-12 py-2 bg-surface-container-lowest/50 backdrop-blur-sm border-y border-outline-variant/15">
      <div className="flex items-center gap-12 animate-marquee">
        <div className="flex items-center gap-4">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim">SYSTEM_STATUS: OPTIMAL</span>
          <span className="w-1 h-1 bg-tertiary-fixed-dim rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim">VO2_MAX: 64.2 ML/KG/MIN</span>
          <span className="w-1 h-1 bg-tertiary-fixed-dim rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim">POWER_OUTPUT: 420W</span>
          <span className="w-1 h-1 bg-tertiary-fixed-dim rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim">NEURAL_LOAD: 12%</span>
          <span className="w-1 h-1 bg-tertiary-fixed-dim rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim">RECOVERY_INDEX: 98%</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim">SYSTEM_STATUS: OPTIMAL</span>
          <span className="w-1 h-1 bg-tertiary-fixed-dim rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim">VO2_MAX: 64.2 ML/KG/MIN</span>
          <span className="w-1 h-1 bg-tertiary-fixed-dim rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim">POWER_OUTPUT: 420W</span>
          <span className="w-1 h-1 bg-tertiary-fixed-dim rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim">NEURAL_LOAD: 12%</span>
          <span className="w-1 h-1 bg-tertiary-fixed-dim rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim">RECOVERY_INDEX: 98%</span>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0 text-white">
      <div className="absolute inset-0 bg-neutral-950"></div>
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-secondary-container/5 via-transparent to-transparent"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-container to-transparent blur-md streak-animate" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary-container to-transparent blur-sm rotate-12 streak-animate" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-tertiary-container to-transparent blur-lg -rotate-6 streak-animate" style={{ animationDelay: '-6s' }}></div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 floating-shard animate-float-slow opacity-30 rotate-y-25"></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 floating-shard animate-float-medium opacity-20 -rotate-12" style={{ animationDelay: '-5s' }}></div>
    </div>
    <div className="relative z-10 w-full max-w-[1920px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="font-headline text-primary-fixed uppercase tracking-[0.5em] text-sm mb-6 block">PRECISION ENGINEERED</span>
        <h1 className="font-headline text-7xl lg:text-9xl font-black italic tracking-tighter leading-[0.9] text-on-surface mb-8">
          BUILD YOUR <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-tertiary-fixed-dim text-glow">POWER</span>
        </h1>
        <p className="font-body text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
          Step into the future of physical evolution. Kinetic Precision merges advanced biometrics with elite-level mechanical training to redefine the limits of human performance.
        </p>
        <div className="flex flex-wrap gap-6">
          <button className="group relative px-10 py-5 bg-gradient-to-br from-primary-fixed to-primary-container text-on-primary-fixed font-headline font-black text-lg uppercase tracking-wider rounded-md overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(57,255,20,0.3)]">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
          </button>
          <button className="px-10 py-5 border border-outline-variant bg-surface-variant/20 backdrop-blur-md text-on-surface font-headline font-bold text-lg uppercase tracking-wider rounded-md hover:bg-surface-variant/40 transition-colors">
            Explore Lab
          </button>
        </div>
      </div>
      <div className="relative h-[600px] lg:h-[800px] flex items-center justify-center perspective-2000">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute z-30 w-80 h-80 animate-float-slow rotate-y-25 transition-transform duration-700 hover:scale-110">
            <img alt="3D render of futuristic dumbbell" className="w-full h-full object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-primary-container/20" src={IMAGES.dumbbell} />
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
    <div className="absolute top-20 right-10 w-64 h-64 border border-secondary-container/10 rounded-full animate-float-slow -z-10 blur-xl"></div>
    <div className="absolute bottom-20 left-10 w-48 h-48 border border-primary-container/10 rounded-full animate-float-medium -z-10 blur-xl" style={{ animationDelay: '-4s' }}></div>
    <div className="max-w-[1920px] mx-auto px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="font-headline text-secondary-fixed uppercase tracking-widest text-sm">ELITE PROTOCOLS</span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold italic tracking-tighter mt-4">TRAINING CYCLES</h2>
        </div>
        <div className="text-on-surface-variant font-body max-w-md text-right">
          Proprietary workout systems designed for maximum neural recruitment and metabolic efficiency.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 relative group overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/15 glass-panel transition-all duration-500 hover:border-primary-container/40 min-h-[400px]">
          <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-110 transition-transform duration-700">
            <img alt="Weight plates" className="w-full h-full object-cover" src={IMAGES.kettlebell} />
          </div>
          <div className="absolute top-10 right-10 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-float-fast">
            <div className="w-full h-full rounded-full border-4 border-primary-container/40 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary-container"></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent z-10"></div>
          <div className="relative z-20 h-full p-12 flex flex-col justify-end">
            <span className="font-headline text-primary-container text-xs tracking-widest uppercase mb-4">NEURAL DRIVE</span>
            <h3 className="font-headline text-5xl font-bold italic mb-6">STRENGTH PRECISION</h3>
            <p className="text-on-surface-variant font-body text-lg max-w-md mb-8">Heavy mechanical loading focused on myofibrillar hypertrophy and central nervous system adaptation.</p>
            <div className="flex gap-4">
              <span className="px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-headline">HYPERTROPHY</span>
              <span className="px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-headline">POWER</span>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="md:col-span-5 relative group overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/15 glass-panel transition-all duration-500 hover:border-secondary-container/40 min-h-[400px]">
          <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-110 transition-transform duration-700">
            <img alt="Cardio equipment" className="w-full h-full object-cover" src={IMAGES.treadmill} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent z-10"></div>
          <div className="relative z-20 h-full p-12 flex flex-col justify-end">
            <span className="font-headline text-secondary-fixed text-xs tracking-widest uppercase mb-4">METABOLIC FLOW</span>
            <h3 className="font-headline text-4xl font-bold italic mb-4">VASCULAR FLUX</h3>
            <p className="text-on-surface-variant font-body text-base mb-6">High-intensity aerobic conditioning leveraging heart-rate variability and VO2 Max maximization.</p>
            <a className="flex items-center gap-2 text-secondary-fixed font-headline text-sm group/link" href="#">
              VIEW MODULE 
              <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
            </a>
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-container to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </div>
  </section>
);

const Staff = () => (
  <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-20 left-[10%] w-32 h-32 border border-primary-container rounded-full animate-float-slow"></div>
      <div className="absolute bottom-40 right-[15%] w-24 h-24 border border-secondary-container rotate-45 animate-float-medium"></div>
    </div>
    <div className="max-w-[1920px] mx-auto px-12">
      <div className="text-center mb-24">
        <span className="font-headline text-primary-fixed uppercase tracking-[0.4em] text-sm mb-4 block">THE ARCHITECTS</span>
        <h2 className="font-headline text-6xl font-black italic tracking-tighter uppercase">Elite Performance Staff</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        {[
          { name: "VICTOR VANCE", role: "LEAD BIOMETRICIAN", img: IMAGES.victor, color: 'primary-container' },
          { name: "SARAH KINETIC", role: "NEURAL OPTIMIZER", img: IMAGES.sarah, color: 'secondary-fixed' },
          { name: "JAXON REID", role: "KINETIC SPECIALIST", img: IMAGES.jaxon, color: 'tertiary-fixed' }
        ].map(staff => (
          <div key={staff.name} className="group perspective-2000">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface-container transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105">
              <img alt={staff.name} className="w-full h-full object-cover desaturate group-hover:desaturate-0 transition-all duration-700" src={staff.img} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline text-3xl font-bold italic mb-2">{staff.name}</h4>
                <p className={`font-headline text-${staff.color} text-sm tracking-widest uppercase mb-4`}>{staff.role}</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <span className="material-symbols-outlined hover:text-primary-container cursor-pointer">share</span>
                  <span className="material-symbols-outlined hover:text-primary-container cursor-pointer">add_circle</span>
                </div>
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
    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container/5 blur-[150px] -z-10"></div>
    <div className="absolute top-[20%] left-[5%] w-16 h-16 floating-shard animate-float-slow opacity-20"></div>
    <div className="absolute bottom-[20%] right-[10%] w-24 h-24 floating-shard animate-float-medium opacity-10"></div>
    <div className="max-w-[1920px] mx-auto px-12">
      <div className="text-center mb-24">
        <span className="font-headline text-on-surface-variant uppercase tracking-widest text-xs mb-4 block">INVEST IN EVOLUTION</span>
        <h2 className="font-headline text-6xl font-black italic tracking-tighter">PRICING TIERS</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { name: "Core Access", price: "199", features: ["24/7 Lab Access", "Digital Protocol Library", "Standard Biometrics"], color: "on-surface-variant" },
          { name: "Apex Protocol", price: "450", features: ["All Core Features", "Monthly 1:1 Bio-Review", "Cryotherapy & Recovery Suite", "Personalized Neural Mapping"], color: "primary-container", featured: true },
          { name: "Kinetic Black", price: "999", features: ["Full Apex Features", "Daily Performance Chef", "24/7 Dedicated Concierge"], color: "on-surface-variant" }
        ].map(tier => (
          <div key={tier.name} className={`p-10 rounded-xl bg-surface-container-low border ${tier.featured ? 'border-primary-container border-2 shadow-[0_0_40px_rgba(57,255,20,0.1)] -translate-y-4' : 'border-outline-variant/15'} glass-panel transition-all hover:-translate-y-2`}>
            {tier.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-container text-black font-headline text-[10px] font-black uppercase tracking-[0.2em] rounded-full">Most Selected</div>}
            <span className={`font-headline text-sm uppercase tracking-widest text-${tier.color}`}>{tier.name}</span>
            <div className="my-8">
              <span className="font-headline text-5xl font-black italic">${tier.price}</span>
              <span className="text-on-surface-variant font-headline text-sm uppercase">/ Month</span>
            </div>
            <ul className="space-y-6 mb-12">
              {tier.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 border border-outline-variant text-on-surface font-headline font-bold uppercase tracking-wider rounded-md hover:bg-surface-variant transition-colors ${tier.featured ? 'bg-primary-container text-black border-none' : ''}`}>
              {tier.featured ? 'Initialize Apex' : 'Select Tier'}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0e0e0e] w-full border-t border-neutral-800/50 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-32 h-32 floating-shard animate-float-slow opacity-10"></div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-[1920px] mx-auto relative z-10">
      <div className="space-y-6">
        <div className="text-lg font-bold text-[#39FF14] font-headline tracking-tighter uppercase italic">KINETIC</div>
        <p className="font-body font-light tracking-tight text-neutral-400 leading-relaxed">
          The intersection of mechanical physics and human physiology. Forge a body that operates with absolute precision.
        </p>
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-[#39FF14] hover:border-[#39FF14] transition-all" href="#"><span className="material-symbols-outlined text-base">public</span></a>
          <a className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-[#39FF14] hover:border-[#39FF14] transition-all" href="#"><span className="material-symbols-outlined text-base">podcasts</span></a>
        </div>
      </div>
      <div className="space-y-6">
        <h4 className="font-headline text-white font-bold uppercase tracking-widest text-xs">Platform</h4>
        <ul className="space-y-4 font-body font-light text-neutral-400">
          {['Biometrics', 'Neural Sync', 'Locations', 'Staff'].map(l => <li key={l}><a className="hover:text-[#39FF14] transition-all" href="#">{l}</a></li>)}
        </ul>
      </div>
      <div className="space-y-6">
        <h4 className="font-headline text-white font-bold uppercase tracking-widest text-xs">Legal</h4>
        <ul className="space-y-4 font-body font-light text-neutral-400">
          {['Privacy', 'Terms', 'Ethics'].map(l => <li key={l}><a className="hover:text-[#39FF14] transition-all" href="#">{l}</a></li>)}
        </ul>
      </div>
      <div className="space-y-6">
        <h4 className="font-headline text-white font-bold uppercase tracking-widest text-xs">Laboratory News</h4>
        <div className="relative">
          <input className="w-full bg-transparent border-0 border-b border-neutral-800 focus:border-[#39FF14] focus:ring-0 text-sm font-headline text-white py-4 transition-all" placeholder="NEURAL_EMAIL_ADDRESS" type="email" />
          <button className="absolute right-0 bottom-4 text-[#39FF14]"><span className="material-symbols-outlined">chevron_right</span></button>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-headline">© 2024 KINETIC PRECISION. ENGINEERED FOR PERFORMANCE.</p>
      </div>
    </div>
  </footer>
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
    <main className="bg-background min-h-screen text-on-surface font-body overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden text-white">
        <div className="floating-shard w-16 h-16 top-[15%] left-[5%] animate-float-slow opacity-40"></div>
        <div className="floating-shard w-24 h-24 top-[60%] right-[8%] animate-float-medium opacity-20" style={{ animationDelay: '-2s', transform: 'rotate(45deg)' }}></div>
        <div className="floating-shard w-12 h-12 bottom-[10%] left-[12%] animate-float-fast opacity-30" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 border border-primary-container/30 animate-spin-slow rotate-45 blur-[1px]"></div>
        <div className="absolute top-2/3 right-1/3 w-12 h-12 border border-tertiary-container/20 animate-spin-slow rotate-12 blur-[2px]" style={{ animationDuration: '20s' }}></div>
      </div>
      <Navigation />
      <Hero />
      <BiometricTicker />
      <Programs />
      <Staff />
      <Pricing />
      <Footer />
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .text-glow {
          text-shadow: 0 0 15px rgba(57, 255, 20, 0.5);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-float-medium { animation: float 6s ease-in-out infinite; }
        .animate-float-fast { animation: float 4s ease-in-out infinite; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </main>
  );
}
