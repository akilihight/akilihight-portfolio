const items = [
  {
    title: "AI & Technology Strategy",
    desc: "Strategic guidance for leaders and organizations navigating AI adoption, cloud and data modernization, governance, operating models, and complex technology initiatives.",
    cta: "Explore Advisory",
    href: "https://hightnetworks.com",
  },
  {
    title: "AI Learning & Career Readiness",
    desc: "Practical guidance for professionals, job seekers, teams, and communities learning to use AI more confidently for work, communication, research, productivity, and career development.",
    cta: "Explore Learning",
    href: "/workshops",
  },
  {
    title: "Speaking & Workshops",
    desc: "Accessible, practical sessions on AI, emerging technology, innovation, the future of work, digital change, and building confidence with new tools.",
    cta: "View Workshops",
    href: "/workshops",
  },
];

const HowIHelpSection = () => (
  <section id="how-i-help" className="scroll-mt-24 py-24 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">How I Can Help</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
        Clear, practical support for organizations, professionals, and communities navigating technology and change.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => {
          const external = item.href.startsWith("http");
          return (
            <div
              key={item.title}
              className="bg-card rounded-xl p-8 border border-border/70 transition-shadow hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] flex flex-col h-full"
            >
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
