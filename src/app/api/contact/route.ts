
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Escape user input before inserting it into email HTML
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[char];
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, message } = body;

    // Validate form data
    if (
      typeof name !== 'string' ||
      typeof phone !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: 'Please complete all fields.' },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      phone.length > 30 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: 'Form input is too long.' },
        { status: 400 }
      );
    }

    // Read credentials from environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error('Email service is not configured');

      return NextResponse.json(
        { error: 'Email service is temporarily unavailable.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      logger: false,
      debug: false,
    });

    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      replyTo: phone.trim(),
      subject: 'Mesaj nou de pe website',
      text: `
Nume: ${name.trim()}
Telefon: ${phone.trim()}
Mesaj: ${message.trim()}
      `,
      html: `
        <h2>Mesaj nou de pe website</h2>
        <p><strong>Nume:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone.trim())}</p>
        <p><strong>Mesaj:</strong> ${escapeHtml(message.trim())}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Mesajul a fost trimis!',
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { error: 'Unable to send your message. Please try again later.' },
      { status: 500 }
    );
  }
}
