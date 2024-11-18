import { db } from "~/db";
import { sql } from "drizzle-orm";
import { FeaturedRecipe } from "./featured-recipe";
import { RecipeGrid } from "./recipe-grid";
import { recipes, tags } from "~/db/schema";
import { CategoryRow } from "./category-row";

export async function RecipeHomeComponent() {
  const result = await db
    .select({
      count: sql`count(*)`.mapWith(Number),
    })
    .from(recipes);

  const count = result?.[0]?.count ?? 0;

  // Use the current date as a seed for random selection
  const today = new Date();
  const dailySeed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

  // Get a deterministic "random" offset for today
  const offset = dailySeed % count;

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
  console.log(recipesByTag);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-4 py-4 sm:py-8">
        <FeaturedRecipe recipe={featuredRecipe} />
        {Object.entries(recipesByTag).map(([tag, recipes]) => (
          <CategoryRow
            key={tag}
            title={tag}
            recipes={recipes} // Limit to 6 recipes per category
          />
        ))}
      </main>
    </div>
  );
}
