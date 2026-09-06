import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Link } from "wouter";
import { CheckCircle, Loader2, Check, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema, type InsertSubscriber } from "@shared/schema";

const guideIncludes = [
  "7-day hair growth action plan",
  "Best oils for your hair type",
  "Scalp massage techniques for growth",
  "Postpartum hair recovery tips",
  "Protective styling guide",
  "Daily & weekly routine templates",
  "Ingredient checklist (what to use & what to avoid)",
];

export default function Guide() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Free Hair Growth Guide — HairQure";
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "", name: null },
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const res = await apiRequest("POST", "/api/subscribe", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
    },
    onError: (error: Error) => {
      if (error.message.includes("already")) {
        setSubmitted(true);
      } else {
        toast({
          title: "Something went wrong",
          description: error.message || "Please try again.",
          variant: "destructive",
        });
      }
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="bg-[#2D5F3F] py-12 sm:py-16 text-center text-white">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold" data-testid="text-guide-heading">
            Free 7-Day Hair Growth Kickstart Guide
          </h1>
          <p className="text-white/70 mt-3 max-w-lg mx-auto px-4">
            Everything you need to start your hair growth journey — delivered straight to your inbox.
          </p>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D5F3F]">
                What's Inside the Guide
              </h2>
              <ul className="space-y-3">
                {guideIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="h-5 w-5 text-[#2D5F3F] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground italic">
                Plus, you'll get 15% off your first HairQure order.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#F5F1E8] rounded-lg p-8 flex flex-col items-center justify-center text-center"
              data-testid="guide-form-card"
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-serif text-xl font-bold text-[#2D5F3F]">Guide Coming Soon</h3>
                  <p className="text-sm text-muted-foreground mt-1">We're currently updating our hair growth guide to bring you the best tips and routines. Check back soon!</p>
                </div>
                <Link href="/shop">
                  <Button
                    className="w-full h-12 bg-[#2D5F3F] hover:bg-[#1E412A] text-white uppercase tracking-wider font-semibold px-8"
                  >
                    Shop Our Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
