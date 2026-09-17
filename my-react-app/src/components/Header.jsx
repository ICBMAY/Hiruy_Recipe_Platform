import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/add-recipe">Add a Recipe</Link>
      </nav>
      <h1>{title}</h1>
    </header>
  );
}