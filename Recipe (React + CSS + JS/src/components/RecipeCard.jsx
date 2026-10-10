import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <article>
      <Link to={`/recipe/${recipe.slug}`}>{recipe.name}</Link>
      <br />
      <img src={recipe.image} alt={recipe.imageAlt} />
      <p>{recipe.summary}</p>
    </article>
  );
}