export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  currency: string;
  image: string;
  images: string[];
  category: "hair-care" | "accessories";
  description: {
    problem: string;
    solution: string;
    benefits: string[];
  };
  ingredients: { name: string; benefit: string }[];
  howToUse: string[];
  timeline: { period: string; result: string }[];
  perfectFor: string[];
  size?: string;
  faqs: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    id: "hair-growth-oil",
    name: "Hair Growth Oil",
    tagline: "Restore your edges and stimulate growth with rosemary oil, castor oil, and biotin.",
    price: 30,
    currency: "USD",
    image: "/images/product-oil.jpg",
    images: ["/images/product-oil.jpg", "/images/product-oil-hero.jpg", "/images/hero-oil.png"],
    category: "hair-care",
    size: "100ml",
    description: {
      problem: "Postpartum hair loss, thinning edges, and breakage can steal your confidence. Chemical treatments and stress make it worse, leaving you feeling helpless about your hair health.",
      solution: "Hair Qure Hair Growth Oil is a concentrated blend of nutrient-rich oils and plant-based extracts formulated to support healthy, natural hair growth. Packed with essential fatty acids, antioxidants, and strengthening botanicals, it helps nourish the scalp, reduce breakage, and improve overall hair density.",
      benefits: [
        "Stimulates hair follicles for new growth",
        "Strengthens hair from root to tip",
        "Reduces breakage and hair fall",
        "Nourishes scalp with essential nutrients",
        "100% natural, dermatologist-approved formula",
        "Safe for breastfeeding mothers",
      ],
    },
    ingredients: [
      { name: "Rosemary Oil", benefit: "Stimulates blood circulation to scalp" },
      { name: "Castor Oil", benefit: "Strengthens roots and promotes thickness" },
      { name: "Biotin", benefit: "Supports keratin production for stronger hair" },
      { name: "Argan Oil", benefit: "Deep moisture and shine" },
      { name: "Peppermint Oil", benefit: "Refreshes scalp and stimulates growth" },
      { name: "Vitamin E", benefit: "Antioxidant protection for hair follicles" },
    ],
    howToUse: [
      "Apply a small amount to fingertips",
      "Massage into scalp using circular motions for 2-3 minutes",
      "Work remaining oil through hair lengths",
      "Leave on for at least 30 minutes or overnight for best results",
      "Wash out with gentle shampoo",
    ],
    timeline: [
      { period: "Week 1-2", result: "Scalp feels nourished, less dryness and itching" },
      { period: "Week 3-4", result: "Reduced hair fall, stronger strands" },
      { period: "Week 6-8", result: "Visible new baby hairs and improved density" },
    ],
    perfectFor: ["Postpartum mothers", "Thinning edges", "Natural hair growth", "Protective styles", "Heat damage recovery"],
    faqs: [
      { question: "Is this safe during breastfeeding?", answer: "Yes! All our ingredients are 100% natural and safe for breastfeeding mothers. We never use harsh chemicals or synthetic fragrances." },
      { question: "How often should I use it?", answer: "For best results, use 2-3 times per week. Consistency is key to seeing visible results." },
      { question: "When will I see results?", answer: "Most customers notice reduced hair fall within 2-3 weeks and visible new growth within 6-8 weeks of consistent use." },
      { question: "Is this dermatologist approved?", answer: "Yes, all HairQure products are dermatologist approved and made with 100% natural ingredients." },
    ],
  },
  {
    id: "whipped-hair-butter",
    name: "Whipped Hair Butter Cream",
    tagline: "Deep moisture and repair with shea butter, coconut oil, and vitamin E.",
    price: 20,
    currency: "USD",
    image: "/images/product-butter.jpg",
    images: ["/images/product-butter.jpg", "/images/butter-oil.jpg", "/images/butter-open.jpg", "/images/butter-studio.jpg"],
    category: "hair-care",
    size: "200g",
    description: {
      problem: "Dry, brittle hair that breaks easily and lacks moisture. Traditional creams weigh hair down or contain harmful chemicals that do more damage than good.",
      solution: "Our Whipped Hair Butter Cream penetrates the hair shaft for lasting hydration without the heavy, greasy feel. Made with pure shea butter and coconut oil, it seals in moisture and repairs damaged strands.",
      benefits: [
        "Deep hydration that lasts all day",
        "Repairs and strengthens damaged hair",
        "Lightweight, non-greasy formula",
        "Defines curls and reduces frizz",
        "100% natural, no harsh chemicals",
        "Locks in moisture for protective styles",
      ],
    },
    ingredients: [
      { name: "Shea Butter", benefit: "Intense moisture and protection" },
      { name: "Coconut Oil", benefit: "Penetrates hair shaft for deep conditioning" },
      { name: "Vitamin E", benefit: "Repairs and prevents damage" },
      { name: "Jojoba Oil", benefit: "Balances scalp oils naturally" },
      { name: "Aloe Vera", benefit: "Soothes scalp and promotes growth" },
      { name: "Avocado Oil", benefit: "Rich in proteins for hair strength" },
    ],
    howToUse: [
      "Scoop a small amount with fingertips",
      "Warm between palms until melted",
      "Apply to damp or dry hair, section by section",
      "Focus on ends and areas prone to dryness",
      "Style as desired — twist, braid, or wear loose",
    ],
    timeline: [
      { period: "Day 1", result: "Instantly softer, more manageable hair" },
      { period: "Week 1-2", result: "Noticeable reduction in breakage and dryness" },
      { period: "Week 4+", result: "Healthier, stronger hair with defined texture" },
    ],
    perfectFor: ["Dry, brittle hair", "Curl definition", "Protective styles", "Natural hair moisture", "Post-wash styling"],
    faqs: [
      { question: "Can I use this on my child's hair?", answer: "Absolutely! Our butter cream is gentle enough for children and made with all-natural ingredients." },
      { question: "Will this make my hair greasy?", answer: "No! Our whipped formula is lightweight and absorbs quickly without leaving a greasy residue." },
      { question: "How long does a jar last?", answer: "With regular use (3-4 times per week), one jar typically lasts 6-8 weeks." },
    ],
  },
  {
    id: "herbal-hair-mist",
    name: "Herbal Hair Mist",
    tagline: "Lightweight, water-based refresh between washes. Hydrates without buildup.",
    price: 15,
    currency: "USD",
    image: "/images/product-mist-oil.jpg",
    images: ["/images/product-mist-oil.jpg", "/images/product-mist.png"],
    category: "hair-care",
    size: "150ml",
    description: {
      problem: "Between washes, hair gets dry, flat, and loses its freshness. Heavy sprays cause buildup and weigh your hair down.",
      solution: "Our Herbal Hair Mist is a lightweight, water-based formula that refreshes and hydrates your hair without any buildup. Infused with herbal extracts, it revives curls, adds shine, and keeps your hair feeling fresh all day.",
      benefits: [
        "Instant hydration and refresh",
        "Zero buildup, lightweight formula",
        "Revives curls between washes",
        "Natural herbal fragrance",
        "Can be used daily",
        "Perfect for protective styles",
      ],
    },
    ingredients: [
      { name: "Rose Water", benefit: "Hydrates and adds natural shine" },
      { name: "Aloe Vera", benefit: "Soothes and moisturizes scalp" },
      { name: "Lavender Extract", benefit: "Calming fragrance, promotes growth" },
      { name: "Green Tea", benefit: "Antioxidant protection" },
      { name: "Glycerin", benefit: "Draws moisture into hair" },
      { name: "Chamomile", benefit: "Softens and conditions naturally" },
    ],
    howToUse: [
      "Shake bottle well before use",
      "Hold 6-8 inches from hair",
      "Mist evenly over hair, focusing on dry areas",
      "Scrunch curls or finger-comb through",
      "Use daily or as needed for refresh",
    ],
    timeline: [
      { period: "Instant", result: "Immediate hydration and refreshed curls" },
      { period: "Week 1-2", result: "Less dryness between wash days" },
      { period: "Week 4+", result: "Overall healthier, more hydrated hair" },
    ],
    perfectFor: ["Between washes", "Protective styles", "Daily refresh", "Curl revival", "Travel-friendly hydration"],
    faqs: [
      { question: "Can I use this every day?", answer: "Yes! It's lightweight enough for daily use without causing buildup." },
      { question: "Does it work on all hair types?", answer: "Yes, our mist is formulated to work on all hair types and textures." },
    ],
  },
  {
    id: "silk-bonnet-adult",
    name: "Silk Bonnet",
    tagline: "Protect your progress while you sleep. Zero friction, retains moisture, lasts 3x longer.",
    price: 25,
    currency: "USD",
    image: "/images/bonnet-black.jpg",
    images: ["/images/bonnet-black.jpg", "/images/bonnet-pink.jpg", "/images/product-bonnet.png"],
    category: "accessories",
    description: {
      problem: "Cotton pillowcases strip moisture from your hair overnight, causing frizz, breakage, and undoing all your styling work.",
      solution: "Our premium Silk Bonnet protects your hair while you sleep with zero-friction silk that retains moisture and preserves your style. Designed with an adjustable band for a comfortable fit all night.",
      benefits: [
        "Zero friction — prevents breakage",
        "Retains moisture all night",
        "Preserves hairstyles and braids",
        "Premium silk lasts 3x longer than satin",
        "Adjustable band for comfort",
        "Available in multiple colors",
      ],
    },
    ingredients: [],
    howToUse: [
      "Gather hair loosely on top of head",
      "Place bonnet over hair, tucking edges in",
      "Adjust elastic band for comfortable fit",
      "Wear every night for best results",
    ],
    timeline: [
      { period: "Night 1", result: "Wake up with frizz-free, moisturized hair" },
      { period: "Week 1", result: "Noticeable reduction in breakage" },
      { period: "Month 1+", result: "Healthier hair, styles last longer" },
    ],
    perfectFor: ["Protecting natural hair", "Preserving braids & twists", "Reducing overnight breakage", "Keeping moisture in", "All hair types"],
    faqs: [
      { question: "How do I wash the bonnet?", answer: "Hand wash in cold water with mild soap. Air dry flat. Avoid machine washing to preserve the silk." },
      { question: "Will it stay on while I sleep?", answer: "Yes! Our adjustable elastic band keeps the bonnet secure throughout the night." },
    ],
  },
  {
    id: "silk-bonnet-baby",
    name: "Baby Silk Bonnet",
    tagline: "Gentle protection for your little one's delicate hair. Ultra-soft silk for tiny heads.",
    price: 20,
    currency: "USD",
    image: "/images/missk-daughter.jpg",
    images: ["/images/missk-daughter.jpg"],
    category: "accessories",
    description: {
      problem: "Baby hair is delicate and prone to breakage from cotton sheets and rough fabrics. Many baby bonnets are made with synthetic materials that irritate sensitive skin.",
      solution: "Our Baby Silk Bonnet is specially sized for little ones, made with the same premium silk as our adult version but with extra-gentle elastic for tiny heads. Protects delicate baby hair while keeping them comfortable.",
      benefits: [
        "Ultra-soft silk, gentle on baby's skin",
        "Protects delicate baby hair",
        "Breathable and comfortable",
        "Gentle elastic won't leave marks",
        "Hypoallergenic material",
      ],
    },
    ingredients: [],
    howToUse: [
      "Gently place bonnet over baby's hair",
      "Ensure elastic sits comfortably, not too tight",
      "Use during naps and nighttime sleep",
    ],
    timeline: [
      { period: "Immediate", result: "Protects baby's hair from friction" },
      { period: "Ongoing", result: "Healthier hair growth with less breakage" },
    ],
    perfectFor: ["Babies & toddlers", "Protecting baby hair", "Gentle overnight care"],
    faqs: [
      { question: "What age is this for?", answer: "Our baby bonnet fits infants 3 months to 3 years. The gentle elastic adjusts to different head sizes." },
      { question: "Is the material safe for sensitive skin?", answer: "Yes! Our silk is hypoallergenic and free from any chemicals or dyes that could irritate sensitive baby skin." },
    ],
  },
];

export const bundles = [
  {
    id: "growth-kit",
    name: "Growth Kit",
    tagline: "Oil + Butter — the essential duo",
    products: ["hair-growth-oil", "whipped-hair-butter"],
    price: 42.50,
    originalPrice: 50,
    savings: 15,
    image: "/images/products-group.jpg",
  },
  {
    id: "complete-set",
    name: "Complete Set",
    tagline: "Oil + Butter + Mist — the full routine",
    products: ["hair-growth-oil", "whipped-hair-butter", "herbal-hair-mist"],
    price: 55.25,
    originalPrice: 65,
    savings: 15,
    image: "/images/products-studio.jpg",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
