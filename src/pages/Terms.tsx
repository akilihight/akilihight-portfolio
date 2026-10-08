import { Link } from "react-router-dom";
import PlatformLayout, { PageHeading } from "@/components/PlatformLayout";
import { DIGITAL_GOODS_POLICY } from "@/config/platform";

export default function Terms() {
  return <PlatformLayout path="/terms"><PageHeading title="Terms" description="Practical information about site content, external services, and digital-product availability." />
    <div className="container max-w-3xl space-y-9 px-5 py-14 reference-copy">
      <section><h2>Educational information</h2><p>This site shares educational resources and information about Akili Hight's work. AI tools and capabilities change. AI-generated output can be wrong or incomplete; verify important information and use professional judgment. Site content is not a guarantee of accuracy or a substitute for qualified legal, medical, financial, or other professional advice.</p></section>
      <section><h2>Workshops and advisory</h2><p>Workshop and advisory inquiries use the existing booking or contact pathways. The scope and terms of an engagement are confirmed separately; a website inquiry alone does not establish an engagement.</p></section>
      <section><h2>Digital-product availability</h2><p>Digital products are not yet for sale. Coming Soon descriptions and topic lists are plans, not finalized deliverables or a purchase offer. Price, final contents, files, and applicable product terms must be confirmed before checkout is activated.</p></section>
      <section><h2>Digital-goods and refund terms</h2>{DIGITAL_GOODS_POLICY.approved && DIGITAL_GOODS_POLICY.text ? <p className="whitespace-pre-line">{DIGITAL_GOODS_POLICY.text}</p> : <p>Final digital-goods and refund terms are pending approval and will be provided before products go on sale. No refund guarantee, return promise, or product license is offered by this placeholder.</p>}</section>
      <section><h2>External checkout and services</h2><p>When available, product pages will link to Kit Commerce for checkout and delivery. Payment will be handled externally through Kit and its payment processor. This site does not collect or store card details. External services have their own applicable terms.</p></section>
      <section><h2>Questions</h2><p>Use the <Link to="/#cta">contact section</Link> or email <a href="mailto:info@akilihight.com">info@akilihight.com</a> for questions.</p></section>
    </div>
  </PlatformLayout>;
}