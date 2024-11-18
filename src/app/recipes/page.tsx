import { db } from "~/db";
import { recipes } from "~/db/schema";
import { RecipeGrid } from "~/components/recipe-grid";
import { SearchBar } from "~/components/search-bar";
import { TagFilter } from "~/components/tag-filter";
import { and, ilike, sql } from "drizzle-orm";

interface SearchPageProps {
  searchParams: {
    q?: string;
    tags?: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q, tags } = searchParams;
  const selectedTags = tags?.split(",").filter(Boolean) ?? [];

  // Get all unique tags for the filter
  const tagsResult = await db
    .select({ tag: sql`DISTINCT unnest(tags)` })
    .from(recipes);
  const allTags = tagsResult.map((r) => r.tag).filter(Boolean);

  // Build search conditions
  const conditions = [];
  if (q) {
    conditions.push(ilike(recipes.title, `%${q}%`));
  }
  if (selectedTags.length > 0) {
    // Create a single OR condition for all tags
    conditions.push(
      sql`(${sql.join(
        selectedTags.map((tag) => sql`${tag} = ANY(${recipes.tags})`),
        sql` OR `,
      )})`,
    );
  }

  const searchResults = await db.query.recipes.findMany({
    where: conditions.length > 0 ? and(...conditions) : undefined,
    orderBy: recipes.title,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-4 py-4 sm:py-8">
        <h1 className="font-domine text-3xl font-bold">Search Recipes</h1>

        <div className="mt-6 space-y-4">
          <SearchBar defaultValue={q} />
          <TagFilter availableTags={allTags} selectedTags={selectedTags} />
        </div>

        <RecipeGrid recipes={searchResults} />
      </main>
    </div>
  );
}
