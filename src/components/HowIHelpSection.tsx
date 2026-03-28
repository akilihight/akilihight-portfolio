const points = [
  "Break things down",
  "Make sense of what's going on",
  "Figure out what to actually do next",
];

const HowIHelpSection = () => (
  <section className="py-32">
    <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10">How I Help</h2>
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>I don't just give ideas.</p>
        <p>I help you:</p>
        <ul className="space-y-4 pl-1">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {point}
            </li>
          ))}
        </ul>
        <p>
          Sometimes that includes structure. Sometimes tools. Sometimes just clarity.
        </p>
        <p className="text-foreground font-medium">But it always leads to movement.</p>
      </div>
    </div>
  </section>
);

export default HowIHelpSection;
