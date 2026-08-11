const proofPoints = [
  { label: "20+ Years", detail: "Technology and program leadership" },
  { label: "Enterprise Experience", detail: "Healthcare, public sector, nonprofit, and consulting environments" },
  { label: "PMP® + CSM®", detail: "Certified project and Agile leadership" },
  { label: "AI + Technology", detail: "Cloud, data, digital transformation, AI readiness, and emerging technology" },
];

const selectedWork = [
  {
    title: "Enterprise Transformation",
    detail: "Led complex cloud, data, infrastructure, and digital programs across healthcare, enterprise, and public-sector environments.",
  },
  {
    title: "AI Product Development",
    detail: "Built AI-enabled products and decision tools including CloudBait Navigator, Project Navigator, and CareerProof.",
  },
  {
    title: "Brand & Platform Building",
    detail: "Developed digital products, media properties, and creative platforms from initial concept through real-world execution.",
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
