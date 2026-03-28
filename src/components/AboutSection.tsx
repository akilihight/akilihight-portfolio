import akiliAbout from "@/assets/akili-about.jpg";

const AboutSection = () => (
  <section id="about" className="py-36">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="bg-secondary/50 rounded-2xl p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]">
            <img
              src={akiliAbout}
              alt="Akili Hight"
              className="rounded-xl w-full max-w-md object-cover"
              loading="lazy"
              width={800}
              height={1024}
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">About</h2>
          <div className="space-y-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              I've spent over 20 years leading technology and transformation work across healthcare and other regulated environments.
            </p>
            <p>
              That includes cloud modernization, data platforms, infrastructure, and large-scale digital initiatives tied to mission-critical systems.
            </p>
            <p>Over time, one pattern has shown up again and again.</p>
            <p>
              Most problems are not caused by lack of effort. They come from lack of clarity, misalignment, or too many moving parts.
            </p>
            <p>That is the work I focus on now.</p>
            <p>
              I help people, founders, and teams get clear on what matters, cut through the noise, and move forward with practical next steps.
            </p>
            <p>
              Sometimes that connects to enterprise systems, AI readiness, or structured transformation. Sometimes it is much simpler.
            </p>
            <p className="text-foreground font-medium">
              The goal is the same either way: clarity you can act on.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
