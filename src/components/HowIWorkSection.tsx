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
        When something feels unclear, the goal is not to force it. It is to slow things down, read the moment, and move with intention.
      </p>

      <ul className="space-y-10 mb-14">
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
        <h3 className="text-xl font-semibold text-foreground mb-10">
          When something feels unclear:
        </h3>
        <ul className="space-y-10">
          {steps.map((step) => (
            <li key={step.label} className="flex gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-3" />
              <div>
                <p className="text-lg md:text-xl font-medium text-foreground">
                  {step.label}
                </p>
                <p className="text-muted-foreground mt-1.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default HowIWorkSection;
