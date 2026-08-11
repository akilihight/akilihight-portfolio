import { useRef, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INTERESTS = [
  "AI / Technology Advisory",
  "Workshop / Speaking",
  "Career / Work Readiness",
  "Partnership / Collaboration",
  "Professional Opportunity",
  "Other",
] as const;

const schema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name." }).max(100, { message: "Name must be under 100 characters." }),
  email: z.string().trim().min(1, { message: "Please enter your email." }).email({ message: "Please enter a valid email address." }).max(255),
  interest_type: z.enum(INTERESTS, { errorMap: () => ({ message: "Please choose a topic." }) }),
  message: z.string().trim().min(1, { message: "Please add a brief message." }).max(1000, { message: "Message must be under 1000 characters." }),
});

type FieldErrors = Partial<Record<"name" | "email" | "interest_type" | "message", string>>;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const lastPayload = useRef<string | null>(null);
  const mountedAt = useRef(Date.now());

  const reset = () => {
    setName("");
    setEmail("");
    setInterest("");
    setMessage("");
    setErrors({});
    setFormError("");
    setSent(false);
    mountedAt.current = Date.now();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setFormError("");

    const parsed = schema.safeParse({ name, email, interest_type: interest, message });
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

    // Basic anti-spam: honeypot + instant-submit guard + duplicate guard
    const payloadKey = JSON.stringify(parsed.data);
    if (honeypot.trim() !== "" || Date.now() - mountedAt.current < 1500) {
      setSent(true);
      return;
    }
    if (lastPayload.current === payloadKey) {
      setSent(true);
      return;
    }

    setSubmitting(true);
    const id = crypto.randomUUID();
    const { error } = await supabase.from("contact_inquiries").insert({
      id,
      name: parsed.data.name,
      email: parsed.data.email,
      interest_type: parsed.data.interest_type,
      message: parsed.data.message,
    });
    setSubmitting(false);

    if (error) {
      setFormError("Something went wrong sending your message. Please try again, or email contact@akilihight.com.");
      return;
    }

    lastPayload.current = payloadKey;
    setSent(true);

    // Notifications are best-effort: the saved inquiry is the source of truth.
    supabase.functions
      .invoke("send-inquiry-emails", { body: { id } })
      .catch(() => {});
  };

  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-border bg-background p-8 text-center"
      >
        <div className="mx-auto max-w-[480px]">
          <p className="text-lg font-semibold text-foreground">
            Thanks. Your message has been received.
          </p>
          <p className="mt-2 text-base text-muted-foreground">
            I'll review it and follow up by email.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }


  return (
    <form onSubmit={handleSubmit} noValidate className="text-left rounded-xl border border-border bg-background p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ci-name">Name</Label>
          <Input
            id="ci-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "ci-name-error" : undefined}
          />
          {errors.name && <p id="ci-name-error" className="text-sm text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="ci-email">Email</Label>
          <Input
            id="ci-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "ci-email-error" : undefined}
          />
          {errors.email && <p id="ci-email-error" className="text-sm text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="ci-interest">What are you interested in?</Label>
        <Select value={interest} onValueChange={setInterest}>
          <SelectTrigger
            id="ci-interest"
            aria-invalid={!!errors.interest_type}
            aria-describedby={errors.interest_type ? "ci-interest-error" : undefined}
          >
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            {INTERESTS.map((i) => (
              <SelectItem key={i} value={i}>{i}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.interest_type && <p id="ci-interest-error" className="text-sm text-destructive">{errors.interest_type}</p>}
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="ci-message">Brief message</Label>
        <Textarea
          id="ci-message"
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, 1000))}
          maxLength={1000}
          rows={4}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "ci-message-error" : "ci-message-count"}
        />
        <div className="flex justify-between gap-4">
          {errors.message
            ? <p id="ci-message-error" className="text-sm text-destructive">{errors.message}</p>
            : <span />}
          <span id="ci-message-count" className="text-xs text-muted-foreground/70">{message.length}/1000</span>
        </div>
      </div>

      {/* honeypot — hidden from users */}
      <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="ci-company">Company</label>
        <input
          id="ci-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {formError && (
        <p role="alert" className="mt-5 text-sm text-destructive">{formError}</p>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <Button type="submit" disabled={submitting} className="sm:w-auto">
          {submitting ? "Sending…" : "Send Message"}
        </Button>
        <p className="text-xs text-muted-foreground/70">
          Your information will only be used to respond to your inquiry.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
