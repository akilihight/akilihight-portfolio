const HowItAllComesTogetherSection = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
        Building Ideas Into Reality
      </h2>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
        A real example of how an idea can move from concept to brand, platform, audience, and real-world opportunity.
      </p>

      <div className="mb-8">
        <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-sm border border-border/40">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/j2Qxh_78x4s"
              title="From idea to execution — Akili Hight"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
        This is the same approach I bring to technology and business challenges: clarity, structure, creativity, and consistent execution.
      </p>
    </div>
  </section>
);

export default HowItAllComesTogetherSection;
