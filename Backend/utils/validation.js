// utils/validation.js
const { z } = require('zod');

const registerSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const profileUpdateSchema = z
  .object({
    fullName: z.string().min(1).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
  })
  .refine((data) => Object.values(data).some((value) => value !== undefined), {
    message: 'At least one field must be provided for update',
  });

const courseSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  description: z.string().optional(),
  short_description: z.string().optional(),
  price_usd: z.number().nonnegative().optional().default(0),
  duration: z.string().optional(),
  format: z.string().optional(),
  is_active: z.boolean().optional(),
});

module.exports = { registerSchema, loginSchema, profileUpdateSchema, courseSchema };
