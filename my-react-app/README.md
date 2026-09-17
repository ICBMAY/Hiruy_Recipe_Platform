# Hiruy Recipe Platform (React)

The original three HTML pages converted into a React + Vite app.

## Run it

```bash
npm install
npm run dev
```

## Before the first run

Copy your existing assets into `public/`, keeping the same folder names:

- `public/styles/style.css`
- `public/images/veggies soup.png`, `Grilled chicken Sandwitch.png`, `doro wat.png`

Anything in `public/` is served from the site root, so the paths in the
components (`/images/doro wat.png`) resolve without changes. Your old
`js/script.js` is not wired in — move whatever it did into a component.

## What maps to what

| Original            | React                                              |
| ------------------- | -------------------------------------------------- |
| `index.html`        | `src/pages/Home.jsx` + `src/components/RecipeCard.jsx` |
| `recipe.html`       | `src/pages/Recipe.jsx` (route `/recipe/:slug`)      |
| `add-recipe.html`   | `src/pages/AddRecipe.jsx`                           |
| repeated header/footer | `src/components/Layout.jsx`                      |
| hardcoded recipes   | `src/data/recipes.js`                               |

## Notes on the conversion

- All three cards on the home page used to link to the same `recipe.html`.
  Each recipe now has a `slug` and its own URL.
- The form was a `GET` form that went nowhere. It is now controlled by React
  state and adds the recipe to the in-memory list, then sends you to its page.
- Recipes live in `useState` in `App.jsx`, so they reset on refresh. Point
  `addRecipe` at an API or `localStorage` when you are ready to persist them.
- `class` becomes `className`, `for` becomes `htmlFor`, and `<img>`, `<input>`,
  `<br>` must be self-closed.