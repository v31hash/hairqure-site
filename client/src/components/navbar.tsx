import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useCart } from "@/lib/cart";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="bg-[#2D5F3F] text-white text-center text-xs sm:text-sm py-2.5 px-4 font-medium tracking-wide"
        data-testid="announcement-bar"
      >
        Free Shipping on Orders Over $50 | 100% Natural | Dermatologist Approved
      </div>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
            : "bg-background border-b border-border/20"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="md:hidden" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 pt-12">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`text-left text-lg font-medium py-2 border-b border-border/30 ${
                        location === link.href ? "text-primary" : "text-foreground"
                      }`}
                      data-testid={`link-mobile-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/guide"
                    onClick={() => setOpen(false)}
                    className="text-left text-lg font-medium py-2 border-b border-border/30 text-foreground"
                    data-testid="link-mobile-guide"
                  >
                    Free Guide
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
              data-testid="link-logo"
            >
              <img
                src="/images/logo.jpg"
                alt="Hair Qure"
                className="h-12 sm:h-14 w-auto"
                data-testid="img-logo"
              />
            </Link>

            <div className="flex items-center gap-3">
              <Link href="/cart" className="relative" data-testid="link-cart">
                <ShoppingBag className="h-5 w-5 text-foreground" />
                {itemCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                    data-testid="text-cart-count"
                  >
                    {itemCount}
                  </span>
                )}
              </Link>
              <Link href="/shop">
                <Button
                  size="sm"
                  className="text-xs uppercase tracking-wider bg-[#2D5F3F] hover:bg-[#234B31] text-white hidden sm:flex"
                  data-testid="button-shop-now-nav"
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
