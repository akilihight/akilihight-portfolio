const offers = [
  {
    title: "Clarity Session",
    description: "Bring whatever you're trying to figure out. We'll make it clear and define your next move.",
  },
  {
    title: "AI Readiness Snapshot",
    description: "For organizations exploring AI or modernization but not sure if they're actually ready.",
  },
  {
    title: "Execution Reset",
    description: "If something you're working on feels stuck, unclear, or drifting, I'll help you reset it and move forward.",
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
