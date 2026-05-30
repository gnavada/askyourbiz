"use client";

import { useState } from "react";
import { Phone, TrendingUp, Users, ShoppingBag } from "lucide-react";

const verticals = [
  {
    id: "appointment",
    label: "Appointment-Setting",
    icon: Phone,
    color: "blue",
    questions: [
      "What was my cost per booked appointment last week?",
      "Which rep had the highest conversion rate this month?",
      "What time slots have the lowest show rates?",
      "How many appointments did we book per client campaign?",
      "Which leads in the pipeline have been sitting over 14 days?",
      "What's my dial-to-connect ratio by day of week?",
    ],
  },
  {
    id: "financial",
    label: "Financial Advisors",
    icon: TrendingUp,
    color: "teal",
    questions: [
      "How many discovery calls converted to clients last quarter?",
      "What's my average AUM per new client this year?",
      "Which referral sources are driving the most qualified leads?",
      "How many clients haven't had a review call in over 6 months?",
      "What's my pipeline value by stage right now?",
      "Which prospects have been in 'proposal sent' the longest?",
    ],
  },
  {
    id: "recruiters",
    label: "Recruiters",
    icon: Users,
    color: "purple",
    questions: [
      "How many placements did we make this quarter vs last?",
      "What's my average time-to-fill by job category?",
      "Which clients have open roles we haven't submitted candidates for?",
      "What's my submission-to-interview ratio this month?",
      "Which candidates in my pipeline have been inactive for 30+ days?",
      "How many reqs did we close vs lose to competitors this year?",
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: ShoppingBag,
    color: "orange",
    questions: [
      "What's my average order value this week vs last week?",
      "Which products have the highest return rates?",
      "How many customers made a second purchase within 90 days?",
      "What's my customer acquisition cost by channel this month?",
      "Which SKUs are trending down in conversion rate?",
      "How does LTV differ between first-touch Facebook vs Google?",
    ],
  },
];

const colorMap: Record<string, { tab: string; active: string; dot: string; card: string }> = {
  blue: {
    tab: "border-blue-500 text-blue-400",
    active: "bg-blue-500/10 border-blue-500/30",
    dot: "bg-blue-400",
    card: "hover:border-blue-500/30",
  },
  teal: {
    tab: "border-teal-400 text-teal-400",
    active: "bg-teal-400/10 border-teal-400/30",
    dot: "bg-teal-400",
    card: "hover:border-teal-400/30",
  },
  purple: {
    tab: "border-purple-400 text-purple-400",
    active: "bg-purple-400/10 border-purple-400/30",
    dot: "bg-purple-400",
    card: "hover:border-purple-400/30",
  },
  orange: {
    tab: "border-orange-400 text-orange-400",
    active: "bg-orange-400/10 border-orange-400/30",
    dot: "bg-orange-400",
    card: "hover:border-orange-400/30",
  },
};

export default function SampleQuestions() {
  const [activeVertical, setActiveVertical] = useState("appointment");
  const active = verticals.find((v) => v.id === activeVertical)!;
  const colors = colorMap[active.color];

  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What You Can Ask
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real questions.{" "}
            <span className="text-gradient">Real answers.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Questions you&apos;ve always wanted answers to — now answerable in seconds.
            Select your industry to see examples.
          </p>
        </div>

        {/* Vertical tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {verticals.map((v) => {
            const Icon = v.icon;
            const isActive = v.id === activeVertical;
            const c = colorMap[v.color];
            return (
              <button
                key={v.id}
                onClick={() => setActiveVertical(v.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? `${c.active} ${c.tab}`
                    : "border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 bg-slate-900/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                {v.label}
              </button>
            );
          })}
        </div>

        {/* Questions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {active.questions.map((q, i) => (
            <div
              key={i}
              className={`group p-5 rounded-xl border border-slate-800 bg-slate-900/30 transition-all duration-200 cursor-default ${colors.card}`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-2 flex-shrink-0`} />
                <p className="text-slate-300 text-sm leading-relaxed font-mono">&ldquo;{q}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Don&apos;t see your exact use case?{" "}
            <a
              href="https://calendly.com/placeholder"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            >
              Book a call and we&apos;ll walk through your specific data.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
