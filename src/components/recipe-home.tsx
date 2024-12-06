import { db } from "~/db";
import { sql } from "drizzle-orm";
import { FeaturedRecipe } from "./featured-recipe";
import { recipes } from "~/db/schema";
import { CategoryRow } from "./category-row";

export async function RecipeHomeComponent() {
  const result = await db
    .select({
      count: sql`count(*)`.mapWith(Number),
    })
    .from(recipes);

  const count = result?.[0]?.count ?? 0;

  // Use the day of the year as seed
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // Get a deterministic "random" offset for today
  const offset = dayOfYear % count;

  // Get today's featured recipe
  const [featuredRecipe] = await db.query.recipes.findMany({
    limit: 1,
    offset: offset,
  });

  if (!featuredRecipe) {
    return null;
  }

  const taggedRecipes = await db.query.recipes.findMany({
    where: sql`array_length(tags, 1) > 0`,
    columns: {
      id: true,
      title: true,
      slug: true,
      image: true,
      description: true,
      cookingTime: true,
      servings: true,
      tags: true,
    },
    orderBy: sql`RANDOM()`,
  });

  // Group recipes by tag
  const recipesByTag = taggedRecipes.reduce(
    (acc, recipe) => {
      recipe.tags.forEach((tag) => {
        if (!acc[tag]) {
          acc[tag] = [];
        }
        acc[tag].push(recipe);
      });
      return acc;
    },
    {} as Record<string, typeof taggedRecipes>,
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-4 py-4 sm:py-8">
        <FeaturedRecipe recipe={featuredRecipe} />
        {Object.entries(recipesByTag).map(([tag, recipes]) => (
          <CategoryRow key={tag} title={tag} recipes={recipes} />
        ))}
      </main>
    </div>
  );
}
