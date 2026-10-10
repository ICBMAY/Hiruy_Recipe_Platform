import { Link, useParams } from 'react-router-dom'

const cellClass = 'border-b border-gray-300 px-4 py-2 text-left'

export default function RecipePage({ recipes }) {
  const { id } = useParams()
  const recipe = recipes.find((r) => r.id === id)

  if (!recipe) {
    return (
      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold">Recipe not found</h2>
        <Link to="/" className="font-semibold text-primary underline">Back to all recipes</Link>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h2 className="mb-6 text-3xl font-bold">{recipe.name}</h2>
      <div className="grid items-start gap-6 min-[37.5rem]:grid-cols-[1fr_2fr]">
        <article className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
          {recipe.image && (
            <img
              src={recipe.image}
              alt={recipe.imageAlt ?? `An image of ${recipe.name}`}
              className="mb-4 w-full rounded-lg"
            />
          )}
          <p className="mb-4">{recipe.description}</p>
          <h3 className="mb-2 text-xl font-bold">Ingredients</h3>
          <ul className="list-disc pl-6">
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div>
          <section>
            <h3 className="mb-2 text-xl font-bold">Preparation Steps</h3>
            <ol className="list-decimal pl-6">
              {recipe.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
          <section>
            <table className="mt-4 border-collapse">
              <tbody>
                <tr>
                  <th scope="row" className={`${cellClass} text-primary`}>Category</th>
                  <td className={cellClass}>{recipe.category}</td>
                </tr>
                <tr>
                  <th scope="row" className={`${cellClass} text-primary`}>Serving</th>
                  <td className={cellClass}>{recipe.servings}</td>
                </tr>
                <tr>
                  <th scope="row" className={`${cellClass} text-primary`}>Prep Time</th>
                  <td className={cellClass}>{recipe.time}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  )
}
