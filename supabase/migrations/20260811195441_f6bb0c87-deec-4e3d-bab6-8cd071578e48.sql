CREATE TABLE public.contact_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  interest_type TEXT NOT NULL,
  message TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'akilihight.com',
  status TEXT NOT NULL DEFAULT 'new',
  CONSTRAINT contact_inquiries_name_len CHECK (char_length(name) BETWEEN 1 AND 100),
  CONSTRAINT contact_inquiries_email_len CHECK (char_length(email) BETWEEN 3 AND 255),
  CONSTRAINT contact_inquiries_message_len CHECK (char_length(message) BETWEEN 1 AND 1000),
  CONSTRAINT contact_inquiries_interest_valid CHECK (interest_type IN (
    'AI / Technology Advisory',
    'Workshop / Speaking',
    'Career / Work Readiness',
    'Partnership / Collaboration',
    'Professional Opportunity',
    'Other'
  ))
);

GRANT INSERT ON public.contact_inquiries TO anon, authenticated;
GRANT ALL ON public.contact_inquiries TO service_role;

ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
ON public.contact_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);