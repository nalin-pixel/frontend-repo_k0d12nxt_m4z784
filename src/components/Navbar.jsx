import React from 'react';
import { Search, User } from 'lucide-react';

const Navbar = ({ onLogoClick }) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <button
            onClick={onLogoClick}
            className="flex items-center gap-2 group"
            aria-label="Back to catalog"
          >
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-sm" />
            <span className="text-lg font-semibold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
              NovaVouchers
            </span>
          </button>

          {/* Middle: Search */}
          <div className="hidden md:flex items-center w-full max-w-lg mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search games, vouchers, regions..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm"
              />
            </div>
          </div>

          {/* Right: Auth */}
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100">
              <User className="h-4 w-4" />
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
