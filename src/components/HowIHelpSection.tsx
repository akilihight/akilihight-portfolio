const CALENDLY = "https://calendly.com/hightnetworksconsulting/30min";

const items = [
  {
    title: "Everyday AI",
    desc: "Beginner-friendly guidance for learning how to use AI tools with confidence in daily life, work, communication, productivity, and decision-making.",
    cta: "Explore Everyday AI",
    href: "#workshop",
  },
  {
    title: "Founder Clarity",
    desc: "Strategic guidance for founders, creators, and builders who need sharper positioning, clearer decisions, and practical next steps.",
    cta: "Get Clarity",
    href: CALENDLY,
  },
  {
    title: "Career & Work Readiness",
    desc: "Practical support for professionals, job seekers, and career changers using AI for resumes, interviews, productivity, research, and communication.",
    cta: "Build Work Readiness",
    href: CALENDLY,
  },
  {
    title: "Workshops & Speaking",
    desc: "Community-friendly workshops and talks for parks, libraries, nonprofits, schools, workforce programs, small business groups, and creative communities.",
    cta: "View Workshops",
    href: "#workshop",
  },
];

const HowIHelpSection = () => (
  <section id="help" className="py-28 bg-secondary/40">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">How I Can Help</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        Clear, practical support — wherever you're starting from.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item) => {
          const external = item.href.startsWith("http");
          return (
            <div
              key={item.title}
              className="bg-card rounded-xl p-8 border border-border/70 transition-shadow hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px] flex-1">{item.desc}</p>
              <a
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="mt-6 inline-flex items-center justify-center self-start rounded-lg text-sm font-medium transition-colors px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {item.cta}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HowIHelpSection;
