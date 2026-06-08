const principles = [
  {
    title: "Clarity before complexity",
    detail: "We focus on understanding before optimization.",
  },
  {
    title: "Confidence through practice",
    detail: "Learning happens through real-world examples, not technical jargon.",
  },
  {
    title: "Action over overwhelm",
    detail: "We identify practical next steps that create momentum.",
  },
];

const HowIWorkSection = () => (
  <section className="py-28">
    <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5">
        How I Work
      </h2>
      <div className="mb-12 space-y-4">
        <p className="text-lg text-muted-foreground leading-relaxed">
          When technology changes, most people do not need more information.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          They need clarity.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I help people understand what matters, build confidence with new tools, and take practical next steps without feeling overwhelmed.
        </p>
      </div>

      <ul className="space-y-8">
        {principles.map((p) => (
          <li key={p.title} className="flex gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-3" />
            <div>
              <p className="text-lg font-medium text-foreground">
                {p.title}
              </p>
              <p className="text-muted-foreground mt-1 leading-relaxed">
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
