import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useCart } from "@/lib/cart";
import { useToast } from "@/hooks/use-toast";

export function SpotlightSection() {
  const { addItem } = useCart();
  const { toast } = useToast();

  return (
    <section className="py-16 sm:py-24 bg-[#F5F1E8]" data-testid="section-spotlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4816F] mb-2 font-semibold" data-testid="text-spotlight-label">
                Bestseller
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#2D5F3F]" data-testid="text-spotlight-heading">
                Hair Growth Oil
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base" data-testid="text-spotlight-description">
              Our concentrated blend of rosemary oil, castor oil, and biotin is formulated to
              stimulate hair follicles, strengthen roots, and promote healthy, natural hair growth.
              Perfect for postpartum hair loss and thinning edges.
            </p>

            <p className="text-lg font-semibold text-[#2D5F3F]" data-testid="text-spotlight-price">
              $30.00 <span className="text-sm font-normal text-muted-foreground">/ 100ml</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-[#D4AF37] hover:bg-[#B8962F] text-black uppercase tracking-wider font-semibold"
                onClick={() => {
                  addItem("hair-growth-oil");
                  toast({ title: "Added to cart", description: "Hair Growth Oil has been added to your cart." });
                }}
                data-testid="button-spotlight-add"
              >
                Add to Cart
              </Button>
              <Link href="/product/hair-growth-oil">
                <Button variant="outline" className="uppercase tracking-wider" data-testid="button-spotlight-details">
                  View Details
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/product/hair-growth-oil">
              <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-lg cursor-pointer">
                <img
                  src="/images/product-oil-hero.jpg"
                  alt="Hair Qure Hair Growth Oil"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  data-testid="img-spotlight-product"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
