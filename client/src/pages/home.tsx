import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { SpotlightSection } from "@/components/spotlight-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { StorySection } from "@/components/story-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { FooterSection } from "@/components/footer-section";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "HairQure — Natural Hair Recovery for Mothers & Women of All Hair Types";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <SpotlightSection />
        <TestimonialsSection />
        <StorySection />
      </main>
      <FooterSection />
    </div>
  );
}
