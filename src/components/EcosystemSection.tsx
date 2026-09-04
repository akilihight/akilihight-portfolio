const ventures = [
  {
    name: "Hight Networks",
    category: "Enterprise Advisory",
    desc: "Enterprise advisory and technical leadership focused on AI readiness, cloud modernization, data governance, and strategic execution.",
    cta: "Visit Hight Networks",
    url: "https://hightnetworks.com",
  },
  {
    name: "CloudBait Navigator",
    category: "AI & Cloud Readiness",
    desc: "AI and cloud readiness decision platform designed to help organizations evaluate risk, align architecture, and scale AI responsibly.",
    cta: "Explore CloudBait",
    url: "https://cloudbait.io",
  },
  {
    name: "Project Navigator",
    category: "Project Intelligence",
    desc: "Project intelligence workspace that helps leaders cut through ambiguity to establish clear scope, ownership, and executive execution plans.",
    cta: "Explore Project Navigator",
    url: "https://projectnavigator.ai",
  },
  {
    name: "CareerProof",
    category: "Career Technology",
    desc: "Career intelligence platform providing a more durable way for professionals to articulate execution scale, experience, and role alignment.",
  },
  {
    name: "Gritletter",
    category: "Media & Ideas",
    desc: "Thought leadership and sharp perspectives on AI, execution, work resilience, and navigating a rapidly evolving technological landscape.",
    cta: "Read Gritletter",
    url: "https://gritletter.substack.com/",
  },
  {
    name: "LUCID Futurism",
    category: "Creative & Futurism",
    desc: "Futurist storytelling, speculative media, and creative works exploring the intersection of technology, human identity, and possible futures.",
    cta: "Explore LUCID Futurism",
    url: "https://www.lucidfuturism.com/",
  },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="scroll-mt-24 py-20 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">The Innovation Ecosystem</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
        A portfolio of businesses, products, media, and creative ventures I've built around technology, decision-making, learning, and imagination.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ventures.map((v) => (
          <div
            key={v.name}
            className="bg-card rounded-xl p-7 border border-border/70 transition-shadow hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] flex flex-col h-full"
          >
            <span className="inline-flex self-start rounded-full border border-border bg-secondary/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {v.category}
            </span>
            <h3 className="text-lg font-semibold text-foreground mb-2.5">{v.name}</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px] flex-1">{v.desc}</p>
            {v.url ? (
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center self-start text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {v.cta} →
              </a>
            ) : (
              <span className="mt-5 inline-flex items-center self-start text-sm font-medium text-muted-foreground/70">
                In Development
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemSection;
