import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSeo from "@/components/PageSeo";

export default function PlatformLayout({ path, children, schema }: { path: string; children: ReactNode; schema?: Record<string, unknown> }) {
  return <><PageSeo path={path} schema={schema} /><Header /><main id="main-content">{children}</main><Footer /></>;
}

export function PageHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string }) {
  return <section className="border-b border-border/60 py-14 md:py-20">
    <div className="container max-w-5xl px-5 lg:px-16">
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase text-primary">{eyebrow}</p>}
      <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
    </div>
  </section>;
}