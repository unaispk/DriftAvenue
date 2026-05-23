import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Menu, X, Search, ChevronRight, User } from 'lucide-react';

export default function Header({ cartCount, wishlistCount, onCartClick, onWishlistClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth blur header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'New Arrivals', href: '#featured' },
    { label: 'Shop All', href: '#featured' },
    { label: 'Categories', href: '#categories' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0A0C]/90 backdrop-blur-md border-b border-zinc-800/50 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-zinc-400 hover:text-white transition-colors p-1"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-grow-0">
              <a href="#" className="flex items-center gap-2.5 group">
                <svg className="w-8 h-8 text-brand-primary transform group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 28 28 L 52 28 C 72 28, 72 72, 52 72 L 28 72 Z" />
                  <path d="M 46 72 L 62 28 L 78 72" />
                  <path d="M 52 52 H 72" strokeWidth="2.5" />
                  <path d="M 15 84 H 85" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                </svg>
                <span className="font-cinzel text-xl sm:text-2xl font-black tracking-widest text-white select-none">
                  DRIFT<span className="text-brand-primary">AVANEW</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex space-x-8 xl:space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-400 hover:text-white font-medium text-sm uppercase tracking-wider transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Icons Actions */}
            <div className="flex items-center gap-3 sm:gap-4 justify-end">
              {/* Search Bar - Desktop */}
              <div className="hidden md:flex items-center bg-zinc-900 border border-zinc-800 rounded-full px-3.5 py-1.5 focus-within:border-brand-primary transition-colors">
                <Search size={16} className="text-zinc-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search collections..."
                  className="bg-transparent border-none text-xs text-white placeholder-zinc-500 focus:outline-none w-40 xl:w-56"
                />
              </div>

              {/* Profile Icon */}
              <button className="text-zinc-400 hover:text-white transition-colors p-1 md:block hidden" aria-label="Account profile">
                <User size={20} />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={onWishlistClick}
                className="text-zinc-400 hover:text-white transition-colors p-1 relative"
                aria-label="Wishlist"
              >
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-primary text-black text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={onCartClick}
                className="text-zinc-400 hover:text-white transition-colors p-1 relative"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-primary text-black text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-brand-dark border-r border-zinc-800 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <a href="#" className="flex items-center gap-2.5 group">
                <svg className="w-7 h-7 text-brand-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 28 28 L 52 28 C 72 28, 72 72, 52 72 L 28 72 Z" />
                  <path d="M 46 72 L 62 28 L 78 72" />
                  <path d="M 52 52 H 72" strokeWidth="2.5" />
                  <path d="M 15 84 H 85" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                </svg>
                <span className="font-cinzel text-lg font-black tracking-widest text-white select-none">
                  DRIFT<span className="text-brand-primary">AVANEW</span>
                </span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="flex items-center bg-zinc-900 border border-zinc-850 rounded-lg px-3 py-2 mb-6">
              <Search size={18} className="text-zinc-500 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search streetwear..."
                className="bg-transparent border-none text-sm text-white placeholder-zinc-500 focus:outline-none w-full"
              />
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-zinc-300 hover:text-white font-semibold text-base py-2.5 px-2 border-b border-zinc-850 hover:bg-zinc-900/40 rounded transition-all"
                >
                  {link.label}
                  <ChevronRight size={16} className="text-zinc-650" />
                </a>
              ))}
            </nav>
          </div>

          <div className="border-t border-zinc-850 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-850 flex items-center justify-center text-white">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Guest Account</p>
                <a href="#featured" className="text-xs text-brand-primary font-medium hover:underline">Sign In / Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
