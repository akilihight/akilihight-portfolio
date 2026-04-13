const HowItAllComesTogetherSection = () => (
  <section className="py-28 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
        How It All Comes Together
      </h2>
      <p className="text-lg text-muted-foreground mb-12">
        This is what it looks like when ideas move beyond thinking and turn into something real.
      </p>

      <div className="mb-10">
        <p className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-2">
          From idea to execution
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
          A quick breakdown of how an idea turned into something real, from early
          vision to showing up at Comic-Con.
        </p>
        <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-sm border border-border/40">
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
        This is the same approach I bring to every conversation: clarity,
        structure, and forward movement.
      </p>
    </div>
  </section>
);

export default HowItAllComesTogetherSection;
