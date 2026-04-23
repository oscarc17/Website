import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { href: "#terminal", label: "TERMINAL" },
  { href: "#strategies", label: "STRATEGIES" },
  { href: "#research", label: "RESEARCH" },
  { href: "#docs", label: "DOCS" },
];

export function SiteNav() {
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    const id = setInterval(() => {
      setLatency(Math.floor(8 + Math.random() * 22));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <nav className="border-b border-metal-800 h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 bg-metal-950/85 backdrop-blur-md z-50">
      <div className="flex items-center gap-4 sm:gap-8">
        <Link to="/" className="font-mono font-bold tracking-tighter text-base sm:text-xl flex items-center gap-2">
          <span className="size-3 bg-signal shadow-signal" />
          POLYPULSE
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-mono text-ghost">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-signal/70 bg-signal/5 px-2 py-1 border border-signal/20">
          <span className="size-1.5 rounded-full bg-signal animate-pulse-dot" />
          LATENCY: {latency.toString().padStart(2, "0")}MS
        </div>
        <button className="font-mono text-xs border border-foreground px-3 sm:px-4 py-2 hover:bg-foreground hover:text-metal-950 transition-all uppercase tracking-widest">
          Connect Node
        </button>
      </div>
    </nav>
  );
}
