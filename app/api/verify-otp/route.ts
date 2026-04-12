import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body?.email;
    const otp = body?.otp;

    if (!email || !otp) {
      return NextResponse.json({
        success: false,
        message: "Email and OTP required",
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanOtp = otp.trim();

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({
        success: false,
        message: "Server config error",
      });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // ✅ FETCH OTP
    const { data, error } = await supabase
      .from("otp_store")
      .select("*")
      .eq("email", cleanEmail)
      .single();

    if (error || !data) {
      return NextResponse.json({
        success: false,
        message: "No OTP found",
      });
    }

    // ❌ EXPIRE CHECK
    if (Date.now() > data.expires_at) {
      await supabase.from("otp_store").delete().eq("email", cleanEmail);

      return NextResponse.json({
        success: false,
        message: "OTP expired",
      });
    }

    // ❌ OTP CHECK (IMPORTANT: string match)
    if (data.otp !== cleanOtp) {
      return NextResponse.json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // ✅ SUCCESS → delete OTP immediately
    await supabase.from("otp_store").delete().eq("email", cleanEmail);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log("VERIFY OTP ERROR:", err);

    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}