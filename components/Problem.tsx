import { Database, BarChart3, Clock } from "lucide-react";

const painPoints = [
  {
    icon: Database,
    title: "Your data is scattered across SaaS tools",
    description:
      "GoHighLevel, Salesforce, Stripe, Airtable — each holds a piece of the picture. Getting a complete view means logging into four platforms and manually stitching together exports.",
  },
  {
    icon: BarChart3,
    title: "Dashboards show the past, not the answers",
    description:
      "Pre-built reports answer the questions someone else thought you'd ask. The question you actually have — the specific, urgent, nuanced one — is always one pivot table away from impossible.",
  },
  {
    icon: Clock,
    title: "You're making decisions on stale gut feel",
    description:
      "By the time your analyst pulls the data, formats it, and sends the slide deck, the decision window has closed. Waiting days for answers you need in minutes is costing you money.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your data is trapped.
            <br />
            <span className="text-gradient">Your business decisions shouldn&apos;t be.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            You invested in the tools. The data is in there. But getting a straight answer
            from your own business data should not require a data analyst, a BI platform,
            or a three-day turnaround.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                className="group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-blue-500/30 hover:bg-slate-800/40 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{point.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
