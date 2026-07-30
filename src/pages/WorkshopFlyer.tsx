import { Helmet } from "react-helmet-async";
import { Printer, MessageSquareCode, Workflow, Briefcase, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import ahLogo from "@/assets/ah-logo.png.asset.json";
import akiliFlyer from "@/assets/akili-flyer.jpg.asset.json";

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

const tools = ["ChatGPT", "Google Gemini", "Claude", "Microsoft Copilot"];

const WorkshopFlyer = () => (
  <>
    <Helmet>
      <title>Printable Workshop Flyer | Everyday AI Made Simple</title>
      <meta name="description" content="Printable one-page flyer for Everyday AI Made Simple — a practical AI masterclass presented by Akili Hight." />
      <link rel="canonical" href="https://akilihight.com/workshops/flyer" />
      <meta name="robots" content="noindex" />
      <style>{`
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
        className="mx-auto flex w-[8.5in] h-[11in] flex-col overflow-hidden bg-background shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] print:shadow-none"
      >
        {/* Header banner */}
        <div className="bg-primary px-[0.6in] py-6 text-primary-foreground">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary-foreground p-1.5">
              <img src={ahLogo.url} alt="Akili Hight" className="h-full w-full object-contain" />
            </span>
            <div>
              <h1 className="text-[26pt] font-semibold leading-[1.05] tracking-tight">
                EVERYDAY AI MADE SIMPLE
              </h1>
              <p className="mt-1 text-[11pt] text-primary-foreground/80">
                Practical AI Skills for Work, Business, and Life
              </p>
            </div>
          </div>
          <p className="mt-4 border-t border-primary-foreground/25 pt-3 text-[9.5pt] font-medium uppercase tracking-[0.14em] text-primary-foreground/85">
            Presented by Akili Hight, M.S. | PMP® | CSM®
          </p>
        </div>

        {/* Body grid */}
        <div className="grid flex-1 grid-cols-[60fr_40fr] gap-7 px-[0.6in] py-6">
          {/* Left */}
          <div className="flex flex-col">
            <h2 className="mb-2 text-[10pt] font-semibold uppercase tracking-[0.14em] text-primary">
              Program Overview
            </h2>
            <p className="text-[10pt] leading-relaxed text-muted-foreground">
              An interactive 4-week masterclass or 1-day intensive designed to demystify artificial intelligence. Learn to use leading AI tools with confidence in work, business, and daily life. No prior technical background required.
            </p>

            <h2 className="mb-3 mt-6 text-[10pt] font-semibold uppercase tracking-[0.14em] text-primary">
              What You Will Master
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-lg border border-border/70 bg-secondary/40 p-3">
                  <Icon className="mb-2 h-4 w-4 text-primary" aria-hidden="true" />
                  <h3 className="text-[9.5pt] font-semibold leading-snug text-foreground">{title}</h3>
                  <p className="mt-1 text-[8.5pt] leading-snug text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-border/70 bg-secondary/40 p-4">
              <h2 className="mb-2 text-[9.5pt] font-semibold uppercase tracking-[0.14em] text-primary">
                Format & Delivery
              </h2>
              <ul className="space-y-1.5">
                {format.map((f) => (
                  <li key={f} className="flex gap-2 text-[9pt] leading-snug text-muted-foreground">
                    <span className="mt-[0.42em] h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border/70 bg-secondary/40 p-4">
              <h2 className="mb-2 text-[9.5pt] font-semibold uppercase tracking-[0.14em] text-primary">
                Who It's For
              </h2>
              <ul className="space-y-1.5">
                {audience.map((a) => (
                  <li key={a} className="flex gap-2 text-[9pt] leading-snug text-muted-foreground">
                    <span className="mt-[0.42em] h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-[9.5pt] font-semibold uppercase tracking-[0.14em] text-primary">
                Focus Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[8.5pt] font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Instructor bio */}
        <div className="mx-[0.6in] mb-[0.6in] mt-auto rounded-xl border border-border/70 bg-secondary/50 p-5">
          <div className="flex items-center gap-5">
            <div className="w-[2.1in] shrink-0 overflow-hidden rounded-lg bg-background">
              <img
                src={akiliFlyer.url}
                alt="Akili Hight"
                className="h-auto w-full object-contain"
              />
            </div>
            <div>
              <h2 className="mb-2 text-[10pt] font-semibold uppercase tracking-[0.14em] text-primary">
                About the Instructor
              </h2>
              <p className="text-[9.5pt] leading-relaxed text-muted-foreground">
                Akili Hight is a technology consultant, author, speaker, and educator with over 20 years of experience leading technology, digital transformation, and emerging AI initiatives.
              </p>
              <p className="mt-3 text-[9.5pt] font-medium text-foreground">
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
