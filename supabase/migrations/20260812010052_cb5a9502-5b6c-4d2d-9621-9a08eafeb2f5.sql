DROP POLICY IF EXISTS "Admins can view inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Admins can update inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Admins can delete inquiries" ON public.contact_inquiries;

CREATE POLICY "Admins can view inquiries"
ON public.contact_inquiries FOR SELECT TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::app_role));

CREATE POLICY "Admins can update inquiries"
ON public.contact_inquiries FOR UPDATE TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::app_role))
WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::app_role));

CREATE POLICY "Admins can delete inquiries"
ON public.contact_inquiries FOR DELETE TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'::app_role));

DROP FUNCTION IF EXISTS public.has_role(uuid, app_role);