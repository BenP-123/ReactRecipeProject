import "./App.css";
import React from "react";

function RecipeGenerate({name, cuisine, photo, ingredients, preparation, id, deleteRecipe}) {

    return (
      <tr>
        <td>
          {name}
        </td>
        <td>
           {cuisine}
         </td>
         <td>
           <img src={photo}/>
         </td>
         <td className="content_td">
          <p>{(ingredients)}</p>
         </td>
         <td className="content_td">
           <p>{(preparation)}</p>
         </td>
        <td>
           <button name="delete" onClick={() => deleteRecipe(id)}>Delete</button>
         </td>
       </tr>
    );
}

export default RecipeGenerate;