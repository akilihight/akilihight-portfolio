const bullets = [
  "Practical examples for work, home, and daily life",
  "Prompting basics, privacy, safety, and responsible AI use",
  "Flexible format for workplaces and community organizations",
];

const FeaturedWorkshopSection = () => (
  <section id="workshop" className="scroll-mt-24 py-20">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <div className="rounded-2xl border border-border/70 bg-card p-8 md:p-10 grid gap-8 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3">
          <p className="text-[11px] font-semibold text-primary/80 uppercase tracking-wider mb-2">
            Featured Workshop
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Everyday AI Made Simple
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Practical AI skills for everyday life — a beginner-friendly session on using tools like ChatGPT, Gemini, Claude, and Copilot with confidence.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
            ✓ No technical experience required
          </span>
        </div>
        <div className="md:col-span-2">
          <ul className="space-y-2.5 mb-6">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="/workshops"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Workshop
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedWorkshopSection;
