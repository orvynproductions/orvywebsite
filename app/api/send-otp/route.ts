import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body?.email;

    if (!email) {
      return NextResponse.json({
        success: false,
        message: "Email required",
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    // ✅ ENV SAFETY CHECK
    const apiKey = process.env.RESEND_API_KEY;
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!apiKey || !supabaseUrl || !supabaseServiceKey) {
      console.log("Missing env vars");
      return NextResponse.json({
        success: false,
        message: "Server configuration error",
      });
    }

    const resend = new Resend(apiKey);
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // ✅ OTP GENERATION
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 90 * 1000; // 1.5 min

    // ✅ STORE OTP (UPSERT = prevents multi-user issues)
    const { error } = await supabase.from("otp_store").upsert({
      email: cleanEmail,
      otp,
      expires_at: expiresAt,
    });

    if (error) {
      console.log("SUPABASE ERROR:", error);
      return NextResponse.json({
        success: false,
        message: "Failed to store OTP",
      });
    }

    // ✅ SEND EMAIL
    const { error: emailError } = await resend.emails.send({
      from: "Orvyn <onboarding@resend.dev>",
      to: cleanEmail,
      subject: "Your OTP - Orvyn Microgreens",
      html: `
        <div style="background:#0b0b0b;padding:40px;font-family:Arial,sans-serif">
          <div style="max-width:500px;margin:auto;background:#111;padding:30px;border-radius:12px;text-align:center;border:1px solid #222">

            <h2 style="color:#ffffff;margin-bottom:10px">
              Verify Your Email
            </h2>

            <p style="color:#aaa;font-size:14px;margin-bottom:20px">
              Use this OTP to continue your order
            </p>

            <div style="margin:20px 0;padding:15px;border:1px solid #d4af37;border-radius:8px">
              <span style="font-size:32px;color:#d4af37;letter-spacing:6px;font-weight:bold">
                ${otp}
              </span>
            </div>

            <p style="color:#777;font-size:12px">
              Expires in 1.5 minutes
            </p>

          </div>
        </div>
      `,
    });

    if (emailError) {
      console.log("EMAIL ERROR:", emailError);
      return NextResponse.json({
        success: false,
        message: "Failed to send email",
      });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log("OTP ERROR:", err);
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}