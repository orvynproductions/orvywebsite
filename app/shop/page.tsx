'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Plus, Check, Leaf, Search } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { shopConfig } from '@/lib/config';

export default function ShopPage() {
  const { addToCart, totalItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = shopConfig.products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: typeof shopConfig.products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
    });
    
    setAddedProducts(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedProducts(prev => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1500);
  };

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
            href="/checkout"
            className="relative p-2 text-white hover:text-gold-500 transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-page text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom text-center">
          <span className="text-gold-500 text-sm tracking-[0.3em] uppercase">
            {shopConfig.scriptText}
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif text-white">
            {shopConfig.mainTitle}
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            {shopConfig.introText}
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="container-custom mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {shopConfig.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gold-500 text-page'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-600 to-gray-900 p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/10 text-white/80 text-sm rounded-full">
                      {shopConfig.outOfStockText}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white font-medium">{product.name}</h3>
                    <p className="text-white/50 text-sm">{product.unit}</p>
                  </div>
                  <span className="text-gold-500 font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Nutrition Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.nutritionHighlights.slice(0, 2).map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 bg-gold-500/10 text-gold-500 text-xs rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock || addedProducts.has(product.id)}
                  className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                    addedProducts.has(product.id)
                      ? 'bg-green-500/20 text-green-400'
                      : product.inStock
                      ? 'bg-gold-500 text-page hover:bg-gold-600'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                >
                  {addedProducts.has(product.id) ? (
                    <>
                      <Check className="w-4 h-4" />
                      Added!
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      {shopConfig.addToCartText}
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Leaf className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/60">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
