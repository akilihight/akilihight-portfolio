import akiliHero from "@/assets/akili-hero.jpg";

const HeroSection = () => (
  <section className="flex items-center bg-gradient-to-b from-background to-secondary/50">
    <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-7">
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.14] text-foreground">
            Making AI and technology easier to understand and act on.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-xl">
            I help leaders, professionals, and communities turn emerging technology into clearer decisions, practical skills, and measurable action.
          </p>
          <ul className="space-y-3 max-w-xl">
            {[
              ["AI & Technology Strategy", "Helping leaders make informed decisions about AI, modernization, governance, and execution."],
              ["Ideas Into Execution", "Turning concepts, strategies, and opportunities into structured action."],
              ["Learning & Workforce Readiness", "Building practical confidence with AI tools and emerging technology."],
            ].map(([title, desc]) => (
              <li key={title} className="text-base leading-relaxed">
                <span className="font-semibold text-foreground">{title}</span>
                <span className="text-muted-foreground/80"> — {desc}</span>
              </li>
            ))}
          </ul>
          <p className="inline-flex flex-wrap rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground">
            PMP® | CSM® | Master of Information Technology
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <a
              href="#how-i-help"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Work With Me
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Explore My Work
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="bg-secondary/60 rounded-2xl p-2 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]">
            <img
              src={akiliHero}
              alt="Portrait of Akili Hight, technology consultant and educator"
              className="rounded-xl w-full max-w-xl object-cover"
              width={720}
              height={900}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
