import { Database, BarChart3, Clock } from "lucide-react";

const painPoints = [
  {
    icon: Database,
    title: "Your best dial window is hiding in your data",
    description:
      "Thursday 2–4pm converts 2.1x better than Monday morning for your account mix — but you're still loading calendars by gut feel. That pattern is in your GoHighLevel data right now. You just can't see it.",
  },
  {
    icon: BarChart3,
    title: "Your top rep isn't who you think it is",
    description:
      "Raw dial counts hide the real story. The rep with the best cost-per-showed-appointment is buried in a filter nobody checks. Meanwhile you're loading the wrong calendars with your best leads.",
  },
  {
    icon: Clock,
    title: "You're renewing bad lead sources every month",
    description:
      "You know one of your lead sources is underperforming. You just don't know which one — so you renew everything. The answer is in your data. Getting it out currently takes 45 minutes on a good Monday.",
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
            You&apos;re leaving money in your data
            <br />
            <span className="text-gradient">every single week.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The patterns that would change how you run your agency are already in GoHighLevel.
            The problem isn&apos;t the data — it&apos;s that getting to it takes longer than acting on it.
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
