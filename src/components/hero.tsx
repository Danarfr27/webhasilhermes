export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/10 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-pink-500/8 blur-[100px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-500/8 blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-zinc-400">Serverless Infrastructure — v3.0 Now Live</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6">
          <span className="block">Build the</span>
          <span className="gradient-text">Future of</span>
          <span className="block">Serverless</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed mb-10">
          Three decades of refining the craft of frontend engineering has culminated in this platform.
          Zero configuration. Infinite scale. Absolute precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-base hover:bg-zinc-100 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Deploy Now
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <button className="px-8 py-4 glass rounded-full font-medium text-base text-zinc-300 hover:text-white hover:border-white/20 transition-all duration-300">
            View Documentation
          </button>
        </div>

        {/* Code preview */}
        <div className="mt-20 max-w-3xl mx-auto glass rounded-2xl overflow-hidden glow">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-zinc-500">deploy.config.ts</span>
          </div>
          <pre className="px-5 py-4 text-sm text-zinc-400 overflow-x-auto font-mono">
            <code>{`const hermes = new Serverless({
  runtime: "edge",
  regions: ["iad1", "sfo1", "sin1"],
  scale: "unlimited",
  coldStart: 0
});

hermes.deploy(); // Ready in 0.4ms`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
