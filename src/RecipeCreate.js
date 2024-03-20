import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [idCount, setIdCount] = useState(0);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const recipeObject = {
      "name": name, "cuisine": cuisine, "photo": photo,
      "ingredients": ingredients, "preparation": preparation, "id": idCount
    };
    addRecipe(recipeObject);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
    setIdCount(idCount+1);
  };
  
  const handleNameChange = ({target}) => {
    setName(target.value)
  };
  const handleCuisineChange = ({target}) => {
    setCuisine(target.value)
  };
  const handlePhotoChange = ({target}) => {
    setPhoto(target.value)
  };
  const handleIngredientsChange = ({target}) => {
    setIngredients(target.value)
  };
  const handlePreparationChange = ({target}) => {
    setPreparation(target.value)
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td style={{width:'10%'}}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleNameChange}
                value={name}
                style={{width:'90%'}}
                />
            </td>
            <td style={{width:'10%'}}>
              <input 
                name="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleCuisineChange}
                value={cuisine}
                style={{width:'90%'}}
                />
            </td>
            <td style={{width:'10%'}}>
              <input 
                name="photo"
                type="text"
                name="photo"
                placeholder="URL"
                onChange={handlePhotoChange}
                value={photo}
                style={{width:'90%'}}
                />
            </td>
            <td style={{width:'30%'}}>
              <textarea name="ingredients" placeholder="Ingredients" onChange={handleIngredientsChange} value={ingredients} />
            </td>
            <td style={{width:'30%'}}>
              <textarea name="preparation" placeholder="Preparation" onChange={handlePreparationChange} value={preparation} />
            </td>
            <td style={{width:'10%'}}>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;