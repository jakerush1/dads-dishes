import { db } from "~/db";
import { recipes } from "~/db/schema";
import { type MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allRecipes = await db
    .select({
      slug: recipes.slug,
      updatedAt: recipes.updatedAt,
    })
    .from(recipes);

  const recipeUrls = allRecipes.map((recipe) => ({
    url: `https://dads-dishes.vercel.app/${recipe.slug}`,
    lastModified: recipe.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const routes = [
    {
      url: "https://dads-dishes.vercel.app",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://dads-dishes.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://dads-dishes.vercel.app/getting-started",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://dads-dishes.vercel.app/recipes",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  return [...routes, ...recipeUrls];
}
