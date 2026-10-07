import { Helmet } from "react-helmet-async";
import { PUBLIC_PAGES } from "@/config/public-pages";
import { SITE_URL } from "@/config/platform";

export default function PageSeo({ path, schema }: { path: string; schema?: Record<string, unknown> }) {
  const page = PUBLIC_PAGES.find((item) => item.path === path);
  if (!page) return null;
  const url = `${SITE_URL}${path}`;
  return <Helmet>
    <title>{page.title}</title><meta name="description" content={page.description} />
    <link rel="canonical" href={url} />
    <meta property="og:title" content={page.title} /><meta property="og:description" content={page.description} />
    <meta property="og:type" content="website" /><meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={page.title} /><meta name="twitter:description" content={page.description} />
    {schema && <script type="application/ld+json">{JSON.stringify(schema).replace(/</g, "\\u003c")}</script>}
  </Helmet>;
}