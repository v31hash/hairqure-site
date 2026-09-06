import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Filter } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { products, bundles, formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useToast } from "@/hooks/use-toast";

type CategoryFilter = "all" | "hair-care" | "accessories";

export default function Shop() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const { addItem } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Shop — HairQure Natural Hair Care Products";
    window.scrollTo(0, 0);
  }, []);

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  const handleAdd = (id: string, name: string) => {
    addItem(id);
    toast({ title: "Added to cart", description: `${name} has been added to your cart.` });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="bg-[#2D5F3F] py-12 sm:py-16 text-center text-white">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold" data-testid="text-shop-heading">
            Our Products
          </h1>
          <p className="text-white/70 mt-3 max-w-lg mx-auto px-4">
            Clean, natural hair care — dermatologist approved and safe for breastfeeding mothers.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-8" data-testid="filter-bar">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {(["all", "hair-care", "accessories"] as CategoryFilter[]).map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={filter === cat ? "default" : "outline"}
                className={`text-xs uppercase tracking-wider ${filter === cat ? "bg-[#2D5F3F] hover:bg-[#234B31]" : ""}`}
                onClick={() => setFilter(cat)}
                data-testid={`filter-${cat}`}
              >
                {cat === "all" ? "All" : cat === "hair-care" ? "Hair Care" : "Accessories"}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group"
                data-testid={`card-product-${product.id}`}
              >
                <Link href={`/product/${product.id}`} className="block">
                  <div className="relative aspect-square overflow-hidden bg-muted/20 mb-3 rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="text-center space-y-2">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-sm sm:text-base font-medium hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-muted-foreground line-clamp-2">{product.tagline}</p>
                  <p className="text-sm font-semibold">{formatPrice(product.price)}</p>
                  <Button
                    size="sm"
                    className="text-xs uppercase tracking-wider bg-[#D4AF37] hover:bg-[#B8962F] text-black"
                    onClick={() => handleAdd(product.id, product.name)}
                    data-testid={`button-add-${product.id}`}
                  >
                    <ShoppingBag className="h-3.5 w-3.5 mr-1.5" />
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20" data-testid="section-bundles">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4816F] mb-2 font-semibold">Save More</p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D5F3F]">Product Bundles</h2>
              <p className="text-muted-foreground mt-2">Get the complete routine and save.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {bundles.map((bundle) => (
                <motion.div
                  key={bundle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border border-[#D4AF37]/30 rounded-lg overflow-hidden flex flex-col sm:flex-row bg-[#F5F1E8]"
                  data-testid={`card-bundle-${bundle.id}`}
                >
                  <div className="sm:w-1/3 aspect-square sm:aspect-auto overflow-hidden">
                    <img src={bundle.image} alt={bundle.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">Save {bundle.savings}%</span>
                    <h3 className="font-serif text-xl font-bold mt-1 text-[#2D5F3F]">{bundle.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{bundle.tagline}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="font-bold text-lg">{formatPrice(bundle.price)}</span>
                      <span className="text-sm text-muted-foreground line-through">{formatPrice(bundle.originalPrice)}</span>
                    </div>
                    <Button
                      size="sm"
                      className="mt-4 bg-[#D4AF37] hover:bg-[#B8962F] text-black uppercase tracking-wider text-xs w-fit"
                      onClick={() => {
                        bundle.products.forEach((pid) => addItem(pid));
                        toast({ title: "Bundle added", description: `${bundle.name} has been added to your cart.` });
                      }}
                      data-testid={`button-add-bundle-${bundle.id}`}
                    >
                      Add Bundle to Cart
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
