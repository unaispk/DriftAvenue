import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Categories() {
  const categoryList = [
    {
      id: 1,
      title: 'Avenue Outerwear',
      description: 'Heavyweight hoodies, zip jackets & sleek puffers.',
      count: '18 Products',
      image: '/images/product_jacket.png',
      span: 'md:col-span-2'
    },
    {
      id: 2,
      title: 'Apex Performance',
      description: 'Engineered tracksuits & racing apparel.',
      count: '12 Products',
      image: '/images/product_hoodie.png',
      span: 'md:col-span-1'
    },
    {
      id: 3,
      title: 'Custom Street Kicks',
      description: 'High-fashion carbon fiber footwear.',
      count: '8 Products',
      image: '/images/product_sneaker.png',
      span: 'md:col-span-1'
    },
    {
      id: 4,
      title: 'Apex Gear',
      description: 'Caps, utility backpacks & high-contrast laces.',
      count: '24 Products',
      image: '/images/hero_background.png',
      span: 'md:col-span-2'
    }
  ];

  return (
    <section id="categories" className="py-24 bg-brand-dark/40 border-t border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-md mb-12">
          <p className="text-brand-primary text-xs font-black uppercase tracking-widest mb-2">EXPLORE CATEGORIES</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            SHOP BY COLLECTION
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Select catalog pathways tailored to your style. Designed with performance and street culture aesthetics.
          </p>
        </div>

        {/* Grid Layout - Mobile: 1 col, md: 3 cols (grid layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryList.map((cat) => (
            <div
              key={cat.id}
              className={`relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#0E0E12] group flex flex-col justify-between p-6 sm:p-8 min-h-[300px] sm:min-h-[340px] ${cat.span}`}
            >
              {/* Product Background silhouette - blurred & stylized */}
              <div className="absolute right-0 bottom-0 w-2/3 h-2/3 sm:w-1/2 sm:h-1/2 opacity-30 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none">
                <img
                  src={cat.image}
                  alt=""
                  className="w-full h-full object-contain transform translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500 scale-110"
                />
              </div>

              {/* Glowing gradient overlay on card hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/0 via-brand-primary/0 to-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Upper Section */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-zinc-900 text-zinc-400 border border-zinc-800 text-[10px] font-black tracking-widest px-2.5 py-1 rounded">
                  {cat.count}
                </span>
                
                <button
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all transform group-hover:rotate-45"
                  aria-label={`Shop ${cat.title}`}
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {/* Lower Section */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-brand-primary transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-zinc-400 text-sm max-w-sm font-medium leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-black uppercase text-brand-primary tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                  Shop Collection
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
