import { z } from 'zod';

/** Lead payload contract shared by the server function and its tests. */
export const LeadSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(120),
  email: z.string().trim().email('Please enter a valid email address.').max(200),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s\-()]+$/, 'Please enter a valid phone number.')
    .refine((v) => v.replace(/\D/g, '').length >= 7 && v.replace(/\D/g, '').length <= 15, 'Please enter a valid phone number.'),
  company: z.string().trim().max(160).default(''),
  projectType: z.string().trim().min(1).max(60),
  linkedin: z.union([z.literal(''), z.string().trim().url().max(300)]).default(''),
  currency: z.enum(['INR', 'USD']),
  budgetRange: z.enum(['under-50k', '50k-1l', '2l-4l', '5l-plus']),
  projectDescription: z.string().trim().min(10, 'Please describe your project in a few more words.').max(5000),
  // Honeypot: real users never fill this in. Bots often do.
  website: z.string().max(0).default(''),
});

export type LeadInput = z.infer<typeof LeadSchema>;
