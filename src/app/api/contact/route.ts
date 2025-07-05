// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { isRateLimited } from '@/lib/rateLimiter';

const sanitize = (str: string) =>
  str.replace(/[<>"'\/]/g, '').trim().substring(0, 1000); // basic

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for') ||
    req.headers.get('x-real-ip') ||
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const { name, company, email, about, answer } = await req.json();

  if (typeof answer !== 'string' || !/^\d+$/.test(answer)) {
    return NextResponse.json({ error: 'Invalid anti-spam input' }, { status: 400 });
  }

  if (!name || !email || !about) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

const transporter = nodemailer.createTransport({
  host: "smtp.madebyvelra.com", // e.g., mail.privateemail.com for Namecheap
  port: 587,
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

  try {
    await transporter.sendMail({
      from: `"${sanitize(name)}" <${sanitize(email)}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Message from ${sanitize(name)}`,
      text: `
Name: ${sanitize(name)}
Company: ${sanitize(company)}
Email: ${sanitize(email)}

Message:
${sanitize(about)}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}