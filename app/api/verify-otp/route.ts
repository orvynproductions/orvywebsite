import { NextResponse } from "next/server";
import { getOtp, deleteOtp } from "@/lib/otpStore";

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    const record = getOtp(email);

    if (!record) {
      return NextResponse.json({
        success: false,
        message: "No OTP found or expired",
      });
    }

    // wrong OTP
    if (record.otp !== otp) {
      return NextResponse.json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // success → delete OTP
    deleteOtp(email);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}