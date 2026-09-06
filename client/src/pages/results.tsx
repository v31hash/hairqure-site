import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    quote: "8 weeks after having my baby, my hair was falling out in clumps. After 6 weeks using HairQure oil, I have baby hairs everywhere!",
    rating: 5,
    concern: "Postpartum Recovery",
    product: "Hair Growth Oil",
  },
  {
    id: 2,
    name: "Aisha K.",
    quote: "My edges are BACK. I thought they were gone forever. The oil and butter combination is incredible.",
    rating: 5,
    concern: "Edge Restoration",
    product: "Growth Kit",
  },
  {
    id: 3,
    name: "Fatima R.",
    quote: "Finally, natural hair care that actually works. I've tried everything and HairQure is the only thing that's made a real difference.",
    rating: 5,
    concern: "All Hair Types",
    product: "Complete Set",
  },
  {
    id: 4,
    name: "Nadia S.",
    quote: "The whipped butter is a game changer. My curls have never been more defined and moisturized. I use it every wash day.",
    rating: 5,
    concern: "Thickness",
    product: "Whipped Hair Butter",
  },
  {
    id: 5,
    name: "Layla M.",
    quote: "I started using HairQure after my second baby. Within 8 weeks, the hair fall stopped completely and I can see new growth along my hairline.",
    rating: 5,
    concern: "Postpartum Recovery",
    product: "Hair Growth Oil",
  },
  {
    id: 6,
    name: "Zahra H.",
    quote: "The herbal mist is perfect for refreshing my hair under hijab. Light, hydrating, and smells amazing. No buildup at all.",
    rating: 5,
    concern: "Hijab Hair",
    product: "Herbal Hair Mist",
  },
  {
    id: 7,
    name: "Mariam A.",
    quote: "I was skeptical at first, but the results speak for themselves. My hair feels so much thicker and the shedding has decreased significantly.",
    rating: 5,
    concern: "Volume",
    product: "Hair Growth Oil",
  },
  {
    id: 8,
    name: "Amira J.",
    quote: "The silk bonnet is so comfortable and actually stays on all night! My hair is much less frizzy in the mornings.",
    rating: 5,
    concern: "Maintenance",
    product: "Silk Bonnet",
  },
  {
    id: 9,
    name: "Khadija B.",
    quote: "I love that these products are all-natural. I feel safe using them while breastfeeding and my hair has never looked better.",
    rating: 5,
    concern: "Safety",
    product: "Growth Kit",
  },
  {
    id: 10,
    name: "Sana T.",
    quote: "The difference in my daughter's hair is amazing. It's so much more manageable and growing so fast now.",
    rating: 5,
    concern: "Kids Hair Care",
    product: "Baby Silk Bonnet",
  },
  {
    id: 11,
    name: "Zainab F.",
    quote: "Finally found a routine that works for my 4C hair. The butter keeps my moisture locked in for days.",
    rating: 5,
    concern: "Moisture",
    product: "Whipped Hair Butter",
  },
  {
    id: 12,
    name: "Hala D.",
    quote: "Amazing products! My edges started filling in after just 3 weeks of consistent use with the oil.",
    rating: 5,
    concern: "Edges",
    product: "Hair Growth Oil",
  }
];

const videoTestimonials = [
  { id: 1, thumbnail: "/images/products-studio.jpg", title: "Postpartum Journey" },
  { id: 2, thumbnail: "/images/butter-studio.jpg", title: "Edge Restoration" },
  { id: 3, thumbnail: "/images/products-group.jpg", title: "Daily Routine" },
];

const stats = [
  { value: "3,000+", label: "Mothers Transformed" },
  { value: "92%", label: "Saw Results in 8 Weeks" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "100%", label: "Natural Ingredients" },
];

export default function Results() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Customer Results — HairQure";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="bg-[#2D5F3F] py-12 sm:py-16 text-center text-white">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold" data-testid="text-results-heading">
            Real Results, Real Women
          </h1>
          <p className="text-white/70 mt-3 max-w-lg mx-auto px-4">
            See how HairQure is transforming hair for postpartum mothers and women of all hair types.
          </p>
        </div>

        <section className="bg-[#F5F1E8] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6" data-testid="section-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#2D5F3F]">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Testimonials Placeholder */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4816F] font-semibold mb-2">Watch the Transformation</p>
            <h2 className="font-serif text-3xl font-bold text-[#2D5F3F]">Video Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="relative aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden group cursor-pointer border border-border/50 shadow-sm">
                <img src={video.thumbnail} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" alt={video.title} />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-black fill-black ml-1" />
                  </div>
                  <p className="mt-4 text-white font-semibold text-lg drop-shadow-md">{video.title}</p>
                  <span className="text-white/80 text-xs uppercase tracking-widest mt-1">Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4816F] font-semibold mb-2">Community Stories</p>
            <h2 className="font-serif text-3xl font-bold text-[#2D5F3F]">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                data-testid={`card-testimonial-${t.id}`}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4 italic font-sans">"{t.quote}"</p>
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold">— {t.name}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-[#2D5F3F]/10 text-[#2D5F3F] px-2 py-1 rounded text-xs">{t.concern}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
                  Used: {t.product}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Image Modal removed as we're not using screenshots anymore */}

        <section className="py-16 text-center bg-[#2D5F3F] text-white">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold mb-4">Start Your Journey Today</h2>
            <p className="text-white/70 mb-8">
              Join thousands of women who have reclaimed their hair and their confidence.
            </p>
            <Link href="/shop">
              <Button className="bg-[#D4AF37] hover:bg-[#B8962F] text-black uppercase tracking-wider font-semibold px-10 py-6 text-base" data-testid="button-results-shop">
                Shop Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
