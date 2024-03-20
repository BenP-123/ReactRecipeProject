import React from "react";
import RecipeGenerate from "./RecipeGenerate";

function RecipeList({recipeList, deleteRecipe}) {
  
  let recipeHTML = "";
  if(recipeList.length > 0){
   recipeHTML = recipeList.map((recipe, index) => (
     <RecipeGenerate name={recipe.name} cuisine={recipe.cuisine} photo={recipe.photo} 
       ingredients={recipe.ingredients} preparation={recipe.preparation} id={recipe.id} deleteRecipe={deleteRecipe}/>
    ));
  }
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr style={{backgroundColor: 'white'}}>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{recipeHTML}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
