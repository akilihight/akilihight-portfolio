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
              className="rounded-xl w-full max-w-sm object-cover"
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
              I've spent over 20 years leading enterprise technology and transformation work across healthcare and regulated environments.
            </p>
            <p>
              That includes cloud modernization, data platforms, infrastructure, and large-scale digital initiatives supporting mission-critical systems.
            </p>
            <p>Across that experience, one pattern shows up consistently.</p>
            <p>Most problems are not caused by a lack of effort.</p>
            <p>
              They come from lack of clarity, misalignment, or too many moving parts.
            </p>
            <p>That's the work I focus on now.</p>
            <p>
              Helping people, founders, and teams make sense of complex situations, get aligned on what matters, and move forward with clear, practical next steps.
            </p>
            <p>
              Sometimes that work connects to enterprise systems, AI readiness, or structured transformation.
            </p>
            <p>Sometimes it's much simpler.</p>
            <p className="text-foreground font-medium">
              But the goal is always the same. Clarity that leads to movement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
