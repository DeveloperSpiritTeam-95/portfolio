"use server";

import { z } from "zod";
import { Resend } from "resend";

import { contactFormSchema } from "./validator";
import ContactTemplate from "@/components/emailTemplates/ContactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactFormSubmissionAction = async (
  data: z.infer<typeof contactFormSchema>
) => {
  const response = await resend.emails.send({
    from: "Portfolio website <onboarding@resend.dev>",
    to: ["pavanbhaskardev@gmail.com"],
    subject: "New Form Submission!",
    react: ContactTemplate(data),
  });

  return response;
};
