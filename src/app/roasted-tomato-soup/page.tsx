import { RecipePageComponent } from "~/components/recipe-page";
import {
  TITLE,
  DESCRIPTION,
  INGREDIENTS,
  DIRECTIONS,
  QUOTE,
  IMAGE,
} from "./constants";

export default function RoastedTomatoSoupPage() {
  return (
    <RecipePageComponent
      title={TITLE}
      description={DESCRIPTION}
      ingredients={INGREDIENTS}
      directions={DIRECTIONS}
      quote={QUOTE}
      image={IMAGE}
    />
  );
}
