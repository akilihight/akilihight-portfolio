const ventures = [
  { name: "Hight Networks", desc: "enterprise advisory" },
  { name: "CloudBait Navigator", desc: "readiness" },
  { name: "ProjectNavigator.ai", desc: "execution" },
  { name: "Gritletter", desc: "insights" },
  { name: "Lucid Futurism", desc: "creative work" },
  { name: "Lucid Lounge", desc: "future physical space" },
];

const EcosystemSection = () => (
  <section className="py-24 bg-secondary/50">
    <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Ecosystem</h2>
      <p className="text-muted-foreground leading-relaxed mb-10">
        Different parts of my work live in different places, but they all serve the same goal:
        helping people move forward with clarity.
      </p>
      <ul className="space-y-3">
        {ventures.map((v) => (
          <li key={v.name} className="text-foreground">
            <span className="font-medium">{v.name}</span>
            <span className="text-muted-foreground"> — {v.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default EcosystemSection;
