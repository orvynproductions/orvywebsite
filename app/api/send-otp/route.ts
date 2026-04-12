import { NextResponse } from "next/server";
import { Resend } from "resend";
import { setOtp } from "@/lib/otpStore";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body.email;

    if (!email) {
      return NextResponse.json({
        success: false,
        message: "Email required",
      });
    }

    // OTP generate
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // store OTP
    setOtp(email, otp);

    // send email
    await resend.emails.send({
      from: "Orvyn <onboarding@resend.dev>",
      to: email,
      subject: "Your OTP - Orvyn Microgreens",
      html: `
<div style="background:#0b0b0b;padding:40px 20px;font-family:Arial,sans-serif">
  <div style="max-width:500px;margin:auto;background:#111;border-radius:12px;padding:30px;text-align:center;border:1px solid #222">

    <img src="https://orvywebsite.vercel.app/logo.png" style="width:120px;margin-bottom:20px"/>

    <h2 style="color:#ffffff;margin-bottom:10px">Verify Your Email</h2>

    <p style="color:#aaaaaa;font-size:14px;margin-bottom:25px">
      Use the OTP below to continue your order
    </p>

    <div style="background:#000;border:1px solid #d4af37;border-radius:10px;padding:20px;margin-bottom:25px">
      <span style="color:#d4af37;font-size:32px;letter-spacing:8px;font-weight:bold">
        ${otp}
      </span>
    </div>

    <p style="color:#888;font-size:13px">
      This OTP expires in 1.5 minutes
    </p>

  </div>
</div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}