import { type Recipe } from "~/db/schema";

export type RecipeCardData = Pick<
  Recipe,
  | "id"
  | "slug"
  | "title"
  | "description"
  | "image"
  | "cookingTime"
  | "servings"
  | "tags"
>;
