import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string({ message: "Name is required" }).min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email is invalid" }),
  message: z.string({ message: "Message is required" }),
});
