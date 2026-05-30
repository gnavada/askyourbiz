import { Plug, Settings2, MessageSquare, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Plug,
    title: "We connect to your existing tools",
    description:
      "No migration, no new SaaS contract. We build a secure MCP server that connects directly to the APIs and databases you already use — GoHighLevel, Salesforce, Stripe, Airtable, and more. Your data stays where it is.",
    detail: "Setup takes 1–3 days",
  },
  {
    step: "02",
    icon: Settings2,
    title: "We configure your intelligence layer",
    description:
      "We map your business metrics, define your KPIs, and configure the intelligence layer specifically for how your business operates. Appointment-setting agency? We'll configure around cost-per-booking and show rates. E-commerce? LTV and cohort retention.",
    detail: "Tuned to your business model",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "You ask questions in plain English",
    description:
      "Open Claude Desktop, type your question, and get a real answer in seconds. No SQL. No pivot tables. No waiting for a report to run. Just ask what you want to know about your business and get an answer that makes sense.",
    detail: "Answers in seconds, not days",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 bg-navy-800/30 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            We do the heavy lifting.{" "}
            <span className="text-gradient">You ask the questions.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            AskYourBiz.ai is a fully managed service. We build it, maintain it, and
            push updates as your business evolves. You just show up and ask.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-blue-500/30 via-teal-400/30 to-blue-500/30" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy-900 border border-slate-700 flex items-center justify-center text-xs font-bold text-blue-400">
                      {i + 1}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 w-full group-hover:border-blue-500/30 transition-colors duration-300">
                    <p className="text-blue-400/60 font-mono text-xs mb-2">{step.step}</p>
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-teal-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      {step.detail}
                    </div>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="md:hidden mt-4">
                      <ArrowRight className="w-5 h-5 text-slate-600 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-center">
          <p className="text-slate-300 text-sm">
            <span className="text-white font-semibold">Already live with 7FIGURERIA</span> —
            an appointment-setting agency in Waxhaw, NC running 10,000+ dials/week.
            They ask questions about cost-per-booking, show rates, and rep performance daily.
          </p>
        </div>
      </div>
    </section>
  );
}
