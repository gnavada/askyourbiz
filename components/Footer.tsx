import { Zap, MapPin, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-navy-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                AskYourBiz<span className="text-gradient">.ai</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-4">
              Managed AI intelligence layer for small businesses. We connect your existing
              tools to Claude Desktop so you can ask plain-English questions about your live
              business data.
            </p>
            <div className="flex items-center gap-1.5 text-slate-500 text-sm">
              <MapPin className="w-3.5 h-3.5" />
              Charlotte, NC
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { href: "#how-it-works", label: "How It Works" },
                { href: "#integrations", label: "Integrations" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
                >
                  <span className="w-5 h-5 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-xs">📅</span>
                  Get a Free Data Audit
                </a>
              </li>
              <li>
                <a
                  href="mailto:guru@askyourbiz.ai"
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  guru@askyourbiz.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} AskYourBiz.ai — Built by{" "}
            <span className="text-slate-400">Guru Navada</span>, Charlotte NC.
            All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>Live with 7FIGURERIA, Waxhaw NC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
