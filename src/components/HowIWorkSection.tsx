const principles = [
  "Clarity before commitment",
  "Structure before scale",
  "Execution over theory",
];

const HowIWorkSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">How I Work</h2>
      <ul className="space-y-4">
        {principles.map((p) => (
          <li key={p} className="flex items-center gap-3 text-lg text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HowIWorkSection;
