# AI Confidence Starter Kit: Launch Checklist (Internal)

Do not publish this file or link it from the site. It documents exactly where
each owner-provided value goes when the product is ready to activate.

## Activation inputs

All values live in `src/config/platform.ts`, in `KIT_PRODUCTS.aiStarterKit`
and `DIGITAL_GOODS_POLICY`. The commerce gate (`isProductLive`) requires every
item below before any purchase button, price, or Product/Offer schema appears.

| Input | Where to enter it |
| --- | --- |
| Final approved name | `aiStarterKit.title` and set `nameFinalized: true` |
| Final description | `aiStarterKit.description` and set `descriptionFinalized: true` |
| Final deliverables | `aiStarterKit.plannedTopics` and set `contentsApproved: true` |
| Price | `aiStarterKit.price` (number, USD) |
| Currency | `aiStarterKit.currency` (currently `"USD"`) |
| Final product file URL | `aiStarterKit.finalFileUrl` (must be HTTPS) |
| Approved artwork (optional) | `aiStarterKit.thumbnail` with `approved: true`, `src`, `alt` |
| Kit Commerce checkout URL | `aiStarterKit.checkoutUrl` (must be a kit.com or convertkit.com HTTPS URL) |
| Approved digital-goods/refund policy | `DIGITAL_GOODS_POLICY.text` and set `approved: true` |
| Go live | `aiStarterKit.status: "live"` |

## After activation

1. Run `bun scripts/generate-discovery.ts` to regenerate `public/sitemap.xml`
   and `public/llms.txt` so the live product appears in discovery files.
2. Run the product gate tests: `bunx vitest run src/test/product-gate.test.ts`.
3. Verify `/shop` and `/products/ai-starter-kit` show the purchase button,
   price, and Product/Offer schema exactly once.
4. Update `newsletterLatestIssue` in `src/config/platform.ts` when a real
   issue should be featured; leave it `null` to show "Read the archive".

## Measurement preparation (no provider installed)

No analytics provider is installed and none of these events are currently
measured. When a provider is chosen, the recommended provider-neutral events
are:

- `newsletter_signup` — successful digest subscription
- `newsletter_archive_click` — click on the Kit archive link
- `product_view` — view of `/products/ai-starter-kit`
- `product_checkout_click` — click on the Kit checkout link (only when live)
- `workshop_inquiry` — workshop inquiry submission or click
- `intro_call_click` — click on the Book a Free Intro Call link
