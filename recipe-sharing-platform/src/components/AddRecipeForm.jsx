import React, { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!title.trim()) validationErrors.title = "Recipe title is required.";

    if (!ingredients.trim()) {
      validationErrors.ingredients = "Ingredients are required.";
    } else {
      const list = ingredients
        .split("\n")
        .map((i) => i.trim())
        .filter((i) => i);

      if (list.length < 2)
        validationErrors.ingredients = "Enter at least 2 ingredients.";
    }

    if (!steps.trim())
      validationErrors.steps = "Preparation steps are required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Recipe submitted successfully!");

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 md:p-10 rounded-xl shadow-lg">

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <label className="font-semibold text-gray-700 w-full md:w-1/3">
            Recipe Title
          </label>

          <div className="w-full md:w-2/3">
            <input
              type="text"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500"
              placeholder="Enter recipe title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>
        </div>

      
        <div className="flex flex-col md:flex-row md:items-start gap-2">
          <label className="font-semibold text-gray-700 w-full md:w-1/3">
            Ingredients
            <span className="block text-xs text-gray-500">
              (one per line)
            </span>
          </label>

          <div className="w-full md:w-2/3">
            <textarea
              className="w-full p-3 h-32 md:h-40 border-2 border-gray-300 rounded-lg focus:border-blue-500"
              placeholder="List ingredients..."
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row md:items-start gap-2">
          <label className="font-semibold text-gray-700 w-full md:w-1/3">
            Preparation Steps
          </label>

          <div className="w-full md:w-2/3">
            <textarea
              className="w-full p-3 h-40 border-2 border-gray-300 rounded-lg focus:border-blue-500"
              placeholder="Describe how to prepare the dish..."
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            ></textarea>
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>
        </div>

       
        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-1/2 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
