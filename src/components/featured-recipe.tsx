import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import type { Recipe } from "~/db/schema";

interface FeaturedRecipeProps {
  recipe: Recipe;
}

export function FeaturedRecipe({ recipe }: FeaturedRecipeProps) {
  return (
    <section>
      <h2 className="font-domine mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">
        Featured Recipe
      </h2>

      <Link
        href={`/${recipe.slug}`}
        className="group block overflow-hidden rounded-lg sm:flex"
      >
        <div className="aspect-[16/9] w-full sm:w-[45%]">
          <Image
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1000}
            height={1000}
          />
        </div>

        <div className="p-4 sm:w-[55%] sm:p-6">
          <h3 className="font-domine mb-2 text-xl font-bold sm:text-2xl">
            {recipe.title}
          </h3>
          <p className="mb-4 text-muted-foreground">{recipe.description}</p>

          <div className="flex items-center gap-4 text-sm text-red-600">
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
    </section>
  );
}
