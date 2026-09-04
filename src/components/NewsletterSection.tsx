import { useState } from "react";
import { z } from "zod";
import { CalendarDays, Clock, Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


const schema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "Please enter your first name." })
    .max(50, { message: "Name must be under 50 characters." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email." })
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be under 255 characters." }),
});

type FieldErrors = Partial<Record<"firstName" | "email", string>>;

const valueBadges = [
  { label: "Delivered Every Tuesday", icon: CalendarDays },
  { label: "3 to 4 Minute Read", icon: Clock },
  { label: "Zero Jargon", icon: Sparkles },
];

const NewsletterSection = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setFormError("");

    const parsed = schema.safeParse({ firstName, email });
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});

    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("newsletter-subscribe", {
        body: { firstName: parsed.data.firstName, email: parsed.data.email },
      });
      if (error || !data?.success) {
        setFormError("We couldn't sign you up just now. Please try again in a moment.");
        return;
      }
      setSubscribed(true);
    } catch {
      setFormError("We couldn't sign you up just now. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };


  if (subscribed) {
    return (
      <section
        id="newsletter"
        className="py-20 border-t border-border bg-muted"
      >
        <div className="container mx-auto px-6 lg:px-16 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            You're on the list.
          </h2>
          <p className="text-muted-foreground">
            Check your inbox soon for the first issue.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="py-20 border-t border-border bg-muted">
      <div className="container mx-auto px-6 lg:px-16 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          The Everyday AI Digest
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Join the free weekly newsletter that breaks down how artificial
          intelligence is changing our world in plain English. No computer
          science degree required.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {valueBadges.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground"
            >
              <Icon className="h-4 w-4 text-primary/80" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="text-left rounded-xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="newsletter-first-name">First Name</Label>
              <Input
                id="newsletter-first-name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                maxLength={50}
                autoComplete="given-name"
                required
                className="bg-white"
                aria-invalid={!!errors.firstName}
                aria-describedby={
                  errors.firstName ? "newsletter-first-name-error" : undefined
                }
              />
              {errors.firstName && (
                <p
                  id="newsletter-first-name-error"
                  className="text-sm text-destructive"
                >
                  {errors.firstName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="newsletter-email">Email Address</Label>
              <Input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                autoComplete="email"
                required
                className="bg-white"
                aria-invalid={!!errors.email}
                aria-describedby={
                  errors.email ? "newsletter-email-error" : undefined
                }
              />
              {errors.email && (
                <p
                  id="newsletter-email-error"
                  className="text-sm text-destructive"
                >
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full sm:w-auto"
          >
            {submitting ? "Subscribing…" : "Get the Free Digest"}
          </Button>

          <p className="mt-4 text-xs text-muted-foreground/70">
            No spam. Unsubscribe anytime. Your email stays private.
          </p>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
