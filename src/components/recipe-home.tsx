"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import { TITLE, DESCRIPTION, IMAGE } from "~/app/roasted-tomato-soup/constants";

const FEATURED_RECIPE = {
  slug: "roasted-tomato-soup",
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  cookingTime: "75 minutes",
  servings: "6 servings",
};

export function RecipeHomeComponent() {
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
            href={`/${FEATURED_RECIPE.slug}`}
            className="group block overflow-hidden rounded-lg border border-gray-800"
          >
            <div className="aspect-[16/9] w-full">
              <Image
                src={FEATURED_RECIPE.image}
                alt={FEATURED_RECIPE.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={1000}
                height={1000}
              />
            </div>

            <div className="p-6">
              <h3 className="mb-2 font-serif text-2xl font-bold">
                {FEATURED_RECIPE.title}
              </h3>
              <p className="mb-4 text-gray-400">
                {FEATURED_RECIPE.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {FEATURED_RECIPE.cookingTime}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {FEATURED_RECIPE.servings}
                </span>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
