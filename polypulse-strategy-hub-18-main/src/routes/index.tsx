import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { MarketTicker } from "@/components/MarketTicker";
import { LiveChart } from "@/components/LiveChart";
import { FeatureGrid } from "@/components/FeatureGrid";
import { StatRow } from "@/components/StatRow";
import { StrategyConsole } from "@/components/StrategyConsole";
import { CtaSection } from "@/components/CtaSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PolyPulse — Polymarket Research Engine" },
      {
        name: "description",
        content:
          "Institutional-grade research, backtesting and analytics for Polymarket. Decode order books, simulate strategies, and capture signal divergence.",
      },
      { property: "og:title", content: "PolyPulse — Polymarket Research Engine" },
      {
        property: "og:description",
        content:
          "Research, test and analyse your Polymarket strategy. High-frequency primitives for prediction market specialists.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      <SiteNav />

      <main className="flex-grow">
        {/* HERO */}
        <section id="terminal" className="grid grid-cols-12 border-b border-metal-800 relative">
          <div className="absolute inset-0 scanline opacity-40 pointer-events-none" />
          <div className="col-span-12 lg:col-span-7 p-8 sm:p-12 lg:p-16 lg:border-r border-metal-800 flex flex-col justify-center relative">
            <div className="font-mono text-signal text-xs sm:text-sm mb-6 flex items-center gap-3 tracking-widest">
              <span className="h-px w-8 bg-signal" />
              INSTITUTIONAL PREDICTION LOGISTICS
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-balance uppercase">
              Decode the<br />
              <span className="text-signal">Aggregate.</span>
            </h1>
            <p className="max-w-[48ch] text-ghost text-base sm:text-lg mb-10 font-mono leading-relaxed">
              High-frequency research primitives for Polymarket. Analyze order book depth,
              backtest liquidity events, and execute with surgical precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-signal text-metal-950 px-6 sm:px-8 py-4 font-bold font-mono text-sm hover:brightness-110 transition-all shadow-signal uppercase tracking-widest">
                Initialize_Terminal
              </button>
              <button className="border border-metal-700 px-6 sm:px-8 py-4 font-bold font-mono text-sm hover:bg-metal-900 transition-all uppercase tracking-widest">
                View_Markets
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <LiveChart />
          </div>
        </section>

        <MarketTicker />
        <StatRow />
        <section id="research"><FeatureGrid /></section>
        <section id="strategies"><StrategyConsole /></section>
        <CtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}
