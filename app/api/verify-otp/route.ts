import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    const cleanEmail = email.trim().toLowerCase();

    const { data, error } = await supabase
      .from("otp_verification")
      .select("*")
      .eq("email", cleanEmail)
      .single();

    if (error || !data) {
      return NextResponse.json({ success: false, message: "No OTP found" });
    }

    if (Date.now() > data.expires_at) {
      await supabase.from("otp_verification").delete().eq("email", cleanEmail);
      return NextResponse.json({ success: false, message: "OTP expired" });
    }

    if (data.otp !== otp.trim()) {
      return NextResponse.json({ success: false, message: "Invalid OTP" });
    }

    await supabase.from("otp_verification").delete().eq("email", cleanEmail);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false });
  }
}