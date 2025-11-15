import {UseState} from 'react';
import {UseRecipeStore} from './recipestore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state =>state.addRecipe);
    const[title, setTitle,] =usestate('');
    const[description,setDescription]=useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({id: Date.now(), title, description});
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Description'/>

            <textarea
            value={description}
            onChange={(e) =>setDescription(e.target.value)}
            placeholder='Description'/>

            <button type='submit'>Add Recipe</button>

        </form>
    );
    
}