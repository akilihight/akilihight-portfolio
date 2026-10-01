# Public-sector and enterprise credibility enhancement

## Scope

Enhance the homepage without changing its primary positioning, visual system, shared navigation, footer, forms infrastructure, analytics, or unrelated routes.

## Implementation

1. **Repair Ideas Into Reality**
   - Keep the approved YouTube video, which is publicly available and currently returns valid embed metadata.
   - Replace the fragile sizing wrapper with a stable responsive aspect-ratio container.
   - Add lazy loading, an accessible title, a stricter referrer policy, fullscreen support, and a visible fallback link to the video so the section never presents unexplained blank space if embedding is blocked.
   - Preserve the current section copy and overall visual treatment.

2. **Add Program Leadership section**
   - Create a focused homepage component directly after “Experience Behind the Work” and before the featured workshop.
   - Add the supplied eyebrow, heading, body copy, four capability items, and prior-employment disclaimer exactly as requested.
   - Add “View Hight Networks” and “Public-Sector Teaming” actions using the existing button styles.
   - Publish both links because `https://hightnetworks.com/` and `https://hightnetworks.com/teaming` are live and return valid public pages.

3. **Refine the contact path**
   - Add the supplied organizational consulting, procurement, and teaming sentence beneath the existing contact introduction.
   - Link “visit Hight Networks” to the corporate site without replacing the Calendly or LinkedIn actions.
   - Add “Public-Sector or Teaming Inquiry” to the existing interest list only. Keep validation, storage destination, anti-spam checks, and email notifications unchanged.

4. **Metadata and quality safeguards**
   - Add a small factual phrase to the homepage description covering program leadership, public-sector technology, and enterprise transformation while retaining the current AI positioning and canonical URL.
   - Do not change the About portrait or biography because the approved portrait is correctly referenced with explicit dimensions and responsive styling.
   - Do not add a résumé link. No approved public résumé exists; the only public PDF is the workshop flyer.
   - Add no claims that convert prior-role experience into Hight Networks past performance.

## Files

- Add `src/components/ProgramLeadershipSection.tsx`
- Update `src/pages/Index.tsx`
- Update `src/components/HowItAllComesTogetherSection.tsx`
- Update `src/components/CtaSection.tsx`
- Update `src/components/ContactForm.tsx`
- Record the new homepage section architecture in `AGENTS.md`

## Validation

- Run the existing lint, tests, and production build, plus the available TypeScript checker.
- Verify the homepage and repaired media at desktop, tablet, and mobile widths with no overflow or console errors.
- Verify About image rendering at all three widths.
- Exercise the existing contact submission end to end with the new interest value and confirm success without changing its destination or notifications.
- Confirm the newsletter form remains visually and functionally unchanged.
- Check homepage refresh, navigation/footer links, Hight Networks destinations, semantic heading order, focus states, and external-link attributes.
- Search changed files for em dashes, private-address/tax-ID exposure, and unsupported corporate-performance claims.
