import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    // === Use env, but fallback to hardcoded if not loaded ===
    const emailUser = process.env.EMAIL_USER || "ttransport.austria@gmail.com";
    const emailPass = process.env.EMAIL_PASS || "sntbeezpcrudnfrh";

    console.log("=== ENV DEBUG ===");
    console.log("Using EMAIL_USER:", emailUser);
    console.log("=================");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      logger: true,
      debug: true,
    });

    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      subject: "Mesaj nou de pe website",
      html: `
        <h2>Mesaj nou de pe website</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `,
    });

    console.log("✅ Email sent successfully!");
    return NextResponse.json({ success: true, message: "Mesajul a fost trimis!" });

  } catch (error: any) {
    console.error("❌ Full Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}