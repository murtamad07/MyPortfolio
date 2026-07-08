import { NextResponse, type NextRequest } from "next/server";
import { resend } from "@/lib/resend";


const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const submissions = new Map<string, number[]>();

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[char];
  });
}

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, recent);
    return true;
  }

  submissions.set(ip, [...recent, now]);
  return false;
}

export async function POST(request: NextRequest) {
  const from = process.env.MAIL_FROM;
  const CONTACT_EMAIL = process.env.MAIL_TO;

  if (!from || !CONTACT_EMAIL) {
    return NextResponse.json(
      { error: "RESEND_FROM is not configured." },
      { status: 500 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;
  const botField = asString(data.company);
  const name = asString(data.name);
  const email = asString(data.email);
  const subject = asString(data.subject);
  const message = asString(data.message);

  if (botField) {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 },
    );
  }

  if (
    !name ||
    !email ||
    !subject ||
    !message ||
    name.length > 120 ||
    email.length > 254 ||
    subject.length > 160 ||
    message.length > 4000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json(
      { error: "Please check your message details." },
      { status: 400 },
    );
  }

  const text = `Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

  const html = `
    <h2>New portfolio contact</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const { error } = await resend.emails.send(
    {
      from,
      to: [CONTACT_EMAIL],
      subject: `Portfolio contact: ${subject}`,
      replyTo: email,
      text,
      html,
    },
    { idempotencyKey: crypto.randomUUID() },
  );

  if (error) {
    console.error("Resend error", error);
    return NextResponse.json(
      { error: "Message failed to send." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}