export function Stats() {
  return (
    <section id="stats" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.03] to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "99.99%", label: "Uptime SLA" },
            { value: "<50ms", label: "Avg Response Time" },
            { value: "1M+", label: "Deployments Monthly" },
            { value: "30", label: "Years of Expertise" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text tracking-tighter">{stat.value}</div>
              <div className="mt-2 text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
