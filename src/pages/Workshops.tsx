import { Helmet } from "react-helmet-async";
import { Building2, Users, MessageSquareCode, Workflow, Briefcase, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import akiliInstructor from "@/assets/akili-instructor.jpg.asset.json";

const CALENDLY = "https://calendly.com/hightnetworksconsulting/30min";
const SOW_MAILTO =
  "mailto:info@akilihight.com?subject=Workshop%20SOW%20%26%20Syllabus%20Request&body=Organization%3A%0AEstimated%20audience%20size%3A%0APreferred%20format%20(keynote%2C%204-week%20cohort%2C%20enterprise%20immersion)%3A%0ATarget%20timeframe%3A";

const audiences = [
  {
    icon: Building2,
    title: "For Organizations & Enterprises",
    desc: "Workforce upskilling, responsible AI adoption, executive briefings, and workflow automation.",
  },
  {
    icon: Users,
    title: "For Community & Civic Partners",
    desc: "Digital literacy, everyday AI tools, scam/privacy protection, and lifelong learning series.",
  },
];

const outcomes = [
  {
    icon: MessageSquareCode,
    title: "Practical Prompt Architecture",
    desc: "Structure clear, repeatable prompts that produce reliable, usable results.",
  },
  {
    icon: Workflow,
    title: "Workflow & Research Automation",
    desc: "Apply AI to research, drafting, planning, and repeatable day-to-day workflows.",
  },
  {
    icon: Briefcase,
    title: "Everyday Productivity & Job Tools",
    desc: "Use AI for communication, organization, job searches, and career readiness.",
  },
  {
    icon: ShieldCheck,
    title: "AI Safety, Privacy & Scam Prevention",
    desc: "Protect data, recognize scams, and apply responsible AI practices.",
  },
];

const tools = ["ChatGPT", "Google Gemini", "Claude", "Microsoft Copilot"];

const tiers = [
  {
    title: "Executive Keynote & Briefing",
    format: "90-Minute Session | Virtual or In-Person",
    ideal: "Leadership teams, conferences, and department kickoffs.",
  },
  {
    title: "4-Week Masterclass Cohort",
    format: "Weekly 60–90 Min Modules",
    ideal: "Workforce upskilling, libraries, parks & rec, and community programs.",
  },
  {
    title: "Custom Enterprise Immersion",
    format: "Multi-Day / Tailored Curriculum",
    ideal: "Enterprise teams integrating specific AI toolstacks and governance frameworks.",
  },
];

const comingSoon = [
  {
    title: "AI for Small Business",
    description: "Using AI to save time, improve productivity, and grow your business.",
  },
  {
    title: "AI Readiness for Leaders",
    description: "Understanding opportunities, risks, governance, and responsible adoption.",
  },
  {
    title: "Future of Work",
    description: "How AI is changing careers, skills, and workforce development.",
  },
  {
    title: "Digital Confidence",
    description: "Practical technology skills for everyday life.",
  },
];

const Workshops = () => (
  <>
    <Helmet>
      <title>Workshops & Workforce Empowerment | Akili Hight</title>
      <meta name="description" content="AI literacy workshops, executive briefings, and hands-on masterclasses for enterprise teams, public institutions, and community partners." />
      <link rel="canonical" href="https://akilihight.com/workshops" />
      <meta property="og:title" content="Workshops & Workforce Empowerment" />
      <meta property="og:description" content="Practical AI literacy, executive briefings, and hands-on masterclasses for organizations and communities." />
      <meta property="og:url" content="https://akilihight.com/workshops" />
    </Helmet>
    <Header />
    <main>
      {/* Page header */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-background to-secondary/50">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-foreground mb-6">
            Workshops & Workforce Empowerment
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed">
            Practical AI literacy, executive briefings, and hands-on masterclasses designed for enterprise teams, public institutions, and forward-thinking organizations.
          </p>
        </div>
      </section>

      {/* Audience segmentation */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/70 bg-secondary/30 p-7">
                <Icon className="h-6 w-6 text-primary mb-4" aria-hidden="true" />
                <h2 className="text-lg font-semibold text-foreground mb-2">{title}</h2>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workshop */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-3">
              Featured Masterclass
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Everyday AI Made Simple
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A 4-week interactive masterclass or intensive 1-day executive briefing covering ChatGPT, Gemini, Claude, and Copilot.
            </p>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-12">
              <p>
                A practical program that helps participants understand and use today's leading AI tools with confidence.
              </p>
              <p>
                Designed for teams, professionals, entrepreneurs, job seekers, caregivers, and lifelong learners. No technical background required.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-6">What you'll learn</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {outcomes.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/70 bg-background p-6">
                <Icon className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h4 className="text-base font-semibold text-foreground mb-2">{title}</h4>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Tools Covered:</h3>
          <ul className="space-y-3">
            {tools.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Flexible Delivery Options */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Flexible Delivery Options
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            Engagements scale from a single leadership briefing to a tailored, multi-day enterprise program.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border/70 bg-background p-7 flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-4">{t.title}</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs font-medium text-primary/80 uppercase tracking-wider mb-1">Format</dt>
                    <dd className="text-base text-foreground">{t.format}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-primary/80 uppercase tracking-wider mb-1">Ideal for</dt>
                    <dd className="text-muted-foreground leading-relaxed">{t.ideal}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Flyer */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Download Workshop Flyer
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the full overview of Everyday AI Made Simple to share with your team, community, or organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/workshops/flyer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View &amp; Download Printable Flyer (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* About the Instructor */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="bg-background rounded-2xl p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]">
                <img
                  src={akiliInstructor.url}
                  alt="Akili Hight"
                  className="rounded-xl w-full max-w-lg object-cover object-top"
                  loading="lazy"
                  width={800}
                  height={1024}
                />
              </div>
            </div>
            <div className="space-y-5 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">About the Instructor</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Akili Hight is a technology consultant, author, speaker, and educator with more than 20 years of experience leading technology, digital transformation, and emerging technology initiatives across public, private, and nonprofit organizations.
                </p>
                <p className="text-foreground font-medium pt-2">
                  PMP® | Certified ScrumMaster® | Master of Information Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Coming Soon</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Additional workshops in development.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {comingSoon.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border/70 bg-secondary/30 p-6 opacity-80"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground/70 border border-border rounded-full px-2 py-0.5">
                    Coming soon
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-center">
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Interested in bringing a workshop to your organization, agency, library, community center, school, or event?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Free Intro Call
            </a>
            <a
              href={SOW_MAILTO}
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Request Workshop SOW & Syllabus
            </a>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Workshops;
