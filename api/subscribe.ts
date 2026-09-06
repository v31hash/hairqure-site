import type { VercelRequest, VercelResponse } from "@vercel/node";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { eq } from "drizzle-orm";
import { subscribers, insertSubscriberSchema } from "../shared/schema";
import { ZodError } from "zod";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ message: "Database not configured" });
  }

  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  try {
    const data = insertSubscriberSchema.parse(req.body);

    const [existing] = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, data.email));

    if (existing) {
      return res.status(409).json({ message: "This email is already subscribed." });
    }

    const [subscriber] = await db.insert(subscribers).values(data).returning();
    return res.status(201).json({ message: "Successfully subscribed!", subscriber });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ message: "Invalid email address." });
    }
    console.error("Subscribe error:", error);
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  } finally {
    await pool.end();
  }
}
