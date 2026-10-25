import { createServerFn } from '@tanstack/react-start';
import { LeadSchema } from '@/site/server/lead.schema';

/**
 * Server-only lead intake. Validates the payload on the server (never trust the
 * client), drops bot submissions via a honeypot field, and forwards the lead to
 * LEAD_WEBHOOK_URL (CRM, Zapier/Make, Slack, Sheets, or an email API endpoint).
 * The webhook URL is a secret and is only read here, never shipped to the browser.
 */
export const submitLead = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    // Silently accept bot submissions without forwarding them.
    if (data.website) return { ok: true as const };

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('[lead] LEAD_WEBHOOK_URL is not configured; lead was not stored.');
      throw new Error('Submissions are temporarily unavailable.');
    }

    const { website: _honeypot, ...lead } = data;
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ source: 'codexk7-website', submittedAt: new Date().toISOString(), ...lead }),
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      console.error(`[lead] webhook responded with HTTP ${res.status}`);
      throw new Error('Submissions are temporarily unavailable.');
    }
    return { ok: true as const };
  });
