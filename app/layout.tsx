import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AskYourBiz.ai — Managed AI Intelligence for Small Business",
  description:
    "Ask plain-English questions about your live business data. No dashboards, no BI team. Guru Navada connects your CRM, dialer, and databases to Claude Desktop so you can get instant answers from your actual data.",
  keywords: [
    "AI business intelligence",
    "small business analytics",
    "GoHighLevel AI",
    "Claude Desktop MCP",
    "business data queries",
    "managed AI service",
    "appointment setting analytics",
  ],
  openGraph: {
    title: "AskYourBiz.ai — Managed AI Intelligence for Small Business",
    description:
      "Ask your business anything. Get real answers from your live data. No dashboards needed.",
    type: "website",
    siteName: "AskYourBiz.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "AskYourBiz.ai",
    description:
      "AI data intelligence for small businesses that have the data but not the answers. Ask plain-English questions. Get answers in 10 seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy-900 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
