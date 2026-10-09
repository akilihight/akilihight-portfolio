import { Link } from "react-router-dom";
import akiliHero from "@/assets/akili-hero.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="flex items-center bg-gradient-to-b from-background to-secondary/50">
    <div className="container mx-auto px-5 lg:px-16 py-12 md:py-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-7">
          <p className="text-sm font-semibold text-primary">Akili Hight · Practical AI</p>
          <h1 className="text-4xl leading-[1.15] md:text-5xl font-semibold text-foreground">
            Making AI easier to understand and use.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-xl">
            Practical guidance, tools, and learning resources for people, professionals, and organizations navigating artificial intelligence.
          </p>
          <p className="inline-flex flex-wrap rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground">
            PMP® | CSM® | Master of Information Technology
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <Button asChild size="lg"><Link to="/#practical-ai">Explore Practical AI</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/#newsletter">Get the Free Digest</Link></Button>
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
