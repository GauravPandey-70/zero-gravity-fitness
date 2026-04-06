'use client';

import { Navigation, BiometricTicker, Footer, SharedStyles } from '../../components/SharedUI';

const LocationCard = ({ city, coordinates, status, sector }) => (
  <div className="relative p-12 bg-neutral-900/40 border border-neutral-800/15 rounded-xl glass-panel group hover:border-[#39FF14]/40 transition-all duration-700">
    <div className="absolute top-0 right-0 p-8">
       <span className="material-symbols-outlined text-[#39FF14] text-3xl opacity-20 group-hover:opacity-100 transition-opacity">radar</span>
    </div>
    <span className="font-headline text-[#39FF14] text-xs tracking-[0.4em] mb-4 block uppercase leading-none">{sector}</span>
    <h3 className="font-headline text-5xl font-black italic mb-6 text-white uppercase tracking-tighter">{city}</h3>
    <div className="space-y-4 mb-12">
       <div className="flex justify-between items-center text-neutral-500 font-headline text-xs tracking-widest uppercase">
          <span>COORDINATES</span>
          <span>{coordinates}</span>
       </div>
       <div className="flex justify-between items-center text-neutral-500 font-headline text-xs tracking-widest uppercase">
          <span>SYSTEM_SYNC</span>
          <span className="text-[#39FF14]">{status}</span>
       </div>
    </div>
    <button className="w-full py-4 border border-neutral-800 text-white font-headline font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-[#39FF14] hover:text-black transition-all">
       Request Access
    </button>
  </div>
);

export default function Locations() {
  return (
    <main className="bg-black min-h-screen text-white font-body overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <SharedStyles />
      <Navigation />
      <BiometricTicker />
      
      <section className="pt-48 pb-32 px-12 max-w-[1920px] mx-auto min-h-screen">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <span className="font-headline text-[#39FF14] uppercase tracking-[0.4em] text-sm mb-4 block">GLOBAL_SYNC</span>
            <h1 className="font-headline text-7xl font-black italic tracking-tighter uppercase text-white">Advanced Labs</h1>
            <p className="text-neutral-400 font-body text-xl max-w-2xl mt-8 leading-relaxed">
              Kinetic Precision operates across high-security laboratory sectors in key geometric hubs. All facilities are synchronized via the Neural Cloud.
            </p>
          </div>
          <div className="relative p-8 border border-neutral-800 rounded-lg bg-neutral-900/50 backdrop-blur-md">
             <div className="font-headline text-[10px] tracking-[0.3em] uppercase text-neutral-500 mb-4">SYSTEM_TIME</div>
             <div className="font-headline text-4xl font-bold italic text-[#39FF14] tabular-nums tracking-widest">
                {new Date().toLocaleTimeString('en-US', { hour12: false })}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <LocationCard 
            city="ZURICH" 
            coordinates="47.3769° N, 8.5417° E" 
            status="ONLINE" 
            sector="SECTOR_ALPHA" 
          />
          <LocationCard 
            city="TOKYO" 
            coordinates="35.6762° N, 139.6503° E" 
            status="OPTIMAL" 
            sector="SECTOR_BETA" 
          />
          <LocationCard 
            city="NEW YORK" 
            coordinates="40.7128° N, 74.0060° W" 
            status="SYNCED" 
            sector="SECTOR_GAMMA" 
          />
          <LocationCard 
            city="DUBAI" 
            coordinates="25.2048° N, 55.2708° E" 
            status="ONLINE" 
            sector="SECTOR_DELTA" 
          />
          <LocationCard 
            city="SINGAPORE" 
            coordinates="1.3521° N, 103.8198° E" 
            status="OPTIMAL" 
            sector="SECTOR_EPSILON" 
          />
          <LocationCard 
            city="LONDON" 
            coordinates="51.5074° N, 0.1278° W" 
            status="SYNCED" 
            sector="SECTOR_ZETA" 
          />
        </div>

        <div className="p-24 border border-dashed border-neutral-800 rounded-xl text-center group transition-colors hover:border-[#39FF14]/40">
           <span className="material-symbols-outlined text-neutral-800 text-8xl mb-8 group-hover:text-[#39FF14]/20 transition-colors">language</span>
           <h2 className="font-headline text-3xl font-black italic text-neutral-700 uppercase tracking-widest mb-4">Searching for new geometric hubs...</h2>
           <p className="font-headline text-xs tracking-widest text-neutral-800">EXPANSION_PHASE_04_INITIATED</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
