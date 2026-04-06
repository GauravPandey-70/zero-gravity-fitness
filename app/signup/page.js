'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navigation, BiometricTicker, Footer, SharedStyles } from '../../components/SharedUI';
import { signUp } from '../actions/auth';

const InputField = ({ label, name, type = "text", placeholder, required = true }) => (
  <div className="space-y-2">
    <label className="font-headline text-[10px] tracking-[0.3em] uppercase text-neutral-500 block ml-1">{label}</label>
    <input 
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full bg-neutral-900/50 border border-neutral-800 rounded-sm px-6 py-4 font-body text-white placeholder:text-neutral-700 focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14]/20 transition-all outline-none"
    />
  </div>
);

const SelectField = ({ label, name, options }) => (
  <div className="space-y-2">
    <label className="font-headline text-[10px] tracking-[0.3em] uppercase text-neutral-500 block ml-1">{label}</label>
    <select 
      name={name}
      className="w-full bg-neutral-900/50 border border-neutral-800 rounded-sm px-6 py-4 font-body text-white focus:border-[#39FF14] transition-all outline-none appearance-none"
    >
      {options.map(opt => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
    </select>
  </div>
);

export default function Signup() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const result = await signUp(formData);

    setLoading(false);
    if (result?.error) {
      setStatus({ type: 'error', message: result.error });
    } else {
      setStatus({ type: 'success', message: 'Evolution Initialized. Please verify your neural email to proceed.' });
    }
  };

  return (
    <main className="bg-black min-h-screen text-white font-body overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <SharedStyles />
      <Navigation />
      <BiometricTicker />
      
      <section className="pt-48 pb-32 px-12 max-w-[1920px] mx-auto min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center w-full max-w-6xl">
           <div>
              <span className="font-headline text-[#39FF14] uppercase tracking-[0.5em] text-xs mb-6 block">REGISTRATION_SECURE</span>
              <h1 className="font-headline text-7xl font-black italic tracking-tighter uppercase text-white leading-none mb-8">
                 Initialize <br/> Your <span className="text-glow">Evolution</span>
              </h1>
              <p className="text-neutral-400 font-body text-xl max-w-lg leading-relaxed">
                 By initializing your neural profile, you grant Kinetic Precision access to your biometric data for the purpose of mechanical loading optimization.
              </p>
              
              <div className="mt-12 space-y-8">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-[#39FF14]">
                       <span className="material-symbols-outlined text-xl">biotech</span>
                    </div>
                    <div>
                       <h4 className="font-headline text-sm font-bold tracking-widest uppercase">Bio-Scan Required</h4>
                       <p className="text-neutral-500 text-xs">First scan will be initiated in-lab Sector Zurich.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-[#39FF14]">
                       <span className="material-symbols-outlined text-xl">security</span>
                    </div>
                    <div>
                       <h4 className="font-headline text-sm font-bold tracking-widest uppercase">Neural Encryption</h4>
                       <p className="text-neutral-500 text-xs">Your biometric signature is encrypted at the synapse level.</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="relative p-12 bg-neutral-900/40 border border-neutral-800/15 rounded-xl glass-panel shadow-[0_0_50px_rgba(57,255,20,0.05)]">
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-dashed border-[#39FF14]/20 rounded-full animate-spin-slow"></div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                 <div className="grid grid-cols-2 gap-6">
                    <InputField label="Full_Name" name="fullName" placeholder="VICTOR VANCE" />
                    <InputField label="Neural_Email" name="email" placeholder="VANCE@KINETIC.LAB" type="email" />
                 </div>
                 
                 <InputField label="Security_Key" name="password" placeholder="********" type="password" />

                 <SelectField 
                    label="Primary_Evolution_Goal" 
                    name="goal"
                    options={["Neural Syncing", "Myofibrillar Hypertrophy", "Metabolic Flux", "Peak Torque Evolution"]} 
                 />

                 <SelectField 
                    label="Laboratory_Sector" 
                    name="sector"
                    options={["Sector_Alpha_Zurich", "Sector_Beta_Tokyo", "Sector_Gamma_NewYork", "Sector_Delta_Dubai"]} 
                 />

                 {status && (
                    <div className={`p-4 rounded-sm border ${status.type === 'error' ? 'border-red-500/50 bg-red-500/10 text-red-500' : 'border-[#39FF14]/50 bg-[#39FF14]/10 text-[#39FF14]'} font-headline text-xs tracking-widest uppercase`}>
                       {status.message}
                    </div>
                 )}

                 <div className="pt-8">
                    <button 
                       disabled={loading}
                       type="submit"
                       className="w-full py-5 bg-[#39FF14] text-black font-headline font-black text-lg uppercase tracking-[0.2em] rounded-sm hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 transition-all shadow-[0_0_30px_rgba(57,255,20,0.2)]"
                    >
                       {loading ? 'INITIALIZING...' : 'Initialize Evolution'}
                    </button>
                    <p className="text-center mt-6 font-headline text-[10px] tracking-widest text-neutral-600 uppercase">
                       By clicking, you accept the Kinetic Protocols & Ethics sync.
                    </p>
                 </div>
              </form>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
