import { ShieldCheck, Globe, Headphones } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500" />
              <span className="font-semibold text-white text-lg tracking-wide">NeoTopUp</span>
            </div>
            <p className="text-white/70 max-w-xs">Premium marketplace for instant game vouchers and top-up credits worldwide.</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Support</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Payments</a></li>
                <li><a href="#" className="hover:text-white">Refunds</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 text-white/70"><ShieldCheck className="h-5 w-5" /> Buyer Protection</div>
          <div className="flex items-center gap-2 text-white/70"><Globe className="h-5 w-5" /> Global Regions</div>
          <div className="flex items-center gap-2 text-white/70"><Headphones className="h-5 w-5" /> 24/7 Support</div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} NeoTopUp. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
