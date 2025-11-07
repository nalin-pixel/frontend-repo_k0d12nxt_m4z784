import { ShoppingCart, User, Search } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [query, setQuery] = useState('');

  return (
    <header className="w-full sticky top-0 z-50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500" />
          <span className="font-semibold text-white text-lg tracking-wide">NeoTopUp</span>
        </a>

        <div className="hidden md:flex items-center flex-1 max-w-xl ml-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search games or vouchers..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-10 py-2.5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition">
            <User className="h-5 w-5" />
            <span className="hidden sm:inline">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
