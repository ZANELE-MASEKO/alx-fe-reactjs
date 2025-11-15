// RecipePage.jsx
import { useParams } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";

const RecipePage = () => {
  const { id } = useParams();

  return <RecipeDetails recipeId={id} />;
};

export default RecipePage;
