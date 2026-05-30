# AskYourBiz.ai — Marketing Website

Production-ready marketing website for AskYourBiz.ai, a managed AI intelligence service for small businesses.

## Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS**
- **TypeScript**
- Hosted on **GitHub Pages** via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Export

```bash
npm run build
```

Output is in `/out` — ready to deploy to any static host.

## GitHub Pages Deployment

Push to `main` and GitHub Actions deploys automatically.

**Required setup:**
1. Go to repo Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` — the workflow handles the rest

## Customization

Before going live, update these placeholders:

| Location | Placeholder | Replace with |
|---|---|---|
| All CTAs | `https://calendly.com/placeholder` | Your Calendly link |
| Footer email | `guru@askyourbiz.ai` | Your email |
| Footer LinkedIn | `https://linkedin.com/in/placeholder` | Your LinkedIn URL |
| `SocialProof.tsx` | Testimonial quote | Real client quote |

## Project Structure

```
app/
  layout.tsx       # Root layout + metadata
  globals.css      # Global styles + Tailwind
  page.tsx         # Main page (imports all sections)

components/
  Nav.tsx          # Sticky navigation
  Hero.tsx         # Hero with animated chat demo
  Problem.tsx      # Pain point section
  HowItWorks.tsx   # 3-step explainer
  SampleQuestions  # Vertical-segmented question grid
  Integrations.tsx # Tool logo/pill grid
  SocialProof.tsx  # 7FIGURERIA testimonial
  Pricing.tsx      # Starter + Growth plans
  FAQ.tsx          # Accordion FAQ
  FinalCTA.tsx     # Full-width CTA section
  Footer.tsx       # Footer with links

.github/
  workflows/
    deploy.yml     # GitHub Pages CI/CD
```

## Built by

Guru Navada — Charlotte, NC | [AskYourBiz.ai](https://askyourbiz.ai)
