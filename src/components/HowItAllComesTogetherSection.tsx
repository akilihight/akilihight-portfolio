const HowItAllComesTogetherSection = () => (
  <section className="py-36 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
        How It All Comes Together
      </h2>
      <p className="text-lg text-muted-foreground mb-10">
        This is not theory. This is how it actually played out.
      </p>

      <p className="text-base text-muted-foreground leading-relaxed mb-8">
        A quick breakdown of how an idea turned into something real — from early
        vision to showing up at Comic-Con.
      </p>

      <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-sm border border-border/40">
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/j2Qxh_78x4s"
            title="How It All Comes Together — Akili Hight"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      <p className="text-base text-muted-foreground leading-relaxed mt-10 text-center max-w-2xl mx-auto">
        This is the same approach I bring to every conversation. Clarity,
        structure, and execution.
      </p>
    </div>
  </section>
);

export default HowItAllComesTogetherSection;
