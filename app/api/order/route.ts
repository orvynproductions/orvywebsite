import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request){

  const data = await req.json();

  // =====================
  // Generate Unique Order Number
  // Format: O[sequence][DD][MM][YY]
  // =====================
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = String(today.getFullYear()).slice(-2);

  const lastOrder = await supabase
    .from("orders")
    .select("order_number")
    .order("id", { ascending: false })
    .limit(1)
    .single();

  let lastSeq = 102;
  if (lastOrder.data?.order_number) {
    const lastSeqStr = lastOrder.data.order_number.slice(1, 4);
    lastSeq = parseInt(lastSeqStr) + 1;
  }

  const orderNumber = `O${String(lastSeq).padStart(3, "0")}${day}${month}${year}`;
  data.order_number = orderNumber;

  // =====================
  // Save Order to Database
  // =====================
  const { data: dbData, error: dbError } = await supabase
  .from("orders")
  .insert([
    {
      order_number: orderNumber,
      customer_name: data.customer_name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      delivery_date: data.delivery_date,
      special_instructions: data.special_instructions || null,
      items: data.items,
      subtotal: data.subtotal,
      shipping: data.shipping,
      total: data.total
    }
  ]);

if (dbError) {
  console.error("Supabase order insert error:", dbError);
  return NextResponse.json(
    { success: false, error: "Order DB insert failed" },
    { status: 500 }
  );
}

  // =====================
  // Email Setup
  // =====================
  const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:process.env.EMAIL_USER,
      pass:process.env.EMAIL_PASS
    }
  });

  // =====================
  // Products Table HTML
  // =====================
  const itemsHtml = data.items.map((item:any)=>`

<tr>
<td style="padding:10px;border-bottom:1px solid #eee;">${item.name}</td>
<td style="padding:10px;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
<td style="padding:10px;border-bottom:1px solid #eee;text-align:right;">$${item.price}</td>
</tr>

`).join("");

  // =====================
  // ADMIN EMAIL
  // =====================
  await transporter.sendMail({

from:`"Orvyn Microgreens" <${process.env.EMAIL_USER}>`,

to:process.env.EMAIL_TO,

subject:`New Order - ${orderNumber}`,

html:`

<div style="
font-family:Arial;
background:#f4f7f4;
padding:20px;
">

<h2 style="
color:#2e7d32;
margin-bottom:20px;
">
🌿 New Order Received
</h2>

<p><strong>Order Number:</strong> ${orderNumber}</p>

<table style="
width:100%;
background:white;
border-radius:8px;
overflow:hidden;
border-collapse:collapse;
margin-bottom:20px;
">

<tr style="background:#2e7d32;color:white;">
<th style="padding:12px;text-align:left;">Customer Info</th>
<th></th>
</tr>

<tr>
<td style="padding:10px;">Name</td>
<td style="padding:10px;">${data.customer_name}</td>
</tr>

<tr style="background:#f9f9f9;">
<td style="padding:10px;">Phone</td>
<td style="padding:10px;">${data.phone}</td>
</tr>

<tr>
<td style="padding:10px;">Email</td>
<td style="padding:10px;">${data.email}</td>
</tr>

<tr style="background:#f9f9f9;">
<td style="padding:10px;">Address</td>
<td style="padding:10px;">
${data.address}<br>
${data.city}, ${data.state} - ${data.zip}
</td>
</tr>

<tr>
<td style="padding:10px;">Delivery Date</td>
<td style="padding:10px;">${data.delivery_date}</td>
</tr>

</table>

<h3 style="color:#2e7d32;">Order Items</h3>

<table style="
width:100%;
background:white;
border-radius:8px;
overflow:hidden;
border-collapse:collapse;
">

<tr style="background:#66bb6a;color:white;">
<th style="padding:12px;text-align:left;">Product</th>
<th style="padding:12px;text-align:center;">Qty</th>
<th style="padding:12px;text-align:right;">Price</th>
</tr>

${itemsHtml}

<tr style="background:#f0f5f0;font-weight:bold;">
<td style="padding:12px;">Total</td>
<td></td>
<td style="padding:12px;text-align:right;">
$${data.total}
</td>
</tr>

</table>

</div>

`

});



// =====================
// CUSTOMER EMAIL
// =====================
await transporter.sendMail({

from:`Orvyn Microgreens <${process.env.EMAIL_USER}>`,

to:data.email,

subject:`Your Order Confirmation - ${orderNumber}`,

html:`

<div style="
font-family:Arial;
background:#ffffff;
padding:20px;
">

<h2 style="color:#2e7d32;">
🌿 Thank You For Your Order!
</h2>

<p>
Hi ${data.customer_name},
</p>

<p>
Your order has been received successfully.
</p>

<p><strong>Order Number:</strong> ${orderNumber}</p>

<h3>Order Summary</h3>

<table style="
width:100%;
border-collapse:collapse;
">

<tr style="background:#2e7d32;color:white;">
<th style="padding:10px;text-align:left;">Product</th>
<th style="padding:10px;text-align:center;">Qty</th>
<th style="padding:10px;text-align:right;">Price</th>
</tr>

${itemsHtml}

<tr style="background:#f4f4f4;font-weight:bold;">
<td style="padding:10px;">Total</td>
<td></td>
<td style="padding:10px;text-align:right;">
$${data.total}
</td>
</tr>

</table>

<br>

<p>
Delivery Date: <b>${data.delivery_date}</b>
</p>

<p>
We will contact you soon.
</p>

<br>

<p style="color:#777;">
Team Orvyn 🌿
</p>

</div>

`

});



return NextResponse.json({success:true, orderNumber});

}