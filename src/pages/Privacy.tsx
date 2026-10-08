import PlatformLayout, { PageHeading } from "@/components/PlatformLayout";

export default function Privacy() {
  return <PlatformLayout path="/privacy"><PageHeading title="Privacy" description="Information about the forms and external services used on AkiliHight.com." />
    <div className="container max-w-3xl space-y-9 px-5 py-14 reference-copy">
      <section><h2>Newsletter information</h2><p>The newsletter form asks for your first name and email address. These are sent through the site's existing signup service to Kit to process your subscription to The Everyday AI Digest. You can unsubscribe using the link in newsletter emails.</p></section>
      <section><h2>Contact information</h2><p>The contact form collects your name, email, selected interest, and message. Submissions are stored by the site's hosted service and used to respond to your inquiry. Email notifications and visitor confirmations are sent using Resend. Please do not submit sensitive personal or confidential organizational information.</p></section>
      <section><h2>External services</h2><p>Kit hosts the newsletter archive. Calendly handles booking links, and YouTube provides embedded video. When you follow external links or interact with an external service, its own privacy terms may apply. The video uses YouTube's privacy-enhanced embed domain.</p></section>
      <section><h2>Digital products</h2><p>Digital products are not yet for sale. No local cart or payment form is provided on this site. When commerce is activated, Kit will handle external checkout and digital delivery, with payment processed through Kit's payment service.</p></section>
      <section><h2>Privacy questions</h2><p>Contact <a href="mailto:info@akilihight.com">info@akilihight.com</a> for questions about information you submitted, subscription preferences, or privacy requests.</p></section>
    </div>
  </PlatformLayout>;
}