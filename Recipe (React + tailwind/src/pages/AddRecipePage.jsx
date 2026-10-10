import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MEAL_TYPES } from '../data/recipes.js'
import { isValidServings, slugify } from '../utils/recipes.js'

const fieldClass =
  'rounded border border-gray-300 p-2.5 text-base focus:border-primary focus:outline-none'
const labelClass = 'mb-1 font-semibold'

const emptyForm = {
  name: '',
  mealType: MEAL_TYPES[0],
  ingredients: '',
  steps: '',
  servings: '',
}

// One item per non-empty line
const toLines = (text) =>
  text.split('\n').map((line) => line.trim()).filter(Boolean)

export default function AddRecipePage({ onAddRecipe }) {
  const navigate = useNavigate()
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const servings = Number(form.servings)

    if (!form.name.trim()) {
      setError('Enter a recipe name.')
      return
    }
    if (!isValidServings(servings)) {
      setError('Servings must be greater than zero.')
      return
    }

    const baseId = slugify(form.name) || 'recipe'
    onAddRecipe({
      id: `${baseId}-${Date.now()}`,
      name: form.name.trim(),
      category: form.mealType,
      servings,
      time: '—',
      image: null,
      summary: toLines(form.ingredients).slice(0, 3).join(', '),
      description: '',
      ingredients: toLines(form.ingredients),
      steps: toLines(form.steps),
    })
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-125 flex-col gap-4 p-6">
      <h2 className="text-2xl font-bold">Add a Recipe</h2>

      <div className="flex flex-col">
        <label htmlFor="name" className={labelClass}>Recipe Name :</label>
        <input type="text" name="name" id="name" value={form.name} onChange={handleChange} className={fieldClass} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="mealType" className={labelClass}>Meal type :</label>
        <select name="mealType" id="mealType" value={form.mealType} onChange={handleChange} className={fieldClass}>
          {MEAL_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="ingredients" className={labelClass}>Ingredients (one per line) :</label>
        <textarea name="ingredients" id="ingredients" rows={5} value={form.ingredients} onChange={handleChange} className={fieldClass} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="steps" className={labelClass}>Preparation Steps (one per line) :</label>
        <textarea name="steps" id="steps" rows={5} value={form.steps} onChange={handleChange} className={fieldClass} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="servings" className={labelClass}>Serving(s) :</label>
        <input type="number" name="servings" id="servings" min="1" value={form.servings} onChange={handleChange} className={fieldClass} />
      </div>

      {error && <p role="alert" className="m-0 font-semibold text-red-700">{error}</p>}

      <button
        type="submit"
        className="cursor-pointer self-start rounded bg-primary px-8 py-[0.7rem] font-bold text-white hover:bg-accent hover:text-primary"
      >
        Submit your Recipe
      </button>
    </form>
  )
}
