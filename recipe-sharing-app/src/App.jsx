import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm.jsx'
import RecipeList from './components/RecipeList.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import SearchBar from './components/SearchBar.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'
import FavoritesList from './components/FavoritesList.jsx'
import RecommendationsList from './components/RecommendationsList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <AddRecipeForm />
      <RecipeList />
      <SearchBar />
      <RecipeDetails />
      <FavoritesList />
      <RecommendationsList />

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />

        {/* Dynamic route for recipe details */}
        <Route path="/recipes/:id" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
