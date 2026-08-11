const categories = [
  {
    category: "Enterprise & Technology",
    ventures: [
      {
        name: "Hight Networks",
        desc: "Technology advisory focused on AI readiness, cloud, data, governance, modernization, and execution.",
        cta: "Visit Hight Networks",
        url: "https://hightnetworks.com",
      },
      {
        name: "CloudBait Navigator",
        desc: "AI and cloud readiness decision platform helping organizations evaluate whether they are prepared to scale AI responsibly.",
        cta: "Explore CloudBait",
        url: "https://cloudbait.io",
      },
      {
        name: "Project Navigator",
        desc: "Project intelligence workspace designed to help leaders turn complex initiatives into structured plans, decisions, and executive narratives.",
      },
    ],
  },
  {
    category: "Career & Professional Development",
    ventures: [
      {
        name: "CareerProof",
        desc: "Career intelligence platform exploring a more durable way to represent professional experience, execution scale, and role alignment.",
      },
    ],
  },
  {
    category: "Media & Ideas",
    ventures: [
      {
        name: "Gritletter",
        desc: "Writing and ideas about AI, work, change, resilience, and navigating a rapidly evolving world.",
        cta: "Read Gritletter",
        url: "https://gritletter.co",
      },
    ],
  },
  {
    category: "Creative & Futurism",
    ventures: [
      {
        name: "LUCID Futurism",
        desc: "Futurist storytelling and speculative media exploring technology, identity, human potential, mythology, and possible futures.",
        cta: "Explore LUCID Futurism",
        url: "https://www.lucidfuturism.com/",
      },
    ],
  },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="scroll-mt-24 py-24 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">The Innovation Ecosystem</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
        A connected portfolio of advisory, technology products, media, and creative ventures built and led by Akili Hight.
      </p>

      <div className="space-y-12">
        {categories.map((group) => (
          <div key={group.category}>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-5">
              {group.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.ventures.map((v) => (
                <div
                  key={v.name}
                  className="bg-card rounded-xl p-7 border border-border/70 transition-shadow hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] flex flex-col h-full"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2.5">{v.name}</h4>
                  <p className="text-muted-foreground leading-relaxed text-[15px] flex-1">{v.desc}</p>
                  {v.url && (
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center self-start text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      {v.cta} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemSection;
