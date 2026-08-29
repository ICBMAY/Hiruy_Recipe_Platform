// RECIPE DATA MODEL

const recipes = [
  {
    name: "Vegetable Soup",
    category: "Dinner",
    servings: 4,
    time: "30 minutes",
    ingredients: ["2 carrots (sliced)", "1 onion (diced)", "2 potatoes (cubed)"],
    steps: ["Heat oil in a pot.", "Add vegetables and broth.", "Simmer 20 minutes."]
  },
  {
    name: "Grilled Chicken Sandwich",
    category: "Lunch",
    servings: 2,
    time: "20 minutes",
    ingredients: ["2 chicken breasts", "2 burger buns", "1 tomato (sliced)"],
    steps: ["Season and grill the chicken.", "Toast the buns.", "Assemble the sandwich."]
  },
  {
    name: "Doro Wat",
    category: "Dinner",
    servings: 6,
    time: "90 minutes",
    ingredients: ["1 whole chicken", "3 onions (chopped)", "4 tbsp berbere spice"],
    steps: ["Cook onions until soft.", "Add berbere and chicken.", "Simmer until tender."]
  }
];


// Validates whether a given servings number is positive
function isValidServings(servings) {
  if (servings <= 0) {
    return false;
  }
  return true;
}

// Scales a single ingredient amount from its original servings to a new servings count.
// Returns null and logs a message if newServings is zero or negative.
function calculateScaledIngredient(originalAmount, originalServings, newServings) {
  if (newServings <= 0) {
    console.log("Servings must be greater than zero.");
    return null;
  }
  const ratio = newServings / originalServings;
  return originalAmount * ratio;
}

// Returns all recipes whose name contains the given keyword (case-insensitive).
// Returns the full array unchanged if the keyword is empty.
function searchRecipes(keyword, recipesArray) {
  if (keyword.trim() === "") {
    return recipesArray;
  }
  
  const results = [];
  const lowerKeyword = keyword.toLowerCase();
  
  for (let i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].name.toLowerCase().includes(lowerKeyword)) {
      results.push(recipesArray[i]);
    }
  }
  
  return results;
}

// Display formatted recipe list
for (let i = 0; i < recipes.length; i++) {
  console.log(`${i + 1}. ${recipes[i].name} (${recipes[i].category})`);
}

/*
// Test calculateScaledIngredient
console.log(calculateScaledIngredient(2, 4, 8)); // Output: 4
console.log(calculateScaledIngredient(2, 4, 2)); // Output: 1
console.log(calculateScaledIngredient(3, 2, 5)); // Output: 7.5
console.log(calculateScaledIngredient(2, 4, 0)); // Output: null ("Servings must be greater than zero.")

// Test searchRecipes
console.log(searchRecipes("soup", recipes).map(r => r.name));  // Returns Vegetable Soup
console.log(searchRecipes("chick", recipes).map(r => r.name)); // Returns Grilled Chicken Sandwich
console.log(searchRecipes("SOUP", recipes).map(r => r.name));  // Case-insensitive test
console.log(searchRecipes("", recipes).map(r => r.name));      // Returns all recipes
*/