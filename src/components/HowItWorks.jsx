import { ShieldCheck, Zap, CreditCard } from 'lucide-react';

const steps = [
  {
    title: 'Pick your game',
    desc: 'Choose a voucher or top-up package',
    Icon: Zap,
  },
  {
    title: 'Secure checkout',
    desc: 'Pay with trusted global methods',
    Icon: CreditCard,
  },
  {
    title: 'Instant delivery',
    desc: 'Codes appear in seconds, with 24/7 support',
    Icon: ShieldCheck,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-gradient-to-b from-black to-[#0a0a0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-white/70 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
