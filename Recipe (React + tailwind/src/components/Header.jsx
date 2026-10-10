import { Link } from 'react-router-dom'

const navLinkClass =
  'border-4 border-transparent font-semibold text-primary no-underline hover:border-primary hover:bg-primary hover:text-accent'

export default function Header({ title = 'Hiruy Recipe Platform' }) {
  return (
    <header className="flex items-center justify-between p-4 max-[30rem]:flex-col max-[30rem]:items-start max-[30rem]:gap-2">
      <nav className="flex gap-4 max-[30rem]:flex-wrap">
        <Link to="/" className={navLinkClass}>Home</Link>
      </nav>
      <nav className="flex gap-4 max-[30rem]:flex-wrap">
        <Link to="/add-recipe" className={navLinkClass}>Add a Recipe</Link>
      </nav>
      <h1 className="m-0 text-3xl font-bold">{title}</h1>
    </header>
  )
}
