import { useParams } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import NotFound from "./NotFound.jsx";

export default function Recipe({ recipes }) {
  const { slug } = useParams();
  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) return <NotFound />;

  return (
    <Layout title={recipe.name} mainClass="recipe-detail">
      <article>
        {recipe.image && <img src={recipe.image} alt={recipe.imageAlt} />}
        <p>{recipe.description}</p>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </article>

      <section>
        <h2>Preparation Steps</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      <section>
        <table border="1">
          <thead>
            <tr>
              <th>Category</th>
              <td>{recipe.category}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Serving</td>
              <td>{recipe.servings}</td>
            </tr>
            <tr>
              <td>Prep Time</td>
              <td>{recipe.prepTime}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );
}