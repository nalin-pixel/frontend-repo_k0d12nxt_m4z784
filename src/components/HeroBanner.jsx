import React from 'react';

const HeroBanner = ({ onShop, onBrowse }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background banner image */}
      <div className="relative h-[52vh] min-h-[380px] w-full">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop"
          alt="Futuristic gaming banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Gradient overlays - ensure they don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_400px_at_10%_0%,rgba(99,102,241,0.35),transparent)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              New • Global gift card support added
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Fuel your play with instant game vouchers
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg">
              A streamlined way to buy top-up codes for your favorite platforms. Fast delivery, trusted sellers, and regional pricing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={onShop}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Shop vouchers
              </button>
              <button
                onClick={onBrowse}
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Browse catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
