const principles = [
  {
    title: "Clarity Before Complexity",
    detail: "Define the objective before choosing the technology.",
  },
  {
    title: "Confidence Through Practice",
    detail: "Learn through real situations and hands-on application.",
  },
  {
    title: "Action Over Overwhelm",
    detail: "Turn complexity into clear next steps.",
  },
];

const HowIWorkSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
        How I Work
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Technology changes quickly. Good decisions still begin with clarity.
      </p>

      <ul className="space-y-7">
        {principles.map((p) => (
          <li key={p.title} className="flex gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-3" />
            <div>
              <p className="text-lg font-medium text-foreground">{p.title}</p>
              <p className="text-muted-foreground mt-1 leading-relaxed">{p.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HowIWorkSection;
