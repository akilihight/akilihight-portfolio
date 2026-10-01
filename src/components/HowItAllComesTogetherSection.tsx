const HowItAllComesTogetherSection = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
        Ideas Into Reality
      </h2>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
        From concept to brand, audience, and real-world opportunity.
      </p>

      <div className="mb-8 max-w-2xl">
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-border/40 bg-card shadow-sm">
            <iframe
              src="https://www.youtube-nocookie.com/embed/j2Qxh_78x4s"
              title="How Akili Hight built the Lucid Futurism brand"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full"
            />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          If the video does not load, {" "}
          <a
            href="https://www.youtube.com/watch?v=j2Qxh_78x4s"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Watch How Akili Hight built the Lucid Futurism brand on YouTube in a new tab"
          >
            watch it on YouTube
          </a>.
        </p>
      </div>

      <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
        The same approach I bring to technology and business: clarity, structure, creativity, and execution.
      </p>
    </div>
  </section>
);

export default HowItAllComesTogetherSection;
