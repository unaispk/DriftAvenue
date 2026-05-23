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
      { label: 'Avenue Outerwear', href: '#categories' },
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
      { label: 'Avenue Careers', href: '#' }
    ]
  };

  return (
    <footer className="bg-brand-secondary border-t border-zinc-900 pt-20 pb-8 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <span className="w-2.5 h-6 bg-brand-primary rounded-sm transform -skew-x-12"></span>
              <span className="font-extrabold text-2xl tracking-wider text-white">
                DRIFT<span className="text-brand-primary">AVENUE</span>
              </span>
            </a>
            <p className="text-sm font-medium leading-relaxed max-w-sm mb-6">
              Sleek utility wear tailored for high-speed street culture. Engineering limited-run garments with high-contrast detailing.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-brand-primary text-zinc-400 hover:text-black border border-zinc-850 flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-brand-primary text-zinc-400 hover:text-black border border-zinc-850 flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95"
                aria-label="Subscribe to our YouTube channel"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                  <polygon points="10 15 15 12 10 9"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-brand-primary text-zinc-400 hover:text-black border border-zinc-850 flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95"
                aria-label="Follow us on Twitter/X"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="glass-panel border border-zinc-850 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-primary"></div>
              
              <h3 className="text-lg font-bold text-white mb-2">JOIN THE STREET CREW</h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Get early access keys for limited-edition drops.</p>

              {isSubscribed ? (
                <div className="flex items-center gap-3 bg-emerald-950/20 border border-emerald-900/50 rounded-xl p-4 text-emerald-500 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                    <Check size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-none mb-1">WELCOME TO THE TEAM</p>
                    <p className="text-xs">Your early access key code is sent to your inbox.</p>
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
                    className="group bg-brand-primary hover:bg-brand-primary-hover text-black font-extrabold uppercase text-xs tracking-wider px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-brand-primary/10"
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
            <h4 className="text-xs font-black uppercase text-white tracking-widest mb-6">Collections</h4>
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
            <h4 className="text-xs font-black uppercase text-white tracking-widest mb-6">Support Pit</h4>
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
            <h4 className="text-xs font-black uppercase text-white tracking-widest mb-6">Company</h4>
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
            <h4 className="text-xs font-black uppercase text-white tracking-widest mb-6">Garage Location</h4>
            <address className="not-italic text-sm font-medium leading-relaxed mb-4">
              Block D, Drift Avenue <br />
              Apex City Circuit, AC 8000
            </address>
            <p className="text-xs text-zinc-550">Mon - Fri: 08:00 AM - 06:00 PM</p>
          </div>
        </div>

        {/* Lower Footer: Legal & Copyright */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} DriftAvenue Garments Ltd. All rights reserved.</p>
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
