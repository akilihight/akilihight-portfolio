const offers = [
  {
    title: "Clarity Session",
    description: "Walk away with a clear plan and next steps you can actually act on.",
  },
  {
    title: "AI Readiness Snapshot",
    description: "Understand where AI actually fits in your business and what to do about it.",
  },
  {
    title: "Execution Reset",
    description: "Fix what's stuck, remove confusion, and get things moving again.",
  },
];

const OffersSection = () => (
  <section id="offers" className="py-32 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-14">Offers</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div key={offer.title} className="bg-card rounded-xl p-9 border border-border/70 space-y-5 transition-shadow hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-xl font-semibold text-foreground">{offer.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{offer.description}</p>
            <a href="#cta" className="inline-block text-sm font-medium text-primary hover:underline pt-2">
              Start Here →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OffersSection;
