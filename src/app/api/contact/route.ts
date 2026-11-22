
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    const {
      name,
      phone,
      email,
      service,
      pickup,
      destination,
      date,
      message,
    } = body;

    // Validare câmpuri obligatorii
    const requiredFields = {
      name,
      phone,
      email,
      service,
      pickup,
      destination,
      message,
    };

    for (const [field, value] of Object.entries(requiredFields)) {
      if (typeof value !== 'string' || !value.trim()) {
        return NextResponse.json(
          { error: `Câmpul ${field} este obligatoriu.` },
          { status: 400 }
        );
      }
    }

    if (
      name.length > 100 ||
      phone.length > 30 ||
      email.length > 254 ||
      service.length > 150 ||
      pickup.length > 200 ||
      destination.length > 200 ||
      (typeof date !== 'string' || date.length > 20) ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: 'Unele informații sunt prea lungi sau invalide.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Adresa de e-mail nu este validă.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error('Email service is not configured');

      return NextResponse.json(
        { error: 'Serviciul de e-mail nu este disponibil momentan.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const clean = (value: string) => value.trim();

    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      replyTo: cleanEmail,
      subject: 'Cerere nouă de ofertă - TTOM Innsbruck',

      text: `
CERERE NOUĂ DE OFERTĂ - TTOM INNSBRUCK

Nume: ${clean(name)}
Telefon: ${clean(phone)}
E-mail: ${cleanEmail}

Serviciu solicitat: ${clean(service)}
Loc de preluare: ${clean(pickup)}
Destinație: ${clean(destination)}
Data dorită: ${typeof date === 'string' && date.trim() ? clean(date) : 'Nu a fost specificată'}

Informații suplimentare:
${clean(message)}
      `,

      html: `
        <h2>Cerere nouă de ofertă - TTOM Innsbruck</h2>

        <h3>Date client</h3>
        <p><strong>Nume:</strong> ${escapeHtml(clean(name))}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(clean(phone))}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(cleanEmail)}</p>

        <h3>Detalii transport</h3>
        <p><strong>Serviciu:</strong> ${escapeHtml(clean(service))}</p>
        <p><strong>Loc de preluare:</strong> ${escapeHtml(clean(pickup))}</p>
        <p><strong>Destinație:</strong> ${escapeHtml(clean(destination))}</p>
        <p><strong>Data dorită:</strong> ${
          typeof date === 'string' && date.trim()
            ? escapeHtml(clean(date))
            : 'Nu a fost specificată'
        }</p>

        <h3>Informații suplimentare</h3>
        <p>${escapeHtml(clean(message)).replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Cererea a fost trimisă cu succes!',
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { error: 'Nu am putut trimite cererea. Încearcă din nou.' },
      { status: 500 }
    );
  }
}
