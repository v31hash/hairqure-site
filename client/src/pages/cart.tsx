import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Lock, Truck, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";

export default function Cart() {
  const { items, updateQuantity, removeItem, clearCart, subtotal, getProduct } = useCart();

  useEffect(() => {
    document.title = "Your Cart — HairQure";
    window.scrollTo(0, 0);
  }, []);

  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D5F3F]" data-testid="text-cart-heading">
              Your Cart
            </h1>
            <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1" data-testid="link-continue-shopping">
              <ArrowLeft className="h-4 w-4" /> Continue Shopping
            </Link>
          </div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 space-y-4"
              data-testid="section-empty-cart"
            >
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto" />
              <h2 className="font-serif text-xl font-bold text-[#2D5F3F]">Your cart is empty</h2>
              <p className="text-muted-foreground">Discover our natural hair care products and start your hair growth journey.</p>
              <Link href="/shop">
                <Button className="bg-[#D4AF37] hover:bg-[#B8962F] text-black uppercase tracking-wider font-semibold mt-4" data-testid="button-start-shopping">
                  Start Shopping
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4" data-testid="section-cart-items">
                {items.map((item) => {
                  const product = getProduct(item.productId);
                  if (!product) return null;
                  return (
                    <motion.div
                      key={item.productId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 p-4 bg-white rounded-lg border border-border"
                      data-testid={`cart-item-${item.productId}`}
                    >
                      <Link href={`/product/${product.id}`} className="flex-shrink-0">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded bg-muted/20">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link href={`/product/${product.id}`}>
                          <h3 className="font-medium text-sm sm:text-base hover:text-primary transition-colors" data-testid={`text-cart-name-${item.productId}`}>
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-0.5">{formatPrice(product.price)}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border border-border rounded">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              className="p-1.5 hover:bg-muted transition-colors"
                              data-testid={`button-cart-minus-${item.productId}`}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-3 text-sm font-medium" data-testid={`text-cart-qty-${item.productId}`}>{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="p-1.5 hover:bg-muted transition-colors"
                              data-testid={`button-cart-plus-${item.productId}`}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                            data-testid={`button-cart-remove-${item.productId}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <p className="font-semibold text-sm" data-testid={`text-cart-subtotal-${item.productId}`}>
                        {formatPrice(product.price * item.quantity)}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-[#F5F1E8] rounded-lg p-6 sticky top-24" data-testid="section-order-summary">
                  <h2 className="font-semibold text-lg text-[#2D5F3F] mb-4">Order Summary</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span data-testid="text-subtotal">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span data-testid="text-shipping">
                        {shipping === 0 ? (
                          <span className="text-[#2D5F3F] font-semibold">FREE</span>
                        ) : (
                          formatPrice(shipping)
                        )}
                      </span>
                    </div>
                    {subtotal > 0 && subtotal < 50 && (
                      <p className="text-xs text-[#D4816F]">
                        Add {formatPrice(50 - subtotal)} more for free shipping!
                      </p>
                    )}
                    <div className="border-t border-border pt-3 flex justify-between font-semibold text-base">
                      <span>Total</span>
                      <span data-testid="text-total">{formatPrice(total)}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6 bg-[#D4AF37] hover:bg-[#B8962F] text-black uppercase tracking-wider font-semibold py-6"
                    data-testid="button-checkout"
                  >
                    Proceed to Checkout
                  </Button>

                  <div className="mt-6 space-y-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Lock className="h-3.5 w-3.5" />
                      Secure checkout
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-3.5 w-3.5" />
                      Free shipping over $50
                    </div>
                    <div className="flex items-center gap-2">
                      <RotateCcw className="h-3.5 w-3.5" />
                      30-day money-back guarantee
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
