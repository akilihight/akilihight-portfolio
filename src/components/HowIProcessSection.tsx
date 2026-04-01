const steps = [
  { label: "Pause", desc: "Step back from the noise." },
  { label: "Clarify", desc: "Look at what is actually going on." },
  { label: "Connect", desc: "Identify the patterns, priorities, and pressure points." },
  { label: "Move", desc: "Decide the next practical step." },
];

const CALENDLY_LINK = "https://calendly.com/hightnetworksconsulting/30min";

const HowIProcessSection = () => (
  <section className="py-36 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl space-y-14">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
          How We Work Through It
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          When something feels unclear, we slow it down, sort through it, and focus on what matters most.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.label} className="space-y-1.5">
              <h3 className="text-lg font-semibold text-foreground">{step.label}</h3>
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

export default HowIProcessSection;
