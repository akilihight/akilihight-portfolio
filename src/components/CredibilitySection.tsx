const proofPoints = [
  { label: "20+ Years", detail: "Technology leadership" },
  { label: "PMP® + CSM®", detail: "Project + Agile leadership" },
  { label: "Enterprise", detail: "Healthcare + public sector" },
  { label: "AI + Technology", detail: "Cloud, data + transformation" },
];

const selectedWork = [
  {
    title: "Enterprise Transformation",
    detail: "Led cloud, data, infrastructure, and digital initiatives across healthcare and public-sector environments.",
  },
  {
    title: "AI Product Development",
    detail: "Built AI-enabled platforms including CloudBait Navigator, Project Navigator, CareerProof, and clinical workflow tools.",
  },
  {
    title: "Brands & Digital Platforms",
    detail: "Built technology, media, and creative ventures from concept through launch.",
  },
];

const CredibilitySection = () => (
  <section id="work" className="scroll-mt-24 py-16 border-y border-border/40">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
        Experience Behind the Work
      </h2>
      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {proofPoints.map((p) => (
          <div key={p.label}>
            <dt className="text-base font-semibold text-foreground">{p.label}</dt>
            <dd className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.detail}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-sm text-muted-foreground/80 leading-relaxed max-w-3xl">
        Experience includes work with organizations such as Kaiser Permanente, Blue Shield of California, CommonSpirit Health, Rady Children's / CHOC, State Bar of California, Movember, and Health Net.
      </p>

      <div className="mt-12 pt-8 border-t border-border/40">
        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-5">
          Selected Work
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {selectedWork.map((w) => (
            <div key={w.title}>
              <p className="text-base font-semibold text-foreground">{w.title}</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{w.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CredibilitySection;
