import { Helmet } from "react-helmet-async";
import { Printer, MessageSquareCode, Workflow, Briefcase, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import ahLogo from "@/assets/ah-logo.png.asset.json";
import akiliHeadshot from "@/assets/flyer-headshot.jpg.asset.json";

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

const tools = [
  { name: "ChatGPT", cls: "flyer-chip-emerald" },
  { name: "Google Gemini", cls: "flyer-chip-blue" },
  { name: "Claude", cls: "flyer-chip-amber" },
  { name: "Microsoft Copilot", cls: "flyer-chip-cyan" },
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
              <img src={ahLogo.url} alt="Akili Hight monogram" className="h-full w-full object-contain" />
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
          <p className="mt-4 border-t border-white/25 pt-3 text-[9.5pt] font-medium uppercase tracking-[0.14em] text-white/85">
            Presented by Akili Hight, M.S. | PMP® | CSM®
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
              An interactive 4-week masterclass or 1-day intensive designed to demystify artificial intelligence. Learn to use leading AI tools with confidence in work, business, and daily life. No prior technical background required.
            </p>

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
              <div className="flex flex-wrap gap-2">
                {tools.map(({ name, cls }) => (
                  <span
                    key={name}
                    className={`${cls} rounded-full px-3 py-1 text-[8.5pt] font-semibold`}
                  >
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
              Book a free intro call or request the workshop SOW &amp; syllabus — akili@hightnetworks.com
            </p>
          </div>
          <span
            className="shrink-0 rounded-lg px-4 py-2 text-[9.5pt] font-semibold"
            style={{ background: "#EAB308", color: "#0F172A" }}
          >
            akilihight.com
          </span>
        </div>

        {/* Instructor bio */}
        <div className="flyer-card mx-[0.6in] mb-[0.6in] mt-5 rounded-xl p-5">
          <div className="flex items-center gap-5">
            <div className="w-[2.4in] shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <img
                src={akiliHeadshot.url}
                alt="Akili Hight, technology consultant and educator"
                className="aspect-[3/2] h-auto w-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="mb-2 text-[10pt] font-semibold uppercase tracking-[0.14em] text-primary">
                <span className="flyer-eyebrow">About the Instructor</span>
              </h2>
              <p className="text-[9.5pt] leading-relaxed text-slate-600">
                Akili Hight is a technology consultant, author, speaker, and educator with over 20 years of experience leading technology, digital transformation, and emerging AI initiatives.
              </p>
              <p className="mt-3 text-[9.5pt] font-medium text-slate-900">
                akilihight.com | Learn More &amp; Book Workshops
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default WorkshopFlyer;
