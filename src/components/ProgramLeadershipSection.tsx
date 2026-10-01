import { Button } from "@/components/ui/button";

const capabilities = [
  {
    title: "Program and Delivery Governance",
    detail: "Clear ownership, milestones, dependencies, escalation, and executive visibility.",
  },
  {
    title: "Operational and Technology Readiness",
    detail: "Coordination across workflows, systems, data, vendors, security, and implementation needs.",
  },
  {
    title: "Risk and Decision Management",
    detail: "Structured tracking of risks, issues, actions, decisions, owners, and deadlines.",
  },
  {
    title: "Cross-Functional Coordination",
    detail: "Alignment across executives, operations, technology teams, vendors, and community stakeholders.",
  },
];

const ProgramLeadershipSection = () => (
  <section className="py-20 bg-secondary/40" aria-labelledby="program-leadership-heading">
    <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-primary/80">
        Program Leadership
      </p>
      <h2
        id="program-leadership-heading"
        className="max-w-3xl text-3xl font-semibold text-foreground md:text-4xl"
      >
        Complex initiatives need structure, visibility, and follow-through.
      </h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        Akili Hight brings more than 20 years of experience helping healthcare, public-sector, nonprofit, and enterprise organizations coordinate technology, operations, vendors, risks, decisions, and executive stakeholders.
      </p>

      <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {capabilities.map((capability) => (
          <div key={capability.title}>
            <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{capability.detail}</p>
          </div>
        ))}
      </div>

      <p className="mt-9 max-w-3xl border-t border-border/60 pt-5 text-xs leading-relaxed text-muted-foreground/80">
        Selected experience was performed through prior organizations and does not represent direct Hight Networks contracts unless specifically identified.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <a href="https://hightnetworks.com/" target="_blank" rel="noopener noreferrer">
            View Hight Networks
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://hightnetworks.com/teaming" target="_blank" rel="noopener noreferrer">
            Public-Sector Teaming
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ProgramLeadershipSection;