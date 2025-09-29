"use server";

import { ContactSchema, TContactSchema } from "@/schemas/contact";
import { Resend } from "resend";

import { ContactEmail } from "@/app/components/ContactEmailTemplate";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactResponse = {
  success: boolean;
  error?: ZodError<TContactSchema> | string;
  data?: any;
};

export const sendContactEmail = async (
  formData: TContactSchema
): Promise<ContactResponse> => {
  const result = ContactSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, error: result.error };
  }

  try {
    const data = await resend.emails.send({
      from: "no-reply@olokunllc.com",
      to: "vernon.hall@olokunllc.com",
      subject: "Olokun Contact form",
      react: ContactEmail({ ...formData }),
    });

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
