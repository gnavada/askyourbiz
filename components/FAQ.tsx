"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What tools and platforms do you connect to?",
    answer:
      "We connect to any platform with an API — which includes virtually every major business tool: GoHighLevel, Salesforce, HubSpot, Stripe, Airtable, Shopify, Twilio, and most SQL databases (PostgreSQL, MySQL, Supabase, etc.). If you're not sure about your specific stack, the free data audit is the fastest way to find out. Typically: if you can access the data manually, we can build a connection to it.",
  },
  {
    question: "Do I need to know how to use Claude or AI tools?",
    answer:
      "Not at all. Claude Desktop is a simple chat interface — you type a question in plain English and get an answer. No prompting skills, no technical knowledge required. We configure everything on the backend so that your questions work reliably. If you can type a text message, you can use this. Most clients are fully operational on day one.",
  },
  {
    question: "What if I already have dashboards and reports?",
    answer:
      "Dashboards answer the questions someone else predicted you'd have. AskYourBiz.ai answers the question you actually have right now — the specific, urgent, nuanced one that isn't in any report. They complement each other. Most clients keep their existing dashboards for weekly reviews but use our intelligence layer for the daily questions that previously required a data pull or an analyst's time.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Initial setup typically takes 1–3 business days from when you provide API access to your data sources. That includes building the connection, configuring your key metrics and KPI definitions, and testing the query patterns with you. After setup, you're live. We handle all ongoing maintenance, updates, and additions — you just ask your questions.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. We use read-only API connections — we never write to your data, only read it. The MCP server runs locally on your machine (or a secure environment you control), so your data never passes through a third-party server. All API credentials are stored securely using industry-standard practices. We're happy to walk through the security architecture on a call if that's important to your evaluation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Questions we always{" "}
            <span className="text-gradient">get asked</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openIndex === i
                  ? "border-blue-500/30 bg-slate-900/60"
                  : "border-slate-800 bg-slate-900/30 hover:border-slate-700"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className={`font-semibold text-sm leading-snug ${openIndex === i ? "text-white" : "text-slate-200"}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180 text-blue-400" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Have a question that&apos;s not here?{" "}
            <a
              href="https://calendly.com/placeholder"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            >
              Book a 20-minute call
            </a>{" "}
            — no pitch, just answers.
          </p>
        </div>
      </div>
    </section>
  );
}
