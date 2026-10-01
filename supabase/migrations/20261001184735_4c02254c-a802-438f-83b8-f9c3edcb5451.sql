ALTER TABLE public.contact_inquiries
DROP CONSTRAINT contact_inquiries_interest_valid;

ALTER TABLE public.contact_inquiries
ADD CONSTRAINT contact_inquiries_interest_valid CHECK (interest_type IN (
  'AI / Technology Advisory',
  'Workshop / Speaking',
  'Career / Work Readiness',
  'Partnership / Collaboration',
  'Professional Opportunity',
  'Public-Sector or Teaming Inquiry',
  'Other'
));