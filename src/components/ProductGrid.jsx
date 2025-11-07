import React from 'react';

const mockVouchers = [
  {
    id: 'steam',
    name: 'Steam Wallet',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    tags: ['Global', 'PC'],
    priceFrom: 5,
  },
  {
    id: 'playstation',
    name: 'PlayStation Store',
    image:
      'https://images.unsplash.com/photo-1546641628-5b7ab4f427e4?q=80&w=1200&auto=format&fit=crop',
    tags: ['Console', 'US/EU'],
    priceFrom: 10,
  },
  {
    id: 'xbox',
    name: 'Xbox Gift Card',
    image:
      'https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=1200&auto=format&fit=crop',
    tags: ['Console', 'Global'],
    priceFrom: 10,
  },
  {
    id: 'riot',
    name: 'Riot Points',
    image:
      'https://images.unsplash.com/photo-1605901309584-f9e2f3f0b6b3?q=80&w=1200&auto=format&fit=crop',
    tags: ['MOBA', 'EU/NA'],
    priceFrom: 5,
  },
];

const ProductCard = ({ item, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(item.id)}
      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {item.tags.map((t) => (
            <span key={t} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-base font-semibold text-gray-900">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-600">From ${item.priceFrom.toFixed(0)}</p>
      </div>
    </button>
  );
};

const ProductGrid = ({ onSelect }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular vouchers</h2>
          <p className="mt-1 text-sm text-gray-600">Instant codes, region-ready, trusted sellers.</p>
        </div>
        <div className="hidden sm:block text-sm text-gray-500">Showing {mockVouchers.length} items</div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockVouchers.map((item) => (
          <ProductCard key={item.id} item={item} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
