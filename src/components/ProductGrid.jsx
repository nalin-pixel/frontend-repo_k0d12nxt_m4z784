import { Gamepad2, Crown, Flame, Zap } from 'lucide-react';

const items = [
  {
    id: 'mlbb',
    title: 'Mobile Legends Diamonds',
    desc: 'Instant diamonds for your MLBB account',
    badge: 'Hot',
    Icon: Flame,
    gradient: 'from-purple-500 to-blue-500',
    price: 'From $1.99',
  },
  {
    id: 'valo',
    title: 'Valorant Points',
    desc: 'Top up VP and unlock skins fast',
    badge: 'Pro',
    Icon: Crown,
    gradient: 'from-fuchsia-500 to-purple-500',
    price: 'From $4.99',
  },
  {
    id: 'robux',
    title: 'Roblox Robux',
    desc: 'Get Robux instantly with code',
    badge: 'Fast',
    Icon: Zap,
    gradient: 'from-cyan-500 to-blue-500',
    price: 'From $0.99',
  },
  {
    id: 'steam',
    title: 'Steam Gift Card',
    desc: 'Digital codes, global regions',
    badge: 'New',
    Icon: Gamepad2,
    gradient: 'from-indigo-500 to-sky-500',
    price: 'From $5',
  },
];

function ProductCard({ item }) {
  const { Icon } = item;
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition shadow-lg shadow-purple-500/5">
      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-4`}> 
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-flex items-center text-[11px] uppercase tracking-wider rounded-full bg-white/10 border border-white/10 px-2 py-0.5 text-white/80">
          {item.badge}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      <p className="text-sm text-white/70 mt-1">{item.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-white font-medium">{item.price}</span>
        <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
          Top Up
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="catalog" className="relative bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Popular Top-ups</h2>
            <p className="text-white/70 mt-1">Handpicked best-sellers with instant delivery</p>
          </div>
          <a href="#" className="text-sm text-white/70 hover:text-white">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <ProductCard key={it.id} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
