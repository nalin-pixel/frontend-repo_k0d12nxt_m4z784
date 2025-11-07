import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs md:text-sm text-white/80 mb-4">
            Futuristic top-ups • Instant delivery • 24/7 support
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Power up your play with instant game vouchers
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg">
            Buy game credits and top-ups for your favorite titles in seconds. Secure checkout, global coverage, and instant codes directly to your dashboard.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-purple-500/20 hover:from-purple-600 hover:to-blue-600 transition">
              Browse Top-ups
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/15 border border-white/10 transition">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
