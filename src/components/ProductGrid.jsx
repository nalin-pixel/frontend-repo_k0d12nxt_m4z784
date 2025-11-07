import { Gamepad2, Crown, Flame, Zap, Tag } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'pc', label: 'PC' },
  { id: 'gift', label: 'Gift Cards' },
  { id: 'new', label: 'New' },
];

const items = [
  {
    id: 'mlbb',
    title: 'Mobile Legends Diamonds',
    desc: 'Instant diamonds for your MLBB account',
    badge: 'Hot',
    Icon: Flame,
    gradient: 'from-purple-500 to-blue-500',
    price: 'From $1.99',
    cat: 'mobile',
    off: 12,
  },
  {
    id: 'valo',
    title: 'Valorant Points',
    desc: 'Top up VP and unlock skins fast',
    badge: 'Pro',
    Icon: Crown,
    gradient: 'from-fuchsia-500 to-purple-500',
    price: 'From $4.99',
    cat: 'pc',
    off: 8,
  },
  {
    id: 'robux',
    title: 'Roblox Robux',
    desc: 'Get Robux instantly with code',
    badge: 'Fast',
    Icon: Zap,
    gradient: 'from-cyan-500 to-blue-500',
    price: 'From $0.99',
    cat: 'gift',
    off: 5,
  },
  {
    id: 'steam',
    title: 'Steam Gift Card',
    desc: 'Digital codes, global regions',
    badge: 'New',
    Icon: Gamepad2,
    gradient: 'from-indigo-500 to-sky-500',
    price: 'From $5',
    cat: 'gift',
    off: 10,
  },
  {
    id: 'pubg',
    title: 'PUBG Mobile UC',
    desc: 'Lightning fast UC delivery',
    badge: 'Hot',
    Icon: Flame,
    gradient: 'from-rose-500 to-orange-500',
    price: 'From $1.49',
    cat: 'mobile',
    off: 15,
  },
  {
    id: 'genshin',
    title: 'Genshin Genesis Crystals',
    desc: 'Recharge to unlock banners',
    badge: 'Pro',
    Icon: Crown,
    gradient: 'from-blue-500 to-emerald-500',
    price: 'From $2.49',
    cat: 'mobile',
    off: 6,
  },
];

function FeaturedBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6">
      <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute -right-16 -bottom-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/80 mb-3">
            <Tag className="h-4 w-4" /> Exclusive Deals
          </div>
          <h3 className="text-2xl font-bold">Weekend Mega Sale — up to 15% off</h3>
          <p className="text-white/70 mt-1 max-w-xl">Grab limited-time discounts on popular top-ups. Instant codes, global regions, safe checkout.</p>
        </div>
        <a href="#catalog" className="inline-flex whitespace-nowrap items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:from-purple-600 hover:to-blue-600 transition">
          Shop Deals
        </a>
      </div>
    </div>
  );
}

function ProductCard({ item, onSelect }) {
  const { Icon } = item;
  return (
    <button onClick={() => onSelect?.(item.id)} className="text-left group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition shadow-lg shadow-purple-500/5 overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500">
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white`}> 
            <Icon className="h-6 w-6" />
          </div>
          {item.off ? (
            <span className="text-[11px] font-medium rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5">{item.off}% OFF</span>
          ) : null}
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="inline-flex items-center text-[11px] uppercase tracking-wider rounded-full bg-white/10 border border-white/10 px-2 py-0.5 text-white/80">
            {item.badge}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
        <p className="text-sm text-white/70 mt-1">{item.desc}</p>
      </div>
      <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between bg-black/20">
        <span className="text-white font-medium">{item.price}</span>
        <span className="rounded-lg px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-600">View</span>
      </div>
    </button>
  );
}

export default function ProductGrid({ onSelect }) {
  const [active, setActive] = useState('all');
  const data = items.filter((i) => (active === 'all' ? true : i.cat === active) || (active === 'new' ? i.badge === 'New' : false));

  return (
    <section id="catalog" className="relative bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Popular Top-ups</h2>
            <p className="text-white/70 mt-1">Handpicked best-sellers with instant delivery</p>
          </div>
          <a href="#catalog" className="text-sm text-white/70 hover:text-white">View all</a>
        </div>

        {/* category tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                active === c.id
                  ? 'bg-white/15 border-white/20 text-white'
                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <FeaturedBanner />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data.map((it) => (
            <ProductCard key={it.id} item={it} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
