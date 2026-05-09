import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  product: string;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const product = payload.product?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !product || !message) {
    return NextResponse.json({ message: "All fields are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "NexaEduBiz <onboarding@resend.dev>";

  if (!resendApiKey || !toEmail) {
    return NextResponse.json(
      {
        message:
          "Contact form is not configured yet. Set RESEND_API_KEY and CONTACT_TO_EMAIL in environment variables."
      },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New NexaEduBiz enquiry: ${product}`,
      text: `Name: ${name}\nEmail: ${email}\nProduct: ${product}\n\nMessage:\n${message}`
    });

    return NextResponse.json({
      message: "Thanks! Your message has been sent. Our team will contact you soon."
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
