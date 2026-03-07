'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Leaf, CreditCard, Truck } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useOrders } from '@/contexts/OrdersContext';
import { checkoutConfig, cartConfig } from '@/lib/config';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    
    specialInstructions: '',
  });

  const shipping = 0;
  const finalTotal = totalPrice + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {

    const orderItems = items.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      unit: item.unit,
    }));

    const orderData = {

      customer_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,

      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,

      
      special_instructions: formData.specialInstructions,

      items: orderItems,

      subtotal: totalPrice,
      shipping: "Free",
      total: finalTotal

    };

    await fetch("/api/order", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(orderData)

    });

    addOrder({
      customerName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      
      specialInstructions: formData.specialInstructions,
      items: orderItems,
      subtotal: totalPrice,
      shipping: shipping,
      total: finalTotal,
    });

    clearCart();

    setIsSuccess(true);

  } catch(err) {

    console.log(err);
    alert("Order failed");

  }

         setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-page flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-serif text-white mb-4">Order Placed!</h1>
          <p className="text-white/60 mb-8">{checkoutConfig.successMessage}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-page rounded-lg font-semibold hover:bg-gold-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-page flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <Leaf className="w-16 h-16 text-white/20 mx-auto mb-4" />
          <h1 className="text-2xl font-serif text-white mb-4">Your cart is empty</h1>
          <p className="text-white/60 mb-8">Add some fresh microgreens to get started!</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-page rounded-lg font-semibold hover:bg-gold-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-page pt-24 pb-16">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-page/95 backdrop-blur-sm border-b border-white/10">
        <div className="container-custom h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-gold-500" />
            <span className="text-white font-serif text-lg">Orvyn Microgreens</span>
          </Link>
          <Link
            href="/shop"
            className="text-white/60 hover:text-white flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </header>

      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif text-white mb-2">
            {checkoutConfig.title}
          </h1>
          <p className="text-white/60">{checkoutConfig.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white/5 rounded-xl p-6 md:p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Info */}
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-500 text-sm">1</span>
                  {checkoutConfig.customerInfoTitle}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">{checkoutConfig.fields.firstName}</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder={checkoutConfig.placeholders.firstName}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">{checkoutConfig.fields.lastName}</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder={checkoutConfig.placeholders.lastName}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">{checkoutConfig.fields.email}</label>
                    <input
                      type="email"
                      name="email"
                      placeholder={checkoutConfig.placeholders.email}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">{checkoutConfig.fields.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={checkoutConfig.placeholders.phone}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-500 text-sm">2</span>
                  {checkoutConfig.shippingInfoTitle}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">{checkoutConfig.fields.address}</label>
                    <input
                      type="text"
                      name="address"
                      placeholder={checkoutConfig.placeholders.address}
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">{checkoutConfig.fields.city}</label>
                      <input
                        type="text"
                        name="city"
                        placeholder={checkoutConfig.placeholders.city}
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">{checkoutConfig.fields.state}</label>
                      <input
                        type="text"
                        name="state"
                        placeholder={checkoutConfig.placeholders.state}
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">{checkoutConfig.fields.zip}</label>
                      <input
                        type="text"
                        name="zip"
                        placeholder={checkoutConfig.placeholders.zip}
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/60 text-sm mb-2">{checkoutConfig.fields.specialInstructions}</label>
                    <textarea
                      name="specialInstructions"
                      placeholder={checkoutConfig.placeholders.specialInstructions}
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Info (Demo) */}
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-500 text-sm">3</span>
                  {checkoutConfig.paymentInfoTitle}
                </h3>
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="flex items-center gap-3 text-white/60">
                    <CreditCard className="w-5 h-5" />
                    <span>Pay on delivery (Cash or Card)</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gold-500 text-page rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gold-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-page/30 border-t-page rounded-full animate-spin" />
                    {checkoutConfig.processingText}
                  </>
                ) : (
                  <>
                    <Truck className="w-5 h-5" />
                    {checkoutConfig.placeOrderText} - ₹{finalTotal.toFixed(2)}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-6">{checkoutConfig.orderSummaryTitle}</h3>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-900 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-medium truncate">{item.name}</h4>
                      <p className="text-white/50 text-xs">{item.unit} × {item.quantity}</p>
                    </div>
                    <span className="text-gold-500 font-medium">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

 <div className="mb-6 p-3 bg-white/5 border border-white/10 rounded-lg">
  <p className="text-gold-500 text-sm font-medium">
    Harvested Fresh for Your Order
  </p>
  <p className="text-white/60 text-xs mt-1">
    Your microgreens are harvested fresh and deliver them as soon as they’re ready.
  </p>
</div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-white/60 text-sm">
                  <span>{cartConfig.subtotalText}</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>{cartConfig.shippingText}</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between text-white text-lg font-semibold pt-2 border-t border-white/10">
                  <span>{cartConfig.totalText}</span>
                  <span className="text-gold-500">₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
