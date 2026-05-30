import { Quote, MapPin, Phone } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Client Spotlight
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Trusted by operators{" "}
            <span className="text-gradient">moving fast</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="relative p-8 sm:p-12 rounded-3xl border border-slate-700/60 bg-slate-900/50 backdrop-blur-sm glow-blue">
          <div className="absolute top-6 right-8">
            <Quote className="w-12 h-12 text-blue-500/20" />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          </div>

          <blockquote className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 font-medium">
            &ldquo;Before this, I was spending 45 minutes every Monday morning pulling numbers from
            GoHighLevel, pasting them into spreadsheets, and still not getting the full picture.
            Now I open Claude, type one question, and I know exactly what&apos;s happening in my business.
            Cost per booking, show rates, which reps are on track — instantly. It&apos;s like having a
            data analyst on call 24/7, except the analyst actually knows my business.&rdquo;
          </blockquote>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
                7F
              </div>
              <div>
                <p className="font-semibold text-white">7FIGURERIA</p>
                <p className="text-slate-400 text-sm">Appointment-Setting Agency</p>
                <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-1">
                  <MapPin className="w-3 h-3" />
                  Waxhaw, NC
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <div className="text-center">
                <div className="flex items-center gap-1.5 text-white font-bold text-2xl mb-0.5">
                  <Phone className="w-4 h-4 text-blue-400" />
                  10K+
                </div>
                <p className="text-slate-500 text-xs">Dials per week</p>
              </div>
              <div className="w-px h-8 bg-slate-700" />
              <div className="text-center">
                <div className="text-white font-bold text-2xl mb-0.5">Daily</div>
                <p className="text-slate-500 text-xs">Active usage</p>
              </div>
              <div className="w-px h-8 bg-slate-700" />
              <div className="text-center">
                <div className="text-white font-bold text-2xl mb-0.5">45 min</div>
                <p className="text-slate-500 text-xs">Saved per week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof bar */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { label: "Setup time", value: "< 3 days" },
            { label: "Questions answered daily", value: "Unlimited" },
            { label: "Data sources connected", value: "Live" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl border border-slate-800 bg-slate-900/30"
            >
              <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
