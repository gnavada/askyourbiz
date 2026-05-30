import { Calendar, ClipboardList, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-navy-800/80 to-teal-600/10" />
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Taking new clients — limited availability
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Stop guessing what&apos;s happening
          <br />
          <span className="text-gradient">in your business.</span>
        </h2>

        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Your data is already in your tools. We connect it to AI so you can ask questions
          and get answers — in plain English, in seconds. Start with a free data audit.
          No commitment, no sales pressure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Calendar className="w-5 h-5" />
            Book a Discovery Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:guru@askyourbiz.ai"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold text-base border border-slate-700 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <ClipboardList className="w-5 h-5" />
            Request a Free Data Audit
          </a>
        </div>

        <div className="mt-12 pt-10 border-t border-slate-800/60">
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: "1-3 days", label: "Typical setup time" },
              { value: "No code", label: "Required from you" },
              { value: "Month-to-month", label: "Cancel anytime" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold text-white">{item.value}</div>
                <div className="text-slate-500 text-xs mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
