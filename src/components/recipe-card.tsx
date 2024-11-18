import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import type { Recipe } from "~/db/schema";

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

export function RecipeCard({ recipe, className = "" }: RecipeCardProps) {
  return (
    <Link
      href={`/${recipe.slug}`}
      className={`group block h-full overflow-hidden rounded-lg border border-accent transition-all duration-300 hover:shadow-md ${className}`}
    >
      <div className="aspect-[4/3] w-full">
        <Image
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={400}
          height={300}
        />
      </div>

      <div className="p-3">
        <h3 className="font-domine mb-1 line-clamp-1 text-base font-bold">
          {recipe.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {recipe.description}
        </p>

        <div className="mt-auto flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {recipe.cookingTime}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {recipe.servings}
          </span>
        </div>
      </div>
    </Link>
  );
}
