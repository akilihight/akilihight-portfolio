const ventures = [
  {
    name: "Gritletter",
    desc: "Insights on AI, systems, discipline, execution, and clarity for people building in a high-velocity world.",
    cta: "Read Gritletter",
    url: "https://gritletter.co",
  },
  {
    name: "Hight Networks",
    desc: "Technology advisory for organizations preparing cloud, data, governance, and operating foundations for responsible AI adoption.",
    cta: "Visit Hight Networks",
    url: "https://hightnetworks.com",
  },
  {
    name: "CloudBait Navigator",
    desc: "AI and cloud readiness assessment for leaders evaluating whether their organization is prepared to scale AI beyond pilots.",
    cta: "Explore CloudBait",
    url: "https://cloudbait.io",
  },
  {
    name: "LUCID Futurism",
    desc: "Akili's Afrofuturistic sci-fantasy universe exploring dreams, identity, technology, imagination, and transformation.",
    cta: "Read the Novel",
    url: "https://www.lucidfuturism.com/",
  },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="py-28 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Ecosystem</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        A connected set of platforms supporting learning, advisory, readiness, and creative work.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {ventures.map((v) => (
          <div
            key={v.name}
            className="bg-card rounded-xl p-8 border border-border/70 transition-shadow hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] flex flex-col h-full"
          >
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
