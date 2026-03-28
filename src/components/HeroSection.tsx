import akiliHero from "@/assets/akili-hero.jpg";

const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
            I help you make sense of what you're dealing with and figure out what to do next.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For people, founders, and teams who feel stuck, unclear, or pulled in too many directions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Book a Clarity Session
            </a>
            <a href="#offers" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
              Get an AI Readiness Snapshot
            </a>
            <a href="#offers" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
              Fix a Stuck Project
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={akiliHero}
            alt="Akili Hight in a thoughtful pose"
            className="rounded-lg w-full max-w-md object-cover shadow-sm"
            width={600}
            height={750}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
