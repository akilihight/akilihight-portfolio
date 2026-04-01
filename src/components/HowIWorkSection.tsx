const principles = [
  {
    title: "Clarity before commitment",
    detail:
      "We slow things down enough to understand what actually matters before making decisions.",
  },
  {
    title: "Structure before scale",
    detail:
      "We build the right foundation so growth does not create more problems.",
  },
  {
    title: "Execution over theory",
    detail:
      "We focus on what can actually be done next, not just what sounds good.",
  },
];

const HowIWorkSection = () => (
  <section className="py-36">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
        How I Work
      </h2>
      <ul className="space-y-10">
        {principles.map((p) => (
          <li key={p.title} className="flex gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-3" />
            <div>
              <p className="text-lg md:text-xl font-medium text-foreground">
                {p.title}
              </p>
              <p className="text-muted-foreground mt-1.5 leading-relaxed">
                {p.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HowIWorkSection;
