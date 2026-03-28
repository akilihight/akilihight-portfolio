import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const offers = [
  {
    title: "Clarity Session",
    description: "Walk away with a clear plan and next steps you can actually act on.",
    detail: "A focused 30-minute introductory call for people who need help sorting through a situation, challenge, or next move.",
    bestFor: "Founders, professionals, creators, and teams who feel stuck or pulled in too many directions.",
    outcome: "Clarity on what is going on, what matters most, and what to do next.",
    cta: "Book a Free Intro Call",
    href: "https://calendly.com/hightnetworksconsulting/30min",
    external: true,
  },
  {
    title: "AI Readiness Snapshot",
    description: "Understand where AI actually fits in your business and what to do about it.",
    detail: "A focused review for organizations exploring AI but unsure where to begin, what is missing, or what needs to be true before moving forward.",
    bestFor: "Teams, leaders, and organizations navigating AI, data, and operational readiness.",
    outcome: "A clearer view of risks, gaps, and next steps.",
    cta: "Learn More",
    href: "mailto:info@hightnetworks.com",
    external: false,
  },
  {
    title: "Execution Reset",
    description: "Fix what's stuck, remove confusion, and get things moving again.",
    detail: "A practical reset for projects, priorities, or initiatives that feel unclear, stalled, or out of sync.",
    bestFor: "Teams and leaders dealing with drift, confusion, or too many moving parts.",
    outcome: "A clearer path, sharper priorities, and a more workable next step.",
    cta: "Learn More",
    href: "mailto:info@hightnetworks.com",
    external: false,
  },
];

const OffersSection = () => (
  <section id="offers" className="py-36">
    <div className="container mx-auto px-6 lg:px-16">
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
        Here are a few ways I can help, depending on what you're dealing with.
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-14">Offers</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="bg-card rounded-xl p-9 border border-border/70 space-y-4 transition-shadow hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] flex flex-col"
          >
            <h3 className="text-xl font-semibold text-foreground">{offer.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{offer.description}</p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="details" className="border-none">
                <AccordionTrigger className="text-sm font-medium text-primary hover:no-underline py-2 justify-start gap-2">
                  Details
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-sm text-muted-foreground pt-1">
                    <p>{offer.detail}</p>
                    <p>
                      <span className="font-medium text-foreground">Best for:</span> {offer.bestFor}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Outcome:</span> {offer.outcome}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-auto pt-2">
              <a
                href={offer.href}
                {...(offer.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors px-6 py-2.5 ${
                  offer.external
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {offer.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OffersSection;
