import { Card, CardContent } from "@/components/ui/card";

const books = [
  {
    title: "The 50th Law",
    url: "https://www.amazon.com/50th-Law-50-Cent/dp/006177460X",
    summary: "A guide to fearlessness and strategic thinking.",
    insights: [
      "Fear is the biggest obstacle to clarity.",
      "Self-reliance is the foundation of real confidence.",
    ],
    practice: "Face uncertainty directly. Better decisions follow.",
  },
  {
    title: "Sell or Be Sold",
    url: "https://www.amazon.com/Sell-Be-Sold-Your-Business/dp/1608322904",
    summary: "A framework for influence and clear communication.",
    insights: [
      "Every interaction involves selling a vision or direction.",
      "Belief in what you offer is non-negotiable.",
    ],
    practice: "If you cannot communicate your value clearly, nothing else matters.",
  },
  {
    title: "The Science of Getting Rich",
    url: "https://www.amazon.com/Science-Getting-Rich-Wallace-Wattles/dp/1594625867",
    summary: "Principle-based thinking for building with intention.",
    insights: [
      "Clarity of thought precedes clarity of action.",
      "Creation, not competition, is the path forward.",
    ],
    practice: "Focus on what you can build, not what others are doing.",
  },
];

const steps = [
  { label: "Pause", desc: "Step back from the noise." },
  { label: "Clarify", desc: "Look at what is actually going on." },
  { label: "Connect", desc: "Identify the patterns, priorities, and pressure points." },
  { label: "Move", desc: "Decide the next practical step." },
];

const CALENDLY_LINK = "https://calendly.com/hightnetworksconsulting/30min";

const HowIProcessSection = () => (
  <section className="py-36 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-16 max-w-4xl space-y-20">
      {/* Title & Intro */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
          How We Work Through It
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          When something feels unclear, we slow it down, sort through it, and focus on what matters most.
        </p>
      </div>

      {/* Framework */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.label} className="space-y-1.5">
              <h3 className="text-lg font-semibold text-foreground">{step.label}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-8">
          This is the process I bring into every clarity session.
        </p>
      </div>

      {/* Learning and Applying */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Learning and Applying</h3>
        <p className="text-sm text-muted-foreground mb-6">A few ideas that shape this approach</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <Card key={book.title} className="flex flex-col h-full border-border/40">
              <CardContent className="p-6 flex flex-col flex-1 gap-4">
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {book.title}
                </a>
                <p className="text-sm text-muted-foreground">{book.summary}</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  {book.insights.map((insight, i) => (
                    <li key={i}>{insight}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <p className="text-xs font-medium text-primary/80 uppercase tracking-wider mb-1">
                    In practice
                  </p>
                  <p className="text-sm text-muted-foreground">{book.practice}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Closing */}
      <p className="text-base text-muted-foreground leading-loose">
        If something feels unclear, we can break it down and figure out what to do next.{" "}
        <a
          href={CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          Start with a free clarity session
        </a>
        .
      </p>
    </div>
  </section>
);

export default HowIProcessSection;
