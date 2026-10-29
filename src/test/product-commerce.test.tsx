import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductAction, ProductSecondaryLink } from "@/components/ProductCard";
import { DIGITAL_GOODS_POLICY, KIT_PRODUCTS, getProductDisplayPrice, type DigitalProduct } from "@/config/platform";

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
  for (const checkoutUrl of [null, "", "https://example.com/checkout", "http://akili-hight.kit.com/products/test"]) {
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