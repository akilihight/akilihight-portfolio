import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CALENDLY_LINK = "https://calendly.com/hightnetworksconsulting/30min";

const offers = [
  {
    title: "Start Here: Clarity Session",
    description:
      "If you are dealing with something complex, unclear, or stuck, this is the place to begin.\n\nWe break it down, identify what matters, and map out what to do next.",
    detail:
      "A focused 30-minute introductory call for people who need help sorting through a situation, challenge, or next move.",
    bestFor:
      "Founders, professionals, creators, and teams who feel stuck or pulled in too many directions.",
    outcome: "Clarity you can act on immediately.",
    cta: "Book a Free Intro Call",
    href: CALENDLY_LINK,
  },
  {
    title: "AI Readiness Snapshot",
    description:
      "If your questions involve AI, data, or systems, this goes deeper.\n\nWe look at where things actually stand, what is missing, and what needs to be true before moving forward.",
    detail:
      "A focused review for organizations exploring AI but unsure where to begin, what is missing, or what needs to be true before moving forward.",
    bestFor:
      "Teams, leaders, and organizations navigating AI, data, and operational readiness.",
    outcome: "A clear view of risks, gaps, and next steps.",
    cta: "Explore AI Readiness",
    href: "https://cloudbait.io",
  },
  {
    title: "Execution Reset",
    description:
      "If something is already in motion but not working, this is where we fix it.\n\nWe cut through confusion, realign priorities, and get things moving again.",
    detail:
      "A practical reset for projects, priorities, or initiatives that feel unclear, stalled, or out of sync.",
    bestFor:
      "Teams and leaders dealing with drift, confusion, or too many moving parts.",
    outcome: "A clear path forward with practical next steps.",
    cta: "Visit Project Navigator",
    href: "https://projectnavigator.ai",
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

              <Accordion type="single" collapsible className="w-full mb-4">
                <AccordionItem value="details" className="border-none">
                  <AccordionTrigger className="text-sm font-medium text-primary hover:no-underline py-2 justify-start gap-2">
                    Details
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm text-muted-foreground pt-1">
                      <p>{offer.detail}</p>
                      <p>
                        <span className="font-medium text-foreground">
                          Best for:
                        </span>{" "}
                        {offer.bestFor}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

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
