import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import RecipePage from './pages/RecipePage.jsx'
import AddRecipePage from './pages/AddRecipePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { initialRecipes } from './data/recipes.js'

export default function App() {
  const [recipes, setRecipes] = useState(initialRecipes)

  function addRecipe(recipe) {
    setRecipes((current) => [...current, recipe])
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipes/:id" element={<RecipePage recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipePage onAddRecipe={addRecipe} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
