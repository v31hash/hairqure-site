import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/subscribe", async (req, res) => {
    try {
      const data = insertSubscriberSchema.parse(req.body);

      const existing = await storage.getSubscriberByEmail(data.email);
      if (existing) {
        return res.status(409).json({ message: "This email is already subscribed." });
      }

      const subscriber = await storage.createSubscriber(data);
      res.status(201).json({ message: "Successfully subscribed!", subscriber });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Invalid email address." });
      }
      console.error("Subscribe error:", error);
      res.status(500).json({ message: "Something went wrong. Please try again." });
    }
  });

  return httpServer;
}
