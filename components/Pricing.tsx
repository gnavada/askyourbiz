import { Check, Zap, Rocket, Building2, Calendar, ClipboardList } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$297",
    period: "/month",
    description: "One data source, fully configured. Ask plain-English questions and get answers from your live data — starting this week.",
    icon: Zap,
    highlight: false,
    features: [
      "1 data source connected (CRM, dialer, or database)",
      "Up to 30 pre-configured query patterns",
      "Monthly maintenance and query updates",
      "Full setup and Claude Desktop configuration",
      "Email support with 48-hour response",
    ],
    cta: "Start with a Free Data Audit",
    ctaHref: "#contact",
  },
  {
    name: "Growth",
    price: "$597",
    period: "/month",
    description: "Multiple data sources, cross-tool intelligence. For operators who want a complete picture from all their business tools in one place.",
    icon: Rocket,
    highlight: true,
    features: [
      "Up to 3 data sources connected",
      "Unlimited configured query patterns",
      "Bi-weekly maintenance and updates",
      "Custom KPI and metric definitions",
      "Priority email support (24-hour response)",
      "Quarterly strategy call — what to ask next",
    ],
    cta: "Start with a Free Data Audit",
    ctaHref: "#contact",
    badge: "Most Popular",
  },
  {
    name: "Custom",
    price: "Let's talk",
    period: "",
    description: "Multi-location agencies, 4+ sub-accounts, or complex data needs. We scope a setup built around your operation and price it to the value it unlocks.",
    icon: Building2,
    highlight: false,
    features: [
      "4+ data sources or sub-accounts connected",
      "Unlimited query patterns across all locations",
      "Dedicated onboarding and configuration",
      "Custom KPI, metric, and rollup definitions",
      "Priority support with a custom response SLA",
      "Cross-location benchmarking and reporting",
    ],
    cta: "Book a Scoping Call",
    ctaHref: "#contact",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-navy-800/30 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, predictable pricing.{" "}
            <span className="text-gradient">No setup surprises.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every plan starts with a free data audit. We&apos;ll assess your current setup,
            identify what&apos;s possible, and recommend the right tier — no commitment required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={i}
                className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                  plan.highlight
                    ? "border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-slate-900/60 shadow-xl shadow-blue-500/10"
                    : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs font-bold shadow-lg shadow-blue-500/30">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      plan.highlight
                        ? "bg-blue-500 shadow-lg shadow-blue-500/30"
                        : "bg-slate-800 border border-slate-700"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${plan.highlight ? "text-white" : "text-slate-400"}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-slate-400">{plan.period}</span>}
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlight ? "bg-blue-500/20" : "bg-slate-800"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${plan.highlight ? "text-blue-400" : "text-slate-400"}`}
                        />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.highlight
                      ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                  }`}
                >
                  <ClipboardList className="w-4 h-4" />
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Entry point note */}
        <div className="text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-white font-semibold">Every plan starts with a Free Data Audit</span>
          </div>
          <p className="text-slate-400 text-sm">
            We audit your current data setup, identify what&apos;s queryable, and show you exactly
            what you&apos;d be able to ask — before you commit to anything. No sales pressure,
            no obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
