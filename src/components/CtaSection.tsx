const CtaSection = () => (
  <section id="cta" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 text-center max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
        Start a Conversation
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        Working through an AI, technology, career, workshop, or strategy question? Tell me what you're trying to accomplish.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://calendly.com/hightnetworksconsulting/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Book a Free Intro Call
        </a>
        <a href="mailto:akili@hightnetworks.com" className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
          Reach Out by Email
        </a>
      </div>
      <p className="text-sm text-muted-foreground/60 mt-3">
        Free 30-minute conversation — no pressure.
      </p>
    </div>
  </section>
);

export default CtaSection;
