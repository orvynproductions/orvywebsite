import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // =====================
    // Generate Unique Order Number
    // Format: [sequence][DD][MM][YYYY]
    // =====================
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    const lastOrder = await supabase
      .from("contacts")
      .select("order_number")
      .order("id", { ascending: false })
      .limit(1)
      .single();

    let lastSeq = 10;
    if (lastOrder.data?.order_number) {
      lastSeq = parseInt(lastOrder.data.order_number.slice(0, 2)) + 1;
    }

    const orderNumber = `${String(lastSeq).padStart(2, "0")}${day}${month}${year}`;

    // =====================
    // Save Contact to Database
    // =====================
    const { data: dbData, error: dbError } = await supabase
      .from("contacts")
      .insert([
        {
          order_number: orderNumber,
          name: data.name,
          email: data.email,
          phone: data.phone,
          visit_date: data.visitDate || null,
          visitors: data.visitors || null,
          message: data.message,
        },
      ]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { success: false, error: "DB insert failed" },
        { status: 500 }
      );
    }

    // =====================
    // Email Setup
    // =====================
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =====================
    // Admin Email (Beautiful Layout)
    // =====================
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
        <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color:#333;">📩 New Contact Form Submission</h2>
          <p style="font-size:16px; margin:10px 0;"><strong>Enquiry No.:</strong> <span style="color:#d97706;">${orderNumber}</span></p>
          <hr style="border:none; border-top:1px solid #eee; margin:15px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Visit Date:</strong> ${data.visitDate || "N/A"}</p>
          <p><strong>Visitors:</strong> ${data.visitors || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f9f9f9; padding:10px; border-radius:4px;">${data.message}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Submission - Order ${orderNumber}`,
      html: adminEmailHtml,
    });

    // =====================
    // User Confirmation Email (Beautiful Layout)
    // =====================
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; background:#f0f4f8; padding:20px;">
        <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.1); text-align:center;">
          <h2 style="color:#1d4ed8;">Thank You for Reaching Out!</h2>
          <p style="font-size:16px;">Hi <strong>${data.name}</strong>,</p>
          <p>Your order has been received successfully.</p>
          <p style="font-size:18px; color:#d97706; font-weight:bold;">Enquiry No. ${orderNumber}</p>
          <div style="text-align:left; margin-top:20px;">
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Visit Date:</strong> ${data.visitDate || "N/A"}</p>
            <p><strong>Visitors:</strong> ${data.visitors || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p style="background:#f9f9f9; padding:10px; border-radius:4px;">${data.message}</p>
          </div>
          <p style="margin-top:20px; color:#555;">We will contact you shortly.</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Website Team" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: `We received your message! Order ${orderNumber}`,
      html: userEmailHtml,
    });

    return NextResponse.json({ success: true, orderNumber });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}