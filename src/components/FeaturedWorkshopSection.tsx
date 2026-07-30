const bullets = [
  "Practical examples for work, home, and daily life",
  "Prompting basics and better questions",
  "Privacy, safety, scams, and responsible AI use",
  "Flexible format for parks, libraries, nonprofits, and community programs",
];

const FeaturedWorkshopSection = () => (
  <section id="workshop" className="py-28">
    <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
      <p className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-3">
        Featured Workshop
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
        Everyday AI Made Simple
      </h2>
      <p className="text-lg text-muted-foreground mb-6">
        Practical AI skills for everyday life.
      </p>
      <p className="text-base text-muted-foreground leading-relaxed mb-8">
        A beginner-friendly workshop that helps people understand and use tools like ChatGPT, Gemini, Claude, and Microsoft Copilot with confidence. Designed for adults, job seekers, entrepreneurs, caregivers, lifelong learners, and community groups.
      </p>
      <ul className="space-y-3 mb-10">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-muted-foreground leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a
        href="/workshops"
        className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Learn About Workshops
      </a>
    </div>
  </section>
);

export default FeaturedWorkshopSection;
