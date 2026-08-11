import { Helmet } from "react-helmet-async";
import { Sparkles, Briefcase, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pathways = [
  {
    icon: Sparkles,
    title: "Everyday AI",
    desc: "Learn practical ways to use tools such as ChatGPT, Gemini, Claude, and Microsoft Copilot for communication, research, productivity, decision-making, and everyday tasks.",
    topics: [
      "Prompting fundamentals",
      "Research and communication",
      "Productivity and organization",
      "Privacy, safety, and responsible AI use",
    ],
    cta: "View Everyday AI Workshop",
    href: "/workshops",
  },
  {
    icon: Briefcase,
    title: "Career & Work Readiness",
    desc: "Use AI thoughtfully to strengthen career preparation, professional communication, research, productivity, interview readiness, and your ability to navigate a changing workplace.",
    topics: [
      "Resume and career narrative development",
      "Job and company research",
      "Interview preparation",
      "Professional communication",
      "AI-assisted productivity",
      "Understanding the changing workplace",
    ],
  },
  {
    icon: Users,
    title: "Teams & Workforce Learning",
    desc: "Help teams build practical AI literacy, responsible-use habits, and confidence applying emerging tools in real-world work environments.",
    topics: [],
    cta: "Explore Workshops",
    href: "/workshops",
  },
];

const principles = [
  { title: "Clarity Before Complexity", detail: "Understand the objective before choosing the technology." },
  { title: "Confidence Through Practice", detail: "Use real situations, practical frameworks, and hands-on learning." },
  { title: "Action Over Overwhelm", detail: "Turn complexity into achievable next steps and measurable progress." },
];

const Learning = () => (
  <>
    <Helmet>
      <title>AI Learning &amp; Career Readiness | Akili Hight</title>
      <meta name="description" content="Practical AI learning and career readiness for professionals, job seekers, teams, and communities. Build confidence using AI tools for work and everyday life." />
      <link rel="canonical" href="https://akilihight.com/learning" />
      <meta property="og:title" content="AI Learning & Career Readiness | Akili Hight" />
      <meta property="og:description" content="Practical AI learning and career readiness for professionals, job seekers, teams, and communities." />
      <meta property="og:url" content="https://akilihight.com/learning" />
    </Helmet>
    <Header />
    <main>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-background to-secondary/50">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <p className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-4">
            Learning &amp; Career Readiness
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] text-foreground mb-6">
            Practical AI Skills for Work and Everyday Life
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            Build confidence using AI tools, strengthen your professional readiness, and learn practical ways to apply emerging technology without needing a technical background.
          </p>
          <p className="text-base text-muted-foreground/80 leading-relaxed mb-8">
            Designed for professionals, job seekers, lifelong learners, teams, and community members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#learning-pathways"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Learning Options
            </a>
            <a
              href="/workshops"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              View Workshops
            </a>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section id="learning-pathways" className="scroll-mt-24 py-20">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Learning Pathways</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            Three ways to build practical AI confidence, depending on what you're trying to accomplish.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pathways.map(({ icon: Icon, title, desc, topics, cta, href }) => (
              <div key={title} className="rounded-2xl border border-border/70 bg-card p-7 flex flex-col">
                <Icon className="h-6 w-6 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{desc}</p>
                {topics.length > 0 && (
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {topics.map((t) => (
                      <li key={t} className="flex gap-3 text-[15px] text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {cta && href && (
                  <a
                    href={href}
                    className="mt-6 inline-flex items-center justify-center self-start rounded-lg text-sm font-medium transition-colors px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CareerProof */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <div className="rounded-2xl border border-border/70 bg-secondary/30 p-7">
            <span className="inline-block text-xs uppercase tracking-wider text-muted-foreground/70 border border-border rounded-full px-2.5 py-0.5 mb-3">
              In Development
            </span>
            <h2 className="text-xl font-semibold text-foreground mb-2">CareerProof™</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              A career intelligence platform exploring a more durable way to represent professional experience, execution scale, and role alignment in the age of AI.
            </p>
          </div>
        </div>
      </section>

      {/* Why this approach */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Learn by Doing</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            The goal is not more AI jargon. It is practical confidence. Learning experiences use real situations, clear frameworks, and hands-on application so people can understand what matters and take useful next steps.
          </p>
          <ul className="space-y-7">
            {principles.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-3" />
                <div>
                  <p className="text-lg font-medium text-foreground">{p.title}</p>
                  <p className="text-muted-foreground mt-1 leading-relaxed">{p.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Not Sure Where to Start?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell me what you're trying to learn or accomplish, and we can identify the right starting point.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#cta"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a Conversation
            </a>
            <a
              href="/workshops"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              View Workshops
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Learning;
