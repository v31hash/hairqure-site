import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";
import { Link } from "wouter";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    quote: "8 weeks after having my baby, my hair was falling out in clumps. After 6 weeks using HairQure oil, I have baby hairs everywhere!",
    rating: 5,
    tag: "Postpartum Recovery",
  },
  {
    id: 2,
    name: "Aisha K.",
    quote: "My edges are BACK. I thought they were gone forever. The oil and butter combination is incredible.",
    rating: 5,
    tag: "Edge Restoration",
  },
  {
    id: 3,
    name: "Fatima R.",
    quote: "Finally, natural hair care that actually works. I've tried everything and HairQure is the only thing that's made a real difference.",
    rating: 5,
    tag: "All Hair Types",
  },
  {
    id: 4,
    name: "Layla M.",
    quote: "I started using HairQure after my second baby. Within 8 weeks, the hair fall stopped completely and I can see new growth along my hairline.",
    rating: 5,
    tag: "Postpartum Recovery",
  },
  {
    id: 5,
    name: "Zainab F.",
    quote: "Finally found a routine that works for my 4C hair. The butter keeps my moisture locked in for days.",
    rating: 5,
    tag: "Moisture Retention",
  },
  {
    id: 6,
    name: "Hala D.",
    quote: "Amazing products! My edges started filling in after just 3 weeks of consistent use with the oil.",
    rating: 5,
    tag: "Edge Restoration",
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#2D5F3F] text-white" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-semibold">
            Real Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            What Our Community Says
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 flex flex-col"
              data-testid={`card-testimonial-${t.id}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed mb-6 italic font-sans text-sm sm:text-base">"{t.quote}"</p>
              <div className="flex items-center justify-between mt-auto">
                <p className="font-semibold text-sm">— {t.name}</p>
                <span className="text-[10px] bg-white/20 px-2 py-1 rounded uppercase tracking-wider">{t.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials Mini Gallery */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl font-bold text-white">Watch Real Results</h3>
            <p className="text-white/70 text-sm mt-2 font-light">See the HairQure difference in action</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4].map((v) => (
               <div key={v} className="relative aspect-[9/16] bg-white/5 rounded-lg overflow-hidden group cursor-pointer border border-white/10">
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 text-black fill-black ml-0.5" />
                    </div>
                    <span className="text-[10px] text-white/80 uppercase tracking-widest mt-3">Coming Soon</span>
                 </div>
               </div>
             ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/results">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#2D5F3F] uppercase tracking-widest text-xs px-8">
              View All Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
