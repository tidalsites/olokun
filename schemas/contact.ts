import { z } from "zod";

export const ContactSchema = z.object({
  first_name: z.string().min(1, "Required"),
  last_name: z.string().min(1, "Required"),
  email: z
    .string()
    .email()
    .min(4, "Required")
    .max(50, "Cannot be more than 50 characters"),
  phone: z.string().max(13, "Cannot be more than 13 characters").optional(),
  description: z.string().min(1, "Required").max(255).optional(),
  engineering: z.boolean().optional(),
  consulting: z.boolean().optional(),
  logistics: z.boolean().optional(),
  it: z.boolean().optional(),
  general: z.boolean().optional(),
  career: z.boolean().optional(),
  business_development: z.boolean().optional(),
});

export type TContactSchema = z.infer<typeof ContactSchema>;
