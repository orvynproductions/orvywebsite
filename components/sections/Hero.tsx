'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { heroConfig } from '@/lib/config';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(heroConfig.stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      heroConfig.stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center hero-kenburns"
          style={{ backgroundImage: `url(${heroConfig.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-page" />
      </div>

      {/* Decorative Text - Left Side */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <span
          className="text-white/30 text-xs tracking-[0.3em] uppercase"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          {heroConfig.decorativeText}
        </span>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center pt-24 pb-16">
        {/* Script Text */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-script text-3xl md:text-4xl text-gold-500 block mb-4">
            {heroConfig.scriptText}
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {heroConfig.mainTitle.split('\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href={heroConfig.ctaTarget}
            className="btn-primary inline-block"
          >
            {heroConfig.ctaButtonText}
          </Link>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {heroConfig.stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-gold-500 mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
