export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold">H</div>
              <span className="text-lg font-semibold">HermesProtocol</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The future of serverless infrastructure. Built with 30 years of craft.
            </p>
          </div>
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Documentation", "Changelog"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
            {
              title: "Resources",
              links: ["API Reference", "Community", "Status", "Support"],
            },
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-zinc-300">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, li) => (
                  <li key={li}>
                    <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-zinc-600">© 2025 HermesProtocol. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Twitter", "GitHub", "Discord"].map((social, idx) => (
              <a key={idx} href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
