import { db } from "~/db";
import { recipes } from "~/db/schema";
import { eq } from "drizzle-orm";
import { RecipePageComponent } from "~/components/recipe-page";
import { notFound } from "next/navigation";

export default async function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = await db.query.recipes.findFirst({
    where: eq(recipes.slug, params.slug),
  });

  if (!recipe) {
    notFound();
  }

  return (
    <RecipePageComponent
      title={recipe.title}
      description={recipe.description}
      ingredients={recipe.ingredients}
      directions={recipe.directions}
      quote={recipe.quote ?? undefined}
      image={recipe.image ?? undefined}
    />
  );
}
