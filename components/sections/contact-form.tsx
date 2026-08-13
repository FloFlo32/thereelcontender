"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 500);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="text-xl font-semibold">Thanks, your message is in.</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Capt. David will get back to you shortly. For the fastest response,
          call or text 850-259-2789.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first" className="text-sm font-medium">
            Name *
          </label>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <input
              id="first"
              name="first"
              placeholder="First"
              required
              className="h-11 rounded-lg border border-input bg-background px-3.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            />
            <input
              id="last"
              name="last"
              placeholder="Last"
              required
              className="h-11 rounded-lg border border-input bg-background px-3.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">
            Comment or Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-3.5 py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}
