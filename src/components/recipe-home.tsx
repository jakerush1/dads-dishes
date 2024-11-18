import { db } from "~/db";
import { sql } from "drizzle-orm";
import { FeaturedRecipe } from "./featured-recipe";
import { RecipeGrid } from "./recipe-grid";
import { recipes } from "~/db/schema";

export async function RecipeHomeComponent() {
  const result = await db
    .select({
      count: sql`count(*)`.mapWith(Number),
    })
    .from(recipes);

  const count = result?.[0]?.count ?? 0;

  // Get a random recipe
  const [featuredRecipe] = await db.query.recipes.findMany({
    limit: 1,
    offset: Math.floor(Math.random() * count),
  });

  if (!featuredRecipe) {
    return null;
  }

  const allRecipes = await db.query.recipes.findMany({
    orderBy: sql`RANDOM()`,
    where: (recipes, { ne }) => ne(recipes.id, featuredRecipe?.id ?? 0),
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-4 py-4 sm:py-8">
        <FeaturedRecipe recipe={featuredRecipe} />
        <RecipeGrid recipes={allRecipes} />
      </main>
    </div>
  );
}
