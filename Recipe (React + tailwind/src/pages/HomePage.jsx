import { useState } from 'react'
import RecipeCard from '../components/RecipeCard.jsx'
import { searchRecipes } from '../utils/recipes.js'

export default function HomePage({ recipes }) {
  const [keyword, setKeyword] = useState('')
  const results = searchRecipes(keyword, recipes)

  return (
    <>
      <div className="px-6 pt-2">
        <label htmlFor="search" className="mb-1 block font-semibold">
          Search recipes
        </label>
        <input
          type="search"
          id="search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          className="w-full max-w-125 rounded border border-gray-300 p-2.5 focus:border-primary focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 p-6 min-[37.5rem]:grid-cols-2 min-[56.25rem]:grid-cols-3">
        {results.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        {results.length === 0 && <p>No recipes match “{keyword}”.</p>}
      </div>
    </>
  )
}
