const principles = [
  "Clarity before commitment",
  "Structure before scale",
  "Execution over theory",
];

const HowIWorkSection = () => (
  <section className="py-36">
    <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">How I Work</h2>
      <ul className="space-y-5">
        {principles.map((p) => (
          <li key={p} className="flex items-center gap-4 text-lg md:text-xl text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HowIWorkSection;
