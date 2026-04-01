const CALENDLY_LINK = "https://calendly.com/hightnetworksconsulting/30min";

const principles = [
  {
    title: "Clarity before commitment",
    detail:
      "We slow things down enough to understand what actually matters before making decisions.",
  },
  {
    title: "Structure before scale",
    detail:
      "We build the right foundation so progress does not create more confusion.",
  },
  {
    title: "Execution over theory",
    detail:
      "We focus on practical next steps, not just ideas.",
  },
];

const steps = [
  { label: "Pause", desc: "Step back from the noise." },
  { label: "Clarify", desc: "Look at what is actually going on." },
  { label: "Connect", desc: "Identify the patterns, priorities, and pressure points." },
  { label: "Move", desc: "Decide the next practical step." },
];

const HowIWorkSection = () => (
  <section className="py-36">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
        How I Work
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-14">
        When something feels unclear, the goal is not to rush. It is to slow things down, understand what matters, and move forward with intention.
      </p>

      <ul className="space-y-10 mb-20">
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

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6">
          When something feels unclear, we work through it by:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {steps.map((step) => (
            <div key={step.label} className="space-y-1.5">
              <h4 className="text-lg font-semibold text-foreground">{step.label}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-base text-muted-foreground leading-loose max-w-2xl">
        If something feels unclear, we can break it down and figure out what to do next.{" "}
        <a
          href={CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          Start with a free clarity session
        </a>
        .
      </p>
    </div>
  </section>
);

export default HowIWorkSection;
