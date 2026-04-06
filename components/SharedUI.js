'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const IMAGES = {
  dumbbell: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXAO__F3bjDWdkfX3pE4tCS4A7kWWmx0BxqEmD_GRjzV1lDCWjuXX8dHIqD8WbpJHbqPtkoSrNQ-_70rsFDVMxqkMYYRMOwfoJsGi1bWRXM5mb9QiIDFrzuvWBtSYSuYqTnb_oZoEb1VNLotK1dxxAvbtPlHXXcA_p9puoTwxGeYrhCCOIc88ry_pZAXwE82Nvt185mayzQIQ7vSE2tlgVpD_9q0RrZCWrJX2sr12_yEg7BK6zMYEdO1WVvWoQnQehZmROKQXp56Q",
  treadmill: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtlgZotKmvUZI6H5savJBduPnUf0PIFXQU65YNtazgw0BYrYWunkQRzM2tERYYOS5uHspXz8gBO5o1h8i8HufDX8CnGHiDNYA6uzZFoUtFpI2VBXxcX6rbAnjcxGOe-1AYP7dzgLv96MVusG4nq7oB-Fo665x9GyxRm2NhQ53I7LmNMTdiJGUC1cN3e6Xbm3RsbL84n-9ppGDvlGxF9HOGOYjTcV1P8oeJy7cswrBe1l35oKnCWv408LCZEWdvKG7f6btajThbwRk",
  kettlebell: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtKZvo8zxK-By41uz52vmHPFvPCqZZIz_m5k0hYl7lGQKaVP91_Cz1KMzMBMPI1PKPOlyssEQ2gEODLU3UljgqOk11BPkXZqNuaYDqoQcA2fDr_l2hIhxniaNbja_b5szOlkFUTkIgM2aKk84EROjO_OV1WI8MRATrIgp5oeGAIBiuNYiP9X_t4yGzCV1GkFAacRSDBdi4F6uZMBjbbEZC26uPa9wa12RZgHOKk_L7loq1KOEfQv3hUsLXsx1EL8si9-ZSMl8pMVg",
  victor: "https://lh3.googleusercontent.com/aida-public/AB6AXuACwF7eARrttVV2zAKwQr6kA00y_XDWmRYhiJyq7FA6KD06exn-TS_D1vnG08yPgtL-tgegdREC_61yJ82SUh0YI4oK6jtGXrUCaj0CKXgRRsnPGz5ekhegQJlZGd6PLk6Z4bkBwCGZbJgD4Ap4vMNQbsATeCMRj_NVexWmqVxNnsI5tn1f01RjMKLnWkFVEmoacy2E4_rjf1OtHDvQbDEBZ2IvGzvIspyRow96xJcjofqGE7zJZpae29Nb1TpiA7LyvPVkFnnQPYw",
  sarah: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl2gFDEcQzi-AAhw-Q2xJLI0sMRHkhik5usS84HtJ95pLz0ffdYsfymTDTXWeIQdWJrMJhhnYL9EbWqlkeiFN0onmYuPVSWQDkYrpe6RBGaDIXsCdD75fR57GSfb3hN8MOw-OlCyn1ymTCzl5gf1VwWZdTeIRhf4AXByunHdIPzcWLpDxFVkm4HnYjvWiPK68-zoVut4vSw_yb2O9CDJX4z2MIzh-9NybTSRrwIQa0UaP9wXaHSZWTGGvPYxk7EMi1C2KQ7FcFoh0",
  jaxon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl0jYTVoQTFaItELt5izxqml0BfJj73HcW7dWfHFl3U4sXuUSbHjTRZh7ivvqhIdrqbqvm4vwGeFHKPWYR4uqajBjnzZ2EDoqztl8gmUfRW0aepzJHlqF8Bib8TXg5mK_hSEqykBCpL3djtREpMTL-C7iyYcmBO8-UlSs_vYsBVGowAhNS19zhd_YourrlGZKAgorEOZXvt8zKdhBSfiXAYBWcrk-vaS3muUYGJik5hw9_-LBSiWyiDmBMEH7kWj1TUtXnedkvoy8"
};

export const Navigation = () => (
  <nav className="fixed top-0 w-full z-50 bg-neutral-950/40 backdrop-blur-lg shadow-[0_0_20px_rgba(57,255,20,0.1)]">
    <div className="flex justify-between items-center px-12 py-6 max-w-[1920px] mx-auto">
      <Link href="/">
        <div className="text-2xl font-black tracking-tighter text-[#39FF14] italic font-headline cursor-pointer">KINETIC</div>
      </Link>
      <div className="hidden md:flex gap-12 items-center font-headline uppercase tracking-widest text-sm">
        <Link href="/training"><span className="text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer">Training</span></Link>
        <Link href="/metrics"><span className="text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer">Metrics</span></Link>
        <Link href="/philosophy"><span className="text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer">Philosophy</span></Link>
        <Link href="/locations"><span className="text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer">Locations</span></Link>
      </div>
      <Link href="/signup">
        <button className="px-8 py-2 bg-gradient-to-r from-[#39FF14] to-[#1fd100] text-black font-headline font-bold uppercase tracking-tighter rounded-md hover:scale-105 hover:shadow-[0_0_15px_rgba(57,255,20,0.4)] transition-all duration-300">
          Join Now
        </button>
      </Link>
    </div>
  </nav>
);

export const BiometricTicker = () => (
  <div className="fixed top-24 w-full z-40 pointer-events-none overflow-hidden">
    <div className="flex whitespace-nowrap gap-12 py-2 bg-neutral-900/50 backdrop-blur-sm border-y border-neutral-800/15">
      <div className="flex items-center gap-12 animate-marquee">
        <div className="flex items-center gap-4">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-neutral-500">SYSTEM_STATUS: OPTIMAL</span>
          <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-neutral-500">VO2_MAX: 64.2 ML/KG/MIN</span>
          <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-neutral-500">POWER_OUTPUT: 420W</span>
          <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-neutral-500">NEURAL_LOAD: 12%</span>
          <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-neutral-500">RECOVERY_INDEX: 98%</span>
        </div>
        {/* Repeat for continuous scroll */}
        <div className="flex items-center gap-4">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-neutral-500">SYSTEM_STATUS: OPTIMAL</span>
          <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-neutral-500">VO2_MAX: 64.2 ML/KG/MIN</span>
          <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-neutral-500">POWER_OUTPUT: 420W</span>
          <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-neutral-500">NEURAL_LOAD: 12%</span>
          <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-neutral-500">RECOVERY_INDEX: 98%</span>
        </div>
      </div>
    </div>
  </div>
);

export const Footer = () => (
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
          <input className="w-full bg-transparent border-0 border-b border-neutral-800 focus:border-[#39FF14] focus:ring-0 text-sm font-headline text-white py-4 transition-all" placeholder="NEURAL_EMAIL" type="email" />
          <button className="absolute right-0 bottom-4 text-[#39FF14]"><span className="material-symbols-outlined">chevron_right</span></button>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-headline">© 2024 KINETIC PRECISION. ENGINEERED FOR PERFORMANCE.</p>
      </div>
    </div>
  </footer>
);

export const SharedStyles = () => (
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
        .perspective-2000 {
          perspective: 2000px;
        }
        .rotate-y-25 {
          transform: rotateY(25deg);
        }
        .glass-panel {
          background: rgba(23, 23, 23, 0.4);
          backdrop-filter: blur(12px);
        }
    `}</style>
);
