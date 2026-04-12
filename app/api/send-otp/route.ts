import { NextResponse } from "next/server";
import { Resend } from "resend";
import { setOtp } from "@/lib/otpStore";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({
        success: false,
        message: "Email required",
      });
    }

    // 🔥 IMPORTANT: create inside function (Vercel-safe)
    const resend = new Resend(process.env.RESEND_API_KEY);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    setOtp(email, otp);

    await resend.emails.send({
      from: "Orvyn <onboarding@resend.dev>",
      to: email,
      subject: "Your OTP - Orvyn Microgreens",
      html: `
        <div style="background:#0b0b0b;padding:40px;font-family:Arial">
          <div style="max-width:500px;margin:auto;background:#111;padding:30px;border-radius:12px;text-align:center">

            <img src="https://orvywebsite.vercel.app/logo.png" style="width:120px;margin-bottom:20px"/>

            <h2 style="color:#fff">Verify Your Email</h2>

            <p style="color:#aaa">Your OTP code</p>

            <div style="margin:20px 0;padding:15px;border:1px solid #d4af37;border-radius:8px">
              <span style="font-size:30px;color:#d4af37;letter-spacing:6px">${otp}</span>
            </div>

            <p style="color:#777;font-size:12px">Expires in 1.5 minutes</p>

          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("OTP ERROR:", err);

    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}