# Project architecture

- Keep product, resource, external publication, and newsletter configuration in `src/config/platform.ts`; all purchase, price, and product-schema presentation must use its complete activation gate so unfinished offers cannot become purchasable.
- Keep indexable page metadata in `src/config/public-pages.ts` and render it with the shared PageSeo component; generate sitemap and machine-readable discovery from the same manifest to avoid orphaned routes.
- Reuse NewsletterSection on all signup surfaces without changing its request shape or server function; subscription and contact delivery stay on their existing integrations.
- New content pages reuse PlatformLayout and the existing design-system controls; preserve the established visual identity and existing route/hash targets.