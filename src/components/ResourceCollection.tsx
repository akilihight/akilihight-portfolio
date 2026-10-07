import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { resourceCategories } from "@/config/platform";

export default function ResourceCollection({ compact = false }: { compact?: boolean }) {
  const categories = compact ? resourceCategories.slice(0, 3) : resourceCategories;
  return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {categories.map((category) => <section id={compact ? undefined : category.id} key={category.id} className="scroll-mt-28 rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-semibold">{category.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
      {category.resources.map((resource) => <div key={resource.title} className="mt-6 border-t border-border pt-5">
        <p className="text-xs font-medium text-muted-foreground">{resource.kind}</p><p className="mt-2 font-medium">{resource.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
        {resource.href.startsWith("https:") ? <a href={resource.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">Read on Kit <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a> : <Link to={resource.href} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">Explore learning <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>}
      </div>)}
    </section>)}
  </div>;
}