# HairQure - Natural Hair Growth E-Commerce Website

## Overview
HairQure is a high-converting, mobile-first e-commerce website for a natural hair growth brand targeting postpartum mothers, women of all hair types, and the natural hair community. Founded by "Miss K" after her daughter experienced hair loss from harmful chemicals.

## Current State
- Multi-page e-commerce website with 7 routes
- Cart system with localStorage persistence
- Newsletter/email capture with PostgreSQL
- Emerald green/terracotta/gold/cream color scheme
- Real product photography from brand photoshoot
- Built with React + Express + Drizzle ORM

## Architecture
- **Frontend**: React with Tailwind CSS, shadcn/ui components, Framer Motion animations, wouter routing
- **Backend**: Express.js with PostgreSQL (Drizzle ORM)
- **Cart**: Frontend-only with React Context + localStorage (no payment processing yet)
- **State**: TanStack React Query for API calls, CartContext for cart

## Pages & Routes
1. `/` - Homepage: Hero video, trust badges, product grid, spotlight, testimonials, founder story, newsletter
2. `/shop` - Shop: Product grid with filters, product bundles
3. `/product/:id` - Product Detail: Gallery, descriptions, ingredients, how-to-use, timeline, FAQ accordion, related products
4. `/about` - About Us: Founder story, brand values, CTA
5. `/results` - Results: Customer testimonials with stats and ratings
6. `/guide` - Free Hair Growth Guide: Lead magnet email capture
7. `/cart` - Cart: Line items, quantity control, order summary, shipping threshold

## Products (from client/src/lib/products.ts)
- Hair Growth Oil ($30) - rosemary, castor oil, biotin
- Whipped Hair Butter Cream ($20) - shea butter, coconut oil, vitamin E
- Herbal Hair Mist ($15) - rose water, aloe vera, lavender
- Silk Bonnet Adult ($25) - premium silk, adjustable band
- Baby Silk Bonnet ($20) - gentle silk for infants

## Bundles
- Growth Kit: Oil + Butter ($42.50, save 15%)
- Complete Set: Oil + Butter + Mist ($55.25, save 15%)

## Product Images (from brand zip)
- Images stored in client/public/images/
- Logo: logo.jpg
- Product photos: product-oil.jpg, product-mist-oil.jpg, product-butter.jpg, etc.
- Brand photos: missk-daughter.jpg, bonnet-black.jpg, bonnet-pink.jpg
- Hero video: hero-video.mp4

## API Endpoints
- `POST /api/subscribe` - Newsletter/waiting list + guide email capture

## Database
- `subscribers` table: id, email (unique), name, subscribed_at

## Design Tokens
- Font sans: Plus Jakarta Sans
- Font serif: Playfair Display
- Primary: Deep emerald green (#2D5F3F / HSL 150 35% 30%)
- Secondary: Warm terracotta (#D4816F / HSL 15 50% 63%)
- Accent: Gold (#D4AF37 / HSL 43 76% 52%)
- Neutrals: Cream (#F5F1E8), soft beige
- Theme: Clean, natural, modern aesthetic

## Brand Voice & Messaging
- Core message: "You grew a human. Now grow your hair back."
- Hero: "Natural Hair Recovery for Mothers & Women of All Hair Types"
- Trust badges: 3,000+ Mothers Transformed, 100% Natural, Dermatologist Approved, Ships Worldwide
- Target: Postpartum mothers (25-40), women of all hair types, natural hair enthusiasts (US, UK, Middle East)

## User Preferences
- Mobile-first, conversion-optimized
- Use actual brand product images (not generated)
- Brand colors: Emerald green, terracotta, gold
- Clean, modern, natural aesthetic
- Warm, empowering brand voice
