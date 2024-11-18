import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import type { Recipe } from "~/db/schema";

interface RecipeGridProps {
  recipes: Recipe[];
}

export function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <section className="mt-8 sm:mt-12">
      <h2 className="font-domine mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">
        All Recipes
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/${recipe.slug}`}
            className="group block overflow-hidden rounded-lg border border-accent"
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
              <h3 className="font-domine mb-2 text-xl font-bold">
                {recipe.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {recipe.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
  );
}
