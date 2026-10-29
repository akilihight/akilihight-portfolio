# Phase 3: Commerce Readiness Handoff

## Status

The Starter Kit remains `comingSoon`. No price, purchase action, live offer
schema or checkout is exposed. Nothing was published or activated.

## Confirmed defects and causes

- Shared ProductCard lowercased the entire audience, changing AI to ai.
  JSX-separated spaces and untrimmed punctuation also made the sentence
  fragile. It now renders one trimmed sentence, preserving AI capitalization.
- The existing live branches still contained proposed-topic, FAQ and delivery
  language, lacked exact confirmed deliverables and legal summaries, and used
  a generic purchase label. Those paths now switch using the complete gate.
- Shop/product metadata and related homepage, newsletter and reference copy
  would have retained development wording after launch. They now use the gate.

## Files changed

- `src/config/platform.ts`: centralized launch fields, comingSoon status,
  stricter gate and derived display price.
- `src/components/ProductCard.tsx`: shared audience correction, gated
  purchase label, secure preview/details link, exact deliverables and format.
- `src/pages/StarterKit.tsx`: coming-soon/live sections, approved-only
  deliverables, learning topics, delivery and legal summaries, live FAQs.
- `src/pages/Terms.tsx`: bounded approved-only live legal section; placeholders
  stay visible until the complete gate passes.
- `src/config/public-pages.ts`: gated Shop/product metadata.
- `src/components/HomePlatformSections.tsx`, `src/pages/Newsletter.tsx`,
  `src/pages/AiProfile.tsx`: avoid stale development copy after launch.
- `src/test/product-gate.test.ts`, `src/test/product-commerce.test.tsx`:
  launch requirements, notification/checkout/preview behavior tests.
- `docs/starter-kit-launch-checklist.md`, `docs/phase-3-handoff.md`,
  `AGENTS.md`, `roadmap.md`: internal requirements and handoff.

No new routes. Existing destinations and signup/contact implementations remain.

## Verification

- 41 automated tests passed, covering hidden future products, every required
  launch gate, missing/empty/invalid checkout, comingSoon with otherwise
  complete inputs, secure checkout and optional preview behavior.
- Browser checked `/`, `/shop`, `/products/ai-starter-kit`, `/terms`,
  `/newsletter`, `/resources`, `/learning`, `/workshops`, `/privacy` at
  320, 375, 430, 768 and 1280px: one H1, no horizontal overflow, no purchase
  action in comingSoon. Shared audience text was exact on Home and Shop.
- Keyboard-focused Get Notified had a visible focus style; Enter reached
  `/newsletter#newsletter`. Empty signup validation worked without a request.
- Browser-only test values exercised the actual live Shop/product/Terms
  rendering, price CTA, preview, approved delivery/legal content and Offer
  schema; empty checkout reverted to notifications. Source values were never
  activated. Live product layout passed the same five widths.
- No browser page errors or mutation requests in these checks. Latest preview
  diagnostics reported build OK. Unit tests logged only React Router future
  compatibility warnings, not application errors.
- Product/Offer schema remains absent in comingSoon; live schema uses the
  confirmed checkout destination. Existing canonical/discovery architecture
  is retained. Regenerate discovery files only as part of an approved launch.

## Backend and tracking

No backend behavior, functions, schema, permissions, form request shape,
payment handling or external integration changed. No real subscription or
contact submission was repeated in this phase, avoiding unnecessary writes;
delivery acceptance was not freshly retested. External Kit checkout completion
cannot be tested until the owner supplies a real URL and approves activation.

No analytics/event framework exists. No tracking provider, hooks, cookies or
dependencies were added. Requested starter-kit event names are documented
for a later existing-provider integration.

## Required owner inputs

Enter these in `src/config/platform.ts`, under `KIT_PRODUCTS.aiStarterKit`
and `DIGITAL_GOODS_POLICY`:

1. Final approved name and short description, with finalized flags.
2. Final audience statement and exact included deliverables, with contents approval.
3. Confirmed positive USD price and product format.
4. Confirmation that the paid file is uploaded and delivery is configured inside Kit Commerce (`fulfillmentConfigured: true`). No product-file URL is stored on this site: `src/config/platform.ts` is bundled into the browser, so Kit Commerce alone stores and delivers the paid file. No Stripe credentials, Kit credentials, private file URLs, or secrets belong in frontend configuration.
5. Real public HTTPS Kit Commerce checkout URL.
6. Approved digital-product terms and explicit policy approval.
7. Approved personal-use license and license summary.
8. Approved refund policy and refund summary.
9. Approved digital-delivery disclosure.
10. Explicit permission to set status live; publishing is a separate approval.

Optional, only if finalized: introductory-price label, version/publication date,
learning topics/outcomes, FAQs, HTTPS preview, and approved artwork with alt text.
No learning outcomes, bonuses, price claims or legal promises are fabricated.