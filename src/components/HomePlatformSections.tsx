import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, Search, Store, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { visitorPathways, KIT_PRODUCTS } from "@/config/platform";
import ProductCard from "@/components/ProductCard";
import ResourceCollection from "@/components/ResourceCollection";

const icons = [BookOpen, Briefcase, Search, Store, Users, Building2];

export function VisitorNeedsSection() {
  return <section id="practical-ai" className="scroll-mt-28 border-t border-border/50 py-16 md:py-20"><div className="container max-w-5xl px-5 lg:px-16">
    <h2 className="text-3xl font-semibold md:text-4xl">What are you trying to do?</h2><p className="mt-3 mb-9 text-lg text-muted-foreground">Start with your goal, not another tool.</p>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visitorPathways.map((item, index) => { const Icon = icons[index] ?? BookOpen; return <Link key={item.title} to={item.href} className="group flex min-w-0 flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-secondary/40">
      <Icon className="mb-4 h-5 w-5 text-primary" aria-hidden="true" /><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p><ArrowRight className="mt-5 h-4 w-4 text-primary" aria-hidden="true" />
    </Link>; })}</div>
  </div></section>;
}

export function FeaturedProductSection() {
  return <section className="border-y border-border/60 bg-secondary/40 py-16 md:py-20"><div className="container max-w-5xl px-5 lg:px-16"><ProductCard product={KIT_PRODUCTS.aiStarterKit} featured /></div></section>;
}

export function FeaturedResourcesSection() {
  return <section className="py-16 md:py-20"><div className="container max-w-5xl px-5 lg:px-16"><h2 className="text-3xl font-semibold md:text-4xl">Start learning, at your pace.</h2><p className="mt-3 mb-9 text-lg text-muted-foreground">Free learning overviews and practical starting points.</p><ResourceCollection compact /><Button asChild variant="outline" className="mt-7"><Link to="/resources">Explore all resources <ArrowRight aria-hidden="true" /></Link></Button></div></section>;
}

export function FinalPathwaysSection() {
  return <section className="border-y border-border bg-secondary/40 py-16"><div className="container max-w-5xl px-5 lg:px-16"><h2 className="text-2xl font-semibold md:text-3xl">Choose your next step.</h2><div className="mt-8 grid gap-8 sm:grid-cols-3">
    <div><h3 className="text-lg font-semibold">Learn</h3><p className="mt-2 mb-4 text-sm text-muted-foreground">Explore free AI learning resources.</p><Link className="inline-flex min-h-11 items-center text-sm font-medium text-primary" to="/resources">Explore resources →</Link></div>
    <div><h3 className="text-lg font-semibold">Get Practical Tools</h3><p className="mt-2 mb-4 text-sm text-muted-foreground">Explore self-service learning in development.</p><Button asChild><Link to="/shop">Explore the Starter Kit</Link></Button></div>
    <div><h3 className="text-lg font-semibold">Work With Me</h3><p className="mt-2 mb-4 text-sm text-muted-foreground">Find workshops and advisory support.</p><Link className="inline-flex min-h-11 items-center text-sm font-medium text-primary" to="/#how-i-help">Explore services →</Link></div>
  </div></div></section>;
}