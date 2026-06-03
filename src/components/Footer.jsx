import React, { useState } from 'react';
import { Send, Check, ArrowRight } from 'lucide-react';

export default function Footer({ onNewsletterSignup }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    // Simulate server delay
    setIsSubscribed(true);
    if (onNewsletterSignup) {
      onNewsletterSignup(email);
    }

    // Clear email field
    setEmail('');
  };

  const footerLinks = {
    shop: [
      { label: 'Avanew Outerwear', href: '#categories' },
      { label: 'Apex Performance', href: '#categories' },
      { label: 'Custom Street Kicks', href: '#categories' },
      { label: 'Limited Drops', href: '#featured' }
    ],
    support: [
      { label: 'Track Order', href: '#' },
      { label: 'Returns & Size Guide', href: '#' },
      { label: 'Shipping Rates', href: '#' },
      { label: 'Support Crew', href: '#' }
    ],
    company: [
      { label: 'Our Garage / Story', href: '#' },
      { label: 'Sustainability Model', href: '#' },
      { label: 'Wholesale Pit Stop', href: '#' },
      { label: 'Avanew Careers', href: '#' }
    ]
  };

  return (
    <footer className="bg-brand-secondary border-t border-zinc-900 pt-20 pb-8 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Upper Footer: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">

          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2.5 mb-6 group">
              <svg className="w-7 h-7 text-brand-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 28 28 L 52 28 C 72 28, 72 72, 52 72 L 28 72 Z" />
                <path d="M 46 72 L 62 28 L 78 72" />
                <path d="M 52 52 H 72" strokeWidth="2.5" />
                <path d="M 15 84 H 85" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              </svg>
              <span className="font-cinzel text-xl font-black tracking-widest text-white">
                DRIFT<span className="text-brand-primary">AVANEW</span>
              </span>
            </a>
            <p className="text-sm font-medium leading-relaxed max-w-sm mb-6">
              Sleek utility wear tailored for high-speed street culture. Engineering limited-run garments with high-contrast detailing.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-pink-500 text-zinc-400 hover:text-white border border-zinc-850 flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 0 1 3.95 3.95v8.5a3.95 3.95 0 0 1-3.95 3.95h-8.5a3.95 3.95 0 0 1-3.95-3.95v-8.5A3.95 3.95 0 0 1 7.75 3.8zm8.95 1.35a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3zM12 6.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5zm0 1.8A3.7 3.7 0 1 1 8.3 12 3.71 3.71 0 0 1 12 8.3z" />
                </svg>
              </a>


              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-green-500 text-zinc-400 hover:text-white border border-zinc-850 flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Chat with us on WhatsApp"
              >
                {/* WhatsApp Logo */}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.49 0 .14 5.35.14 11.93c0 2.1.55 4.16 1.59 5.97L0 24l6.28-1.64a11.89 11.89 0 0 0 5.79 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.49-8.43zM12.08 21.8a9.82 9.82 0 0 1-5-1.37l-.36-.21-3.73.98.99-3.64-.24-.37a9.82 9.82 0 1 1 8.34 4.61zm5.4-7.36c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.15-.19.29-.76.94-.93 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.17-.24-.58-.49-.5-.66-.51h-.56c-.19 0-.49.07-.75.37s-.98.96-.98 2.35c0 1.39 1 2.73 1.14 2.92.15.19 1.96 2.99 4.75 4.19.66.29 1.18.46 1.58.59.66.21 1.27.18 1.75.11.53-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.38-.08-.12-.27-.19-.56-.34z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="glass-panel border border-zinc-850 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-primary animate-pulse"></div>

              <h3 className="text-lg font-bold text-white mb-2 font-cinzel">JOIN THE STREET CREW</h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Get early access keys for limited-edition drops.</p>

              {isSubscribed ? (
                <div className="flex items-center gap-3 bg-emerald-950/20 border border-emerald-900/50 rounded-xl p-4 text-emerald-500 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-black">
                    <Check size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-none mb-1 font-cinzel">WELCOME TO THE TEAM</p>
                    <p className="text-xs text-zinc-300">Your early access key code is sent to your inbox.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email to get access key..."
                    className="flex-1 bg-zinc-900 border border-zinc-800 focus:border-brand-primary text-sm text-white placeholder-zinc-500 rounded-xl px-4 py-3.5 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="group bg-brand-primary hover:bg-brand-primary-hover text-black font-extrabold uppercase text-xs tracking-wider px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-brand-primary/10 cursor-pointer"
                  >
                    Get Access
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Middle Footer: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-16">
          {/* Shop Column */}
          <div>
            <h4 className="text-xs font-black uppercase text-white tracking-widest mb-6 font-cinzel">Collections</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-medium hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-xs font-black uppercase text-white tracking-widest mb-6 font-cinzel">Support Pit</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-medium hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-black uppercase text-white tracking-widest mb-6 font-cinzel">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-medium hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Info - Grid Spanning */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col justify-start">
            <h4 className="text-xs font-black uppercase text-white tracking-widest mb-6 font-cinzel">Garage Location</h4>
            <address className="not-italic text-sm font-medium leading-relaxed mb-4">
              Block D, Drift Avanew <br />
              Apex City Circuit, AC 8000
            </address>
            <p className="text-xs text-zinc-550">Mon - Fri: 08:00 AM - 06:00 PM</p>
          </div>
        </div>

        {/* Lower Footer: Legal & Copyright */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} Drift Avanew Garments Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
