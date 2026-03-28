const HowIThinkSection = () => (
  <section className="py-36 bg-background">
    <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">How I Think</h2>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
        Sometimes the fastest way to understand how I work is to hear how I think.
        <br /><br />
        Here's a short example.
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-sm border border-border/40">
          <div className="relative" style={{ paddingBottom: '177.78%' }}>
            <iframe
              src="https://www.youtube.com/embed/xmGXEA-OtgQ"
              title="How I Think — Akili Hight"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowIThinkSection;
