import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ShieldCheck, Clock, Globe, Star, ShoppingCart } from 'lucide-react';

const CATALOG = [
  {
    id: 'mlbb',
    title: 'Mobile Legends Diamonds',
    desc: 'Instant diamonds delivered to your account. Regional options supported.',
    gradient: 'from-purple-500 to-blue-500',
    rating: 4.8,
    reviews: 1243,
    regions: ['Global', 'SEA', 'EU', 'NA'],
    denominations: [50, 100, 250, 500, 1000],
    basePrice: 0.99,
  },
  {
    id: 'valo',
    title: 'Valorant Points',
    desc: 'Top up VP to unlock agents, skins, and the battle pass.',
    gradient: 'from-fuchsia-500 to-purple-500',
    rating: 4.7,
    reviews: 987,
    regions: ['Global', 'EU', 'NA', 'LATAM', 'AP'],
    denominations: [300, 625, 1125, 1650, 3400],
    basePrice: 4.99,
  },
  {
    id: 'robux',
    title: 'Roblox Robux',
    desc: 'Get Robux instantly via secure digital code.',
    gradient: 'from-cyan-500 to-blue-500',
    rating: 4.6,
    reviews: 842,
    regions: ['Global'],
    denominations: [80, 400, 800, 1700],
    basePrice: 0.99,
  },
  {
    id: 'steam',
    title: 'Steam Gift Card',
    desc: 'Digital Steam wallet codes for multiple regions.',
    gradient: 'from-indigo-500 to-sky-500',
    rating: 4.9,
    reviews: 2011,
    regions: ['Global', 'US', 'EU', 'UK', 'TR'],
    denominations: [5, 10, 20, 50, 100],
    basePrice: 5.0,
  },
  {
    id: 'pubg',
    title: 'PUBG Mobile UC',
    desc: 'Lightning-fast UC delivery for PUBG Mobile.',
    gradient: 'from-rose-500 to-orange-500',
    rating: 4.7,
    reviews: 1560,
    regions: ['Global', 'MENA', 'SEA', 'EU'],
    denominations: [60, 300, 600, 1500, 3000],
    basePrice: 1.49,
  },
  {
    id: 'genshin',
    title: 'Genshin Genesis Crystals',
    desc: 'Recharge Genesis Crystals to enjoy banners instantly.',
    gradient: 'from-blue-500 to-emerald-500',
    rating: 4.8,
    reviews: 1788,
    regions: ['Global', 'Asia', 'America', 'Europe'],
    denominations: [60, 300, 980, 1980, 3280],
    basePrice: 2.49,
  },
];

function priceFor(denom, base) {
  // Simple scaling with small discount for larger packs
  const scale = denom <= 100 ? 1 : denom <= 500 ? 0.98 : denom <= 1200 ? 0.96 : 0.94;
  return Math.max(base, (denom / 60) * base * scale);
}

export default function ProductDetail({ id, onBack }) {
  const product = useMemo(() => CATALOG.find((p) => p.id === id), [id]);
  const [region, setRegion] = useState(product?.regions?.[0] || 'Global');
  const [denom, setDenom] = useState(product?.denominations?.[0] || 0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setRegion(product?.regions?.[0] || 'Global');
    setDenom(product?.denominations?.[0] || 0);
    setQty(1);
  }, [product]);

  if (!product) {
    return (
      <section className="bg-black min-h-[60vh] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft className="h-5 w-5" /> Back
          </button>
          <h2 className="text-2xl font-semibold">Product not found</h2>
          <p className="text-white/70 mt-2">The product you are looking for does not exist.</p>
        </div>
      </section>
    );
  }

  const total = (priceFor(denom, product.basePrice) * qty).toFixed(2);

  return (
    <section className="bg-black text-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
          <ArrowLeft className="h-5 w-5" /> Back to catalog
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Visual + trust */}
          <div className="lg:col-span-5">
            <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${product.gradient} p-8 min-h-[260px] flex items-end`}>
              <div>
                <h1 className="text-3xl font-extrabold drop-shadow">{product.title}</h1>
                <p className="text-white/85 mt-2 max-w-md">{product.desc}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 flex items-center gap-2 text-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-300" /> Buyer Protection
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-amber-300" /> Instant Delivery
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-sky-300" /> {region} Region
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-white/80">
              <Star className="h-4 w-4 text-yellow-300" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-white/50">({product.reviews.toLocaleString()} reviews)</span>
            </div>
          </div>

          {/* Right: Options */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div>
                <h3 className="text-lg font-semibold">Choose region</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.regions.map((r) => (
                    <button
                      key={r}
                      onClick={() => setRegion(r)}
                      className={`rounded-full border px-3 py-1.5 text-sm transition ${
                        region === r ? 'bg-white/15 border-white/20 text-white' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Select amount</h3>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {product.denominations.map((d) => {
                    const active = denom === d;
                    return (
                      <button
                        key={d}
                        onClick={() => setDenom(d)}
                        className={`rounded-xl border p-3 text-sm text-left transition ${
                          active ? 'bg-white/15 border-white/20' : 'bg-white/5 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <div className="font-semibold">{d}</div>
                        <div className="text-white/70 text-xs">${priceFor(d, product.basePrice).toFixed(2)}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                <div>
                  <label className="block text-sm text-white/80 mb-1">Quantity</label>
                  <div className="flex items-center rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                    <button className="px-3 py-2 hover:bg-white/10" onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
                    <input
                      type="number"
                      min={1}
                      value={qty}
                      onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || '1', 10)))}
                      className="w-full bg-transparent text-center py-2 focus:outline-none"
                    />
                    <button className="px-3 py-2 hover:bg-white/10" onClick={() => setQty((q) => q + 1)}>+</button>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-sm text-white/70">You pay</div>
                  <div className="text-3xl font-extrabold">${total}</div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white hover:from-purple-600 hover:to-blue-600">
                  <ShoppingCart className="h-5 w-5" /> Add to Cart
                </button>
                <button className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 border border-white/10">
                  Buy Now
                </button>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/80">
                <h4 className="font-semibold mb-2">How to redeem</h4>
                <ol className="list-decimal list-inside space-y-1 text-white/75">
                  <li>Select the correct region for your account.</li>
                  <li>Complete payment and receive the code instantly.</li>
                  <li>Redeem in-game or on the official website.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
