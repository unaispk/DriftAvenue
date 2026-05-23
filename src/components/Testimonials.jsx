import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Ryder K.',
      role: 'Formula Drift Competitor',
      text: 'The utility track jacket is absolutely insane. Zero restriction during rapid steering transitions, and the carbon styling looks incredibly premium on camera.',
      rating: 5,
      avatarColor: 'bg-zinc-800 border border-brand-primary/50 text-brand-primary'
    },
    {
      id: 2,
      name: 'Sierra V.',
      role: 'Streetwear Photographer',
      text: 'Obsessed with the heavyweight Apex Hoodie. The 450gsm fabric feels heavy, structured, and incredibly high-end. Ideal for long, freezing night shoots in the city.',
      rating: 5,
      avatarColor: 'bg-zinc-850 text-white'
    },
    {
      id: 3,
      name: 'Marcus T.',
      role: 'Industrial Designer',
      text: 'DriftAvenue absolutely nailed the futuristic look. The translucent sneakers pop beautifully under neon lights, and the mesh comfort fits like a second skin.',
      rating: 5,
      avatarColor: 'bg-brand-primary text-black'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-brand-secondary relative overflow-hidden">
      {/* Dynamic backdrop glows */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-brand-primary text-xs font-black uppercase tracking-widest mb-2">COMMUNITY TRUST</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            TESTED BY THE CREW
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-md">
            Don't just take our word for it. Read what professional drifters, photographers, and creators say about DriftAvenue.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="max-w-3xl mx-auto">
          <div className="relative glass-panel rounded-2xl p-8 sm:p-12 border border-zinc-800/80 shadow-2xl">
            
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-8 text-zinc-850/60 pointer-events-none">
              <Quote size={56} className="transform rotate-180" />
            </div>

            {/* Slider Content */}
            <div className="min-h-[160px] flex flex-col justify-between">
              
              {/* Stars Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-primary text-brand-primary" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-white text-base sm:text-lg lg:text-xl font-medium italic leading-relaxed mb-8">
                "{reviews[activeIndex].text}"
              </blockquote>

              {/* User Bio */}
              <div className="flex items-center justify-between border-t border-zinc-900 pt-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${reviews[activeIndex].avatarColor}`}>
                    {reviews[activeIndex].name.substring(0, 2)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-none mb-1">
                      {reviews[activeIndex].name}
                    </h4>
                    <p className="text-xs text-zinc-500 font-medium">
                      {reviews[activeIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-emerald-500 font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                    Verified Crew
                  </span>
                </div>
              </div>

            </div>

            {/* Navigation Arrows */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-850 flex items-center justify-center transition-all shadow-xl active:scale-90"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-850 flex items-center justify-center transition-all shadow-xl active:scale-90"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-8 bg-brand-primary' : 'w-2 bg-zinc-800'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
