const items = [
  {
    title: "AI & Technology Strategy",
    audience: "For Organizations & Leaders",
    desc: "For organizations and leaders making decisions about AI, data, cloud, governance, and transformation.",
    cta: "Explore Advisory",
    href: "https://hightnetworks.com",
  },
  {
    title: "AI Learning & Career Readiness",
    audience: "For Individual Professionals",
    desc: "For individuals and professionals building practical AI skills, navigating work, or preparing for what comes next.",
    cta: "Explore Learning",
    href: "/learning",
  },
  {
    title: "Speaking & Workforce Learning",
    audience: "For Community Groups & Nonprofits",
    desc: "For teams, companies, schools, nonprofits, and community organizations that need practical AI education.",
    cta: "View Workshops",
    href: "/workshops",
  },
];

const HowIHelpSection = () => (
  <section id="how-i-help" className="scroll-mt-24 py-24 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">How I Can Help</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
        Practical support for individuals, professionals, teams, and organizations.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => {
          const external = item.href.startsWith("http");
          return (
            <div
              key={item.title}
              className="bg-card rounded-xl p-8 border border-border/70 transition-shadow hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] flex flex-col h-full"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/80 mb-2">{item.audience}</p>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px] flex-1">{item.desc}</p>
              <a
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="mt-6 inline-flex items-center justify-center self-start rounded-lg text-sm font-medium transition-colors px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {item.cta}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HowIHelpSection;
