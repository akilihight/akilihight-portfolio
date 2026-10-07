# Practical AI content, newsletter, and product platform

## Goal and safeguards

Enhance the production site, not redesign it. Make free learning, self-service tools, and premium services clear to first-time visitors while retaining Akili's personal brand and enterprise credibility.

- Preserve existing Kit form fields, validation, loading/error/success handling, API function, and subscription destination. Reuse the same working form on new pages.
- Preserve contact submissions, notifications, integrations, approved portraits, workshop flyer, and existing routes. No backend, security, payment, or other-application changes.
- Keep existing executive-light tokens, navy accents, and currently loaded sans-serif. Improve contrast, focus visibility, reduced-motion behavior, and narrow-screen fit without introducing fonts or heavy effects.
- No invented articles, finalized product contents, prices, checkout URLs, social proof, or em dashes in new copy.

## Homepage and navigation

1. Refine the existing hero to “Making AI easier to understand and use.” with the supplied supporting sentence, “Explore Practical AI” and “Get the Free Digest” actions. Retain the approved portrait and restrained brand treatment.
2. Add “What are you trying to do?” with the six supplied pathways. Link to relevant resource categories, existing learning/career sections, workshops, and organizational advisory, never empty pages.
3. Feature the AI Confidence Starter Kit with a Coming Soon state and “Get Notified” action to the newsletter. Present the supplied curriculum as planned topics, not guaranteed deliverables.
4. Move the existing digest signup earlier. Update only its presentation copy, add the five reader benefits and safe “Browse past issues →” archive link.
5. Add featured resource topics with honest Coming Soon labels and useful links to existing learning/workshop material. No thin articles or fake downloads.
6. Separate the beginner Everyday AI Made Simple workshop from AI Readiness for Leaders. Preserve the latter's current Coming Soon status rather than imply it is available.
7. Use the approved exact order: Hero, visitor needs, starter kit, digest, featured resources, workshops, high-touch How I Can Help, experience/credibility, Program Leadership and ecosystem/video, About, final Learn / Get Practical Tools / Work With Me block, then untouched contact. Keep recognition with credibility. Enforce one primary CTA and at most one secondary per major section.
8. Evolve navigation to Home, Learn, Resources, Shop, Workshops, About plus the prominent booking action. Keep newsletter and ecosystem visible through secondary navigation/footer links. Preserve `/#how-i-help`, `/#about`, `/workshops`, and restore `/#ecosystem` as a meaningful lower-homepage destination linking to `/ecosystem`.

## New public pages

- **`/shop`**: focused destination featuring only AI Confidence Starter Kit. Use “Simple, useful resources designed to help you use AI with more confidence and less guesswork.” Keep Workday Toolkit, Job Search Toolkit, and bundle hidden in configuration until explicitly activated. No future product pages.
- **`/products/ai-starter-kit`**: breadcrumb, audience, problem, proposed learning and contents, how availability will work, supported tools, responsible-use guidance, FAQs, related learning resources, signup, and safe conditional product CTA.
- **`/newsletter`**: branded positioning, existing signup, reader benefits/audience, archive, related resources/product, and lower workshop action. No iframe or fabricated latest issue.
- **`/resources`**: available learning pathways, workshop information, and newsletter archive prominently organized by six user-intent categories. One restrained “More practical AI guides are on the way.” section, not a placeholder-card grid. Visible author attribution; publication dates only for real articles.
- **`/ai-profile`**: factual reference drawn from current bio and ecosystem content, with accurate venture relationships, professional links, newsletter, learning, planned products, and canonical site links. Footer/discovery links only, never primary navigation.
- **`/privacy` and `/terms`**: plain-language coverage of the actual forms and external services, contact details, AI limitations, and a clear statement that products are not yet for sale. Do not invent a refund promise; final digital-goods/refund terms require owner approval before commerce activation.

## Reusable configuration and commerce gates

- Centralize product titles, descriptions, planned topics, audience, optional price/artwork, detail URLs, status, and nullable Kit checkout URLs.
- Centralize the Kit archive URL, nullable latest-issue object, resource topics/categories, and optional hidden bundle.
- A single activation gate requires finalized name/description, approved deliverables, final price, final file, approved artwork if used, valid HTTPS Kit Commerce URL, approved digital-goods/refund policy, and explicit live status. Only a passing gate permits purchase, public price, Product/Offer schema, or live-product llms listing. Null checkout URLs always produce real newsletter links, never dead buttons.
- No local cart, payment form, Stripe integration, credentials, or invented sales metadata.

## Discovery and metadata

- Use the existing Helmet setup for unique page titles/descriptions, self-referencing canonical and Open Graph URLs, and matching social tags. Preserve factual sitewide fallback metadata and verification in `index.html`.
- Add WebSite and factual Person schema; BreadcrumbList on detail pages. Emit no Product/Offer schema until a real live product has complete pricing data, and no Article schema for planned topics.
- Use one public-route manifest to keep sitemap generation and route metadata aligned when pages are added. Update `robots.txt` as needed and expand `llms.txt` with absolute canonical links; exclude coming-soon products from its live-product list.
- Keep current hosting and framework. Static React hosting may not provide distinct per-page metadata to non-JavaScript social crawlers. Keep accurate sitewide fallback and report this non-blocking limitation; no SSR or hosting migration.
- Audit found no current behavioral analytics provider. Do not install one or claim events are collected; leave analytics-provider setup for explicit approval.

## Verification and handoff

- Check automatic build diagnostics, run existing tests and lint, and add focused tests for commerce gates, configuration, links, and unchanged newsletter request shape. Do not manually run builds/typechecks managed by the preview harness.
- Verify every old and new route, refresh, homepage hashes, forms and error/success states, archive and service destinations, safe external links, heading order, metadata, JSON-LD syntax, sitemap, and no orphan/dead purchase links.
- Inspect layout at 320, 375, 430, tablet, and desktop, including keyboard focus and signup usability. The current audit shows a non-rendering header logo asset; repair its reference using the existing approved brand asset rather than redesigning it.
- Verify signup with a controlled test only, avoiding an invented subscriber or unwanted customer data. Distinguish intercepted UI tests from any real service delivery check in the report.
- Deliver a file/route change inventory and list required owner inputs: real Kit product URLs, prices, finalized product files/contents, artwork, optional direct issue URL, and approved digital-goods/refund policy. All products remain Coming Soon until activation requirements are met.
