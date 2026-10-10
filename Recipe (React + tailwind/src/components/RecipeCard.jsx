import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
  return (
    <article className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
      <Link to={`/recipes/${recipe.id}`} className="font-bold text-ink no-underline">
        {recipe.name}
      </Link>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.imageAlt ?? `An image of ${recipe.name}`}
          className="my-2 aspect-4/3 w-full rounded object-cover"
        />
      )}
      <p className="mb-4">{recipe.summary}</p>
    </article>
  )
}
