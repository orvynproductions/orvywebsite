import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email required" });
    }

    const cleanEmail = email.trim().toLowerCase();

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 90 * 1000;

    // 🔥 UPSERT FIX (ensures overwrite always works correctly)
   const result = await supabase.from("otp_store").upsert({
  email: cleanEmail,
  otp,
  expires_at: expiresAt,
}, {
  onConflict: "email"
});

console.log("SUPABASE RESULT:", result);

if (result.error) {
  console.log("SUPABASE ERROR:", result.error);
  return NextResponse.json({ success: false, message: "DB insert failed" });
}

console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_KEY_EXISTS:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);

console.log(process.env.GMAIL_USER, process.env.GMAIL_APP_PASSWORD ? "OK" : "MISSING");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ""),
      },
    });

    await transporter.sendMail({
      from: `"Orvyn Microgreens" <${process.env.GMAIL_USER}>`,
      to: cleanEmail,
      subject: "Your OTP - Orvyn Microgreens",
      html: `
        <div style="background:#0b0b0b;padding:40px;font-family:Arial">
          <div style="max-width:500px;margin:auto;background:#111;padding:30px;border-radius:12px;text-align:center;border:1px solid #222">

            <img src="https://orvywebsite.vercel.app/logo.png" style="width:120px;margin-bottom:20px"/>

            <h2 style="color:#fff">Verify Your Email</h2>

            <div style="margin:20px 0;padding:15px;border:1px solid #d4af37;border-radius:8px">
              <span style="font-size:30px;color:#d4af37;letter-spacing:6px;font-weight:bold">
                ${otp}
              </span>
            </div>

            <p style="color:#777;font-size:12px">
              OTP expires in 1.5 minutes
            </p>

          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log("OTP ERROR:", err);
    return NextResponse.json({ success: false });
  }
}