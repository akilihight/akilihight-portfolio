import { Link } from "react-router-dom";
import PlatformLayout, { PageHeading } from "@/components/PlatformLayout";
import NewsletterSection from "@/components/NewsletterSection";
import ResourceCollection from "@/components/ResourceCollection";
import { EXTERNAL_LINKS, newsletterLatestIssue } from "@/config/platform";

export default function Newsletter() {
  const issue = newsletterLatestIssue;
  return <PlatformLayout path="/newsletter">
    <PageHeading eyebrow="Free weekly newsletter" title="The Everyday AI Digest" description="Practical AI for people who want clarity, confidence, and useful results. One idea at a time." />
    <NewsletterSection heading="Get the Free Digest" />
    <section className="py-16"><div className="container max-w-5xl px-5 lg:px-16 grid gap-10 md:grid-cols-2">
      <div><h2 className="text-2xl font-semibold">Who it's for</h2><p className="mt-4 leading-relaxed text-muted-foreground">Curious beginners, working professionals, job seekers, small-business owners, and people helping their teams make sense of AI. You do not need a technical background.</p></div>
      <div><h2 className="text-2xl font-semibold">Read at your own pace.</h2><p className="mt-4 leading-relaxed text-muted-foreground">The publication archive is hosted on Kit. Explore available issues without leaving the connection to Akili's practical learning approach.</p><a href={EXTERNAL_LINKS.kitArchive} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center font-medium text-primary">Read the Archive on Kit ↗</a>
      {issue && <p className="mt-4"><a className="text-primary underline underline-offset-4" href={issue.url} target="_blank" rel="noopener noreferrer">{issue.issueNumber ? `Issue ${issue.issueNumber}: ` : ""}{issue.title}</a></p>}</div>
    </div></section>
    <section className="bg-secondary/40 py-16"><div className="container max-w-5xl px-5 lg:px-16"><h2 className="mb-8 text-2xl font-semibold">Go a little further.</h2><ResourceCollection compact /><p className="mt-7 text-sm text-muted-foreground">Prefer a structured starting point? <Link className="font-medium text-primary underline-offset-4 hover:underline" to="/products/ai-starter-kit">Explore the planned AI Confidence Starter Kit.</Link></p></div></section>
    <section className="py-14"><div className="container max-w-5xl px-5 lg:px-16"><h2 className="text-2xl font-semibold">Learn together.</h2><p className="mt-3 text-muted-foreground">Practical workshops bring the learning into your team or community.</p><Link to="/workshops" className="mt-5 inline-flex min-h-11 items-center font-medium text-primary">Explore workshops →</Link></div></section>
  </PlatformLayout>;
}