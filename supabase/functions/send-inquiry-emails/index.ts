import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend';
const FROM = 'Akili Hight <notifications@cloudbait.io>';
const ADMIN_RECIPIENT = 'info@hightnetworks.com';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// simple in-memory abuse guard (per isolate)
const recent = new Map<string, number>();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const hits: number[] = [];

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

async function sendEmail(payload: Record<string, unknown>) {
  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) throw new Error('Email credentials are not configured');

  const res = await fetch(`${GATEWAY_URL}/emails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      'X-Connection-Api-Key': RESEND_API_KEY,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`[${res.status}]: ${body}`);
  }
  return await res.json();
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  try {
    const now = Date.now();
    while (hits.length && now - hits[0] > RATE_WINDOW_MS) hits.shift();
    if (hits.length >= RATE_MAX) return json({ error: 'Too many requests' }, 429);
    hits.push(now);

    const body = await req.json().catch(() => null);
    const id = body?.id;
    if (typeof id !== 'string' || !UUID_RE.test(id)) {
      return json({ error: 'Invalid request' }, 400);
    }

    const last = recent.get(id);
    if (last && now - last < 10 * 60_000) return json({ ok: true, deduped: true });
    recent.set(id, now);

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: inquiry, error } = await supabase
      .from('contact_inquiries')
      .select('id, created_at, name, email, interest_type, message, source')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Lookup failed:', error.message);
      return json({ error: 'Lookup failed' }, 500);
    }
    if (!inquiry) return json({ error: 'Not found' }, 404);

    const name = String(inquiry.name);
    const firstName = name.trim().split(/\s+/)[0] || name;
    const submitted = new Date(inquiry.created_at).toUTCString();

    const results: Record<string, string> = {};

    // Administrator notification
    try {
      await sendEmail({
        from: FROM,
        to: [ADMIN_RECIPIENT],
        reply_to: inquiry.email,
        subject: `New inquiry from AkiliHight.com: ${inquiry.interest_type}`,
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;line-height:1.6">
            <h2 style="margin:0 0 16px">New AkiliHight.com Inquiry</h2>
            <p style="margin:0 0 8px"><strong>Name:</strong><br>${esc(name)}</p>
            <p style="margin:0 0 8px"><strong>Email:</strong><br>${esc(inquiry.email)}</p>
            <p style="margin:0 0 8px"><strong>Area of interest:</strong><br>${esc(inquiry.interest_type)}</p>
            <p style="margin:0 0 8px"><strong>Message:</strong><br>${esc(inquiry.message).replace(/\n/g, '<br>')}</p>
            <p style="margin:0 0 8px"><strong>Submitted:</strong><br>${esc(submitted)}</p>
            <p style="margin:0 0 8px"><strong>Source:</strong><br>AkiliHight.com</p>
            <p style="margin:16px 0 0;font-size:12px;color:#64748b">Inquiry ID: ${esc(inquiry.id)}</p>
          </div>`,
      });
      results.admin = 'sent';
    } catch (e) {
      console.error('Admin notification failed:', e instanceof Error ? e.message : String(e));
      results.admin = 'failed';
    }

    // Visitor confirmation
    try {
      await sendEmail({
        from: FROM,
        to: [inquiry.email],
        subject: 'We received your message',
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;line-height:1.6">
            <p>Hi ${esc(firstName)},</p>
            <p>Thanks for reaching out through AkiliHight.com. Your message has been received, and I'll review it and follow up by email.</p>
            <p>Best,<br>Akili Hight</p>
            <p style="font-size:12px;color:#64748b">AkiliHight.com</p>
          </div>`,
      });
      results.visitor = 'sent';
    } catch (e) {
      console.error('Visitor confirmation failed:', e instanceof Error ? e.message : String(e));
      results.visitor = 'failed';
    }

    return json({ ok: true, results });
  } catch (e) {
    console.error('Unexpected error:', e instanceof Error ? e.message : String(e));
    return json({ error: 'Unexpected error' }, 500);
  }
});
