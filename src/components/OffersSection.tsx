import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CALENDLY_LINK = "https://calendly.com/hightnetworksconsulting/30min";

const offers = [
  {
    title: "Everyday AI Coaching",
    description:
      "Practical guidance for individuals, professionals, job seekers, and lifelong learners who want to use AI tools with confidence.",
    outcome: "Greater confidence and practical AI skills.",
    cta: "Learn More",
    href: "/workshops",
  },
  {
    title: "Workshops & Speaking",
    description:
      "Interactive workshops for parks, libraries, nonprofits, schools, workforce programs, and organizations.",
    outcome: "Better understanding of AI and emerging technology.",
    cta: "Explore Workshops",
    href: "/workshops",
  },
  {
    title: "Founder & Strategy Sessions",
    description:
      "For founders, creators, and professionals navigating business, technology, positioning, and growth decisions.",
    outcome: "Clarity, priorities, and actionable next steps.",
    cta: "Book a Strategy Session",
    href: CALENDLY_LINK,
  },
];

const OffersSection = () => (
  <section id="offers" className="py-28">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
        Offers
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        Start where it fits your situation.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="bg-card rounded-xl p-8 border border-border/70 transition-shadow hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] flex flex-col h-full"
          >
            <div className="min-h-[200px] flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3 min-h-[56px]">
                {offer.title}
              </h3>
              <div className="text-muted-foreground leading-relaxed space-y-3 text-[15px]">
                {offer.description.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col pt-5">
              <p className="text-sm font-medium text-foreground mb-4">
                <span className="text-primary">Outcome:</span> {offer.outcome}
              </p>


              <a
                href={offer.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
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
