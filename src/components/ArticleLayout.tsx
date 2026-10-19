import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import PlatformLayout from "@/components/PlatformLayout";
import NewsletterSection from "@/components/NewsletterSection";
import { SITE_URL, publishedResourceArticles, type ResourceArticle } from "@/config/platform";

type ArticleLayoutProps = {
  article: ResourceArticle;
  path: string;
  primaryCta: { label: string; href: string };
  children: ReactNode;
};

// Reusable template for real published guides. Only render with an article
// whose status is "published"; drafts must never reach this component.
export default function ArticleLayout({ article, path, primaryCta, children }: ArticleLayoutProps) {
  const url = `${SITE_URL}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/resources` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ] },
      { "@type": "Article", headline: article.title, description: article.metaDescription, url,
        author: { "@type": "Person", name: article.author, url: `${SITE_URL}/ai-profile` },
        datePublished: article.publishedAt,
        ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
        ...(article.image ? { image: article.image.src.startsWith("https:") ? article.image.src : `${SITE_URL}${article.image.src}` } : {}) },
    ],
  };
  const related = publishedResourceArticles.filter((item) => item.slug !== article.slug).slice(0, 3);
  return <PlatformLayout path={path} schema={schema}>
    <article className="py-12 md:py-16"><div className="container max-w-3xl px-5">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground"><ol className="flex flex-wrap gap-2"><li><Link to="/">Home</Link></li><li aria-hidden="true">/</li><li><Link to="/resources">Resources</Link></li><li aria-hidden="true">/</li><li aria-current="page">{article.title}</li></ol></nav>
      <p className="mb-3 text-xs font-semibold uppercase text-primary">{article.category}</p>
      <h1 className="text-3xl font-semibold leading-tight md:text-5xl">{article.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{article.summary}</p>
      <p className="mt-5 text-sm text-muted-foreground">
        By {article.author} · Published <time dateTime={article.publishedAt}>{article.publishedAt}</time>
        {article.updatedAt && <> · Updated <time dateTime={article.updatedAt}>{article.updatedAt}</time></>}
      </p>
      <div className="prose-neutral mt-10 leading-relaxed">{children}</div>
      <div className="mt-12 rounded-lg border border-border bg-secondary/40 p-6">
        <Link to={primaryCta.href} className="inline-flex min-h-11 items-center font-medium text-primary">{primaryCta.label} →</Link>
      </div>
      {related.length > 0 && <div className="mt-12"><h2 className="text-2xl font-semibold">Related resources</h2>
        <ul className="mt-5 space-y-3">{related.map((item) => <li key={item.slug}><Link className="font-medium text-primary underline-offset-4 hover:underline" to={`/resources/${item.slug}`}>{item.title}</Link></li>)}</ul>
      </div>}
    </div></article>
    <NewsletterSection />
  </PlatformLayout>;
}
