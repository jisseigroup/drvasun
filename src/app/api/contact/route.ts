import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

type ContactBody = {
  name?: string;
  mobile?: string;
  email?: string;
  problem?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const mobile = body.mobile?.trim();
  const email = body.email?.trim();
  const problem = body.problem?.trim();

  if (!name || !mobile || !email || !problem) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const subject = `Appointment inquiry — ${name}`;
  const message = [
    `Name: ${name}`,
    `Mobile: ${mobile}`,
    `Email: ${email}`,
    "",
    "Concern:",
    problem,
  ].join("\n");

  const formspreeId = process.env.FORMSPREE_FORM_ID;

  if (formspreeId) {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: mobile,
        message: problem,
        _subject: subject,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Unable to send message. Please call the clinic directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  // Fallback: FormSubmit (no API key; enable in FormSubmit dashboard for production)
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: mobile,
        message: problem,
        _subject: subject,
        _template: "table",
        _captcha: "false",
      }),
    },
  );

  if (!res.ok) {
    return NextResponse.json(
      {
        error:
          "Unable to send message. Please call us directly or email the clinic.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
