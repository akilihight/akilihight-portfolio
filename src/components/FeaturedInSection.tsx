const features = [
  {
    title: "EIN Presswire",
    description:
      "Lucid Futurism registered as a U.S. trademark, establishing a long-term creative vision.",
    url: "https://www.einpresswire.com/article/827764139/lucid-futurism-registered-as-u-s-trademark-signaling-a-bold-vision-for-afrofuturism-and-sci-fantasy-storytelling",
  },
  {
    title: "PRWeb",
    description:
      "Official launch of CloudBait Navigator, focused on structured AI and cloud readiness.",
    url: "https://www.prweb.com/releases/hight-networks-launches-cloudbait-navigator-to-help-leaders-assess-cloud-and-ai-readiness-before-major-investments-302668687.html",
  },
  {
    title: "CompanyGlance",
    description:
      "Third-party coverage highlighting a practical approach to AI and cloud decision-making.",
    url: "https://companyglance.com/news/hight-networks-launches-cloudbait-navigator-to-assess-cloud-and-ai-readiness/",
  },
];

const FeaturedInSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <div className="border-t border-border/30 mb-14" />
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
        Recognition & Coverage
      </h2>
      <p className="text-lg text-muted-foreground mb-10">
        Media coverage, speaking appearances, industry programs, and professional milestones.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f) => (
          <a
            key={f.title}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border/50 bg-card p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-lg font-semibold text-foreground mb-3">
              {f.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {f.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedInSection;
