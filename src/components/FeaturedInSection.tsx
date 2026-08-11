const features = [
  {
    title: "EIN Presswire",
    label: "Press Release · 2026",
    description:
      "Lucid Futurism registered as a U.S. trademark, establishing a long-term creative vision.",
    url: "https://www.einpresswire.com/article/827764139/lucid-futurism-registered-as-u-s-trademark-signaling-a-bold-vision-for-afrofuturism-and-sci-fantasy-storytelling",
  },
  {
    title: "PRWeb",
    label: "Press Release · 2026",
    description:
      "Official launch of CloudBait Navigator, focused on structured AI and cloud readiness.",
    url: "https://www.prweb.com/releases/hight-networks-launches-cloudbait-navigator-to-help-leaders-assess-cloud-and-ai-readiness-before-major-investments-302668687.html",
  },
  {
    title: "CompanyGlance",
    label: "Media Coverage · 2026",
    description:
      "Third-party coverage highlighting a practical approach to AI and cloud decision-making.",
    url: "https://companyglance.com/news/hight-networks-launches-cloudbait-navigator-to-assess-cloud-and-ai-readiness/",
  },
];

const FeaturedInSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <div className="border-t border-border/30 mb-12" />
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
        Recognition & Coverage
      </h2>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
        Media coverage, speaking appearances, industry programs, and professional milestones.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f) => (
          <a
            key={f.title}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border/50 bg-card p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70 mb-3">
              {f.label}
            </span>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {f.description}
            </p>
            <span className="mt-5 text-sm font-medium text-primary">Read more →</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedInSection;
