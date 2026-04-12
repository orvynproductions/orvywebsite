import { NextResponse } from "next/server";
import { otpStore } from "../send-otp/route";

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    const record = otpStore.get(email);

    if (!record) {
      return NextResponse.json({ success: false, message: "No OTP found" });
    }

    // ❌ expired
    if (Date.now() > record.expires) {
      otpStore.delete(email);
      return NextResponse.json({ success: false, message: "OTP expired" });
    }

    // ❌ wrong OTP
    if (record.otp !== otp) {
      return NextResponse.json({ success: false, message: "Invalid OTP" });
    }

    // ✅ success
    otpStore.delete(email);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false });
  }
}