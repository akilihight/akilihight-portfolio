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
| Exact finalized deliverables | `aiStarterKit.includedDeliverables` and set `contentsApproved: true`; leave `plannedTopics` as proposals only |
| Confirmed format | `aiStarterKit.format` |
| Final audience statement | `aiStarterKit.audience` |
| Price | `aiStarterKit.price` (number, USD) |
| Currency | `aiStarterKit.currency` (currently `"USD"`) |
| Final product file URL | `aiStarterKit.finalFileUrl` (must be HTTPS) |
| Approved artwork (optional) | `aiStarterKit.thumbnail` with `approved: true`, `src`, `alt` |
| Kit Commerce checkout URL | `aiStarterKit.checkoutUrl` (must be a kit.com or convertkit.com HTTPS URL) |
| Approved digital-goods/refund policy | `DIGITAL_GOODS_POLICY.text` and set `approved: true` |
| Approved personal-use license | `aiStarterKit.personalUseLicense` |
| Approved full refund policy | `aiStarterKit.refundPolicy` |
| Approved license and refund summaries | `aiStarterKit.licenseSummary`, `aiStarterKit.refundPolicySummary` |
| Approved digital delivery disclosure | `aiStarterKit.deliveryDisclosure` |
| Go live | `aiStarterKit.status: "live"` |

The product remains `comingSoon`. The live flag alone cannot bypass missing
inputs. Do not change status or publish without explicit owner approval.
Optional finalized fields: `introductoryPriceLabel`, `version`,
`publicationDate`, `learningOutcomes`, `faqs`, and HTTPS `previewUrl`.
Display price is derived from `price` and `currency` by
`getProductDisplayPrice`, so the purchase CTA and price cannot disagree.
Learning and FAQ sections show only supplied finalized content in the live state.

## After activation

1. Run `bun scripts/generate-discovery.ts` to regenerate `public/sitemap.xml`
   and `public/llms.txt` so the live product appears in discovery files.
2. Run the product tests: `bunx vitest run src/test/product-gate.test.ts src/test/product-commerce.test.tsx`.
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
- `starter_kit_view` — view of `/products/ai-starter-kit`
- `starter_kit_notify_click` — click through to the digest notification pathway
- `starter_kit_checkout_click` — click on the Kit checkout link (only when live)
- `starter_kit_preview_click` — click on an approved preview link (only when live)
- `workshop_inquiry` — workshop inquiry submission or click
- `intro_call_click` — click on the Book a Free Intro Call link
