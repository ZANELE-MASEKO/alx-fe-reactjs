import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    updateRecipe(recipe.id, {
      title,
      description,
    });

    alert("Recipe updated!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>

      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Recipe title"
      />

      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Recipe description"
      ></textarea>

      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
