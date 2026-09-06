import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function StorySection() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-background" data-testid="section-story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4816F] mb-2 font-semibold">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#2D5F3F]" data-testid="text-story-heading">
                You Grew a Human.{" "}
                <span className="block">Now Grow Your Hair Back.</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base" data-testid="text-story-description">
              HairQure was born from a mother's love. In 2018, founder Miss K's daughter experienced 
              severe hair loss after a harmful chemical treatment. What started as a desperate search 
              for natural solutions became a mission to help thousands of women — especially postpartum 
              mothers and women of all hair types — reclaim their hair and their confidence.
            </p>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base italic">
              "I couldn't find products that were both effective and safe. So I created them."
              <span className="block not-italic mt-1 font-semibold text-foreground text-xs">— Miss K, Founder</span>
            </p>

            <Link href="/about">
              <Button
                variant="outline"
                className="uppercase tracking-[0.15em] text-sm"
                data-testid="button-learn-more"
              >
                Read Our Full Story
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none overflow-hidden rounded-lg">
              <img
                src="/images/missk-daughter.jpg"
                alt="Miss K and her daughter wearing HairQure bonnets"
                className="w-full h-full object-cover"
                data-testid="img-story"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
