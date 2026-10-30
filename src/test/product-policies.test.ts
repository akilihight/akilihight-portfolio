import { describe, expect, it } from "vitest";
import { KIT_PRODUCTS } from "@/config/platform";

describe("Owner-approved Starter Kit policies", () => {
  it("preserves the exact personal-use license", () => {
    expect(KIT_PRODUCTS.aiStarterKit.personalUseLicense).toBe("Purchase grants the customer a nonexclusive, nontransferable license to use the AI Confidence Starter Kit for personal and individual professional-development use. The customer may download and print a copy for personal use. The guide may not be shared, reproduced, resold, redistributed, published, uploaded, sublicensed, or commercially repackaged, in whole or in substantial part. Team or organizational use requires separate written permission.");
  });
  it("preserves the exact delivery disclosure", () => {
    expect(KIT_PRODUCTS.aiStarterKit.deliveryDisclosure).toBe("This is a digital product. No physical item will be shipped. After successful payment, Kit provides access to the PDF through the purchase confirmation page and receipt email. Customers are responsible for providing a valid email address and saving their personal copy.");
  });
  it("preserves the exact refund policy and seven-day support window", () => {
    expect(KIT_PRODUCTS.aiStarterKit.refundPolicy).toBe("Because this digital product is delivered immediately, purchases are generally final. Customers who are charged more than once, cannot access the file, receive a damaged file, or receive something materially different from the product description should contact Akili Hight within seven days. The issue will first be addressed through replacement or access support. A full refund may be provided when appropriate or required by law.");
  });
});