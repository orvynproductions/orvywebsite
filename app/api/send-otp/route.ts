import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email required" });
    }

    const cleanEmail = email.trim().toLowerCase();

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 90 * 1000; // 1.5 min

    // ✅ UPSERT OTP (IMPORTANT)
    const { error } = await supabase.from("otp_store").upsert({
      email: cleanEmail,
      otp,
      expires_at: expiresAt,
    });

    if (error) {
      console.log("SUPABASE STORE ERROR:", error);
      return NextResponse.json({ success: false });
    }

    await resend.emails.send({
      from: "Orvyn <onboarding@resend.dev>",
      to: cleanEmail,
      subject: "Your OTP - Orvyn",
      html: `
        <div style="background:#0b0b0b;padding:40px;font-family:Arial">
          <div style="max-width:500px;margin:auto;background:#111;padding:30px;border-radius:12px;text-align:center">

            <h2 style="color:white">Your OTP</h2>

            <div style="margin:20px 0;padding:15px;border:1px solid #d4af37">
              <span style="font-size:30px;color:#d4af37;letter-spacing:6px">${otp}</span>
            </div>

            <p style="color:#777">Expires in 1.5 minutes</p>

          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false });
  }
}