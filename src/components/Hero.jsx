import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_background.png"
          alt="DRIFT AVANEW Streetwear Campaign"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
        />
        {/* Sleek radial and linear gradient overlay for high contrast text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent md:block hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30"></div>
        
        {/* Subtle decorative pulsing gold grid glow in corner */}
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24 flex flex-col justify-center min-h-[70vh]">
        <div className="max-w-2xl text-center md:text-left flex flex-col items-center md:items-start animate-fade-up">
          
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles size={12} className="animate-spin-slow" />
            <span>EST. 2025 / LUXURY UTILITY DROP</span>
          </div>

          {/* Heading */}
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-widest leading-tight mb-6">
            HIGH-OCTANE <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-[#F5EFE4] to-brand-primary bg-size-200 glow-text italic font-garamond font-normal tracking-normal capitalize pl-1">
              Streetwear
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg font-medium tracking-wide max-w-lg mb-10 leading-relaxed">
            Engineered for speed, tailored for the avenue. High-contrast aesthetics meet premium utility designs. Limitless expression at 8000 RPM.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#featured"
              className="group flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-black font-extrabold uppercase text-xs tracking-wider px-8 py-4 rounded-lg w-full sm:w-auto transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/30"
            >
              Shop the Drop
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#categories"
              className="flex items-center justify-center bg-zinc-950/80 hover:bg-zinc-900 text-white font-extrabold uppercase text-xs tracking-wider px-8 py-4 rounded-lg border border-zinc-850 hover:border-zinc-700 w-full sm:w-auto transition-all duration-300 backdrop-blur-sm"
            >
              Explore Drops
            </a>
          </div>
        </div>

        {/* Floating Stat badging at the bottom of hero - Desktop only */}
        <div className="hidden lg:grid grid-cols-3 gap-8 border-t border-zinc-900 pt-8 mt-16 max-w-xl animate-fade-up">
          <div>
            <p className="text-xl font-bold font-cinzel text-white">01</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">Premium Utility Knit</p>
          </div>
          <div>
            <p className="text-xl font-bold font-cinzel text-white">100%</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">Ethical Sourced Carbon</p>
          </div>
          <div>
            <p className="text-xl font-bold font-cinzel text-white">EST. 2025</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">Garage Founding Date</p>
          </div>
        </div>
      </div>

      {/* Decorative Diagonal Bottom Angle Slice */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-brand-secondary to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
