import { Helmet } from "react-helmet-async";
import { Printer, MessageSquareCode, Workflow, Briefcase, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import ahLogo from "@/assets/ah-monogram-flyer.png";
import akiliHeadshot from "@/assets/akili-headshot-flyer.jpg";

const skills = [
  {
    icon: MessageSquareCode,
    title: "Practical Prompt Architecture",
    desc: "Structuring prompts for high-quality results.",
  },
  {
    icon: Workflow,
    title: "Workflow & Research Automation",
    desc: "Streamlining emails, documents, and analysis.",
  },
  {
    icon: Briefcase,
    title: "Everyday Productivity & Career Tools",
    desc: "Job searches, planning, and writing.",
  },
  {
    icon: ShieldCheck,
    title: "AI Safety, Privacy & Scam Prevention",
    desc: "Data protection and safe habits.",
  },
];

const format = [
  "4-Week Cohort Series or 1-Day Intensive",
  "In-Person & Virtual Delivery Options",
  "Flexible Partner Scheduling",
];

const audience = [
  "Professionals, Job Seekers & Entrepreneurs",
  "Civic Leaders & Non-Profit Organizations",
  "Lifelong Learners & Caregivers",
];

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="currentColor" aria-hidden="true">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 3.8a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .75 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07Zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5ZM3.6 18.3a4.47 4.47 0 0 1-.54-3.01l.14.09 4.79 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.73 19.96A4.5 4.5 0 0 1 3.6 18.3ZM2.34 7.9a4.48 4.48 0 0 1 2.35-1.97v5.68a.77.77 0 0 0 .38.67l5.83 3.36-2.02 1.17a.07.07 0 0 1-.07 0L4 14.02A4.5 4.5 0 0 1 2.34 7.9Zm16.6 3.86-5.84-3.4L15.12 7.2a.07.07 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.66Zm2.01-3.02-.14-.09-4.78-2.79a.78.78 0 0 0-.79 0L9.4 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.49 4.49 0 0 1 6.67 4.65ZM8.3 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.49 4.49 0 0 1 7.36-3.45l-.14.08L8.68 5.46a.79.79 0 0 0-.39.68Zm1.1-2.37 2.6-1.5 2.61 1.5v3l-2.6 1.5-2.6-1.5Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
    <path fill="#FBBC05" d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.05l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z" />
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="currentColor" aria-hidden="true">
    <path d="m4.71 15.4 4.62-2.6.08-.23-.08-.12h-.23l-.79-.05-2.7-.07-2.33-.1-2.27-.12-.57-.12L0 11.3l.05-.35.48-.32.68.06 1.52.1 2.27.16 1.65.1 2.44.25h.39l.05-.16-.13-.1-.1-.09-2.36-1.6L4.39 7.66l-1.34-.98-.72-.49-.37-.46-.16-1.02.67-.73.89.06.23.06.9.7 1.94 1.5 2.53 1.86.37.3.15-.1.02-.08-.17-.28L9.9 5.36 8.4 2.78l-.67-1.07-.18-.64a3.1 3.1 0 0 1-.1-.75L8.2 0l.42.14 1.77 2.43 2.86 3.94.45.66.21-.13.1-.6.24-1.6.24-1.96.08-.55.4-.96.78-.52.61.3.5.72-.07.46-.3 1.95-.59 3.06-.04.41.23-.05 2.65-3.53.44-.5.52-.55.62-.25.44.26.07.66-.26.68-.79 1.02-.65.85-.94 1.27-.6 1.01.06.09.15-.02 2.24-.48 1.21-.22 1.44-.24.65.3.07.31-.26.63-1.55.39-1.82.36-2.71.64-.03.02.04.05 1.22.11.52.03h1.28l2.38.18.62.4.37.51-.06.38-.96.49-1.29-.31-3-.71-1.03-.26h-.15v.09l.86.84 1.57 1.42 1.97 1.83.1.45-.25.36-.27-.04-1.72-1.3-.67-.58-1.5-1.27h-.1v.14l.34.5 1.83 2.76.1.85-.14.28-.48.16-.53-.09-1.09-1.53-1.12-1.72-.9-1.54-.12.07-.53 5.68-.25.3-.57.21-.48-.36-.25-.59.25-1.16.3-1.5.25-1.2.22-1.48.13-.5v-.03h-.11l-1.13 1.56-1.72 2.33-1.37 1.46-.32.13-.57-.3.05-.52.32-.47L7 16.83l1.9-2.48 1.22-1.43-.01-.2H10l-7.63 4.96-1.36.17-.58-.55.07-.9.28-.29 2.28-1.56Z" />
  </svg>
);

const MicrosoftIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" aria-hidden="true">
    <path fill="#F25022" d="M1 1h10v10H1z" />
    <path fill="#7FBA00" d="M13 1h10v10H13z" />
    <path fill="#00A4EF" d="M1 13h10v10H1z" />
    <path fill="#FFB900" d="M13 13h10v10H13z" />
  </svg>
);

const tools = [
  { name: "ChatGPT", cls: "flyer-chip-emerald", Icon: OpenAIIcon },
  { name: "Google Gemini", cls: "flyer-chip-blue", Icon: GoogleIcon },
  { name: "Claude", cls: "flyer-chip-amber", Icon: ClaudeIcon },
  { name: "Microsoft Copilot", cls: "flyer-chip-cyan", Icon: MicrosoftIcon },
];

const WorkshopFlyer = () => (
  <>
    <Helmet>
      <title>Printable Workshop Flyer | Everyday AI Made Simple</title>
      <meta name="description" content="Printable one-page flyer for Everyday AI Made Simple — a practical AI masterclass presented by Akili Hight." />
      <link rel="canonical" href="https://akilihight.com/workshops/flyer" />
      <meta name="robots" content="noindex" />
      <style>{`
        #flyer-sheet {
          --flyer-navy: #0F172A;
          --flyer-paper: #F8FAFC;
          --flyer-line: #E2E8F0;
          background: var(--flyer-paper);
          color: var(--flyer-navy);
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        #flyer-sheet .flyer-card {
          background: #FFFFFF;
          border: 1px solid var(--flyer-line);
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 4px 10px -6px rgba(15,23,42,0.12);
        }
        #flyer-sheet .flyer-eyebrow {
          display: inline-block;
          padding-bottom: 4px;
          border-bottom: 2px solid var(--flyer-navy);
        }
        #flyer-sheet .flyer-chip-emerald { background:#ECFDF5; color:#065F46; border:1px solid #A7F3D0; }
        #flyer-sheet .flyer-chip-blue { background:#EFF6FF; color:#1E3A8A; border:1px solid #BFDBFE; }
        #flyer-sheet .flyer-chip-amber { background:#FFF7ED; color:#9A3412; border:1px solid #FED7AA; }
        #flyer-sheet .flyer-chip-cyan { background:#ECFEFF; color:#155E75; border:1px solid #A5F3FC; }
        #flyer-sheet .flyer-note-chip { background:#F1F5F9; color:#0F172A; border:1px solid #CBD5E1; }
        #flyer-sheet .flyer-cta-btn {
          background:#FFFFFF; color:#0F172A; font-weight:600;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.6), 0 6px 18px -6px rgba(255,255,255,0.45);
          transition: box-shadow .2s ease, transform .2s ease, background-color .2s ease;
        }
        #flyer-sheet .flyer-cta-btn:hover {
          background:#F8FAFC; transform: translateY(-1px);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.85), 0 10px 26px -6px rgba(255,255,255,0.6);
        }
        #flyer-sheet .flyer-contact-bar {
          background:#F1F5F9; color:#0F172A; border:1px solid var(--flyer-line);
          transition: background-color .2s ease, border-color .2s ease;
        }
        #flyer-sheet .flyer-contact-bar:hover { background:#E2E8F0; border-color:#CBD5E1; }
        @media print {
          @page { size: letter portrait; margin: 0; }
          body { background: #fff !important; }
          body * { visibility: hidden !important; }
          #flyer-sheet, #flyer-sheet * { visibility: visible !important; }
          #flyer-sheet {
            position: absolute; top: 0; left: 0;
            width: 8.5in; height: 11in;
            margin: 0; box-shadow: none !important; border: none !important;
            page-break-after: avoid;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print { display: none !important; }
        }
      `}</style>
    </Helmet>
    <div className="no-print">
      <Header />
    </div>
    <main className="bg-secondary/40 py-10 print:bg-white print:py-0">
      <div className="no-print mx-auto mb-6 flex max-w-[8.5in] items-center justify-between px-4">
        <a href="/workshops" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to Workshops
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print / Download PDF
        </button>
      </div>

      {/* Flyer sheet: 8.5 x 11 */}
      <div
        id="flyer-sheet"
        className="mx-auto flex w-[8.5in] h-[11in] flex-col overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] print:shadow-none"
      >
        {/* Header banner */}
        <div className="px-[0.6in] py-6 text-white" style={{ background: "#0F172A" }}>
          <div className="flex items-center gap-4">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white p-2">
              <img src={ahLogo} alt="Akili Hight monogram" className="h-full w-full object-contain" />
            </span>
            <div>
              <h1 className="text-[26pt] font-semibold leading-[1.05] tracking-tight">
                EVERYDAY AI MADE SIMPLE
              </h1>
              <p className="mt-1 text-[11pt] text-white/80">
                Practical AI Skills for Work, Business, and Life
              </p>
            </div>
          </div>
          <p className="mt-4 border-t border-white/25 pt-3 text-[9.5pt] font-medium uppercase tracking-[0.12em] text-white/85">
            Presented by Akili Hight, PMP® | CSM®
          </p>
        </div>

        {/* Body grid */}
        <div className="grid flex-1 grid-cols-[60fr_40fr] gap-7 px-[0.6in] py-6">
          {/* Left */}
          <div className="flex flex-col">
            <h2 className="mb-3 text-[10pt] font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="flyer-eyebrow">Program Overview</span>
            </h2>
            <p className="text-[10pt] leading-relaxed text-slate-600">
              An interactive 4-week masterclass or 1-day intensive designed to demystify artificial intelligence. Learn to use leading AI tools with confidence in work, business, and daily life.
            </p>
            <span className="flyer-note-chip mt-3 inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1 text-[9pt] font-semibold">
              ✓ No prior technical background required
            </span>

            <h2 className="mb-3 mt-6 text-[10pt] font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="flyer-eyebrow">What You Will Master</span>
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flyer-card rounded-lg p-3">
                  <Icon className="mb-2 h-4 w-4 text-primary" aria-hidden="true" />
                  <h3 className="text-[9.5pt] font-semibold leading-snug text-slate-900">{title}</h3>
                  <p className="mt-1 text-[8.5pt] leading-snug text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <div className="flyer-card rounded-lg p-4">
              <h2 className="mb-3 text-[9.5pt] font-semibold uppercase tracking-[0.14em] text-primary">
                <span className="flyer-eyebrow">Format &amp; Delivery</span>
              </h2>
              <ul className="space-y-1.5">
                {format.map((f) => (
                  <li key={f} className="flex gap-2 text-[9pt] leading-snug text-slate-600">
                    <span className="mt-[0.42em] h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flyer-card rounded-lg p-4">
              <h2 className="mb-3 text-[9.5pt] font-semibold uppercase tracking-[0.14em] text-primary">
                <span className="flyer-eyebrow">Who It's For</span>
              </h2>
              <ul className="space-y-1.5">
                {audience.map((a) => (
                  <li key={a} className="flex gap-2 text-[9pt] leading-snug text-slate-600">
                    <span className="mt-[0.42em] h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-[9.5pt] font-semibold uppercase tracking-[0.14em] text-primary">
                <span className="flyer-eyebrow">Focus Tools</span>
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {tools.map(({ name, cls, Icon }) => (
                  <span
                    key={name}
                    className={`${cls} flex w-full items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[8pt] font-semibold`}
                  >
                    <Icon />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA band */}
        <div
          className="mx-[0.6in] mt-auto flex items-center justify-between gap-5 rounded-xl px-5 py-4"
          style={{ background: "#0F172A" }}
        >
          <div>
            <p className="text-[10.5pt] font-semibold text-white">
              Bring Everyday AI Made Simple to your team, agency, library, or community.
            </p>
            <p className="mt-1 text-[9pt] text-white/75">
              Book a free intro call or request the workshop SOW &amp; syllabus — contact@akilihight.com
            </p>
          </div>
          <a
            href="https://akilihight.com"
            className="flyer-cta-btn shrink-0 rounded-lg px-4 py-2 text-[9.5pt] font-semibold no-underline"
          >
            akilihight.com
          </a>
        </div>

        {/* Instructor bio */}
        <div className="flyer-card mx-[0.6in] mb-[0.6in] mt-5 rounded-xl p-5">
          <div className="flex items-center gap-5">
            <div className="w-[2.4in] shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <img
                src={akiliHeadshot}
                alt="Akili Hight, technology consultant and educator"
                className="aspect-[3/2] h-auto w-full object-cover" style={{ objectPosition: "58% 12%" }}
              />
            </div>
            <div>
              <h2 className="mb-2 text-[10pt] font-semibold uppercase tracking-[0.14em] text-primary">
                <span className="flyer-eyebrow">About the Instructor</span>
              </h2>
              <p className="text-[9.5pt] leading-relaxed text-slate-600">
                Akili Hight is a technology consultant, author, speaker, and educator with over 20 years of experience leading technology, digital transformation, and emerging AI initiatives.
              </p>
              <a
                href="https://akilihight.com"
                className="flyer-contact-bar mt-3 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[9.5pt] font-bold no-underline"
              >
                Visit akilihight.com to view syllabus &amp; book workshops →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default WorkshopFlyer;
