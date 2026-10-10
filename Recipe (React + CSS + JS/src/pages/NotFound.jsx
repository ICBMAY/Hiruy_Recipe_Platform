import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

export default function NotFound() {
  return (
    <Layout title="Recipe not found">
      <p>That recipe isn&rsquo;t on the menu.</p>
      <Link to="/">Back to all recipes</Link>
    </Layout>
  );
}