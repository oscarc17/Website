export function SiteFooter() {
  return (
    <footer className="border-t border-metal-800 px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center text-[10px] font-mono text-ghost uppercase tracking-widest">
      <div className="flex flex-wrap gap-4 sm:gap-6">
        <span>
          Status: <span className="text-signal">Operational</span>
        </span>
        <span>Network: Polygon_Mainnet</span>
        <span className="hidden sm:inline">Epoch: 842.01</span>
      </div>
      <div className="flex gap-4">
        <span className="text-foreground">v4.2.0-alpha</span>
        <span>© 2026 PolyPulse Systems</span>
      </div>
    </footer>
  );
}
