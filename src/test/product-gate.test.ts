import { describe, expect, it } from "vitest";
import { DIGITAL_GOODS_POLICY, KIT_PRODUCTS, isProductLive, type DigitalProduct } from "@/config/platform";

const approvedPolicy = { approved: true, text: "Owner-approved test policy" };
const ready: DigitalProduct = {
  ...KIT_PRODUCTS.aiStarterKit,
  status: "live", nameFinalized: true, descriptionFinalized: true, contentsApproved: true,
  price: 25, finalFileUrl: "https://example.com/approved-file.pdf", checkoutUrl: "https://akili-hight.kit.com/products/test-kit",
};
describe("Phase 1 product safeguards", () => {
  it("publicly presents only the AI Confidence Starter Kit", () => {
    expect(Object.values(KIT_PRODUCTS).filter((p) => p.public).map((p) => p.title)).toEqual(["AI Confidence Starter Kit"]);
  });
  it("keeps all future products hidden and configurable", () => {
    for (const id of ["aiWorkdayToolkit", "aiJobSearchToolkit", "futureBundle"]) expect(KIT_PRODUCTS[id].public).toBe(false);
  });
  it("does not activate the starter kit before owner materials are supplied", () => {
    expect(isProductLive(KIT_PRODUCTS.aiStarterKit)).toBe(false);
    expect(DIGITAL_GOODS_POLICY.approved).toBe(false);
  });
  it("allows a fully finalized product with approved policy", () => expect(isProductLive(ready, approvedPolicy)).toBe(true));
  const missingRequirements: [string, Partial<DigitalProduct>][] = [
    ["explicit live status", { status: "coming-soon" }], ["finalized name", { nameFinalized: false }],
    ["nonempty name", { title: " " }], ["finalized description", { descriptionFinalized: false }],
    ["nonempty description", { description: " " }], ["approved contents", { contentsApproved: false }],
    ["deliverables", { plannedTopics: [] }], ["final price", { price: null }],
    ["finite price", { price: NaN }], ["final file", { finalFileUrl: null }],
    ["HTTPS file", { finalFileUrl: "http://example.com/file.pdf" }],
    ["Kit checkout", { checkoutUrl: "https://example.com/checkout" }],
    ["HTTPS checkout", { checkoutUrl: "http://akili-hight.kit.com/products/test" }],
    ["checkout URL", { checkoutUrl: null }], ["approved artwork when used", { thumbnail: { src: "/test.jpg", alt: "Test artwork", approved: false } }],
  ];
  for (const [rule, patch] of missingRequirements) it(`requires ${rule}`, () => expect(isProductLive({ ...ready, ...patch }, approvedPolicy)).toBe(false));
  it("requires an explicitly approved policy", () => expect(isProductLive(ready, { approved: false, text: "Draft" })).toBe(false));
  it("requires actual final policy text", () => expect(isProductLive(ready, { approved: true, text: null })).toBe(false));
});