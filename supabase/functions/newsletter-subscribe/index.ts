const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const { firstName, email } = await req.json();

    const name = typeof firstName === "string" ? firstName.trim() : "";
    const mail = typeof email === "string" ? email.trim() : "";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);

    if (!name || name.length > 50 || !emailOk || mail.length > 255) {
      return json({ error: "Invalid name or email." }, 400);
    }

    const apiKey = Deno.env.get("CONVERTKIT_API_KEY");
    const formId = Deno.env.get("CONVERTKIT_FORM_ID");
    if (!apiKey || !formId) {
      console.error("Missing ConvertKit configuration");
      return json({ error: "Newsletter is not configured." }, 500);
    }

    const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey, email: mail, first_name: name }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("ConvertKit error", res.status, JSON.stringify(data));
      return json({ error: "Subscription failed. Please try again." }, 502);
    }

    return json({ success: true, state: data?.subscription?.state ?? "active" });
  } catch (e) {
    console.error("newsletter-subscribe error", e);
    return json({ error: "Unexpected error." }, 500);
  }
});
