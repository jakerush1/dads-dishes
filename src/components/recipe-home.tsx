import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import { db } from "~/db";
import { sql } from "drizzle-orm";

export async function RecipeHomeComponent() {
  // Get total count of recipes
  const totalRecipes = await db.query.recipes.findMany({
    columns: { id: true },
  });

  // Get a random recipe as featured
  const randomIndex = Math.floor(Math.random() * totalRecipes.length);
  const featuredRecipe = await db.query.recipes.findFirst({
    offset: randomIndex,
  });

  if (!featuredRecipe) {
    return null;
  }

  const allRecipes = await db.query.recipes.findMany({
    orderBy: sql`RANDOM()`,
    where: (recipes, { ne }) => ne(recipes.id, featuredRecipe?.id ?? 0),
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-2 text-center font-serif text-4xl font-bold">
          Dad&apos;s Dishes
        </h1>
        <h2 className="mb-8 text-center font-serif text-xl text-gray-400">
          and random thoughts...
        </h2>

        <section>
          <h2 className="mb-6 font-serif text-2xl font-bold">
            Featured Recipe
          </h2>

          <Link
            href={`/${featuredRecipe.slug}`}
            className="group block overflow-hidden rounded-lg border border-gray-800"
          >
            <div className="aspect-[16/9] w-full">
              <Image
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={1000}
                height={1000}
              />
            </div>

            <div className="p-6">
              <h3 className="mb-2 font-serif text-2xl font-bold">
                {featuredRecipe.title}
              </h3>
              <p className="mb-4 text-gray-400">{featuredRecipe.description}</p>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featuredRecipe.cookingTime}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {featuredRecipe.servings}
                </span>
              </div>
            </div>
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 font-serif text-2xl font-bold">All Recipes</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {allRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/${recipe.slug}`}
                className="group block overflow-hidden rounded-lg border border-gray-800"
              >
                <div className="aspect-[16/9] w-full">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={1000}
                    height={1000}
                  />
                </div>

                <div className="p-4">
                  <h3 className="mb-2 font-serif text-xl font-bold">
                    {recipe.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-gray-400">
                    {recipe.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {recipe.cookingTime}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {recipe.servings}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
