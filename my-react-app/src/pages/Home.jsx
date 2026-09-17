import Layout from "../components/Layout.jsx";
import RecipeCard from "../components/RecipeCard.jsx";

export default function Home({ recipes }) {
  return (
    <Layout title="Hiruy Recipe Platform" mainClass="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.slug} recipe={recipe} />
      ))}
    </Layout>
  );
}