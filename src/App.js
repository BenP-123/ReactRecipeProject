import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  
  const [recipes, setRecipes] = useState(RecipeData);
  
  const addRecipe = (value) => setRecipes([...recipes, value]);
  
  const deleteRecipe = (idToDelete) => {
    setRecipes((recipe) => 
      recipes.filter((recipe) => recipe.id !== idToDelete)
    );
  };

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipeList={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;
