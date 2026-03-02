'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { contactFormConfig } from '@/lib/config';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin, Phone, Mail, Clock,
};

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    visitDate: '',
    visitors: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll(
      '.fade-up, .slide-in-left, .slide-in-right'
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          visitDate: '',
          visitors: '',
          message: '',
        });
      } else {
        console.error(data.error);
        alert('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #c1a768 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container-custom relative">
        <div className="fade-up text-center mb-16">
          <span className="font-script text-3xl text-gold-500 block mb-2">
            {contactFormConfig.scriptText}
          </span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {contactFormConfig.subtitle}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            {contactFormConfig.mainTitle}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">{contactFormConfig.introText}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="slide-in-left lg:col-span-2">
            <h3 className="font-serif text-2xl text-white mb-8">
              {contactFormConfig.contactInfoTitle}
            </h3>
            <div className="space-y-6">
              {contactFormConfig.contactInfo.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      {IconComponent && <IconComponent className="w-5 h-5 text-gold-500" />}
                    </div>
                    <div>
                      <p className="text-gold-500 text-sm mb-1">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                      <p className="text-white/50 text-sm">{item.subtext}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="slide-in-right lg:col-span-3">
            {isSubmitted ? (
              <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">Thank You!</h3>
                <p className="text-white/70">{contactFormConfig.form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      {contactFormConfig.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder={contactFormConfig.form.namePlaceholder}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      {contactFormConfig.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={contactFormConfig.form.emailPlaceholder}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      {contactFormConfig.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder={contactFormConfig.form.phonePlaceholder}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      {contactFormConfig.form.visitDateLabel}
                    </label>
                    <input
                      type="date"
                      name="visitDate"
                      value={formState.visitDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    {contactFormConfig.form.visitorsLabel}
                  </label>
                  <select
                    name="visitors"
                    value={formState.visitors}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="" className="bg-page">Select an option</option>
                    {contactFormConfig.form.visitorsOptions.map((option) => (
                      <option key={option} value={option} className="bg-page">{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    {contactFormConfig.form.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={contactFormConfig.form.messagePlaceholder}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {contactFormConfig.form.submittingText}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {contactFormConfig.form.submitText}
                    </>
                  )}
                </button>

                <p className="text-white/50 text-xs text-center">
                  {contactFormConfig.privacyNotice}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}