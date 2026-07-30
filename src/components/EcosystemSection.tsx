const ventures = [
  {
    name: "Gritletter",
    badge: "Thought Leadership & Media",
    desc: "Insights on AI, high-velocity systems, execution discipline, and strategy for builders and executives.",
    cta: "Read Gritletter",
    url: "https://gritletter.co",
  },
  {
    name: "Hight Networks",
    badge: "Enterprise Tech Advisory",
    desc: "Technology advisory for organizations preparing cloud, data, governance, and operating foundations for responsible AI adoption.",
    cta: "Visit Hight Networks",
    url: "https://hightnetworks.com",
  },
  {
    name: "CloudBait Navigator",
    badge: "Enterprise SaaS & Readiness",
    desc: "AI and cloud readiness assessment platform for leaders evaluating whether their organization is prepared to scale AI beyond pilots.",
    cta: "Explore CloudBait",
    url: "https://cloudbait.io",
  },
  {
    name: "LUCID Futurism",
    badge: "Creative & Publishing Universe",
    desc: "Afrofuturistic sci-fantasy brand and publishing engine exploring technology, human potential, identity, and transformation.",
    cta: "Explore LUCID Futurism",
    url: "https://www.lucidfuturism.com/",
  },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="py-28 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">The Innovation Ecosystem</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        A connected portfolio of advisory, enterprise platforms, media, and creative universes built and led by Akili Hight.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {ventures.map((v) => (
          <div
            key={v.name}
            className="bg-card rounded-xl p-8 border border-border/70 transition-shadow hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] flex flex-col h-full"
          >
            <span className="inline-flex self-start items-center rounded-full bg-secondary px-3 py-1 mb-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {v.badge}
            </span>
            <h3 className="text-xl font-semibold text-foreground mb-3">{v.name}</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px] flex-1">{v.desc}</p>

            <a
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center self-start rounded-lg text-sm font-medium transition-colors px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {v.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemSection;
