import { useEffect, useState } from "react";

const lines = [
  { t: "[ 09:42:01 ]", c: "INIT", text: "loading market US_ELECTION_2024..." },
  { t: "[ 09:42:01 ]", c: "OK", text: "snapshot acquired // 482 trades / 1.4M USDC" },
  { t: "[ 09:42:02 ]", c: "RUN", text: "backtest mean-reversion(window=24h, z=2.1)" },
  { t: "[ 09:42:04 ]", c: "OK", text: "simulated 10,000 paths // sharpe=2.84" },
  { t: "[ 09:42:04 ]", c: "ALERT", text: "divergence detected: oracle vs market = 6.2%" },
  { t: "[ 09:42:05 ]", c: "EDGE", text: "expected_value=+0.082 // kelly=0.14" },
];

const tone: Record<string, string> = {
  INIT: "text-ghost",
  OK: "text-signal",
  RUN: "text-foreground",
  ALERT: "text-warn",
  EDGE: "text-signal",
};

export function StrategyConsole() {
  const [shown, setShown] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setShown((n) => (n >= lines.length ? 1 : n + 1));
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-b border-metal-800 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-5 p-8 sm:p-12 lg:p-16 border-metal-800 lg:border-r flex flex-col justify-center">
        <div className="font-mono text-xs text-signal mb-6 tracking-widest">[ STRATEGY_LAB ]</div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6 leading-none uppercase">
          Test before<br />you commit.
        </h2>
        <p className="text-ghost font-mono text-sm leading-relaxed max-w-md">
          Wire your hypothesis into the engine and watch it survive 10,000 simulated futures.
          PolyPulse runs your strategy against every resolved Polymarket event since launch —
          surfacing edge, drawdown, and Kelly-optimal sizing in real time.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-7 p-4 sm:p-6 bg-metal-900/30">
        <div className="border border-metal-800 bg-metal-950 font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-metal-800 text-[10px] text-ghost uppercase tracking-widest">
            <span className="size-2 rounded-full bg-warn" />
            <span className="size-2 rounded-full bg-signal" />
            <span className="size-2 rounded-full bg-metal-700" />
            <span className="ml-3">~/polypulse/strategy.lab</span>
          </div>
          <div className="p-4 sm:p-6 min-h-[280px] space-y-1.5">
            {lines.slice(0, shown).map((l, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-ghost shrink-0">{l.t}</span>
                <span className={`${tone[l.c]} shrink-0 w-12`}>{l.c}</span>
                <span className="text-foreground/80">{l.text}</span>
              </div>
            ))}
            <div className="flex gap-3 pt-1">
              <span className="text-signal">$</span>
              <span className="bg-signal text-metal-950 px-1 animate-blink">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
