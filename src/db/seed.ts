import { db } from "./index";
import { recipes } from "./schema";
import { readFileSync } from "fs";
import { join } from "path";

// Read and parse the JSON file
const recipesData = JSON.parse(
  readFileSync(join(process.cwd(), "src/db/recipes.json"), "utf-8"),
) as Array<{
  slug: string;
  title: string;
  description: string;
  image: string;
  cookingTime: string;
  servings: string;
  ingredients: string[];
  directions: string[];
  quote?: string;
}>;

async function seedRecipes() {
  for (const recipe of recipesData) {
    await db.insert(recipes).values(recipe);
  }
}

// Execute the seed
seedRecipes()
  .then(() => {
    console.log("Seeding completed successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  });
