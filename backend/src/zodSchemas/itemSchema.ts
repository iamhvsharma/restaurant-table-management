import z from "zod";

export const itemSchema = z.object({
  userId: z.string(),
  title: z
    .string()
    .min(3, "Title should consists min 3 characters")
    .max(200, "Title should consists of max 200 characters"),
  description: z
    .string()
    .min(3, "Title should consists min 3 characters")
    .max(1000, "Title should consists of max 200 characters"),
  price: z.number(),
  images: z.string().url(),
});
