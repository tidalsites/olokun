"use server";

import { ContactSchema, TContactSchema } from "@/schemas/contact";
import { Resend } from "resend";

import { ContactEmail } from "@/app/components/ContactEmailTemplate";
import { createElement } from "react";
import { CreateEmailResponse } from "resend/build/src/emails/interfaces";
import { ZodFormattedError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactResponse = {
  success: boolean;
  error?: ZodFormattedError<TContactSchema> | string;
  data?: CreateEmailResponse;
};

export const sendContactEmail = async (
  formData: TContactSchema
): Promise<ContactResponse> => {
  const result = ContactSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  try {
    const resp = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "devin@tidalsites.com",
      subject: "Olokun Contact form",
      // text: "test",
      react: createElement(ContactEmail, formData),
    });

    return { success: true, data: resp };
  } catch (error) {
    let returnedError;

    if (error instanceof Error) {
      returnedError = error.message;
    }

    if (Array.isArray(error)) {
      returnedError = error.join(",");
    }

    returnedError = String(error);
    return { success: false, error: returnedError };
  }
};
