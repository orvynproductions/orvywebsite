'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { navigationConfig } from '@/lib/config';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = navigationConfig.navLinks;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-page/95 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label={navigationConfig.brandName}
        >
          <Leaf className="w-8 h-8 text-gold-500 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          <div className="flex flex-col">
            <span className="font-serif text-xl text-white tracking-wide">{navigationConfig.brandName}</span>
            <span className="text-[10px] text-gold-500 tracking-widest uppercase">{navigationConfig.tagline}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8" role="menubar">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith('/');
            
            return (
              <div
                key={link.name}
                className="relative"
                role="none"
              >
                {isExternal ? (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-white/80 hover:text-gold-500 transition-colors duration-300 py-2"
                    role="menuitem"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-white/80 hover:text-gold-500 transition-colors duration-300 py-2"
                    role="menuitem"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Cart Button */}
          <Link
            href="/shop"
            className="relative p-2 text-white/80 hover:text-gold-500 transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-page text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* CTA Button */}
          {navigationConfig.ctaButtonText && (
            <Link
              href="/shop"
              className="btn-primary"
              aria-label={navigationConfig.ctaButtonText}
            >
              {navigationConfig.ctaButtonText}
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-page/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        role="menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="container-custom py-8 flex flex-col gap-2">
          {navLinks.map((link, index) => {
            const isExternal = link.href.startsWith('/');
            
            return (
              <div
                key={link.name}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isExternal ? (
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 w-full py-4 text-lg text-white border-b border-white/10 hover:text-gold-500 transition-colors"
                    role="menuitem"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="flex items-center gap-3 w-full py-4 text-lg text-white border-b border-white/10 hover:text-gold-500 transition-colors"
                    role="menuitem"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            );
          })}

          {/* Mobile Cart Link */}
          <Link
            href="/shop"
            className="flex items-center gap-3 w-full py-4 text-lg text-white border-b border-white/10 hover:text-gold-500 transition-colors"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ShoppingBag className="w-5 h-5 text-gold-500" />
            Shop
            {totalItems > 0 && (
              <span className="ml-auto px-2 py-1 bg-gold-500 text-page text-sm rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {navigationConfig.ctaButtonText && (
            <Link
              href="/shop"
              className="btn-primary mt-6 text-center"
              role="menuitem"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navigationConfig.ctaButtonText}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
