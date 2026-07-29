const principles = [
  {
    title: "Clarity Before Complexity",
    detail: "We evaluate strategic objectives before jumping into technical stack selection.",
  },
  {
    title: "Confidence Through Practice",
    detail: "Real-world scenarios, practical frameworks, and hands-on execution replacing jargon.",
  },
  {
    title: "Action Over Overwhelm",
    detail: "Prioritizing measurable momentum and immediate operational value.",
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
