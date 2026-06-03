export const initialProducts = [
  {
    id: 1,
    name: 'Aero-Track Jacket',
    price: 185.00,
    image: '/images/product_jacket.png',
    rating: 4.9,
    reviews: 42,
    tag: 'NEW DROP',
    colors: [
      { name: 'Carbon Black', class: 'bg-[#121214] border border-zinc-700' },
      { name: 'Avanew Gold', class: 'bg-[#D4C9B1]' },
      { name: 'Titanium Gray', class: 'bg-[#5A5E65]' }
    ],
    features: ['Aero Racing Cut', 'Laser ventilation', 'Reflective detailing']
  },
  {
    id: 2,
    name: 'Apex Utility Hoodie',
    price: 129.00,
    image: '/images/product_hoodie.png',
    rating: 4.8,
    reviews: 95,
    tag: 'BEST SELLER',
    colors: [
      { name: 'Carbon Black', class: 'bg-[#121214] border border-zinc-700' },
      { name: 'Avanew Gold', class: 'bg-[#D4C9B1]' },
      { name: 'Chalk White', class: 'bg-zinc-100' }
    ],
    features: ['Heavyweight 450gsm', 'Embossed gold details', 'Hidden utility pockets']
  },
  {
    id: 3,
    name: 'Apex Drift Sneaker',
    price: 245.00,
    image: '/images/product_sneaker.png',
    rating: 4.9,
    reviews: 112,
    tag: 'LIMITED RUN',
    colors: [
      { name: 'Avanew Gold', class: 'bg-[#D4C9B1]' },
      { name: 'Carbon Black', class: 'bg-[#121214] border border-zinc-700' },
      { name: 'Cyber Gray', class: 'bg-zinc-500' }
    ],
    features: ['Translucent sole', 'Carbon mesh upper', 'Adjustable cable lacing']
  }
];
