"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      mobile: (form.elements.namedItem("mobile") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      problem: (form.elements.namedItem("problem") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(
          (result as { error?: string }).error ??
            "Something went wrong. Please call us directly.",
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setError(
        `Unable to send online. Please call ${siteConfig.phones[0]} or email ${siteConfig.email}.`,
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
        <p className="font-semibold text-teal-900">
          Thank you for reaching out!
        </p>
        <p className="mt-2 text-sm text-teal-700">
          We will contact you shortly. For urgent matters, please call us
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error ? (
        <p
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          {error}
        </p>
      ) : null}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={loading}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="mobile" className="mb-1.5 block text-sm font-medium text-slate-700">
          Mobile
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          disabled={loading}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={loading}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="problem" className="mb-1.5 block text-sm font-medium text-slate-700">
          Problem
        </label>
        <textarea
          id="problem"
          name="problem"
          rows={4}
          required
          disabled={loading}
          className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-60"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Sending…" : "Send Message"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
