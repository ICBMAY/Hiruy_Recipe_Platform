// RECIPE DATA MODEL
export const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack']

export const initialRecipes = [
  {
    id: 'vegetable-soup',
    name: 'Vegetable Soup',
    category: 'Dinner',
    servings: 4,
    time: '30 minutes',
    image: '/images/veggies soup.png',
    imageAlt: 'A bowl of vegetable soup',
    summary:
      'Vegetable soup is a warm, healthy dish made with a flavorful base of onions, garlic, broth, and mixed fresh or frozen produce.',
    description:
      'A hearty, comforting soup filled with fresh vegetables simmered in a savory broth. Perfect for a light yet nourishing meal.',
    ingredients: [
      'carrots', 'potatoes', 'onions', 'green beans', 'garlic',
      'salt', 'herbs', 'pepper', 'broth', 'oil',
    ],
    steps: [
      'Chop carrots, potatoes, onions, and green beans.',
      'Sauté onions and garlic in oil.',
      'Add chopped vegetables and broth.',
      'Season with salt, pepper, and herbs.',
      'Simmer until vegetables are tender.',
    ],
  },
  {
    id: 'grilled-chicken-sandwich',
    name: 'Grilled Chicken Sandwich',
    category: 'Lunch',
    servings: 2,
    time: '20 minutes',
    image: '/images/Grilled chicken Sandwitch.png',
    imageAlt: 'A serving of grilled chicken sandwich',
    summary:
      'A juicy grilled chicken breast layered with fresh veggies and sauce, served between toasted bread slices. A quick and satisfying meal.',
    description:
      'A juicy grilled chicken breast layered with fresh veggies and sauce, served between toasted bread slices.',
    ingredients: ['2 chicken breasts', '2 burger buns', '1 tomato (sliced)'],
    steps: ['Season and grill the chicken.', 'Toast the buns.', 'Assemble the sandwich.'],
  },
  {
    id: 'doro-wat',
    name: 'Doro Wat',
    category: 'Dinner',
    servings: 6,
    time: '90 minutes',
    image: '/images/doro wat.png',
    imageAlt: 'A plate of Doro Wat stew',
    summary:
      'A rich, spicy Ethiopian stew made with chicken, onions, and berbere spice, traditionally served with injera.',
    description:
      'A rich, spicy Ethiopian stew made with chicken, onions, and berbere spice, traditionally served with injera.',
    ingredients: ['1 whole chicken', '3 onions (chopped)', '4 tbsp berbere spice'],
    steps: ['Cook onions until soft.', 'Add berbere and chicken.', 'Simmer until tender.'],
  },
]
