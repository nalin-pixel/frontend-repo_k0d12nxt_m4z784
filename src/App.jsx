import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

function App() {
  const [detailId, setDetailId] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      {!detailId ? (
        <>
          <Hero />
          <ProductGrid onSelect={(id) => setDetailId(id)} />
          <HowItWorks />
          <Testimonials />
        </>
      ) : (
        <ProductDetail id={detailId} onBack={() => setDetailId(null)} />
      )}
      <Footer />
    </div>
  );
}

export default App;
