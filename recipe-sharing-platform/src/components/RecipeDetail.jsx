import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundRecipe = recipeData.find(r => r.id === id); 
    
    setTimeout(() => { 
        setRecipe(foundRecipe);
        setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
        <p className="ml-3 text-lg text-indigo-600">Loading recipe...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-10 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Recipe Not Found 😥</h1>
        <p className="text-gray-700">The recipe with ID "{id}" could not be located.</p>
        <Link to="/" className="mt-6 inline-block text-indigo-600 hover:text-indigo-800 font-medium transition duration-150 ease-in-out">
          ← Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium mb-6 block w-fit transition duration-150 ease-in-out">
          ← Back to all Recipes
        </Link>

    
        <header className="mb-8">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-2">
            {recipe.title}
          </h1>
          <p className="text-lg text-gray-600 border-b pb-4 mb-4">
            {recipe.description}
          </p>
        </header>

        
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 mb-12">
          
          <div className="lg:col-span-2 shadow-xl rounded-lg overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-96 object-cover" 
            />
          </div>
          
          
          <div className="lg:col-span-1 mt-6 lg:mt-0 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Recipe Snapshot ⏱️
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold text-indigo-600">Prep Time:</span> {recipe.prepTime}
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Cook Time:</span> {recipe.cookTime}
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Servings:</span> {recipe.servings}
              </p>
            </div>
          </div>
        </div>

       
        <div className="grid md:grid-cols-2 gap-8">

          
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-indigo-600 mr-3">🍚</span> Ingredients
            </h2>
            <ul className="space-y-3 list-none p-0">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start text-lg text-gray-700">
                  
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-indigo-600 mr-3">👨‍🍳</span> Instructions
            </h2>
            <ol className="space-y-5 list-decimal list-inside">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-lg text-gray-700">
                  <span className="font-semibold text-indigo-700">Step {index + 1}:</span> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;