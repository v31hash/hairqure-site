import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShoppingBag } from "lucide-react";
import { products, formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useToast } from "@/hooks/use-toast";

export function ProductsSection() {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAdd = (id: string, name: string) => {
    addItem(id);
    toast({ title: "Added to cart", description: `${name} has been added to your cart.` });
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-background" data-testid="section-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#D4816F] mb-2 font-semibold">
            Our Products
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold" data-testid="text-products-heading">
            Clean, Natural Hair Care
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Every product is dermatologist approved, 100% natural, and safe for breastfeeding mothers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
              data-testid={`card-product-${product.id}`}
            >
              <Link href={`/product/${product.id}`} className="block">
                <div className="relative aspect-square overflow-hidden bg-muted/20 mb-3 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-testid={`img-product-${product.id}`}
                  />
                </div>
              </Link>
              <div className="text-center space-y-2">
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-sm sm:text-base font-medium hover:text-primary transition-colors" data-testid={`text-product-name-${product.id}`}>
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground" data-testid={`text-price-${product.id}`}>
                  {formatPrice(product.price)}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs uppercase tracking-wider"
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/shop">
            <Button
              variant="outline"
              className="uppercase tracking-[0.15em] text-sm px-8"
              data-testid="button-view-collection"
            >
              View Full Collection
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
