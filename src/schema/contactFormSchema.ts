import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(255, 'Name must be at most 255 characters'),
  email: z.email('Invalid email address'),
  subject: z
    .string()
    .trim()
    .min(1, 'Subject is required')
    .max(255, 'Subject must be at most 255 characters'),
  content: z
    .string()
    .trim()
    .min(1, 'Message is required')
    .max(5000, 'Message must be at most 5000 characters'),
});
