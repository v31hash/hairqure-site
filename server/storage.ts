import { eq } from "drizzle-orm";
import { db } from "./db";
import {
  subscribers,
  type InsertSubscriber,
  type Subscriber,
} from "@shared/schema";

export interface IStorage {
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const [result] = await db.insert(subscribers).values(subscriber).returning();
    return result;
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const [result] = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, email));
    return result;
  }
}

export const storage = new DatabaseStorage();
