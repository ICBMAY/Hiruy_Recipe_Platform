// Validates whether a given servings number is positive
export function isValidServings(servings) {
  return servings > 0
}

// Scales a single ingredient amount from its original servings to a new servings count.
// Returns null and logs a message if newServings is zero or negative.
export function calculateScaledIngredient(originalAmount, originalServings, newServings) {
  if (!isValidServings(newServings)) {
    console.log('Servings must be greater than zero.')
    return null
  }
  return originalAmount * (newServings / originalServings)
}

// Returns all recipes whose name contains the given keyword (case-insensitive).
// Returns the full array unchanged if the keyword is empty.
export function searchRecipes(keyword, recipesArray) {
  const lowerKeyword = keyword.trim().toLowerCase()
  if (lowerKeyword === '') {
    return recipesArray
  }
  return recipesArray.filter((recipe) => recipe.name.toLowerCase().includes(lowerKeyword))
}

// Turns a name into a URL-friendly id, e.g. "Doro Wat" -> "doro-wat"
export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
