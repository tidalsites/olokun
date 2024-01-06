"use server";

import { TContactSchema } from "@/schemas/contact";
import { Resend } from "resend";

// import { ContactEmail } from "@/app/components/ContactEmailTemplate";
// import { createElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (formData: TContactSchema) => {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "devin@tidalsites.com",
    subject: "Olokun Contact form",
    text: "test",
    // react: createElement(ContactEmail, formData),
  });
};
