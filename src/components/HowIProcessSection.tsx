import { Card, CardContent } from "@/components/ui/card";

const books = [
  {
    title: "The 50th Law",
    summary: "A guide to fearlessness, built on real experience and strategic thinking.",
    insights: [
      "Fear is the biggest obstacle to clarity and progress.",
      "Intensity of purpose creates momentum.",
      "Self-reliance is the foundation of real confidence.",
    ],
    practice:
      "Face uncertainty directly. The clearer you see reality, the better your decisions become.",
  },
  {
    title: "Sell or Be Sold",
    summary: "A framework for understanding influence, conviction, and communication.",
    insights: [
      "Every interaction involves selling an idea, a vision, or a direction.",
      "Belief in what you offer is non-negotiable.",
      "Objections are opportunities to listen and clarify.",
    ],
    practice:
      "If you cannot communicate your value clearly, nothing else matters.",
  },
  {
    title: "The Science of Getting Rich",
    summary: "A principle-based approach to thinking, creating, and building with intention.",
    insights: [
      "Clarity of thought precedes clarity of action.",
      "Gratitude sharpens focus and removes distraction.",
      "Creation, not competition, is the path forward.",
    ],
    practice:
      "Focus on what you can build, not what others are doing. That is where real progress lives.",
  },
];

const CALENDLY_LINK = "https://calendly.com/hightnetworksconsulting/30min";

const HowIProcessSection = () => (
  <section className="py-36 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
        How I Process and Apply
      </h2>

      {/* Intro */}
      <div className="text-lg text-muted-foreground leading-relaxed mb-16 space-y-4">
        <p>
          I don't just consume information.
          <br />
          I take time to process it, connect it, and figure out what actually matters.
        </p>
        <p>
          In a world moving faster than ever, clarity comes from stepping back and thinking clearly.
        </p>
      </div>

      {/* My Approach */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-foreground mb-4">My Approach</h3>
        <div className="text-base text-muted-foreground leading-relaxed space-y-4">
          <p>One of the most valuable practices I've developed is simple:</p>
          <p className="text-foreground font-medium">Pause. Reflect. Document.</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>Step away from noise</li>
            <li>Look at the bigger picture</li>
            <li>Write things down</li>
            <li>Connect the dots</li>
          </ul>
          <p>That is where clarity comes from.</p>
          <p>This is the same approach I bring into every conversation.</p>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-foreground mb-4">Why This Matters</h3>
        <div className="text-base text-muted-foreground leading-relaxed space-y-4">
          <p>AI is powerful, but most people are still trying to figure out what to do with it.</p>
          <p>The real gap is not access to tools. It's knowing how to think through problems.</p>
          <p>
            The people who move forward are not the ones with the most information.
            <br />
            They are the ones asking better questions.
          </p>
        </div>
      </div>

      {/* Connecting the Dots */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-foreground mb-4">Connecting the Dots</h3>
        <div className="text-base text-muted-foreground leading-relaxed space-y-4">
          <p>Most people feel like their experiences are scattered.</p>
          <p>In reality, they are connected.</p>
          <p>
            Technology, creativity, business, and personal growth are not separate.
            <br />
            They are different expressions of the same patterns.
          </p>
          <p>The goal is to see how they fit together.</p>
        </div>
      </div>

      {/* Learning and Applying */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-foreground mb-4">Learning and Applying</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <Card key={book.title} className="flex flex-col h-full border-border/40">
              <CardContent className="p-6 flex flex-col gap-4">
                <h4 className="text-lg font-semibold text-foreground">{book.title}</h4>
                <p className="text-sm text-muted-foreground">{book.summary}</p>
                <div>
                  <p className="text-xs font-medium text-primary/80 uppercase tracking-wider mb-2">
                    Key Insights
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    {book.insights.map((insight, i) => (
                      <li key={i}>{insight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-primary/80 uppercase tracking-wider mb-1">
                    What this means in practice
                  </p>
                  <p className="text-sm text-muted-foreground">{book.practice}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Closing */}
      <p className="text-base text-muted-foreground leading-relaxed">
        If you want help making sense of what you're dealing with and figuring out what to do next,{" "}
        <a
          href={CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          start with a free clarity session
        </a>
        .
      </p>
    </div>
  </section>
);

export default HowIProcessSection;
