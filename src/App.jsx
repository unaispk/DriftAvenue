import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, RefreshCw, ShoppingBag } from 'lucide-react';

export default function App() {
  // Storefront states
  const [cart, setCart] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Trigger floating alert toast notifications
  const triggerToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Add Item to Cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.color === product.color
      );

      if (existingItem) {
        triggerToast(`Updated ${product.name} (${product.color}) quantity!`);
        return prevCart.map((item) =>
          item.id === product.id && item.color === product.color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      triggerToast(`Added ${product.name} (${product.color}) to your bag.`);
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove Item from Cart
  const handleRemoveFromCart = (productId, colorName) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === productId && item.color === colorName)));
    triggerToast('Item removed from bag.', 'info');
  };

  // Modify Cart Item Quantity
  const handleUpdateQuantity = (productId, colorName, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId && item.color === colorName) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty < 1 ? 1 : newQty };
        }
        return item;
      })
    );
  };

  // Handle Wishlist Toggle Count
  const handleWishlistToggle = (isAdded) => {
    setWishlistCount((prev) => (isAdded ? prev + 1 : Math.max(0, prev - 1)));
    triggerToast(isAdded ? 'Added to your favorites wishlist.' : 'Removed from wishlist.', 'info');
  };

  // Newsletter Submit Feedback
  const handleNewsletterSignup = (email) => {
    triggerToast(`Success! Pit keys sent to ${email}`);
  };

  // Calculate shopping cart figures
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const shippingFee = cartSubtotal > 150 ? 0 : 15.00;
  const cartTotal = cartSubtotal + shippingFee;

  return (
    <div className="min-h-screen bg-brand-secondary text-zinc-100 flex flex-col justify-between selection:bg-brand-primary selection:text-black">
      
      {/* Primary Navigation Header */}
      <Header 
        cartCount={cartCount} 
        wishlistCount={wishlistCount}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => triggerToast("Wishlist collection drawer coming soon!", "info")}
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts 
          onAddToCart={handleAddToCart} 
          onWishlistToggle={handleWishlistToggle}
        />
        
        {/* Core Value Props Grid - Highly visual, state-of-the-art accent */}
        <section className="bg-brand-dark py-12 border-t border-b border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-4 glass-panel rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                <Truck size={22} />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">FREE EXPRESS DELIVERY</h3>
                <p className="text-xs text-zinc-400 mt-1">Complementary shipping on all orders over $150 USD.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 glass-panel rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                <RefreshCw size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">30-DAY RACE RETURN</h3>
                <p className="text-xs text-zinc-400 mt-1">Unhappy with the fit? Returns are completely free of charge.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 glass-panel rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">AUTHENTIC GARMENTS</h3>
                <p className="text-xs text-zinc-400 mt-1">Verified physical tags with integrated secure NFC chips.</p>
              </div>
            </div>
          </div>
        </section>

        <Categories />
        <Testimonials />
      </main>

      {/* Premium Multi-directory Footer */}
      <Footer onNewsletterSignup={handleNewsletterSignup} />

      {/* Shopping Cart Drawer Panel Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      >
        <div 
          className={`fixed top-0 right-0 bottom-0 w-full sm:w-[480px] bg-brand-dark border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-5">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-brand-primary" />
              <h2 className="text-lg font-black text-white">YOUR SHOPPING BAG</h2>
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-grow overflow-y-auto py-5 no-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-500 mb-4">
                  <ShoppingBag size={26} />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Your bag is empty</h3>
                <p className="text-xs text-zinc-400 max-w-[240px] mb-6">Explore the high-octane collection shelf to grab your gear.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-brand-primary hover:bg-brand-primary-hover text-black text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-lg transition-colors"
                >
                  Browse Drops
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.color}`} className="flex gap-4 p-4 bg-[#16161C]/50 border border-zinc-900 rounded-xl relative group">
                    {/* Item Thumbnail */}
                    <div className="w-20 h-20 bg-zinc-950 border border-zinc-900 rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    {/* Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="text-sm font-bold text-white line-clamp-1 pr-4">{item.name}</h4>
                          <button
                            onClick={() => handleRemoveFromCart(item.id, item.color)}
                            className="text-zinc-500 hover:text-red-500 transition-colors"
                            title="Remove from bag"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">
                          COLOR: <span className="text-brand-primary">{item.color}</span>
                        </p>
                      </div>

                      {/* Quantity Controller & Price */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-zinc-850 bg-zinc-950 rounded-lg">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.color, -1)}
                            className="p-1 px-2 text-zinc-400 hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-xs font-bold text-white">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.color, 1)}
                            className="p-1 px-2 text-zinc-400 hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-sm font-extrabold text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Checkout & Summary Summary */}
          {cart.length > 0 && (
            <div className="border-t border-zinc-900 pt-5 space-y-4">
              <div className="space-y-2.5 text-sm font-medium">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="text-white">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Express Shipping</span>
                  {shippingFee === 0 ? (
                    <span className="text-emerald-500 font-bold uppercase tracking-wider text-[11px] bg-emerald-950/20 border border-emerald-900/40 px-2 py-0.5 rounded">Free</span>
                  ) : (
                    <span className="text-white">${shippingFee.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex justify-between border-t border-zinc-900 pt-3 text-base font-black">
                  <span className="text-white">Total Charge</span>
                  <span className="text-brand-primary glow-text">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  triggerToast('Checkout API simulator launched! Thank you.', 'success');
                  setIsCartOpen(false);
                }}
                className="group w-full bg-brand-primary hover:bg-brand-primary-hover text-black font-extrabold uppercase text-xs tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/45"
              >
                Proceed to Checkout
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-[10px] text-center text-zinc-550 leading-relaxed font-semibold">
                By checking out, you agree to our Drift Garage Terms of Sale and secure checkouts.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Floating Alert Toasts System - Fixed bottom right */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-2.5 max-w-sm w-[90vw]">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 p-4 rounded-xl border shadow-2xl animate-fade-in ${
              toast.type === 'info'
                ? 'bg-zinc-900/95 border-zinc-800 text-zinc-300'
                : 'bg-zinc-900/95 border-brand-primary/50 text-brand-primary'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
            <p className="text-xs font-bold text-white tracking-wide">{toast.message}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
