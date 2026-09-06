import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Leaf, Heart, Truck } from "lucide-react";

const trustBadges = [
  { icon: Heart, label: "3,000+ Mothers Transformed" },
  { icon: Leaf, label: "100% Natural" },
  { icon: Shield, label: "Dermatologist Approved" },
  { icon: Truck, label: "Ships Worldwide" },
];

export function HeroSection() {
  return (
    <section className="relative" data-testid="section-hero">
      <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          data-testid="video-hero"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" data-testid="text-hero-heading">
              Natural Hair Recovery for Mothers & Women of All Hair Types
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto" data-testid="text-hero-subheading">
              Postpartum hair loss? Thinning edges? Get your confidence back with clean, natural formulas made for every hair type.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#B8962F] text-black text-sm sm:text-base uppercase tracking-[0.15em] px-10 py-6 font-semibold"
                  data-testid="button-hero-shop"
                >
                  Shop Now
                </Button>
              </Link>
              <Link href="/guide">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white/10 text-sm sm:text-base uppercase tracking-[0.15em] px-10 py-6"
                  data-testid="button-hero-guide"
                >
                  Free Hair Guide
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#2D5F3F] py-4 px-4" data-testid="section-trust-badges">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center justify-center gap-2 text-white/90 text-xs sm:text-sm"
              data-testid={`badge-${badge.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
            >
              <badge.icon className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
              <span className="font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
