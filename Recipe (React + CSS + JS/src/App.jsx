import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Recipe from "./pages/Recipe.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";
import { initialRecipes } from "./data/recipes.js";

export default function App() {
  // Lives here so a recipe added on the form shows up on the home page.
  // Swap this for an API call or localStorage when you have a backend.
  const [recipes, setRecipes] = useState(initialRecipes);

  const addRecipe = (recipe) => setRecipes((current) => [...current, recipe]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/recipe/:slug" element={<Recipe recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipe onAdd={addRecipe} />} />
        <Route path="*" element={<main><p>Recipe not found.</p></main>} />
      </Routes>
    </>
  );
}