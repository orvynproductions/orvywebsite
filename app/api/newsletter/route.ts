import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import nodemailer from "nodemailer";

export async function POST(req: Request) {

  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" });
  }

  const { data, error } = await supabase
    .from("subscribers")
    .insert([{ email }])
    .select();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "You have already subscribed" });
    }

    return NextResponse.json({ error: "Database error" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });

  await transporter.sendMail({
    from: process.env.ADMIN_EMAIL,
    to: email,
    subject: "Thank you for subscribing 🌱",
    html: `
      <h2>Thank you for joining Orvyn Farm 🌱</h2>
      <p>You will now receive updates about our fresh microgreens and harvest days.</p>
    `
  });

  await transporter.sendMail({
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: "New Newsletter Subscriber",
    html: `
      <p>New subscriber:</p>
      <strong>${email}</strong>
    `
  });

  return NextResponse.json({ success: true });
}