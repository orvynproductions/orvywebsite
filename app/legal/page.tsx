'use client';

import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-page pt-24 pb-16">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-page/95 backdrop-blur-sm border-b border-white/10">
        <div className="container-custom h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-gold-500" />
            <span className="text-white font-serif text-lg">Orvyn Microgreens</span>
          </Link>
        </div>
      </header>

      {/* Title */}
      <div className="container-custom text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-white">
          Privacy Policy
        </h1>
        <p className="text-white/60 leading-relaxed space-y-3">
Orvyn Microgreens is operated by Orvyn Productions, a registered company committed to providing fresh and responsibly grown microgreens. We respect your privacy and are dedicated to protecting your personal information.

When you place an order, subscribe to our newsletter, or contact us through our website, we may collect basic information such as your name, email address, phone number, and delivery details. This information is used only to process orders, arrange deliveries, respond to inquiries, and keep you informed about updates related to your orders or our products.

We do not sell, rent, or share your personal information with third parties. Your information is stored securely and is only accessible to authorized personnel for operational purposes.

By using our website or services, you agree to the collection and use of information as described in this policy.
</p>
      </div>

      {/* Policies */}
      <div className="container-custom max-w-4xl space-y-12">

        {/* Terms of Service */}
        <section className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-serif text-white mb-4">
            Terms of Service
          </h2>
          <p className="text-white/60 leading-relaxed space-y-3">
         By accessing or purchasing from Orvyn Microgreens, you agree to the terms and conditions outlined here. Our products are grown and harvested with care to ensure freshness, quality, and nutritional value.

        Orvyn Productions reserves the right to update product availability, pricing, or delivery schedules based on harvest cycles and seasonal factors. Since microgreens are fresh agricultural products, availability may occasionally vary depending on growing conditions.

        Customers are expected to provide accurate information when placing orders to ensure smooth delivery and communication. We strive to maintain high standards in product quality, packaging, and customer service.

        We may update these terms occasionally to reflect improvements in our services or operational practices.
        </p>
        </section>

        {/* Privacy Policy */}
        <section className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-serif text-white mb-4">
            Shipping Policy
          </h2>
          <p className="text-white/60 leading-relaxed space-y-3">
          At Orvyn Microgreens, freshness is our priority. Our microgreens are harvested close to delivery to ensure maximum quality, flavor, and nutritional value.

          Because our products are grown naturally, deliveries are scheduled based on harvest readiness rather than fixed warehouse stock. Orders are typically delivered shortly after harvest, ensuring that customers receive the freshest produce possible.

          Delivery timing may vary slightly depending on crop readiness and order volume. Our team will always aim to deliver your order at the earliest possible time once the harvest is ready.

        If there are any changes or delays due to harvest conditions, customers will be informed in advance. We appreciate your understanding as we focus on delivering fresh, high-quality microgreens directly from harvest to your doorstep.
        </p>
        </section>

        {/* Shipping Policy */}
        <section className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-serif text-white mb-4">
            Shipping Policy
          </h2>
          <p className="text-white/60 leading-relaxed">
            Our microgreens are harvested fresh. Deliveries are scheduled based on harvest
            cycles to ensure the highest quality. Orders are typically delivered on harvest
            days and availability may vary depending on crop readiness.
          </p>
        </section>
       <p className="text-white/40 text-sm mt-8">
       The information on this website is provided for general informational purposes. 
       Policies may be updated periodically to reflect operational improvements.
    </p>
      </div>
    </div>
  );
}