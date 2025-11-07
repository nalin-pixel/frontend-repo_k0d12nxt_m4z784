import Spline from '@splinetool/react-spline';
import { Tag, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[78vh] md:min-h-[86vh] bg-black text-white overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zBXGLjse1OwBSbps/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays that do not block interactions */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-600/25 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl pointer-events-none" />

      {/* Promo banner content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs md:text-sm text-white/80">
            <Tag className="h-4 w-4" /> Limited-Time Promotion
          </div>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Superhero Shield Sale — up to 15% off top‑ups
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg">
            Power up faster with instant delivery on popular games. Secure checkout, global regions, and exclusive bundles this week only.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-purple-500/20 hover:from-purple-600 hover:to-blue-600 transition">
              Shop Deals
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/15 border border-white/10 transition">
              How it works
            </a>
          </div>

          {/* Quick highlights */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {['Instant Delivery', 'Buyer Protection', '24/7 Support', 'Global Regions'].map((b) => (
              <span key={b} className="text-xs md:text-sm text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* floating promo chip */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm text-white/90">
          <Zap className="h-4 w-4 text-amber-300" /> Weekend Mega Sale live now
        </div>
      </div>
    </section>
  );
}
