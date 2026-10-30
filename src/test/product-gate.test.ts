import { describe, expect, it } from "vitest";
import { DIGITAL_GOODS_POLICY, KIT_PRODUCTS, getProductSchema, isProductLive, type DigitalProduct } from "@/config/platform";

const approvedPolicy = { approved: true, text: "Owner-approved test policy" };
const ready: DigitalProduct = {
  ...KIT_PRODUCTS.aiStarterKit,
  status: "live", nameFinalized: true, descriptionFinalized: true, contentsApproved: true,
  price: 25, fulfillmentConfigured: true, checkoutUrl: "https://akili-hight.kit.com/products/test-kit",
  format: "Test PDF", includedDeliverables: ["Test approved guide"],
  licenseSummary: "Test license summary", refundPolicySummary: "Test refund summary",
  personalUseLicense: "Test approved license", refundPolicy: "Test approved refund policy",
  deliveryDisclosure: "Test approved delivery disclosure",
};
describe("Phase 1 product safeguards", () => {
  it("publicly presents only the AI Confidence Starter Kit", () => {
    expect(Object.values(KIT_PRODUCTS).filter((p) => p.public).map((p) => p.title)).toEqual(["AI Confidence Starter Kit"]);
  });
  it("keeps all future products hidden and configurable", () => {
    for (const id of ["aiWorkdayToolkit", "aiJobSearchToolkit", "futureBundle"]) expect(KIT_PRODUCTS[id].public).toBe(false);
  });
  it("activates the owner-approved starter kit through the complete gate", () => {
    expect(isProductLive(KIT_PRODUCTS.aiStarterKit)).toBe(true);
    expect(DIGITAL_GOODS_POLICY.approved).toBe(true);
  });
  it("allows a fully finalized product with approved policy", () => expect(isProductLive(ready, approvedPolicy)).toBe(true));
  const missingRequirements: [string, Partial<DigitalProduct>][] = [
    ["explicit live status", { status: "comingSoon" }], ["finalized name", { nameFinalized: false }],
    ["nonempty name", { title: " " }], ["finalized description", { descriptionFinalized: false }],
    ["nonempty description", { description: " " }], ["approved contents", { contentsApproved: false }],
    ["exact deliverables", { includedDeliverables: [] }], ["nonblank deliverables", { includedDeliverables: [" "] }], ["final price", { price: null }],
    ["confirmed format", { format: null }], ["audience", { audience: " " }],
    ["license summary", { licenseSummary: null }], ["refund summary", { refundPolicySummary: null }],
    ["personal-use license", { personalUseLicense: null }], ["refund policy", { refundPolicy: null }],
    ["delivery disclosure", { deliveryDisclosure: null }],
    ["finite price", { price: NaN }], ["Kit fulfillment confirmed", { fulfillmentConfigured: false }],
    ["Kit checkout", { checkoutUrl: "https://example.com/checkout" }],
    ["HTTPS checkout", { checkoutUrl: "http://akili-hight.kit.com/products/test" }],
    ["checkout URL", { checkoutUrl: null }], ["nonempty checkout URL", { checkoutUrl: "" }],
    ["Kit domain boundary", { checkoutUrl: "https://kit.com.example.com/checkout" }],
    ["valid URL", { checkoutUrl: "not a URL" }],
    ["checkout product path", { checkoutUrl: "https://akili-hight.kit.com/" }],
    ["no checkout credentials", { checkoutUrl: "https://user:password@akili-hight.kit.com/products/test" }],
    ["USD currency", { currency: "EUR" as DigitalProduct["currency"] }],
    ["Kit delivery provider", { deliveryProvider: "other" as DigitalProduct["deliveryProvider"] }],
    ["public availability", { public: false }],
    ["positive price", { price: 0 }],
    ["artwork source", { thumbnail: { src: "", alt: "Test", approved: true } }],
    ["artwork alternative text", { thumbnail: { src: "/test.jpg", alt: "", approved: true } }],
    ["approved artwork when used", { thumbnail: { src: "/test.jpg", alt: "Test artwork", approved: false } }],
  ];
  for (const [rule, patch] of missingRequirements) it(`requires ${rule} for checkout and schema`, () => {
    const product = { ...ready, ...patch };
    expect(isProductLive(product, approvedPolicy)).toBe(false);
    expect(getProductSchema(product)).toBeNull();
  });
  it("requires an explicitly approved policy", () => expect(isProductLive(ready, { approved: false, text: "Draft" })).toBe(false));
  it("requires actual final policy text", () => expect(isProductLive(ready, { approved: true, text: null })).toBe(false));
  it("never treats proposed topics as finalized deliverables", () => expect(isProductLive({ ...ready, includedDeliverables: [], plannedTopics: ["Proposed topic"] }, approvedPolicy)).toBe(false));
  it("uses the exact approved Kit checkout URL and price", () => {
    expect(KIT_PRODUCTS.aiStarterKit.checkoutUrl).toBe("https://akili-hight.kit.com/products/ai-confidence-starter-kit?step=checkout");
    expect(KIT_PRODUCTS.aiStarterKit.price).toBe(19);
  });
  it("uses the owner-approved launch format, version, date, audience and contents", () => {
    const kit = KIT_PRODUCTS.aiStarterKit;
    expect(kit.status).toBe("live");
    expect(kit.format).toBe("33-page digital PDF guide");
    expect(kit.version).toBe("1.0");
    expect(kit.publicationDate).toBe("October 2026");
    expect(kit.audience).toBe("Adults, professionals, entrepreneurs, and community learners who want a practical, beginner-friendly introduction to using AI at home and work.");
    expect(kit.includedDeliverables).toEqual([
      "Plain-English introduction to generative AI", "Tool-selection guide", "Safe setup and privacy guidance",
      "Six-part prompt framework", "Before-and-after prompt examples", "Verification methods and warning signs",
      "Six practical AI workflows", "Ten reusable prompts", "Prompt-library worksheet",
      "Seven-day AI confidence plan", "Responsible-use and final-review checklists",
    ]);
    expect(kit.deliveryProvider).toBe("kit");
    expect(kit.fulfillmentConfigured).toBe(true);
  });
  it("emits only the approved Product and Offer values when fully live", () => {
    expect(getProductSchema(KIT_PRODUCTS.aiStarterKit)).toMatchObject({
      "@type": "Product", name: "AI Confidence Starter Kit", category: "digital PDF",
      description: "Build practical AI confidence without technical jargon. This 33-page starter guide shows you how to choose tools, write clearer prompts, verify answers, protect sensitive information, and apply AI to everyday work.",
      offers: { "@type": "Offer", price: "19.00", priceCurrency: "USD", availability: "https://schema.org/InStock",
        url: "https://akili-hight.kit.com/products/ai-confidence-starter-kit?step=checkout" },
    });
  });
});

describe("Phase 3A paid-file exposure safeguards", () => {
  it("never stores a paid-product download URL in client-side configuration", () => {
    const configSource = JSON.stringify(KIT_PRODUCTS);
    expect(configSource).not.toContain("finalFileUrl");
    expect(configSource).not.toContain("productFileUrl");
    for (const product of Object.values(KIT_PRODUCTS)) {
      expect(product).not.toHaveProperty("finalFileUrl");
      expect(product).not.toHaveProperty("productFileUrl");
      expect(product.deliveryProvider).toBe("kit");
    }
  });
  it("does not require any product-file URL for the live gate", () => {
    expect(isProductLive(ready, approvedPolicy)).toBe(true);
    expect(JSON.stringify(ready)).not.toContain("finalFileUrl");
  });
  it("requires owner-confirmed Kit fulfillment readiness, not a file URL", () => {
    expect(isProductLive({ ...ready, fulfillmentConfigured: false }, approvedPolicy)).toBe(false);
  });
});