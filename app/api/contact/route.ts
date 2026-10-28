import { NextResponse } from "next/server";
import { validateContactForm, sanitizeString } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = sanitizeString(body.name);
    const email = sanitizeString(body.email);
    const message = sanitizeString(body.message);

    const validation = validateContactForm({ name, email, message });

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please check your form entries.",
          fieldErrors: validation.errors,
        },
        { status: 400 }
      );
    }

    // TODO: Connect email service (e.g. Resend, SendGrid, or AWS SES) here.
    // Example:
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL || "founders@cleanwater-sdg6.org",
    //   from: email,
    //   subject: `Clean Water Platform Inquiry from ${name}`,
    //   text: message,
    // });

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${name}! Your message has been received. Our team will review your inquiry shortly.`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your message. Please try again.",
      },
      { status: 500 }
    );
  }
}
