"use client";

import { ArrowLeft, Clock, Users } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import Image from "next/image";

interface RecipePageComponentProps {
  title: string;
  description: string;
  ingredients: string[];
  directions: string[];
  quote?: string;
  image: string;
  prepTime: string;
  servings: string;
}

export function RecipePageComponent({
  title,
  description,
  ingredients,
  directions,
  quote,
  image,
  prepTime,
  servings,
}: RecipePageComponentProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => (window.location.href = "/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Recipes
        </Button>

        {/* Recipe Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-domine text-3xl font-bold leading-tight md:text-4xl">
            {title}
          </h1>
          <p className="mb-4 text-lg text-muted-foreground">{description}</p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-red-600">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {prepTime}
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {servings}
            </span>
          </div>
        </div>

        {/* Recipe Image */}
        <div className="mb-8 aspect-[4/3]">
          <Image
            src={image}
            alt="Roasted Tomato Soup"
            className="h-full w-full rounded-lg object-cover"
            width={1000}
            height={1000}
          />
        </div>
        {quote && (
          <>
            <section className="text-center italic text-muted-foreground">
              {quote}
            </section>
            <Separator className="my-8 bg-gray-800" />
          </>
        )}

        {/* Ingredients */}
        <section className="mb-8">
          <h2 className="mb-4 font-domine text-2xl font-bold">Ingredients</h2>
          <ul className="space-y-4">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center">
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        <Separator className="my-8 bg-gray-800" />

        {/* Preparation */}
        <section className="mb-6">
          <h2 className="mb-4 font-domine text-2xl font-bold">Preparation</h2>
          <ol className="space-y-4">
            {directions.map((step, index) => (
              <li key={index} className="flex">
                <span className="mr-4 font-bold">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
