import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="p-6">
      <h2 className="mb-2 text-2xl font-bold">Page not found</h2>
      <Link to="/" className="font-semibold text-primary underline">Back to all recipes</Link>
    </div>
  )
}
