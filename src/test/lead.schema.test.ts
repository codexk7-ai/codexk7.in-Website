import { describe, expect, it } from 'vitest';
import { LeadSchema } from '@/site/server/lead.schema';

const valid = {
  name: 'Asha Rao',
  email: 'asha@example.com',
  phone: '+91 98765 43210',
  company: 'Acme',
  projectType: 'Agentic AI',
  linkedin: 'https://linkedin.com/in/asha',
  currency: 'INR' as const,
  budgetRange: '2l-4l' as const,
  projectDescription: 'Build an agent that triages support tickets.',
  website: '',
};

describe('LeadSchema', () => {
  it('accepts a complete, valid lead', () => {
    expect(LeadSchema.safeParse(valid).success).toBe(true);
  });

  it('rejects an invalid email', () => {
    expect(LeadSchema.safeParse({ ...valid, email: 'not-an-email' }).success).toBe(false);
  });

  it('rejects a phone number with too few digits', () => {
    expect(LeadSchema.safeParse({ ...valid, phone: '12-34' }).success).toBe(false);
  });

  it('rejects an unknown budget range', () => {
    expect(LeadSchema.safeParse({ ...valid, budgetRange: 'free' }).success).toBe(false);
  });

  it('rejects a filled honeypot field', () => {
    expect(LeadSchema.safeParse({ ...valid, website: 'spam' }).success).toBe(false);
  });

  it('rejects an oversized description', () => {
    expect(LeadSchema.safeParse({ ...valid, projectDescription: 'x'.repeat(5001) }).success).toBe(false);
  });
});
