import { useEffect, useState } from "react";

const initial = [40, 45, 42, 68, 62, 58, 75, 82, 94, 88, 72, 79];

export function LiveChart() {
  const [bars, setBars] = useState<number[]>(initial);
  const [shift, setShift] = useState(4.28);

  useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) => {
        const next = [...prev.slice(1)];
        const last = prev[prev.length - 1] ?? 60;
        const drift = (Math.random() - 0.5) * 18;
        const v = Math.max(20, Math.min(98, last + drift));
        next.push(v);
        return next;
      });
      setShift(() => Number(((Math.random() - 0.4) * 8).toFixed(2)));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const maxIdx = bars.indexOf(Math.max(...bars));

  return (
    <div className="bg-metal-900/50 p-4 sm:p-6 flex flex-col h-full">
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="font-mono text-[10px] text-ghost mb-1 tracking-widest">ACTIVE_CONTRACT</div>
          <div className="text-lg sm:text-xl font-bold tracking-tight">US_ELECTION_2024</div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] text-signal mb-1 tracking-widest">PROBABILITY_SHIFT</div>
          <div className={`text-2xl font-mono tabular-nums ${shift >= 0 ? "text-signal" : "text-warn"}`}>
            {shift >= 0 ? "+" : ""}
            {shift.toFixed(2)}%
          </div>
        </div>
      </div>

      <div className="flex-grow min-h-[220px] border border-metal-800 bg-metal-950 p-3 sm:p-4 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        {/* Y axis labels */}
        <div className="absolute left-1 top-2 bottom-2 flex flex-col justify-between font-mono text-[8px] text-ghost/60">
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>
        <div className="relative h-full flex items-end gap-1 pl-6">
          {bars.map((h, i) => (
            <div
              key={`${i}-${h}`}
              className={`w-full transition-all duration-700 ${i === maxIdx ? "bg-signal shadow-signal" : "bg-metal-700 hover:bg-signal-dim"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
        <div className="border border-metal-800 p-3">
          <div className="font-mono text-[10px] text-ghost mb-1 tracking-widest">VOLUME_24H</div>
          <div className="font-mono text-sm tabular-nums text-foreground">$1,482,903.22</div>
        </div>
        <div className="border border-metal-800 p-3">
          <div className="font-mono text-[10px] text-ghost mb-1 tracking-widest">CONFIDENCE</div>
          <div className="font-mono text-sm tabular-nums text-foreground">98.4%_σ</div>
        </div>
      </div>
    </div>
  );
}
