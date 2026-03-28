const ventures = [
  { name: "Hight Networks", desc: "Advisory", url: "https://www.hightnetworks.com/" },
  { name: "CloudBait Navigator", desc: "Readiness", url: "https://cloudbait.io/" },
  { name: "Project Navigator", desc: "Execution", url: "https://projectnavigator.ai/" },
  { name: "Gritletter", desc: "Insights", url: "https://gritletter.co/" },
  { name: "Lucid Futurism", desc: "Creative", url: "https://www.lucidfuturism.com/" },
  { name: "Lucid Lounge", desc: "Physical space", url: "https://lucidlounge.lovable.app/" },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="py-36 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5">Ecosystem</h2>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
        Different parts of my work live in different places, but they all serve the same goal: helping people move forward with clarity.
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
