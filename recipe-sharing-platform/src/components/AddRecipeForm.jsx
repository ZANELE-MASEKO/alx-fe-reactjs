import React, { useState } from "react";


export function validate({ title, ingredients, steps }) {
  const errors = {};

  if (!title.trim()) errors.title = "Recipe title is required.";

  if (!ingredients.trim()) {
    errors.ingredients = "Ingredients are required.";
  } else {
    const items = ingredients
      .split("\n")
      .map((i) => i.trim())
      .filter((i) => i);
    if (items.length < 2) {
      errors.ingredients = "Add at least 2 ingredients.";
    }
  }

  if (!steps.trim()) errors.steps = "Preparation steps are required.";

  return errors;
}

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();


    const validationErrors = validate({ title, ingredients, steps });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      steps,
    };

    console.log("Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully!");

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

       
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter recipe name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            className="w-full p-3 h-32 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="List ingredients, each on a new line..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

       
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Preparation Steps
          </label>
          <textarea
            className="w-full p-3 h-40 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Describe how to prepare the dish..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
