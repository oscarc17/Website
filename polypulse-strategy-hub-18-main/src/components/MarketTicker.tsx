const items = [
  { name: "US_ELECTION_2024", val: "REP 52.4%", up: true },
  { name: "BTC_ATH_Q1", val: "YES 71.2%", up: true },
  { name: "FED_CUT_MARCH", val: "YES 12.5%", up: false },
  { name: "GPT5_RELEASE_2025", val: "YES 48.9%", up: true },
  { name: "EURO_CUP_ENG", val: "18.4%", up: false },
  { name: "MARS_LAUNCH_2026", val: "YES 34.1%", up: true },
  { name: "SP500_5500_EOY", val: "YES 67.8%", up: true },
  { name: "AI_AGI_2030", val: "YES 22.6%", up: false },
];

export function MarketTicker() {
  const loop = [...items, ...items];
  return (
    <div className="border-y border-metal-800 bg-metal-900/40 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap py-3">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-3 px-6 font-mono text-[11px] uppercase tracking-widest">
            <span className="text-ghost">{it.name}</span>
            <span className={it.up ? "text-signal" : "text-warn"}>
              {it.up ? "▲" : "▼"} {it.val}
            </span>
            <span className="text-metal-700">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
