"use client";

import { useState } from "react";
import { Phone, TrendingUp, Home, Sun } from "lucide-react";

const verticals = [
  {
    id: "appointment",
    label: "Appointment-Setting",
    icon: Phone,
    color: "blue",
    questions: [
      "Why did show rate drop this week — which account and which time slot?",
      "Which rep has the best cost per showed appointment — and are we loading their calendar first?",
      "Which lead source has the worst show rate after 30 days — should we cut it?",
      "What's my real cost per booked appointment after removing no-show leads?",
      "Which client account is trending toward churn based on show rate this month?",
      "Which time slots and reps are quietly dragging down a specific client account?",
    ],
  },
  {
    id: "insurance",
    label: "Insurance Agencies",
    icon: TrendingUp,
    color: "teal",
    questions: [
      "Which lead source produces the most quoted-to-bound policies?",
      "What's my cost per booked policy review this month vs last?",
      "Which agents have the best appointment-to-quote conversion?",
      "Which carriers are my reps booking the most appointments for?",
      "What's my pipeline of follow-ups that haven't been called in 7 days?",
      "Which time slots convert best for Medicare vs final-expense leads?",
    ],
  },
  {
    id: "realestate",
    label: "Real Estate / ISA Teams",
    icon: Home,
    color: "purple",
    questions: [
      "Which ISA is booking the most appointments that actually show?",
      "What's my cost per booked listing appointment by lead source?",
      "Which lead source goes cold fastest after first contact?",
      "How many buyer consults converted to signed agreements this month?",
      "Which agents have appointments booked but no follow-up logged?",
      "What time of day are my outbound dials connecting best?",
    ],
  },
  {
    id: "solar",
    label: "Solar / Home Services",
    icon: Sun,
    color: "orange",
    questions: [
      "Which lead source produces the most sat appointments that close?",
      "What's my cost per sat appointment by setter this week?",
      "Which setters are booking appointments that close vs cancel?",
      "Which zip codes are producing the best appointment quality?",
      "How many quoted jobs are still waiting on a follow-up call?",
      "What's my real cost per closed job after no-show appointments?",
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
            Questions that used to take{" "}
            <span className="text-gradient">45 minutes on a Monday.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Now answered in 10 seconds — from the GoHighLevel data you already have.
            Built for appointment-setting agencies first — and the dialing teams that run like them.
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
              href="#contact"
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
