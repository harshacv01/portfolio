import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "harshacc99@gmail.com",
    subject: "New Contact Form Submission",
    text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phoneNumber}
Budget: ${data.budget}
Message: ${data.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}
