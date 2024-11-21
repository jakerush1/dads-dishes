import { db } from "~/db";
import { recipes } from "~/db/schema";
import { eq } from "drizzle-orm";
import { RecipePageComponent } from "~/components/recipe-page";
import { notFound } from "next/navigation";
import { type Metadata } from "next";

type Params = Promise<{ slug: string }>;

type Props = {
  params: Params;
};

function formatDuration(timeStr: string): string {
  const minutes = parseInt(timeStr);
  if (isNaN(minutes)) return timeStr;
  return `PT${minutes}M`;
}

export default async function RecipePage({ params }: Props) {
  const resolvedParams = await params;
  const recipe = await db.query.recipes.findFirst({
    where: eq(recipes.slug, resolvedParams.slug),
  });

  if (!recipe) {
    notFound();
  }

  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    image: recipe.image,
    author: {
      "@type": "Person",
      name: "Mark Rush",
    },
    datePublished: recipe.createdAt,
    prepTime: formatDuration(recipe.cookingTime),
    recipeYield: recipe.servings,
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.directions.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
      />
      <RecipePageComponent
        title={recipe.title}
        description={recipe.description}
        prepTime={recipe.cookingTime}
        servings={recipe.servings}
        ingredients={recipe.ingredients}
        directions={recipe.directions}
        quote={recipe.quote ?? undefined}
        image={recipe.image ?? undefined}
      />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const recipe = await db.query.recipes.findFirst({
    where: eq(recipes.slug, resolvedParams.slug),
  });

  if (!recipe) {
    return {
      title: "Recipe Not Found",
      description: "The requested recipe could not be found.",
    };
  }

  return {
    title: recipe.title,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      type: "article",
      images: [
        {
          url: recipe.image,
          width: 1200,
          height: 630,
          alt: recipe.title,
        },
      ],
    },
  };
}
