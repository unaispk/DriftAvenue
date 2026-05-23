import React, { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye, Check } from 'lucide-react';

export default function FeaturedProducts({ products, onAddToCart, onWishlistToggle }) {
  // React states for user interactions
  const [selectedColors, setSelectedColors] = useState({});
  const [wishlist, setWishlist] = useState({});
  const [addingToCartId, setAddingToCartId] = useState(null);

  const handleColorSelect = (productId, colorName) => {
    setSelectedColors(prev => ({ ...prev, [productId]: colorName }));
  };

  const handleWishlistClick = (productId) => {
    const newWishState = !wishlist[productId];
    setWishlist(prev => ({ ...prev, [productId]: newWishState }));
    onWishlistToggle(newWishState);
  };

  const handleAddToCart = (product, fallbackColor) => {
    setAddingToCartId(product.id);
    const chosenColor = selectedColors[product.id] || fallbackColor;
    
    // Pass product info to parent app state
    onAddToCart({
      ...product,
      color: chosenColor
    });

    // Reset loading state after 800ms
    setTimeout(() => {
      setAddingToCartId(null);
    }, 850);
  };

  // Safe checks if products array is empty
  const activeProducts = products || [];

  return (
    <section id="featured" className="py-24 bg-brand-secondary relative">
      {/* Decorative ambient glowing lines */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-md">
            <p className="text-brand-primary text-xs font-black uppercase tracking-widest mb-2 font-bebas">CURATED SELECTION</p>
            <h2 className="text-3xl sm:text-4xl font-bebas  font-extrabold text-white tracking-tight leading-tight ">
              HOTTEST DROPS
            </h2>
            <p className="text-zinc-400 text-sm mt-2 font-medium">
              Performance engineered streetwear built for urban racing subcultures. Each piece is crafted in limited numbers.
            </p>
          </div>
          
          {/* Slider navigation labels - indicators */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="h-1 w-8 rounded-full bg-brand-primary"></span>
            <span className="h-1 w-2 rounded-full bg-zinc-800"></span>
            <span className="h-1 w-2 rounded-full bg-zinc-800"></span>
          </div>
        </div>

        {/* Product Shelf - Horizontal swipe on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">
          {activeProducts.map((product) => {
            const isWishlisted = !!wishlist[product.id];
            const isAdding = addingToCartId === product.id;
            const fallbackColor = product.colors && product.colors[0] ? product.colors[0].name : 'Default';
            const currentSelectedColor = selectedColors[product.id] || fallbackColor;

            return (
              <div 
                key={product.id}
                className="flex-shrink-0 w-[82vw] sm:w-[360px] md:w-auto glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group"
              >
                {/* Image Section */}
                <div className="relative aspect-square w-full bg-[#121216]/50 overflow-hidden flex items-center justify-center p-6 border-b border-zinc-900">
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-300 text-[10px] font-black tracking-widest px-2.5 py-1 rounded font-cinzel">
                    {product.tag}
                  </span>

                  {/* Wishlist Toggle Button */}
                  <button
                    onClick={() => handleWishlistClick(product.id)}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                    aria-label="Add to wishlist"
                  >
                    <Heart 
                      size={15} 
                      className={`transition-colors ${
                        isWishlisted ? 'fill-brand-primary text-brand-primary' : 'text-zinc-400'
                      }`} 
                    />
                  </button>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Quick Actions Drawer Overlay - Desktop Only */}
                  <div className="absolute inset-0 bg-black/45 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleAddToCart(product, fallbackColor)}
                      disabled={isAdding}
                      className="bg-brand-primary hover:bg-brand-primary-hover text-black p-3.5 rounded-full font-black shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-115 cursor-pointer"
                      title="Quick Add to Cart"
                    >
                      {isAdding ? <Check size={18} className="animate-bounce" /> : <ShoppingBag size={18} />}
                    </button>
                    <a
                      href="#featured"
                      className="bg-zinc-900/90 border border-zinc-800 hover:border-zinc-650 text-white p-3.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:scale-115"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </a>
                  </div>
                </div>

                {/* Information Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Brand Name & Rating */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9px] text-zinc-550 uppercase tracking-widest font-black font-cinzel">DRIFT AVANEW</span>
                      <div className="flex items-center gap-1">
                        <Star size={12} className="fill-brand-primary text-brand-primary" />
                        <span className="text-xs text-white font-extrabold">{product.rating}</span>
                        <span className="text-[10px] text-zinc-500">({product.reviews})</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-base font-bold text-white group-hover:text-brand-primary transition-colors mb-1 line-clamp-1 font-cinzel tracking-wider">
                      {product.name}
                    </h3>

                    {/* Pricing */}
                    <p className="text-sm font-extrabold text-brand-primary mb-4 font-cinzel">
                      ${product.price.toFixed(2)}
                    </p>

                    {/* Specifications List */}
                    <ul className="space-y-1 mb-4 hidden sm:block">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-[11px] text-zinc-400 flex items-center gap-1.5 font-medium">
                          <span className="w-1 h-1 rounded-full bg-brand-primary"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Swatches Selector */}
                    {product.colors && product.colors.length > 0 && (
                      <div className="mb-4">
                        <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2 font-cinzel">
                          COLOR: <span className="text-zinc-300 font-bold">{currentSelectedColor}</span>
                        </p>
                        <div className="flex items-center gap-2">
                          {product.colors.map((color) => {
                            const isSelected = currentSelectedColor === color.name;
                            return (
                              <button
                                key={color.name}
                                onClick={() => handleColorSelect(product.id, color.name)}
                                className={`w-5 h-5 rounded-full ${color.class} transition-all duration-300 relative ${
                                  isSelected ? 'ring-2 ring-brand-primary ring-offset-2 ring-offset-zinc-950 scale-110' : 'hover:scale-105 cursor-pointer'
                                }`}
                                title={color.name}
                                aria-label={`Select color ${color.name}`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Add to Cart button - Mobile display or hover backup */}
                    <button
                      onClick={() => handleAddToCart(product, fallbackColor)}
                      disabled={isAdding}
                      className={`w-full flex items-center justify-center gap-2 font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-lg transition-all cursor-pointer ${
                        isAdding 
                          ? 'bg-brand-primary text-black shadow-lg shadow-brand-primary/10' 
                          : 'bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      {isAdding ? (
                        <>
                          <Check size={14} className="animate-pulse" />
                          Added to Bag
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={14} />
                          Quick Add Bag
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
