const ventures = [
  { name: "Hight Networks", desc: "enterprise advisory", url: "https://www.hightnetworks.com/" },
  { name: "CloudBait Navigator", desc: "readiness", url: "https://cloudbait.io/" },
  { name: "ProjectNavigator.ai", desc: "execution", url: "https://projectnavigator.ai/" },
  { name: "Gritletter", desc: "insights", url: "https://gritletter.co/" },
  { name: "Lucid Futurism", desc: "creative work", url: "https://www.lucidfuturism.com/" },
  { name: "Lucid Lounge", desc: "future physical space", url: "https://lucidlounge.lovable.app/" },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="py-32 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-5">Ecosystem</h2>
      <p className="text-muted-foreground leading-relaxed mb-12">
        Different parts of my work live in different places, but they all serve the same goal:
        helping people move forward with clarity.
      </p>
      <ul className="space-y-5">
        {ventures.map((v) => (
          <li key={v.name}>
            <a
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline gap-2 text-foreground transition-colors hover:text-primary"
            >
              <span className="font-medium group-hover:underline underline-offset-4">{v.name}</span>
              <span className="text-muted-foreground group-hover:text-primary/70 transition-colors"> — {v.desc}</span>
              <span className="text-muted-foreground/50 text-sm transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default EcosystemSection;
