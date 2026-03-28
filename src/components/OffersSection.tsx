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
  <section id="offers" className="py-24 bg-secondary/50">
    <div className="container mx-auto px-6 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">Offers</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div key={offer.title} className="bg-card rounded-lg p-8 border border-border space-y-4">
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
