import { serial, text, timestamp, pgTableCreator } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `dad_dishes_${name}`);

export const recipes = createTable("recipes", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  cookingTime: text("cooking_time").notNull(),
  servings: text("servings").notNull(),
  ingredients: text("ingredients").array().notNull(),
  directions: text("directions").array().notNull(),
  tags: text("tags").array().notNull().default([]),
  quote: text("quote"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Recipe = typeof recipes.$inferSelect;
export type NewRecipe = typeof recipes.$inferInsert;
