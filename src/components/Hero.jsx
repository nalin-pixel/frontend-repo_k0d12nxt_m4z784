import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[76vh] md:min-h-[82vh] bg-black text-white overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays that do not block interactions */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs md:text-sm text-white/80">Trusted by gamers worldwide</span>
            <span className="hidden sm:inline text-white/50">•</span>
            <span className="hidden sm:inline text-xs md:text-sm text-white/70">Instant delivery • 24/7 support</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Level up instantly with game vouchers and top‑ups
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg">
            Securely purchase credits for top titles across mobile and PC. Lightning‑fast codes, regional options, and exclusive promos inspired by premium marketplaces.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-purple-500/20 hover:from-purple-600 hover:to-blue-600 transition">
              Browse Top-ups
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/15 border border-white/10 transition">
              How it works
            </a>
          </div>

          {/* Popular brands reference strip */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {['Mobile Legends', 'Valorant', 'PUBG Mobile', 'Free Fire', 'Genshin Impact'].map((b) => (
              <span key={b} className="text-xs md:text-sm text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
