"use client";

import {
  ArrowLeft,
  Bookmark,
  Clock,
  Printer,
  Share2,
  Users,
} from "lucide-react";
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
}

export function RecipePageComponent({
  title,
  description,
  ingredients,
  directions,
  quote,
  image,
}: RecipePageComponentProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-gray-800 bg-black">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white"
            onClick={() => (window.location.href = "/")}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Button>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Bookmark className="h-5 w-5" />
              <span className="sr-only">Save recipe</span>
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share recipe</span>
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Printer className="h-5 w-5" />
              <span className="sr-only">Print recipe</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-8">
        {/* Recipe Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-serif text-3xl font-bold leading-tight md:text-4xl">
            {title}
          </h1>
          <div className="mb-4 text-gray-400">A Family Recipe</div>
          <p className="mb-4 text-lg text-gray-300">{description}</p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              75 minutes
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" />6 servings
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

        {/* Ingredients */}
        <section className="mb-8">
          <h2 className="mb-4 font-serif text-2xl font-bold">Ingredients</h2>
          <ul className="space-y-4">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center">
                {/* <span className="mr-2 h-5 w-5 rounded border border-gray-600"></span> */}
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        <Separator className="my-8 bg-gray-800" />

        {/* Preparation */}
        <section>
          <h2 className="mb-4 font-serif text-2xl font-bold">Preparation</h2>
          <ol className="space-y-4">
            {directions.map((step, index) => (
              <li key={index} className="flex">
                <span className="mr-4 font-bold">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {quote && (
          <>
            <Separator className="my-8 bg-gray-800" />
            <section className="text-center italic text-gray-400">
              {quote}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
