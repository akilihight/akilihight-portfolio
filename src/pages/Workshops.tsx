import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import akiliAbout from "@/assets/akili-about.jpg";

const learnings = [
  "What AI is and how it works",
  "How to ask better questions and get better answers",
  "How to use AI for writing, planning, research, and productivity",
  "How AI can support work, job searches, and organization",
  "How to stay safe, protect privacy, and avoid scams",
];

const tools = ["ChatGPT", "Google Gemini", "Claude", "Microsoft Copilot"];

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
      <title>Workshops | Everyday AI Made Simple | Akili Hight</title>
      <meta name="description" content="Practical AI workshops to help you understand AI, build confidence, and use it safely in everyday life and work." />
      <link rel="canonical" href="https://akilihight.com/workshops" />
      <meta property="og:title" content="Workshops | Everyday AI Made Simple" />
      <meta property="og:description" content="Friendly, hands-on workshops to help you understand AI and use it with confidence." />
      <meta property="og:url" content="https://akilihight.com/workshops" />
    </Helmet>
    <Header />
    <main>
      {/* Page header */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-background to-secondary/50">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-foreground mb-6">
            Workshops & Learning
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed">
            Learn practical AI skills for work, life, and the future.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed mt-4">
            Beginner-friendly workshops designed to help people understand AI, build confidence, and use technology more effectively in everyday life.
          </p>
        </div>
      </section>

      {/* Featured Workshop */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <p className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-3">
            Featured Workshop
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Everyday AI Made Simple
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Practical AI Skills for Everyday Life
          </p>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-10">
            <p>
              A beginner-friendly workshop that helps participants understand and use today's leading AI tools with confidence.
            </p>
            <p>
              Designed for everyday people, professionals, entrepreneurs, job seekers, caregivers, and lifelong learners.
            </p>
            <p>No technical background required.</p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Participants will learn:</h3>
          <ul className="space-y-3 mb-10">
            {learnings.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

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

      {/* Workshop Details */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">Workshop Details</h2>
          <dl className="grid sm:grid-cols-3 gap-8">
            <div>
              <dt className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-2">Format</dt>
              <dd className="text-base text-foreground">4-Week Series</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-2">Schedule</dt>
              <dd className="text-base text-muted-foreground leading-relaxed">
                Flexible scheduling based on community partners, libraries, parks, and organizations.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-2">Ideal For</dt>
              <dd className="text-base text-muted-foreground leading-relaxed">
                Adults, professionals, entrepreneurs, job seekers, caregivers, and lifelong learners.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Download Flyer */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Download Workshop Flyer
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the full overview of Everyday AI Made Simple to share with your community or organization.
          </p>
          <a
            href="/everyday-ai-made-simple.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Download Flyer (PDF)
          </a>
        </div>
      </section>

      {/* About the Instructor */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="bg-background rounded-2xl p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]">
                <img
                  src={akiliAbout}
                  alt="Akili Hight"
                  className="rounded-xl w-full max-w-lg object-cover"
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
            Interested in bringing a workshop to your organization, library, community center, school, or event?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/hightnetworksconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Free Intro Call
            </a>
            <a
              href="mailto:akili@hightnetworks.com"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Reach Out
            </a>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Workshops;
