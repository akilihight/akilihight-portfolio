import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard, { ProductAction, ProductSecondaryLink } from "@/components/ProductCard";
import { DIGITAL_GOODS_POLICY, KIT_PRODUCTS, getProductDisplayPrice, getProductSchema, type DigitalProduct } from "@/config/platform";

const originalPolicy = { ...DIGITAL_GOODS_POLICY };
const ready: DigitalProduct = {
  ...KIT_PRODUCTS.aiStarterKit, status: "live", nameFinalized: true,
  descriptionFinalized: true, contentsApproved: true, price: 25,
  format: "Test PDF", includedDeliverables: ["Test approved guide"],
  fulfillmentConfigured: true, checkoutUrl: "https://akili-hight.kit.com/products/test",
  licenseSummary: "Test license", refundPolicySummary: "Test refund",
  personalUseLicense: "Test personal license", refundPolicy: "Test policy", deliveryDisclosure: "Test delivery",
};
afterEach(() => { cleanup(); Object.assign(DIGITAL_GOODS_POLICY, originalPolicy); });
function approvePolicy() { Object.assign(DIGITAL_GOODS_POLICY, { approved: true, text: "Test approved terms" }); }
function action(product: DigitalProduct) { return render(<MemoryRouter><ProductAction product={product} /></MemoryRouter>); }

describe("Kit-only commerce behavior", () => {
  for (const policy of [{ approved: false, text: "Draft policy" }, { approved: true, text: null }]) {
    it(`withholds purchase, price and schema for incomplete policy ${JSON.stringify(policy)}`, () => {
      Object.assign(DIGITAL_GOODS_POLICY, policy);
      const { container } = action(KIT_PRODUCTS.aiStarterKit);
      expect(container.querySelector("a")?.getAttribute("href")).toBe("/newsletter#newsletter");
      expect(getProductDisplayPrice(KIT_PRODUCTS.aiStarterKit)).toBeNull();
      expect(getProductSchema(KIT_PRODUCTS.aiStarterKit)).toBeNull();
    });
  }
  it("routes comingSoon notifications to the current newsletter pathway even with complete launch inputs", () => {
    approvePolicy();
    const { container } = action({ ...ready, status: "comingSoon" });
    expect(container.querySelector("a")?.getAttribute("href")).toBe("/newsletter#newsletter");
    expect(getProductDisplayPrice({ ...ready, status: "comingSoon" })).toBeNull();
  });
  it("opens only the configured complete live checkout securely", () => {
    approvePolicy();
    const { container } = action(ready);
    const link = container.querySelector("a");
    expect(link?.getAttribute("href")).toBe(ready.checkoutUrl);
    expect(link?.getAttribute("target")).toBe("_blank");
    expect(link?.getAttribute("rel")).toBe("noopener noreferrer");
    expect(getProductDisplayPrice(ready)).toBe("$25.00");
  });
  it("uses the exact approved $19 Kit checkout on every shared product surface", () => {
    const { container } = render(<MemoryRouter><ProductCard product={KIT_PRODUCTS.aiStarterKit} featured /><ProductAction product={KIT_PRODUCTS.aiStarterKit} /></MemoryRouter>);
    const links = [...container.querySelectorAll("a")].filter((link) => link.href.includes("?step=checkout"));
    expect(links).toHaveLength(2);
    for (const link of links) {
      expect(link.getAttribute("href")).toBe("https://akili-hight.kit.com/products/ai-confidence-starter-kit?step=checkout");
      expect(link.textContent).toContain("Get the Starter Kit · $19");
    }
    expect(container.querySelector('a[download]')).toBeNull();
    expect(container.innerHTML).not.toMatch(/https?:[^"\s<>]*\.pdf(?:[?"\s<>]|$)/i);
  });
  for (const checkoutUrl of [null, "", "not a URL", "https://akili-hight.kit.com/", "https://example.com/checkout", "http://akili-hight.kit.com/products/test"]) {
    it(`keeps checkout unavailable for ${checkoutUrl ?? "missing URL"}`, () => {
      approvePolicy();
      const { container } = action({ ...ready, checkoutUrl });
      expect(container.querySelector("a")?.getAttribute("href")).toBe("/newsletter#newsletter");
      expect(getProductDisplayPrice({ ...ready, checkoutUrl })).toBeNull();
    });
  }
  it("does not expose draft preview URLs", () => {
    const { container } = render(<MemoryRouter><ProductSecondaryLink product={{ ...ready, status: "comingSoon", previewUrl: "https://example.com/preview" }} /></MemoryRouter>);
    expect(container.querySelector("a")).toBeNull();
  });
  it("allows a secure optional preview only after launch requirements are complete", () => {
    approvePolicy();
    const { container } = render(<MemoryRouter><ProductSecondaryLink product={{ ...ready, previewUrl: "https://example.com/preview" }} /></MemoryRouter>);
    expect(container.querySelector("a")?.getAttribute("href")).toBe("https://example.com/preview");
    expect(container.querySelector("a")?.getAttribute("rel")).toBe("noopener noreferrer");
  });
});