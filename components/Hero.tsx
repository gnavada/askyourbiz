"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Calendar, ClipboardList } from "lucide-react";

const demoConversation = [
  {
    role: "user",
    text: "What was my cost per booked appointment last week?",
  },
  {
    role: "assistant",
    text: "$34.12 per booked appointment — down 18% from the prior week. You ran 847 dials, converted 24 appointments. Your best-performing rep was Marcus at $28.40/booking.",
  },
  {
    role: "user",
    text: "Which clients had the lowest show rates?",
  },
  {
    role: "assistant",
    text: "Apex Financial had a 52% show rate last week — 11 pts below your average. Typically correlates with Monday AM slots. Want me to flag rescheduling candidates?",
  },
];

function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center px-4 py-3">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }} />
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "150ms" }} />
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  );
}

export default function Hero() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (visibleMessages >= demoConversation.length) return;

    const msg = demoConversation[visibleMessages];
    if (msg.role === "assistant") {
      setShowTyping(true);
      const timer = setTimeout(() => {
        setShowTyping(false);
        setVisibleMessages((v) => v + 1);
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setVisibleMessages((v) => v + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  // Reset demo every 14 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages(0);
      setShowTyping(false);
    }, 14000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/0 via-navy-900/60 to-navy-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-teal-400/8 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Managed AI Intelligence — Built for You, Not DIY
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
              Ask your business{" "}
              <span className="text-gradient">anything.</span>
              <br />
              Get answers from{" "}
              <span className="text-gradient">your real data.</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              We connect your CRM, dialer, and databases directly to Claude Desktop.
              No dashboards. No BI team. No new software to learn. Just type a question
              and get an instant answer from your live business data.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://calendly.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all duration-200"
              >
                <ClipboardList className="w-4 h-4" />
                Request a Free Data Audit
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Live with 7FIGURERIA
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                10,000+ dials/week analyzed
              </span>
            </div>
          </div>

          {/* Right column — Demo chat */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-400/10 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl border border-slate-700/60 bg-navy-800/80 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-navy-900/50">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-slate-500 font-mono">Claude Desktop — AskYourBiz Intelligence</span>
              </div>

              {/* Chat messages */}
              <div className="p-4 space-y-3 min-h-[320px]">
                {demoConversation.slice(0, visibleMessages).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}
                  >
                    {msg.role === "assistant" && (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex-shrink-0 mr-2 mt-1 flex items-center justify-center">
                        <span className="text-xs text-white font-bold">A</span>
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-blue-500 text-white rounded-tr-sm"
                          : "bg-slate-700/60 text-slate-200 rounded-tl-sm border border-slate-600/40"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {showTyping && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex-shrink-0 mr-2 mt-1 flex items-center justify-center">
                      <span className="text-xs text-white font-bold">A</span>
                    </div>
                    <div className="bg-slate-700/60 border border-slate-600/40 rounded-2xl rounded-tl-sm">
                      <TypingIndicator />
                    </div>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-800/60 border border-slate-600/40">
                  <span className="text-slate-500 text-sm flex-1">Ask about your business data...</span>
                  <div className="w-6 h-6 rounded-lg bg-blue-500/30 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
