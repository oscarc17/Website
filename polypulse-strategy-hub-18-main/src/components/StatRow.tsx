const stats = [
  { label: "MARKETS_INDEXED", value: "12,488" },
  { label: "BACKTESTS_RUN", value: "2.4M" },
  { label: "AVG_ALPHA", value: "+18.2%" },
  { label: "ORACLE_UPTIME", value: "99.998%" },
];

export function StatRow() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 border-b border-metal-800">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`p-6 sm:p-8 border-metal-800 ${i < 3 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
        >
          <div className="font-mono text-[10px] text-ghost mb-2 tracking-widest">{s.label}</div>
          <div className="font-mono text-2xl sm:text-3xl tabular-nums text-foreground">{s.value}</div>
        </div>
      ))}
    </section>
  );
}
