const integrations = [
  { name: "GoHighLevel", category: "CRM / Dialer", emoji: "🎯" },
  { name: "Salesforce", category: "CRM", emoji: "☁️" },
  { name: "Stripe", category: "Payments", emoji: "💳" },
  { name: "Airtable", category: "Database", emoji: "📊" },
  { name: "Shopify", category: "E-commerce", emoji: "🛍️" },
  { name: "HubSpot", category: "Marketing CRM", emoji: "🔶" },
  { name: "Twilio", category: "Comms", emoji: "📞" },
  { name: "PostgreSQL", category: "Database", emoji: "🐘" },
  { name: "MySQL", category: "Database", emoji: "🗄️" },
  { name: "Google Sheets", category: "Spreadsheet", emoji: "📝" },
];

export default function Integrations() {
  return (
    <section id="integrations" className="relative py-24 bg-navy-800/30 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Integrations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Connects to the tools{" "}
            <span className="text-gradient">you already use</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We build custom MCP servers for any API-accessible data source. If your
            data lives there, we can connect to it. No migration required.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-slate-800 bg-slate-900/30 hover:border-blue-500/30 hover:bg-slate-800/40 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl group-hover:border-blue-500/20 transition-colors duration-300">
                {integration.emoji}
              </div>
              <div className="text-center">
                <p className="text-white text-sm font-semibold">{integration.name}</p>
                <p className="text-slate-500 text-xs mt-0.5">{integration.category}</p>
              </div>
            </div>
          ))}

          {/* Plus more card */}
          <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-dashed border-slate-700 bg-slate-900/20 hover:border-blue-500/30 transition-colors duration-300 cursor-default">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-teal-400/10 border border-blue-500/20 flex items-center justify-center">
              <span className="text-xl font-bold text-blue-400">+</span>
            </div>
            <div className="text-center">
              <p className="text-blue-400 text-sm font-semibold">And more</p>
              <p className="text-slate-500 text-xs mt-0.5">Any API</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-slate-800 bg-slate-900/20 text-center">
          <p className="text-slate-400 text-sm">
            <span className="text-white font-medium">Don&apos;t see your tool listed?</span>{" "}
            If it has an API, we can build the connection. Most custom integrations are included
            in the standard setup at no extra charge.{" "}
            <a href="#contact" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
              Ask us about your stack.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
