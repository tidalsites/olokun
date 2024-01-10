"use server";

import { ContactSchema, TContactSchema } from "@/schemas/contact";
import { Resend } from "resend";

import { ContactEmail } from "@/app/components/ContactEmailTemplate";
import { createElement } from "react";
import { CreateEmailResponse } from "resend/build/src/emails/interfaces";
import { ZodFormattedError } from "zod";

const resend = new Resend("not_real");

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
      from: "vernon.hall@olokunllc.com",
      to: "vernon.hall@olokunllc.com",
      subject: "Olokun Contact form",
      react: createElement(ContactEmail, formData),
    });

    // We are using Resend 1.1.0, which is only supposed to return { id: string}
    // However, on error, the return value is { message: string; name: string; statusCode: number}
    // This is not annotated in the Resend types <v2.0.0

    if (!resp.id) {
      return { success: false, data: resp };
    }

    return { success: true, data: resp };
  } catch (error) {
    let returnedError = "Unknown error occurred";

    if (error instanceof Error) {
      returnedError = error.message;
    }

    if (Array.isArray(error)) {
      returnedError = error.join(",");
    }

    if (typeof error === "string") {
      returnedError = error;
    }
    return { success: false, error: returnedError };
  }
};
