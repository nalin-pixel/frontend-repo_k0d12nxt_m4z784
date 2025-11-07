import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Aria',
    text: 'Got my ML diamonds instantly. Smooth checkout and great pricing!'
  },
  {
    name: 'Jonas',
    text: 'Fast delivery for Valorant Points. Love the sleek interface.'
  },
  {
    name: 'Mika',
    text: 'Reliable and quick. The best place for top-ups, hands down.'
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">What players say</h2>
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-white/80">“{r.text}”</p>
              <div className="mt-4 text-sm text-white/60">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
