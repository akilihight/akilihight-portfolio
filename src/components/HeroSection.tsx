import akiliHero from "@/assets/akili-hero.jpg";

const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-background to-secondary/50">
    <div className="container mx-auto px-6 lg:px-16 py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] text-foreground">
            I help you get clear, get aligned, and move forward.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/70 leading-relaxed max-w-lg">
            For people, founders, and teams who feel stuck, pulled in too many directions, or unsure what the next move should be.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="https://calendly.com/hightnetworksconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Clarity Session
            </a>
            <a
              href="#offers"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Explore Services
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="bg-secondary/60 rounded-2xl p-2 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]">
            <img
              src={akiliHero}
              alt="Akili Hight in a thoughtful pose"
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
