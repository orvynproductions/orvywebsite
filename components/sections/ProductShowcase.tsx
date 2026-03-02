'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Heart, Clock, ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { productShowcaseConfig } from '@/lib/config';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf, Heart, Clock,
};

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

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

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const products = productShowcaseConfig.products;
  const features = productShowcaseConfig.features;
  const quote = productShowcaseConfig.quote;
  const product = products[activeProduct];

  const nextProduct = () => {
    setActiveProduct((prev) => (prev + 1) % products.length);
    setIsAdded(false);
  };
  
  const prevProduct = () => {
    setActiveProduct((prev) => (prev - 1 + products.length) % products.length);
    setIsAdded(false);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace(/[^\d.]/g, "")),
      unit: '50g',
      image: product.image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c1a768 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Title */}
        <div className="fade-up text-center mb-16">
          <span className="font-script text-3xl text-gold-500 block mb-2">{productShowcaseConfig.scriptText}</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {productShowcaseConfig.subtitle}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">{productShowcaseConfig.mainTitle}</h2>
        </div>

        {/* Product Tabs */}
        <div className="fade-up flex flex-wrap justify-center gap-2 mb-16" style={{ transitionDelay: '0.1s' }}>
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveProduct(i);
                setIsAdded(false);
              }}
              className={`px-4 py-2 rounded-sm text-sm transition-all duration-300 ${
                i === activeProduct
                  ? 'bg-gold-500 text-page'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Product Info */}
          <div className="slide-in-left lg:col-span-2 order-2 lg:order-1">
            {/* Price + Name */}
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-serif text-4xl lg:text-5xl text-gold-500 leading-none">{product.price}</span>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-white leading-tight">{product.name}</h2>
                  <span className="font-script text-xl text-gold-500">{product.subtitle}</span>
                </div>
              </div>
              <div className="w-16 h-px bg-gold-500 mt-4" />
            </div>

            {/* Description */}
            <p className="text-white/85 leading-relaxed mb-4">{product.description}</p>
            <p className="text-white/65 leading-relaxed text-sm mb-8">{product.nutritionFacts}</p>

            {/* Product Details */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <div className="font-serif text-lg text-gold-500">{product.flavor}</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider mt-1">Flavor Profile</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="font-serif text-lg text-gold-500">{product.shelfLife}</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider mt-1">Shelf Life</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="font-serif text-lg text-gold-500">{product.harvestTime}</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider mt-1">Harvest Time</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className={`flex-1 btn-primary flex items-center justify-center gap-2 ${
                  isAdded ? 'bg-green-500 hover:bg-green-500' : ''
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </>
                )}
              </button>
              <Link
                href="/shop"
                className="px-6 py-3 border border-gold-500 text-gold-500 rounded hover:bg-gold-500 hover:text-page transition-all duration-300 flex items-center gap-2"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Center: Product Image */}
          <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center">
            <div className="relative w-[280px] h-[400px]">
              {/* Glow */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none`}>
                <div className={`w-48 h-48 ${product.glowColor} rounded-full blur-3xl transition-colors duration-700`} />
              </div>

              {/* Products */}
              {products.map((p, i) => (
                <div
                  key={p.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    i === activeProduct
                      ? 'opacity-100 scale-100 translate-y-0'
                      : i < activeProduct
                        ? 'opacity-0 scale-90 -translate-y-6 pointer-events-none'
                        : 'opacity-0 scale-90 translate-y-6 pointer-events-none'
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={`${p.name} - ${p.subtitle}`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    style={p.filter ? { filter: p.filter } : undefined}
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Switcher Arrows */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                <button
                  onClick={prevProduct}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                  aria-label="Previous product"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm text-white/50 font-serif tabular-nums whitespace-nowrap">
                  {activeProduct + 1} / {products.length}
                </span>
                <button
                  onClick={nextProduct}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                  aria-label="Next product"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Features + Quote */}
          <div className="slide-in-right lg:col-span-2 order-3">
            <div className="space-y-6">
              {features.map((feature) => {
                const IconComponent = iconMap[feature.icon] || Leaf;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-gold-500/30 transition-colors">
                      <IconComponent className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/65 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            {quote.text && (
              <div className="mt-10 p-6 bg-white/[0.03] rounded-lg border-l-2 border-gold-500/50">
                {quote.prefix && <p className="font-script text-2xl text-gold-500 mb-2">{quote.prefix}</p>}
                <p className="text-white/70 text-sm italic leading-relaxed">
                  &ldquo;{quote.text}&rdquo;
                </p>
                {quote.attribution && <p className="text-gold-500 text-xs mt-3">— {quote.attribution}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
