import { Link } from "react-router-dom";
import PlatformLayout from "@/components/PlatformLayout";
import NewsletterSection from "@/components/NewsletterSection";
import { ProductAction, ProductSecondaryLink } from "@/components/ProductCard";
import { KIT_PRODUCTS, SITE_URL, getProductDisplayPrice, isProductLive } from "@/config/platform";

const outcomes = [
  "Understand what today's AI tools can and cannot do",
  "Give AI useful context and clearer instructions",
  "Refine weak answers into useful ones",
  "Verify important information before relying on it",
  "Protect personal and work information",
  "Turn helpful conversations into repeatable workflows",
];

const faqs = [
  { question: "Do I need a technical background?", answer: "The planned kit is designed for beginners. It focuses on practical language and everyday tasks rather than programming." },
  { question: "Do I need a paid AI subscription?", answer: "Paid tool requirements have not been finalized. Any requirements will be explained before the product becomes available." },
  { question: "Does this include a consultation?", answer: "The kit is intended as self-service learning. Workshops and advisory are separate pathways for people who want direct support." },
  { question: "Will AI answers always be correct?", answer: "No. AI can produce inaccurate, incomplete, or misleading answers. Verification and responsible use are part of the planned learning focus." },
];

export default function StarterKit() {
  const product = KIT_PRODUCTS.aiStarterKit;
  const live = isProductLive(product);
  const availabilityFaq = { question: "Is the kit available now?", answer: live ? "Yes. Use the product link to purchase through Kit Commerce. Kit handles checkout and digital delivery." : "Not yet. The kit is in development. You can join The Everyday AI Digest for availability updates; no purchase is required." };
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Shop", item: `${SITE_URL}/shop` },
    { "@type": "ListItem", position: 3, name: product.title, item: `${SITE_URL}${product.detailUrl}` },
  ] };
  const schema = live && product.price !== null ? { "@context": "https://schema.org", "@graph": [
    breadcrumbs,
    { "@type": "Product", name: product.title, description: product.description, url: `${SITE_URL}${product.detailUrl}`,
      ...(product.thumbnail ? { image: product.thumbnail.src.startsWith("https:") ? product.thumbnail.src : `${SITE_URL}${product.thumbnail.src}` } : {}),
       offers: { "@type": "Offer", price: product.price, priceCurrency: product.currency, availability: "https://schema.org/InStock", url: product.checkoutUrl } },
  ] } : breadcrumbs;
  return <PlatformLayout path="/products/ai-starter-kit" schema={schema}>
    <section className="border-b border-border py-12 md:py-16"><div className="container max-w-5xl px-5 lg:px-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground"><ol className="flex flex-wrap gap-2"><li><Link to="/">Home</Link></li><li aria-hidden="true">/</li><li><Link to="/shop">Shop</Link></li><li aria-hidden="true">/</li><li aria-current="page">{product.title}</li></ol></nav>
      <p className="mb-3 text-xs font-semibold uppercase text-primary">{live ? "Self-service learning" : "Coming Soon"}</p>
      <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">{product.title}</h1>
      <p className="mt-4 text-xl font-medium">{product.subtitle}</p><p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{product.description}</p>
       {live && <p className="mt-5 text-lg font-medium">{getProductDisplayPrice(product)} · {product.format}{product.introductoryPriceLabel?.trim() && ` · ${product.introductoryPriceLabel}`}</p>}
       {live && (product.version || product.publicationDate) && <p className="mt-2 text-sm text-muted-foreground">{[product.version, product.publicationDate].filter(Boolean).join(" · ")}</p>}
       <div className="mt-7 flex flex-wrap items-center gap-5"><ProductAction product={product} /><ProductSecondaryLink product={product} /></div>
      {!live && <p className="mt-3 text-sm text-muted-foreground">Not yet for sale. Join the digest for availability updates.</p>}
    </div></section>

     {!live && <><section className="py-16"><div className="container max-w-5xl px-5 lg:px-16 grid gap-10 md:grid-cols-2">
      <div><h2 className="text-2xl font-semibold">The problem it solves</h2><p className="mt-4 leading-relaxed text-muted-foreground">It can be hard to know which tool to try, what to ask, or whether an answer is trustworthy. The planned kit brings those decisions into a repeatable, beginner-friendly learning approach.</p></div>
      <div><h2 className="text-2xl font-semibold">Who this is for</h2><p className="mt-4 leading-relaxed text-muted-foreground">People who are curious about AI but want a clearer starting point. Professionals, small-business owners, and everyday learners looking for practical habits rather than technical jargon.</p></div>
     </div></section>

    <section className="bg-secondary/40 py-16"><div className="container max-w-5xl px-5 lg:px-16">
      <h2 className="text-2xl font-semibold md:text-3xl">What you should be able to do</h2><p className="mt-4 max-w-2xl text-muted-foreground">The planned focus is practical capability, not memorizing tools. After working through the kit, the goal is that you can:</p>
      <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">{outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-muted-foreground"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{outcome}</li>)}</ul>
    </div></section>

    <section className="py-16"><div className="container max-w-5xl px-5 lg:px-16">
      <h2 className="text-2xl font-semibold md:text-3xl">Planned topics</h2><p className="mt-2 text-sm text-muted-foreground">These topics are proposed. Final contents and delivery format will be confirmed before launch.</p>
      <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">{product.plannedTopics.map((topic) => <li key={topic} className="flex gap-3 text-muted-foreground"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{topic}</li>)}</ul>
    </div></section>

     </>}

     {live && <>
       <section className="py-16"><div className="container max-w-5xl px-5 lg:px-16">
         <h2 className="text-2xl font-semibold md:text-3xl">What You’ll Receive</h2>
         <ul className="mt-6 space-y-4 text-muted-foreground">{product.includedDeliverables.map((item) => <li key={item}>{item}</li>)}</ul>
       </div></section>
       {product.learningOutcomes.some((item) => item.trim()) && <section className="bg-secondary/40 py-16"><div className="container max-w-5xl px-5 lg:px-16">
         <h2 className="text-2xl font-semibold md:text-3xl">What You’ll Learn</h2>
         <ul className="mt-6 space-y-4 text-muted-foreground">{product.learningOutcomes.filter((item) => item.trim()).map((item) => <li key={item}>{item}</li>)}</ul>
       </div></section>}
       <section className="py-16"><div className="container max-w-5xl px-5 lg:px-16 grid gap-10 md:grid-cols-2">
         <div><h2 className="text-2xl font-semibold">Who It Is For</h2><p className="mt-4 leading-relaxed text-muted-foreground">{product.audience}</p></div>
         <div><h2 className="text-2xl font-semibold">How It Is Delivered</h2><p className="mt-4 text-muted-foreground">{product.format}</p><p className="mt-4 whitespace-pre-line leading-relaxed text-muted-foreground">{product.deliveryDisclosure}</p><p className="mt-4 text-sm text-muted-foreground">Checkout is handled externally by Kit Commerce. AkiliHight.com does not collect, process, or store card information.</p></div>
       </div></section>
       <section className="border-y border-border py-16"><div className="container max-w-5xl px-5 lg:px-16">
         <h2 className="text-2xl font-semibold">License and Refund Summary</h2>
         <p className="mt-4 whitespace-pre-line text-muted-foreground">{product.licenseSummary}</p><p className="mt-4 whitespace-pre-line text-muted-foreground">{product.refundPolicySummary}</p>
         <Link className="mt-5 inline-flex min-h-11 items-center font-medium text-primary" to="/terms#digital-product-terms">Read digital-product terms →</Link>
       </div></section>
     </>}

     <section className="border-y border-border bg-secondary/40 py-16"><div className="container max-w-3xl px-5">
      <h2 className="text-2xl font-semibold md:text-3xl">More than prompts</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">Useful AI skills are not about collecting hundreds of prompts. The goal is to understand how to give AI useful context, refine its output, verify important information, and turn helpful conversations into repeatable workflows.</p>
    </div></section>

    <section className="py-16"><div className="container max-w-5xl px-5 lg:px-16 grid gap-10 md:grid-cols-2">
       <div><h2 className="text-2xl font-semibold">Responsible AI Use</h2><p className="mt-4 leading-relaxed text-muted-foreground">Check important claims against reliable sources. Do not enter sensitive personal, customer, or organizational information without permission and an appropriate tool policy. AI output does not replace professional judgment or qualified advice.</p></div>
       {!live && <div><h2 className="text-2xl font-semibold">How it works</h2><p className="mt-4 leading-relaxed text-muted-foreground">When available, this will be a self-service digital learning resource, not a consultation. Purchases and digital delivery will be handled externally through Kit. Final contents, delivery details, price, file format, and digital-goods terms will be confirmed before launch.</p></div>}
    </div></section>

    <section className="border-y border-border py-14"><div className="container max-w-3xl px-5 text-center">
      <h2 className="text-2xl font-semibold md:text-3xl">{live ? "Ready to get started?" : "Get notified when it launches."}</h2>
      <p className="mt-3 text-muted-foreground">{live ? "Purchase and delivery are handled securely through Kit." : "Join The Everyday AI Digest and you will hear about availability first. No purchase is required."}</p>
      <div className="mt-6 flex justify-center"><ProductAction product={product} /></div>
    </div></section>

     <section className="py-16"><div className="container max-w-3xl px-5"><h2 className="mb-7 text-2xl font-semibold">Frequently Asked Questions</h2>{[availabilityFaq, ...(live ? product.faqs.filter((faq) => faq.question.trim() && faq.answer.trim()) : faqs)].map((faq) => <details key={faq.question} className="border-b border-border py-5"><summary className="cursor-pointer font-medium">{faq.question}</summary><p className="mt-3 leading-relaxed text-muted-foreground">{faq.answer}</p></details>)}</div></section>

     <section className="pb-16"><div className="container max-w-5xl px-5 lg:px-16"><h2 className="text-2xl font-semibold">Related free learning</h2><p className="mt-3 text-muted-foreground">{live ? "Explore the free learning pathways for additional AI learning." : "Start with the existing learning pathways while the kit is in development."}</p><Link to="/resources#getting-started" className="mt-5 inline-flex min-h-11 items-center font-medium text-primary">Explore beginner resources →</Link></div></section>
    <NewsletterSection />
  </PlatformLayout>;
}
