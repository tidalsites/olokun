"use server";

import { ContactSchema, TContactSchema } from "@/schemas/contact";
import { Resend } from "resend";

import { ContactEmail } from "@/app/components/ContactEmailTemplate";
import { ZodFormattedError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactResponse = {
  success: boolean;
  error?: ZodFormattedError<TContactSchema> | string;
  data?: any;
};

export const sendContactEmail = async (
  formData: TContactSchema
): Promise<ContactResponse> => {
  const result = ContactSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  try {
    const data = await resend.emails.send({
      from: "no-reply@olokunllc.com",
      to: "devin@tidalsites.com",
      subject: "Olokun Contact form",
      react: ContactEmail({ ...formData }),
    });

    // We are using Resend 1.1.0, which is only supposed to return { id: string}
    // However, on error, the return value is { message: string; name: string; statusCode: number}
    // This is not annotated in the Resend types <v2.0.0

    if (!data || !data.data || !data.data.id) {
      console.log("No response Id");
      return { success: false, data };
    }

    return { success: true, data };
  } catch (error) {
    console.log("Error Thrown");
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
