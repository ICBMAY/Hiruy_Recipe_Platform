export const initialRecipes = [
  {
    slug: "vegetable-soup",
    name: "Vegetable Soup",
    image: "/images/veggies soup.png",
    imageAlt: "A bowl of vegetable soup.",
    summary:
      "Vegetable soup is a warm, healthy dish made with a flavorful base of onions, garlic, broth, and mixed fresh or frozen produce.",
    description:
      "A hearty, comforting soup filled with fresh vegetables simmered in a savory broth. Perfect for a light yet nourishing meal.",
    ingredients: [
      "carrots",
      "potatoes",
      "onions",
      "green beans",
      "garlic",
      "salt",
      "herbs",
      "pepper",
      "broth",
      "oil",
    ],
    steps: [
      "Chop carrots, potatoes, onions, and green beans.",
      "Sauté onions and garlic in oil.",
      "Add chopped vegetables and broth.",
      "Season with salt, pepper, and herbs.",
      "Simmer until vegetables are tender.",
    ],
    category: "Dinner",
    servings: 4,
    prepTime: "30 Minutes",
  },
  {
    slug: "grilled-chicken-sandwich",
    name: "Grilled Chicken Sandwich",
    image: "/images/Grilled chicken Sandwitch.png",
    imageAlt: "A serving of grilled chicken sandwich",
    summary:
      "A juicy grilled chicken breast layered with fresh veggies and sauce, served between toasted bread slices. A quick and satisfying meal.",
    description:
      "A juicy grilled chicken breast layered with fresh veggies and sauce, served between toasted bread slices.",
    ingredients: [
      "chicken breast",
      "bread rolls",
      "lettuce",
      "tomato",
      "onion",
      "mayonnaise",
      "olive oil",
      "salt",
      "pepper",
    ],
    steps: [
      "Season the chicken breast with salt and pepper.",
      "Grill until cooked through, about 6 minutes per side.",
      "Toast the bread rolls.",
      "Spread mayonnaise and layer lettuce, tomato, and onion.",
      "Add the chicken and serve warm.",
    ],
    category: "Lunch",
    servings: 2,
    prepTime: "20 Minutes",
  },
  {
    slug: "doro-wat",
    name: "Doro Wat",
    image: "/images/doro wat.png",
    imageAlt: "A plate of Doro Wat stew",
    summary:
      "A rich, spicy Ethiopian stew made with chicken, onions, and berbere spice, traditionally served with injera.",
    description:
      "A rich, spicy Ethiopian stew made with chicken, onions, and berbere spice, traditionally served with injera.",
    ingredients: [
      "chicken",
      "red onions",
      "berbere",
      "niter kibbeh",
      "garlic",
      "ginger",
      "hard-boiled eggs",
      "salt",
    ],
    steps: [
      "Cook the onions slowly until deeply softened.",
      "Stir in berbere, garlic, ginger, and niter kibbeh.",
      "Add the chicken and simmer until tender.",
      "Add the hard-boiled eggs near the end.",
      "Serve hot with injera.",
    ],
    category: "Dinner",
    servings: 6,
    prepTime: "90 Minutes",
  },
];

export const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");