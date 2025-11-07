import React, { useMemo, useState } from 'react';
import { ShieldCheck, Zap, ArrowLeft } from 'lucide-react';

const regions = [
  { code: 'US', name: 'United States' },
  { code: 'EU', name: 'Europe' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'SEA', name: 'Southeast Asia' },
  { code: 'GLOBAL', name: 'Global' },
];

const denominations = [5, 10, 20, 50, 100];

const ProductDetail = ({ productId, onBack }) => {
  const [region, setRegion] = useState('GLOBAL');
  const [amount, setAmount] = useState(20);
  const [qty, setQty] = useState(1);

  const basePrice = useMemo(() => {
    // simple price modifier based on region
    const mod = region === 'US' || region === 'EU' ? 1.05 : region === 'GB' ? 1.08 : 1;
    return amount * mod;
  }, [region, amount]);

  const total = useMemo(() => basePrice * qty, [basePrice, qty]);

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
        <ArrowLeft className="h-4 w-4" /> Back to catalog
      </button>

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Visual */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="relative h-64 w-full">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
              alt="Voucher artwork"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="p-5">
            <h1 className="text-xl font-semibold text-gray-900 capitalize">{productId} voucher</h1>
            <p className="mt-1 text-sm text-gray-600">
              Choose your region and denomination. Codes are delivered instantly after purchase.
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Region</label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {regions.map((r) => (
                  <button
                    key={r.code}
                    onClick={() => setRegion(r.code)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      region === r.code
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Denomination</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {denominations.map((d) => (
                  <button
                    key={d}
                    onClick={() => setAmount(d)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      amount === d
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    ${d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <div className="mt-2 inline-flex items-center rounded-lg border border-gray-200">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                >
                  −
                </button>
                <span className="px-4 py-2 text-sm font-medium">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-4 border border-gray-200">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-gray-600">Total</span>
                <span className="text-xl font-semibold text-gray-900">${total.toFixed(2)}</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">Regional pricing and taxes included where applicable.</p>
            </div>

            <div className="flex items-center gap-3">
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500">
                <Zap className="h-4 w-4" /> Buy Now
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-3">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Trusted sellers
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-3">
                <Zap className="h-4 w-4 text-yellow-500" />
                Instant delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
