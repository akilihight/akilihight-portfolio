import akiliHero from "@/assets/akili-hero.jpg";

const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-background to-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 py-16">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="space-y-10">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.15] text-foreground">
            I help you make sense of what you're dealing with and figure out what to do next.
          </h1>
          <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-lg">
            For people, founders, and teams who feel stuck, unclear, or pulled in too many directions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Clarity Session
            </a>
            <a
              href="#offers"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Get an AI Readiness Snapshot
            </a>
            <a
              href="#offers"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Fix a Stuck Project
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="bg-secondary/60 rounded-2xl p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]">
            <img
              src={akiliHero}
              alt="Akili Hight in a thoughtful pose"
              className="rounded-xl w-full max-w-md object-cover"
              width={600}
              height={750}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
