'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowUp, Send } from 'lucide-react';
import { footerConfig } from '@/lib/config';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram, Facebook, Twitter, MapPin, Phone, Mail,
};

export default function Footer() {
  const [email, setEmail] = useState('');
const [isSubscribed, setIsSubscribed] = useState(false);

const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email) return;

  try {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await res.json();

    if (data.error) {
      alert(data.error);
    } else {
      setIsSubscribed(true);
    }

  } catch (error) {
    alert("Something went wrong. Please try again.");
  }

  setEmail('');
};

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 border-t border-white/10">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl text-white">{footerConfig.brandName}</span>
              <span className="text-gold-500 text-sm ml-2">{footerConfig.tagline}</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {footerConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {footerConfig.socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-gold-500 hover:border-gold-500 hover:text-page transition-all duration-300"
                    aria-label={link.label}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Groups */}
          {footerConfig.linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-serif text-lg text-white mb-6">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-gold-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-3 mb-8">
  {footerConfig.contactItems.map((item: any) => {
    const IconComponent = iconMap[item.icon];
    return (
      <li key={item.icon} className="flex items-center gap-3 text-white/60 text-sm">
        {IconComponent && <IconComponent className="w-4 h-4 text-gold-500" />}
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 text-sm hover:text-gold-500 transition-colors"
          >
            {item.text}
          </a>
        ) : (
          <span>{item.text}</span>
        )}
      </li>
    );
  })}
</ul>

            {/* Newsletter */}
            <div>
              <p className="text-white/60 text-sm mb-4">{footerConfig.newsletterLabel}</p>
              {isSubscribed ? (
                <p className="text-green-500 text-sm">{footerConfig.newsletterSuccessText}</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={footerConfig.newsletterPlaceholder}
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gold-500 text-page rounded-lg hover:bg-gold-600 transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            {footerConfig.copyrightText}
          </p>

          <div className="flex items-center gap-6">
            {footerConfig.legalLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-white/50 text-sm hover:text-gold-500 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/50 text-sm hover:text-gold-500 transition-colors"
          >
            {footerConfig.backToTopText}
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
