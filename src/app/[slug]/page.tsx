import { db } from "~/db";
import { recipes } from "~/db/schema";
import { eq } from "drizzle-orm";
import { RecipePageComponent } from "~/components/recipe-page";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function RecipePage({ params }: Props) {
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
