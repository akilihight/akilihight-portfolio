import { Link } from "react-router-dom";
import PlatformLayout, { PageHeading } from "@/components/PlatformLayout";
import ResourceCollection from "@/components/ResourceCollection";
import { resourceCategories } from "@/config/platform";

export default function Resources() {
  return <PlatformLayout path="/resources">
    <PageHeading eyebrow="Free learning" title="Practical AI Resources" description="Start with what you want to do. Find learning pathways, workshop information, and plain-English ideas for useful, responsible AI." />
    <section className="py-12 md:py-16"><div className="container max-w-5xl px-5 lg:px-16">
      <p className="mb-7 text-sm text-muted-foreground">Curated by Akili Hight</p>
      <nav aria-label="Resource categories" className="mb-10 flex flex-wrap gap-x-5 gap-y-2">{resourceCategories.map((category) => <a key={category.id} href={`#${category.id}`} className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline">{category.title}</a>)}</nav>
      <ResourceCollection />
    </div></section>
    <section className="border-t border-border bg-secondary/40 py-14"><div className="container max-w-5xl px-5 lg:px-16"><h2 className="text-2xl font-semibold">More practical AI guides are on the way.</h2><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">For now, explore the available learning pathways above. The Everyday AI Digest is another place to find useful ideas while new guides take shape.</p><Link to="/newsletter" className="mt-5 inline-flex min-h-11 items-center font-medium text-primary">Get the Free Digest →</Link></div></section>
  </PlatformLayout>;
}