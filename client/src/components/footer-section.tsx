import { Link } from "wouter";
import { SiInstagram, SiTiktok } from "react-icons/si";

export function FooterSection() {
  return (
    <footer className="bg-[#2D5F3F] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#D4AF37]" data-testid="text-footer-shop-heading">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/product/hair-growth-oil" className="hover:text-white transition-colors" data-testid="link-footer-oil">Hair Growth Oil</Link></li>
              <li><Link href="/product/whipped-hair-butter" className="hover:text-white transition-colors" data-testid="link-footer-butter">Hair Butter</Link></li>
              <li><Link href="/product/herbal-hair-mist" className="hover:text-white transition-colors" data-testid="link-footer-mist">Herbal Mist</Link></li>
              <li><Link href="/product/silk-bonnet-adult" className="hover:text-white transition-colors" data-testid="link-footer-bonnet">Silk Bonnets</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors" data-testid="link-footer-all">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#D4AF37]" data-testid="text-footer-company-heading">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/results" className="hover:text-white transition-colors" data-testid="link-footer-results">Results</Link></li>
              <li><a href="mailto:info@hairqure.ae" className="hover:text-white transition-colors" data-testid="link-footer-contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#D4AF37]" data-testid="text-footer-help-heading">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><span className="cursor-default" data-testid="link-footer-shipping">Shipping & Delivery</span></li>
              <li><span className="cursor-default" data-testid="link-footer-returns">Returns & Refunds</span></li>
              <li><span className="cursor-default" data-testid="link-footer-faq">FAQ</span></li>
              <li><span className="cursor-default" data-testid="link-footer-privacy">Privacy Policy</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#D4AF37]" data-testid="text-footer-connect-heading">
              Connect
            </h4>
            <div className="flex gap-4 mb-4">
              <a href="https://www.instagram.com/hairqureoil/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#D4AF37] transition-colors" data-testid="link-social-instagram"><SiInstagram className="h-5 w-5" /></a>
              <a href="https://www.tiktok.com/@hairqure" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#D4AF37] transition-colors" data-testid="link-social-tiktok"><SiTiktok className="h-5 w-5" /></a>
            </div>
            <p className="text-xs text-white/50">
              #HairQureJourney
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/images/logo.jpg" alt="Hair Qure" className="h-8 w-auto brightness-200" data-testid="img-footer-logo" />
          </div>
          <p className="text-xs text-white/50" data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} HairQure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
