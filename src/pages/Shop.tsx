import PlatformLayout, { PageHeading } from "@/components/PlatformLayout";
import ProductCard from "@/components/ProductCard";
import { KIT_PRODUCTS } from "@/config/platform";

export default function Shop() {
  return <PlatformLayout path="/shop">
    <PageHeading eyebrow="Self-service learning" title="Practical AI Tools" description="Simple, useful resources designed to help you use AI with more confidence and less guesswork." />
    <section className="py-16 md:py-20"><div className="container max-w-5xl px-5 lg:px-16">
      {Object.values(KIT_PRODUCTS).filter((product) => product.public).map((product) => <ProductCard key={product.id} product={product} featured />)}
      <p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">More practical AI tools are in development.</p>
    </div></section>
  </PlatformLayout>;
}