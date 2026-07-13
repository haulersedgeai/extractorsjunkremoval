"use server";

import { Resend } from "resend";
import fs from "fs/promises";
import path from "path";
import type { QuoteState } from "@/lib/quote-options";
import { SITE } from "@/lib/site";

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  try {
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const zip = String(formData.get("zip") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const company = String(formData.get("company") || "").trim();

    if (company) return { ok: true, message: "Thanks — we'll be in touch." };
    if (!name || (!phone && !email) || !message) {
      return { ok: false, message: "Please include your name, a way to reach you, and a few details." };
    }

    const subject = `New Quote Request — ${service || "General"} — ${name}`;
    const html = `
      <h2>New Quote Request from extractorsjunkremoval.com</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "(none provided)")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || "(none provided)")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "(unspecified)")}</p>
      <p><strong>ZIP:</strong> ${escapeHtml(zip || "(none provided)")}</p>
      <p><strong>Details:</strong></p>
      <pre style="font-family:inherit;white-space:pre-wrap">${escapeHtml(message)}</pre>
    `;

    const to = process.env.QUOTE_TO_EMAIL || SITE.email;
    const from = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: `Extractors Junk Removal <${from}>`,
        to: [to],
        replyTo: email || undefined,
        subject,
        html,
      });
      if (error) {
        await logFallback({ name, phone, email, service, zip, message, error: String(error) });
        return { ok: false, message: `Something went wrong sending your message. Please call us at ${SITE.phoneDisplay}.` };
      }
    } else {
      await logFallback({ name, phone, email, service, zip, message });
    }

    return { ok: true, message: "Got it — we'll text or call you within an hour during business hours." };
  } catch {
    return { ok: false, message: `Something went wrong. Please call us at ${SITE.phoneDisplay}.` };
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function logFallback(data: Record<string, unknown>) {
  try {
    const file = path.join("/tmp", "extractors-quote-fallback.log");
    const line = `[${new Date().toISOString()}] ${JSON.stringify(data)}\n`;
    await fs.appendFile(file, line, "utf8");
  } catch {
    // best-effort
  }
}
