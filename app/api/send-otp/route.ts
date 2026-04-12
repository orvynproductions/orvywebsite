import { NextResponse } from "next/server";
import { setOtp } from "@/lib/otpStore";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email required" });
    }

    // OTP generate
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // store OTP
    setOtp(email, otp);

    // send email via Gmail SMTP
    await transporter.sendMail({
      from: `"Orvyn Microgreens" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP - Orvyn Microgreens",
      html: `
        <div style="background:#0b0b0b;padding:40px;font-family:Arial">
          <div style="max-width:500px;margin:auto;background:#111;padding:30px;border-radius:12px;text-align:center">

            <h2 style="color:white">Verify Your Email</h2>
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
    return NextResponse.json({ success: false });
  }
}