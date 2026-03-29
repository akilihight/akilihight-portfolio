const features = [
  {
    title: "Lucid Futurism Trademark",
    description:
      "Lucid Futurism is now a registered U.S. trademark, representing a long-term vision for storytelling, creativity, and world-building.",
    linkText: "Read announcement →",
    url: "https://www.einpresswire.com/article/827764139/lucid-futurism-registered-as-u-s-trademark-signaling-a-bold-vision-for-afrofuturism-and-sci-fantasy-storytelling?n=2",
  },
  {
    title: "CloudBait Navigator Launch",
    description:
      "CloudBait Navigator was launched to help leaders assess cloud and AI readiness before making major investments.",
    linkText: "Read announcement →",
    url: "https://www.prweb.com/releases/hight-networks-launches-cloudbait-navigator-to-help-leaders-assess-cloud-and-ai-readiness-before-major-investments-302668687.html",
  },
  {
    title: "CompanyGlance",
    description:
      "Featured coverage highlighting CloudBait Navigator's approach to assessing cloud and AI readiness before major investments.",
    linkText: "Read article →",
    url: "https://companyglance.com/news/hight-networks-launches-cloudbait-navigator-to-assess-cloud-and-ai-readiness/",
  },
];

const FeaturedInSection = () => (
  <section className="py-36">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
        Featured In
      </h2>
      <p className="text-lg text-muted-foreground mb-12">
        Independent coverage and announcements across platforms
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f) => (
          <a
            key={f.title}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border/50 bg-card p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {f.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-5 flex-1">
              {f.description}
            </p>
            <span className="text-primary font-medium hover:underline underline-offset-4 transition-colors">
              {f.linkText}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedInSection;
