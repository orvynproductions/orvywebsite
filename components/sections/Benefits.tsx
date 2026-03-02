'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Star, Quote } from 'lucide-react';
import { benefitsConfig } from '@/lib/config';

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right, .scale-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="fade-up flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="font-script text-3xl text-gold-500 block mb-2">{benefitsConfig.scriptText}</span>
            <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
              {benefitsConfig.subtitle}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white has-bar">
              {benefitsConfig.mainTitle}
            </h2>
          </div>
          {benefitsConfig.viewAllText && (
            <Link href="/shop" className="btn-dark flex items-center gap-2 group w-fit">
              {benefitsConfig.viewAllText}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* Articles Grid */}
        {benefitsConfig.articles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefitsConfig.articles.map((item, index) => (
              <article
                key={item.id}
                className="fade-up group cursor-pointer"
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-5">
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.category}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-500/90 text-page text-xs rounded-sm font-medium">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Date */}
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold-500 transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Read More Link */}
                  {benefitsConfig.readMoreText && (
                    <span className="inline-flex items-center gap-2 text-gold-500 text-sm group-hover:gap-3 transition-all duration-300">
                      {benefitsConfig.readMoreText}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Testimonials Section */}
        {benefitsConfig.testimonials.length > 0 && (
          <div className="mt-24">
            <div className="fade-up text-center mb-12">
              <span className="font-script text-3xl text-gold-500 block mb-2">{benefitsConfig.testimonialsScriptText}</span>
              <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                {benefitsConfig.testimonialsSubtitle}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                {benefitsConfig.testimonialsMainTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefitsConfig.testimonials.map((t, index) => (
                <div
                  key={t.name}
                  className="scale-in p-8 bg-white/5 rounded-lg border border-white/10 relative"
                  style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                >
                  <Quote className="w-8 h-8 text-gold-500/30 absolute top-6 right-6" />
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Story Section */}
        {benefitsConfig.storyTitle && (
          <div id="story" className="fade-up mt-24 pt-20 border-t border-white/10" style={{ transitionDelay: '0.1s' }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="slide-in-left">
                <span className="font-script text-3xl text-gold-500 block mb-2">{benefitsConfig.storyScriptText}</span>
                <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                  {benefitsConfig.storySubtitle}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                  {benefitsConfig.storyTitle}
                </h2>
                <div className="space-y-4 text-white/75 leading-relaxed">
                  {benefitsConfig.storyParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Timeline Highlights */}
                {benefitsConfig.storyTimeline.length > 0 && (
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {benefitsConfig.storyTimeline.map((item, index) => (
                      <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="font-serif text-2xl text-gold-500 mb-1">{item.value}</div>
                        <div className="text-xs text-white/60">{item.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="slide-in-right relative">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  {benefitsConfig.storyImage && (
                    <>
                      <Image
                        src={benefitsConfig.storyImage}
                        alt={benefitsConfig.storyImageCaption}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </>
                  )}
                </div>

                {/* Quote Overlay */}
                {benefitsConfig.storyQuote.text && (
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-sm rounded-lg">
                    {benefitsConfig.storyQuote.prefix && (
                      <p className="font-script text-2xl text-gold-500 mb-1">{benefitsConfig.storyQuote.prefix}</p>
                    )}
                    <p className="text-white italic text-sm leading-relaxed mb-2">
                      &ldquo;{benefitsConfig.storyQuote.text}&rdquo;
                    </p>
                    {benefitsConfig.storyQuote.attribution && (
                      <p className="text-gold-500 text-xs">— {benefitsConfig.storyQuote.attribution}</p>
                    )}
                  </div>
                )}

                {/* Decorative Frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-gold-500/20 rounded-lg -z-10" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
