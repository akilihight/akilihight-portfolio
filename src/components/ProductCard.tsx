import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isProductLive, type DigitalProduct } from "@/config/platform";

export function ProductAction({ product }: { product: DigitalProduct }) {
  if (isProductLive(product) && product.checkoutUrl) return <Button asChild size="lg" className="h-auto min-h-11 whitespace-normal"><a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer">Get the Starter Kit <ArrowRight aria-hidden="true" /></a></Button>;
  return <Button asChild size="lg" className="h-auto min-h-11 whitespace-normal"><Link to="/newsletter#newsletter">Get Notified <ArrowRight aria-hidden="true" /></Link></Button>;
}

export default function ProductCard({ product, featured = false }: { product: DigitalProduct; featured?: boolean }) {
  if (!product.public) return null;
  const live = isProductLive(product);
  return <article className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
    <div>
      <p className="mb-3 text-xs font-semibold uppercase text-primary">{live ? "Self-service learning" : "In development · Coming Soon"}</p>
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{product.title}</h2>
      <p className="mt-3 text-lg font-medium">{product.subtitle}</p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{product.description}</p>
      <p className="mt-4 text-sm text-muted-foreground">For {product.audience.toLowerCase()}.</p>
      {live && product.price !== null && <p className="mt-5 text-xl font-semibold">{new Intl.NumberFormat("en-US", { style: "currency", currency: product.currency }).format(product.price)}</p>}
      <div className="mt-7 flex flex-wrap items-center gap-5"><ProductAction product={product} />
        {featured && product.detailUrl && <Link className="text-sm font-medium text-primary underline-offset-4 hover:underline" to={product.detailUrl}>Explore the planned kit <span aria-hidden="true">→</span></Link>}
      </div>
      {!live && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Not yet for sale. Join the digest for availability updates.</p>}
    </div>
    {product.thumbnail ? <img src={product.thumbnail.src} alt={product.thumbnail.alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" /> : <div className="border-l-2 border-primary/20 pl-6 md:pl-8">
      <BookOpen className="mb-5 h-9 w-9 text-primary" aria-hidden="true" />
      <h3 className="mb-5 text-lg font-semibold">A practical place to start</h3>
      <ul className="space-y-4">{["Understand the tools", "Give clearer instructions", "Check answers and protect your information", "Practice with everyday tasks"].map((text) => <li key={text} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{text}</li>)}</ul>
      <p className="mt-6 text-xs text-muted-foreground">Planned learning focus. Final deliverables will be confirmed before launch.</p>
    </div>}
  </article>;
}