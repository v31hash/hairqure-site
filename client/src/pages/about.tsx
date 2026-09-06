import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Heart, Leaf, Shield, Users } from "lucide-react";

const values = [
  { icon: Heart, title: "Born from Love", description: "Every product is created with the care of a mother who's been there." },
  { icon: Leaf, title: "100% Natural", description: "Only clean, natural ingredients. No sulfates, parabens, or harsh chemicals." },
  { icon: Shield, title: "Dermatologist Approved", description: "All formulas are dermatologist approved and safe for all hair types." },
  { icon: Users, title: "Community First", description: "Built by women, for women. 3,000+ mothers transformed and counting." },
];

export default function About() {
  useEffect(() => {
    document.title = "Our Story — HairQure";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="bg-[#2D5F3F] py-12 sm:py-16 text-center text-white">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold" data-testid="text-about-heading">
            Our Story
          </h1>
          <p className="text-white/70 mt-3 max-w-lg mx-auto px-4">
            Born from a mother's love. Built for every woman.
          </p>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4816F] font-semibold">The Beginning</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D5F3F]" data-testid="text-founder-heading">
                "I Couldn't Find Products That Were Both Effective and Safe. So I Created Them."
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base" data-testid="text-founder-story">
                <p>
                  In 2018, Miss K's daughter experienced a severe reaction to a hair treatment. The stylist 
                  used a product that either had expired or contained harmful chemicals, causing her hair to 
                  fall out in large clumps, leaving her almost bald.
                </p>
                <p>
                  As a mother, watching her child lose her hair was devastating. Miss K searched everywhere for 
                  natural solutions that would be safe and effective — but found that most products on the market 
                  were either filled with chemicals or simply didn't work.
                </p>
                <p>
                  That's when she decided to create her own. Drawing on traditional hair care wisdom and modern 
                  research into natural ingredients, Miss K developed formulas that would eventually become HairQure — 
                  products that are 100% natural, dermatologist approved, and truly effective.
                </p>
                <p>
                  Today, HairQure has helped over 3,000 women — postpartum mothers, women of all hair types, and natural 
                  hair enthusiasts — reclaim their hair and their confidence. Every product is still made with the 
                  same love and care that started it all.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src="/images/missk-daughter.jpg"
                  alt="Miss K and her daughter"
                  className="w-full h-full object-cover"
                  data-testid="img-founder"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#F5F1E8] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4816F] font-semibold mb-2">What We Stand For</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D5F3F]">Our Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center"
                  data-testid={`card-value-${i}`}
                >
                  <div className="w-12 h-12 bg-[#2D5F3F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon className="h-6 w-6 text-[#2D5F3F]" />
                  </div>
                  <h3 className="font-semibold mb-2 text-[#2D5F3F]">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-[#2D5F3F] mb-4">Start Your Journey</h2>
            <p className="text-muted-foreground mb-8">
              Join 3,000+ women who have transformed their hair with clean, natural care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/shop">
                <Button className="bg-[#D4AF37] hover:bg-[#B8962F] text-black uppercase tracking-wider font-semibold px-8" data-testid="button-about-shop">
                  Shop Now
                </Button>
              </Link>
              <Link href="/results">
                <Button variant="outline" className="uppercase tracking-wider px-8" data-testid="button-about-results">
                  See Results
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
