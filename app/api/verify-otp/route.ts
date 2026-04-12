import { NextResponse } from "next/server";
import { getOtp, deleteOtp } from "@/lib/otpStore";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = (body.email || "").trim().toLowerCase();
    const otp = (body.otp || "").trim();

    if (!email || !otp) {
      return NextResponse.json({ success: false, message: "Missing data" });
    }

    const record = getOtp(email);

    if (!record) {
      return NextResponse.json({ success: false, message: "No OTP found" });
    }

    if (Date.now() > record.expiresAt) {
      deleteOtp(email);
      return NextResponse.json({ success: false, message: "OTP expired" });
    }

    if (record.otp !== otp) {
      return NextResponse.json({ success: false, message: "Invalid OTP" });
    }

    deleteOtp(email);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false });
  }
}