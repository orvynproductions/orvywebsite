import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    const cleanEmail = email.trim().toLowerCase();

    const { data, error } = await supabase
      .from("otp_store")
      .select("*")
      .eq("email", cleanEmail)
      .single();

    if (error || !data) {
      return NextResponse.json({ success: false, message: "No OTP found" });
    }

    // ❌ EXPIRED CHECK (THIS WAS WRONG BEFORE)
    if (Date.now() > data.expires_at) {
      await supabase.from("otp_store").delete().eq("email", cleanEmail);
      return NextResponse.json({ success: false, message: "OTP expired" });
    }

    // ❌ WRONG OTP
    if (data.otp !== otp) {
      return NextResponse.json({ success: false, message: "Invalid OTP" });
    }

    // ✅ SUCCESS → delete OTP
    await supabase.from("otp_store").delete().eq("email", cleanEmail);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false });
  }
}