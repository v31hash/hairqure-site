import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShoppingBag, Check, Star, ChevronLeft, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { getProduct, products, formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const product = params?.id ? getProduct(params.id) : undefined;
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      document.title = `${product.name} — HairQure`;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
        <FooterSection />
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6" data-testid="link-back-shop">
            <ChevronLeft className="h-4 w-4" /> Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div data-testid="product-gallery">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted/20 mb-3">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  data-testid="img-product-main"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 overflow-hidden rounded border-2 transition-colors ${
                        selectedImage === i ? "border-[#2D5F3F]" : "border-transparent"
                      }`}
                      data-testid={`button-thumb-${i}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6" data-testid="product-info">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4816F] font-semibold mb-1">HairQure</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D5F3F]" data-testid="text-product-name">
                  {product.name}
                </h1>
                <p className="text-muted-foreground mt-2">{product.tagline}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(47 reviews)</span>
              </div>

              <p className="text-2xl font-bold text-[#2D5F3F]" data-testid="text-product-price">
                {formatPrice(product.price)}
                {product.size && <span className="text-sm font-normal text-muted-foreground ml-2">/ {product.size}</span>}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="p-2 hover:bg-muted transition-colors"
                    data-testid="button-qty-minus"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 text-sm font-medium min-w-[40px] text-center" data-testid="text-qty">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="p-2 hover:bg-muted transition-colors"
                    data-testid="button-qty-plus"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  size="lg"
                  className="flex-1 bg-[#D4AF37] hover:bg-[#B8962F] text-black uppercase tracking-wider font-semibold"
                  onClick={() => {
                    addItem(product.id, qty);
                    toast({ title: "Added to cart", description: `${qty}x ${product.name} added to your cart.` });
                  }}
                  data-testid="button-add-to-cart"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {["100% Natural", "Dermatologist Approved", "Safe for Breastfeeding", "Ships Worldwide"].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-[#2D5F3F]" />
                    {badge}
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6 space-y-4" data-testid="section-description">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-[#2D5F3F]">The Problem</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description.problem}</p>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-[#2D5F3F]">The Solution</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description.solution}</p>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-[#2D5F3F]">Key Benefits</h3>
                <ul className="space-y-2">
                  {product.description.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-[#2D5F3F] mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {product.ingredients.length > 0 && (
            <section className="mt-16 py-12 border-t border-border" data-testid="section-ingredients">
              <h2 className="font-serif text-2xl font-bold text-center text-[#2D5F3F] mb-8">Key Ingredients</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {product.ingredients.map((ing) => (
                  <div key={ing.name} className="text-center p-4 bg-[#F5F1E8] rounded-lg">
                    <p className="font-semibold text-sm text-[#2D5F3F]">{ing.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{ing.benefit}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.howToUse.length > 0 && (
            <section className="mt-12 py-12 border-t border-border" data-testid="section-how-to-use">
              <h2 className="font-serif text-2xl font-bold text-center text-[#2D5F3F] mb-8">How to Use</h2>
              <div className="max-w-2xl mx-auto space-y-4">
                {product.howToUse.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2D5F3F] text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm text-muted-foreground pt-1.5">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.timeline.length > 0 && (
            <section className="mt-12 py-12 border-t border-border" data-testid="section-timeline">
              <h2 className="font-serif text-2xl font-bold text-center text-[#2D5F3F] mb-8">What to Expect</h2>
              <div className="max-w-2xl mx-auto space-y-4">
                {product.timeline.map((t) => (
                  <div key={t.period} className="flex gap-4 p-4 bg-[#F5F1E8] rounded-lg">
                    <span className="font-bold text-sm text-[#D4AF37] min-w-[80px]">{t.period}</span>
                    <p className="text-sm text-muted-foreground">{t.result}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.perfectFor.length > 0 && (
            <section className="mt-12 py-12 border-t border-border" data-testid="section-perfect-for">
              <h2 className="font-serif text-2xl font-bold text-center text-[#2D5F3F] mb-6">Perfect For</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {product.perfectFor.map((p) => (
                  <span key={p} className="px-4 py-2 bg-[#2D5F3F]/10 text-[#2D5F3F] rounded-full text-sm font-medium">{p}</span>
                ))}
              </div>
            </section>
          )}

          {product.faqs.length > 0 && (
            <section className="mt-12 py-12 border-t border-border" data-testid="section-faq">
              <h2 className="font-serif text-2xl font-bold text-center text-[#2D5F3F] mb-8">Frequently Asked Questions</h2>
              <div className="max-w-2xl mx-auto">
                <Accordion type="single" collapsible>
                  {product.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left text-sm font-medium" data-testid={`faq-trigger-${i}`}>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground" data-testid={`faq-content-${i}`}>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
          )}

          <section className="mt-12 py-12 border-t border-border" data-testid="section-related">
            <h2 className="font-serif text-2xl font-bold text-center text-[#2D5F3F] mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`} className="group" data-testid={`related-${p.id}`}>
                  <div className="aspect-square overflow-hidden rounded-lg bg-muted/20 mb-3">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="text-sm font-medium text-center">{p.name}</h3>
                  <p className="text-sm text-center text-muted-foreground">{formatPrice(p.price)}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
