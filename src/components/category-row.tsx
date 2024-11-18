import { type Recipe } from "~/db/schema";
import { RecipeCard } from "./recipe-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryRowProps {
  title: string;
  recipes: Pick<
    Recipe,
    | "id"
    | "slug"
    | "title"
    | "description"
    | "image"
    | "cookingTime"
    | "servings"
    | "tags"
  >[];
}

function getFriendlyTitle(title: string) {
  const friendlyTitleMap: Record<string, string> = {
    "30-minute-meal": "30-minutes and under",
    "main-dish": "Main dishes",
    appetizer: "Appetizers",
    sauce: "Sauces",
    soup: "Soups",
  };
  return friendlyTitleMap[title] ?? title;
}

export function CategoryRow({ title, recipes }: CategoryRowProps) {
  return (
    <section className="my-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">
          {getFriendlyTitle(title)}
        </h2>
        <Link
          href={`/recipes?tags=${title}`}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          View all <ArrowRight className="mb-0.5 inline-block h-4 w-4" />
        </Link>
      </div>

      <div className="relative">
        <div className="scrollbar-hide flex overflow-x-auto pb-4">
          <div className="flex gap-4">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="w-[280px] flex-none">
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
