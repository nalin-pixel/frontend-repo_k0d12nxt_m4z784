import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';

function App() {
  const [detailId, setDetailId] = useState(null);

  const handleSelect = (id) => setDetailId(id);
  const handleBackToCatalog = () => setDetailId(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/30 to-white text-gray-900">
      <Navbar onLogoClick={handleBackToCatalog} />

      {!detailId && (
        <>
          <HeroBanner onShop={() => window.scrollTo({ top: 480, behavior: 'smooth' })} onBrowse={() => window.scrollTo({ top: 480, behavior: 'smooth' })} />
          <ProductGrid onSelect={handleSelect} />
        </>
      )}

      {detailId && <ProductDetail productId={detailId} onBack={handleBackToCatalog} />}

      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} NovaVouchers. All rights reserved.</p>
            <div className="text-sm text-gray-500">No carts. Just instant buys.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
