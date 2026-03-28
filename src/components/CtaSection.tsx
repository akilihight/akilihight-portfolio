const CtaSection = () => (
  <section id="cta" className="py-32 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 text-center max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10">
        Start with a conversation.
      </h2>
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <a href="#" className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Book a Clarity Session
        </a>
        <a href="#" className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
          Reach Out
        </a>
      </div>
    </div>
  </section>
);

export default CtaSection;
