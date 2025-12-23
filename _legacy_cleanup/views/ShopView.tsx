
import React from 'react';

const ShopView: React.FC = () => {
  const products = [
    { name: '108 BP Vest', price: '$499.99', category: 'Equipment', img: 'https://picsum.photos/seed/vest/400/500' },
    { name: 'Starter Hitting Program', price: '$199.99', category: 'Training', img: 'https://picsum.photos/seed/hit/400/500' },
    { name: '108 Anchor Bands', price: '$75.00', category: 'Equipment', img: 'https://picsum.photos/seed/bands/400/500' },
    { name: 'Old School vs New School', price: '$29.99', category: 'Books', img: 'https://picsum.photos/seed/book/400/500' },
    { name: 'Performance T-Shirt', price: '$25.00', category: 'Apparel', img: 'https://picsum.photos/seed/shirt/400/500' },
    { name: '108 Team Hitting', price: '$1,099.99', category: 'Teams', img: 'https://picsum.photos/seed/team/400/500' }
  ];

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-6xl uppercase">The Lab Gear</h2>
            <p className="text-gray-500 uppercase font-black text-[10px] tracking-[0.2em] mt-2">Professional Grade Performance Tools</p>
          </div>
          <div className="flex gap-4">
            <button className="material-symbols-outlined w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-navy-950 hover:text-white transition-all">shopping_cart</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-offwhite mb-6 relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/20 transition-all duration-300"></div>
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-navy-950 py-3 px-8 font-black uppercase text-[10px] tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  Add To Cart
                </button>
              </div>
              <p className="text-[10px] font-black uppercase text-brand-primary tracking-widest mb-1">{p.category}</p>
              <h3 className="font-display text-2xl uppercase text-navy-950 group-hover:text-brand-primary transition-colors">{p.name}</h3>
              <p className="font-athletic text-xl text-gray-500 mt-1">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopView;
