import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const cleanEmail = email.trim().toLowerCase();

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 90 * 1000;

    // DELETE old OTP (important for security)
    await supabase
      .from("otp_verification")
      .delete()
      .eq("email", cleanEmail);

    // INSERT new OTP
    await supabase.from("otp_verification").insert({
      email: cleanEmail,
      otp,
      expires_at: expiresAt,
    });

    // send email
    await transporter.sendMail({
      from: `"Orvyn Microgreens" <${process.env.EMAIL_USER}>`,
      to: cleanEmail,
      subject: "Your OTP",
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>Verify OTP</h2>
          <p>Your OTP is:</p>
          <h1 style="color:#d4af37">${otp}</h1>
          <p>Expires in 90 seconds</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false });
  }
}