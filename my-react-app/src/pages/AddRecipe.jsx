import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { slugify } from "../data/recipes.js";

const emptyForm = {
  recipeName: "",
  mealType: "Breakfast",
  ingredients: "",
  prepSteps: "",
  servings: "",
};

export default function AddRecipe({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const toLines = (text) =>
      text
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

    const recipe = {
      slug: slugify(form.recipeName),
      name: form.recipeName.trim(),
      image: "",
      imageAlt: "",
      summary: toLines(form.prepSteps)[0] ?? "",
      description: "",
      ingredients: toLines(form.ingredients),
      steps: toLines(form.prepSteps),
      category: form.mealType,
      servings: Number(form.servings) || 1,
      prepTime: "",
    };

    onAdd(recipe);
    setForm(emptyForm);
    navigate(`/recipe/${recipe.slug}`);
  };

  return (
    <Layout title="Add a Recipe">
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipe_name">Recipe Name :</label>
        <input
          type="text"
          name="recipeName"
          id="recipe_name"
          value={form.recipeName}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="mealtype">Meal type :</label>
        <select
          name="mealType"
          id="mealtype"
          value={form.mealType}
          onChange={handleChange}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
        </select>
        <br />

        <label htmlFor="ingredients">Ingredients :</label>
        <textarea
          name="ingredients"
          id="ingredients"
          value={form.ingredients}
          onChange={handleChange}
          placeholder="One ingredient per line"
        />
        <br />

        <label htmlFor="prep_steps">Preparation Steps :</label>
        <textarea
          name="prepSteps"
          id="prep_steps"
          value={form.prepSteps}
          onChange={handleChange}
          placeholder="One step per line"
        />
        <br />

        <label htmlFor="serving">Serving(s) :</label>
        <input
          type="number"
          name="servings"
          id="serving"
          min="1"
          value={form.servings}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit your Recipe</button>
      </form>
    </Layout>
  );
}