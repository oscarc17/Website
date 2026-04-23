export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-b border-metal-800">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
      <div className="relative px-6 sm:px-12 py-24 sm:py-32 text-center max-w-4xl mx-auto">
        <div className="font-mono text-xs text-signal mb-6 tracking-widest">
          [ READY / PORT_OPEN ]
        </div>
        <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none mb-8 uppercase text-balance">
          Stop guessing.<br />
          <span className="text-signal">Start measuring.</span>
        </h2>
        <p className="text-ghost font-mono text-sm sm:text-base max-w-xl mx-auto mb-12">
          Free during alpha. No node connection required to explore the terminal.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-signal text-metal-950 px-8 py-4 font-bold font-mono text-sm hover:brightness-110 transition-all shadow-signal uppercase tracking-widest">
            Initialize_Terminal
          </button>
          <button className="border border-metal-700 px-8 py-4 font-bold font-mono text-sm hover:bg-metal-900 transition-all uppercase tracking-widest">
            Read_Whitepaper
          </button>
        </div>
      </div>
    </section>
  );
}
