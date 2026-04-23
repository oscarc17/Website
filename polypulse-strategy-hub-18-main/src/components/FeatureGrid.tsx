const features = [
  {
    n: "01",
    tag: "RESEARCH",
    title: "Liquidity Depth",
    body: "Analyze order book imbalance across multiple contract tranches. Identify hidden support levels before the market shifts.",
    fill: 35,
  },
  {
    n: "02",
    tag: "BACKTEST",
    title: "Event Simulation",
    body: "Run Monte Carlo simulations against historical Polymarket data. Validate your thesis against volatility spikes and whale movements.",
    fill: 55,
  },
  {
    n: "03",
    tag: "ANALYZE",
    title: "Signal Divergence",
    body: "Detect when real-world data feeds diverge from prediction market prices. Capture the spread before the crowd corrects.",
    fill: 25,
  },
];

export function FeatureGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-b border-metal-800">
      {features.map((f, i) => (
        <div
          key={f.n}
          className={`p-8 sm:p-12 border-metal-800 group hover:bg-metal-900/60 transition-colors ${i < features.length - 1 ? "border-b md:border-b-0 md:border-r" : ""}`}
        >
          <div className="font-mono text-xs text-signal mb-8 tracking-widest">
            [ {f.n} / {f.tag} ]
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">{f.title}</h3>
          <p className="text-ghost font-mono text-sm leading-relaxed mb-8">{f.body}</p>
          <div className="h-1 bg-metal-800 w-full overflow-hidden">
            <div
              className="h-full bg-signal transition-all duration-700 ease-out group-hover:!w-full"
              style={{ width: `${f.fill}%` }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
