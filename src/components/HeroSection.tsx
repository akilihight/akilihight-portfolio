import { Link } from "react-router-dom";
import akiliHero from "@/assets/akili-hero.jpg";

const HeroSection = () => (
  <section className="flex items-center bg-gradient-to-b from-background to-secondary/50">
    <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-7">
          <h1 className="text-[2.75rem] leading-[1.1] md:text-5xl md:leading-[1.14] lg:text-[3.25rem] font-semibold text-foreground">
            Making AI and technology easier to understand and use.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-xl">
            I help people and organizations turn emerging technology into clearer decisions, practical skills, and real results.
          </p>
          <ul className="space-y-3 max-w-xl">
            {[
              ["AI & Technology Strategy", "Make smarter decisions about AI, data, modernization, and governance."],
              ["Ideas Into Execution", "Turn concepts and opportunities into structured action."],
              ["Learning & Workforce Readiness", "Build practical confidence with AI and emerging technology."],
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
            <Link
              to="/ecosystem"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              See What I've Built
            </Link>
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
