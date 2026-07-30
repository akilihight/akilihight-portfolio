import akiliHero from "@/assets/akili-hero.jpg";

const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-background to-secondary/50">
    <div className="container mx-auto px-6 lg:px-16 py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.12] text-foreground">
            Practical AI Strategy &amp; Insight for Work, Business, and Life.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/70 leading-relaxed max-w-xl">
            Helping executives, founders, and everyday builders navigate emerging technology with clarity, confidence, and actionable execution.
          </p>
          <ul className="space-y-3 max-w-xl">
            {[
              ["Executive-Level Clarity", "Demystifying complex AI systems without the jargon."],
              ["Workforce & Community Upskilling", "Interactive workshops built for real-world application."],
              ["Systems & Execution Strategy", "Moving projects from vision to tangible results."],
            ].map(([title, desc]) => (
              <li key={title} className="text-base leading-relaxed">
                <span className="font-semibold text-foreground">{title}</span>
                <span className="text-muted-foreground/70"> — {desc}</span>
              </li>
            ))}
          </ul>
          <p className="inline-flex flex-wrap rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground">
            PMP® | Certified ScrumMaster® | Master of Information Technology
          </p>


          <div className="space-y-2.5">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <a
                href="https://calendly.com/hightnetworksconsulting/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book a Free Intro Call
              </a>
              <a
                href="/workshops"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                Explore Workshops
              </a>
            </div>
            <p className="text-sm text-muted-foreground/50">
              Free 30-minute conversation — no commitment, just clarity.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="bg-secondary/60 rounded-2xl p-2 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]">
            <img
              src={akiliHero}
              alt="Akili Hight"
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
